import React, { useState } from 'react'
import {
  ArrowBackIcon,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Button,
  IcebrkIcon,
  Text,
  Box,
  AutoRenewIcon,
} from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { getDecimalAmount } from 'utils/formatBalance'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useCake } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import UnlockButton from 'components/UnlockButton'
import { getPredictionsWithTokenAddress } from 'utils/addressHelpers'

import useSwiper from '../../hooks/useSwiper'
import FlexRow from '../FlexRow'
import Card from './Card'

const predictionAddress = getPredictionsWithTokenAddress()

interface SetPositionCardProps {
  onBack: () => void
}

const ApproveCard: React.FC<SetPositionCardProps> = ({ onBack }) => {
  const [isTxPending, setIsTxPending] = useState(false)
  const { account } = useWeb3React()
  const { swiper } = useSwiper()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const cakeContract = useCake()

  // Clear value
  const handleGoBack = () => {
    onBack()
  }

  // Disable the swiper events to avoid conflicts
  const handleMouseOver = () => {
    swiper.keyboard.disable()
    swiper.mousewheel.disable()
    swiper.detachEvents()
  }

  const handleMouseOut = () => {
    swiper.keyboard.enable()
    swiper.mousewheel.enable()
    swiper.attachEvents()
  }

  const handleApprove = () => {
    const approveAmount = new BigNumber(1e30)
    const decimalValue = getDecimalAmount(approveAmount)
    cakeContract.methods.approve(predictionAddress, decimalValue)
      .send({ from: account })
      .once('sending', () => {
        setIsTxPending(true)
      })
      .once('receipt', async () => {
        setIsTxPending(false)
        handleGoBack()
      })
      .once('error', (error) => {
        const errorMsg = t('An error occurred during approval')

        toastError(t('Error'), error?.message)
        setIsTxPending(false)
        console.error(errorMsg, error)
      })
  }

  return (
    <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardHeader p="16px">
        <Flex alignItems="center">
          <IconButton variant="text" scale="sm" onClick={handleGoBack} mr="8px">
            <ArrowBackIcon width="24px" />
          </IconButton>
          <FlexRow>
            <Heading scale="md">{t('Approve IceBrk-R')}</Heading>
          </FlexRow>
        </Flex>
      </CardHeader>
      <CardBody py="16px">
        <Flex alignItems="center" justifyContent="space-between" mb="8px">
          <Text textAlign="right" color="textSubtle">
            {t('Approving Use Of')}:
          </Text>
          <Flex alignItems="center">
            <IcebrkIcon mr="4px  " />
            <Text bold textTransform="uppercase">
              ICEBRK
            </Text>
          </Flex>
        </Flex>
        <Box mb="8px">
          {account ? (
            <Button
              width="100%"
              disabled={!account || false}
              onClick={handleApprove}
              isLoading={isTxPending}
              endIcon={isTxPending ? <AutoRenewIcon color="currentColor" spin /> : null}
            >
                {t("Approve")}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Box>
        <Text as="p" fontSize="12px" lineHeight={1} color="textSubtle">
          {t('You won’t be able to remove or change your position once you enter it.')}
        </Text>
      </CardBody>
    </Card>
  )
}

export default ApproveCard
