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
    title: 'Complete closet makeover',
    subtitle:
      'From nasty to nook: transforming a hated space to a welcoming one',
    imgLinks: [MudroomBeforeLink, MudroomBeforeLinkOne, MudroomBeforeLinkTwo],
    description:
      'This mudroom came with the original house, built 1959. It was not only dilapidated - it was unsightly, and caused everyone passing it on their way into the house to cringe. Using custom built shelving, a modern shiplap design to complement the updated atmosphere, and a functional bench area complete with shelving, the mudroom became a cozy inlet to the home at very little cost.',
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
    title: 'Childrens Closet Brought to Life',
    subtitle: 'More space, more light, more joy',
    imgLinks: [ClosetBefore, ClosetPostOne, ClosetPostTwo],
  },
  {
    id: 4,
    title: 'A Foyer Fit For A Queen (& King)',
    subtitle: 'Making the most of small spaces & efficient budgets',
    imgLinks: [FoyerBefore, FoyerAfterOne, FoyerAfterTwo, FoyerAfterMain],
  },
]
