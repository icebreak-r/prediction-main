import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ICEBRK-R',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ICEBRK-R), NFTs, and more, on a platform you can trust.',
  image: '/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ICEBRK-R')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ICEBRK-R')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ICEBRK-R')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ICEBRK-R')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ICEBRK-R')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ICEBRK-R')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ICEBRK-R')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ICEBRK-R')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ICEBRK-R')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ICEBRK-R')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ICEBRK-R')}`,
      }
    default:
      return null
  }
}
