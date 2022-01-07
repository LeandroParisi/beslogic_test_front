import routes from 'shared/libs/routes/routes'
import {
  menuIcons,
} from 'assets/icons/iconsLib'

const {
  HOUSE,
} = menuIcons

const menus = [
  {
    name: 'Houses',
    path: routes.items,
    icon: HOUSE,
  },
]

export default menus
