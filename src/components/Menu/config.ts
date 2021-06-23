import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { getCakeAddress } from 'utils/addressHelpers'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    href: 'https://swap.icebreak-r.com/#/swap?inputCurrency=BNB&outputCurrency=0xaabcac4b236d1a7290fb05234862348d274621cf',
  },
  {
    label: t('Liquidity'),
    icon: 'TradeIcon',
    href: 'https://swap.icebreak-r.com/#/add/BNB/0xaabcac4b236d1a7290fb05234862348d274621cf',
  },
  {
    label: t("(Wagering BNB) Prediction"),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t("(Wagering Icebrk) Prediction"),
    icon: 'PredictionsIcon',
    href: '/prediction_with_token',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: 'IceBreak-R Chart on DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/'.concat(getCakeAddress()),
      },
      {
        label: 'IceBreak-R on PancakeSwap',
        href: 'https://pancakeswap.info/token/'.concat(getCakeAddress()),
      },
    ],
  },
  /* {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Team Battle'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Voting'),
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  } */
]

export default config
