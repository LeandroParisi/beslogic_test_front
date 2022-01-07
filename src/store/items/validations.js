
import { isNotEmpty, isNumber } from '../sharedMethods/validations'
import { itemsInterface } from '../../shared/interfaces/items/itemsInterface'



export const errorsLib = {
  [itemsInterface.itemName]: 'Must be a valid name',
  [itemsInterface.price]: 'Must be a number',

}

export const editValidations = {
  [itemsInterface.itemName]: (v) => isNotEmpty(v),
  [itemsInterface.price]: (v) => isNumber(v),
}

export const createValidations = {
  ...editValidations,
}
