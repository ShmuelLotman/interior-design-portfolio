import MudroomBeforeLink from '@/public/image/pre-mudroom.jpg'
import MudroomBeforeLinkOne from '@/public/image/post-mudroom-1.png'
import MudroomBeforeLinkTwo from '@/public/image/post-mudroom-2.jpg'
import StudioPostOne from '@/public/image/studio-post-1.jpg'
import StudioPostTwo from '@/public/image/studio-post-2.jpg'
import StudioPostThree from '@/public/image/studio-post-3.jpg'
import StudioPostFour from '@/public/image/studio-post-4.jpg'
import StudioPostFive from '@/public/image/studio-post-5.jpg'
import StudioPostSix from '@/public/image/studio-post-6.jpg'
import ClosetBefore from '@/public/image/closet-before.jpg'
import ClosetPostOne from '@/public/image/closet-post-1.jpg'
import ClosetPostTwo from '@/public/image/closet-post-2.jpg'
import FoyerBefore from '@/public/image/foyer-before.jpg'
import FoyerAfterOne from '@/public/image/foyer-after-1.jpg'
import FoyerAfterTwo from '@/public/image/foyer-after-2.jpg'
import FoyerAfterMain from '@/public/image/foyer-after-main.jpg'

export const projects = [
  {
    id: 1,
    title: 'Mudroom Reno',
    subtitle:
      'From nasty to nook: transforming a hated space to a welcoming one',
    imgLinks: [MudroomBeforeLink, MudroomBeforeLinkOne, MudroomBeforeLinkTwo],
  },
  {
    id: 2,
    title: 'Studio, reimagined',
    subtitle: 'A cramped space gets a rejuvinating redesign',
    imgLinks: [
      StudioPostSix,
      StudioPostTwo,
      StudioPostThree,
      StudioPostFour,
      StudioPostFive,
      StudioPostOne,
    ],
  },
  {
    id: 3,
    title: 'Childrens Closet Transformation',
    subtitle: 'More space, more light, more joy',
    imgLinks: [ClosetBefore, ClosetPostOne, ClosetPostTwo],
  },
  {
    id: 4,
    title: 'Foyer makeover',
    subtitle: 'Making the most of small spaces & efficient budgets',
    imgLinks: [FoyerBefore, FoyerAfterOne, FoyerAfterTwo, FoyerAfterMain],
  },
]
