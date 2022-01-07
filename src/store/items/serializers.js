import { inputTypes, customFieldTypes } from 'shared/libs/inputTypes'
import { generalIcons } from '../../assets/icons/iconsLib'
import formatPrice from '../../shared/utils/formatPrice'
import contentTypes from 'shared/libs/sectionTypes'
import { itemsInterface } from '../../shared/interfaces/items/itemsInterface'
import {v4 as uuid, v4} from 'uuid'

const {
  INPUT,
  IMAGE,
  ICONS,
  SELECT,
} = inputTypes

const { PAYMENT_TYPE } = generalIcons

const {
  DELIVERY_FEES,
  OPENING_HOURS,
  CITIES,
} = customFieldTypes



export const editBranchesAdapter = (branch) => {
  const {
    id = v4(),
    itemName = '',
    price = '',
    image = ''
  } = branch

  console.log({id})
  return {
    id: id,
    header: [
      {
        value: image,
        key: itemsInterface.image,
        fieldType: IMAGE,
      },
      {
        value: itemName,
        key: itemsInterface.itemName,
        fieldType: INPUT,
      },
    ],
    sections: [
      {
        title: 'General Info',
        subSections: [
          {
            value: price,
            key: itemsInterface.price,
            sectionName: 'Price',
            fieldType: INPUT,
          },
        ]
      }
    ]
  }
}

export const branchesAdapter = (item) => {
  const {
    id,
    itemName,
    image,
    isActive,
    price
  } = item

  return {
    id,
    name: itemName,
    image: image,
    isActive,
    sections: [
      {
        icon: PAYMENT_TYPE,
        title: 'Price',
        content: {
          values: [formatPrice(price)],
          type: contentTypes.UNIQUE,
        },
      },
    ],
  }
}

export const normalizeEditPayload = (item) => {
  return item
}
