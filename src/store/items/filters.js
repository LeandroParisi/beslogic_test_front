import { inputTypes } from 'shared/libs/inputTypes'
import { itemsInterface } from '../../shared/interfaces/items/itemsInterface'
import { statusFilter } from '../generalFilters/generalFilters'

const {
  INPUT,
  // SELECT,
  // BOOL,
  ICONS,
} = inputTypes

export const filterInterface = [
  {
    key: itemsInterface.itemName,
    type: INPUT,
    placeholder: 'Name',
  },
  {
    ...statusFilter,
  },
]
