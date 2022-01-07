import { inputTypes } from 'shared/libs/inputTypes'

export const statusOptions = [
  {
    id: null,
    name: 'All',
  },
  {
    id: 0,
    name: 'Inactive',
  },
  {
    id: 1,
    name: 'Active',
  },
]

export const statusFilter = {
  key: 'isActive',
  type: inputTypes.STATUS,
  options: statusOptions,
  placeholder: 'Status',
}
