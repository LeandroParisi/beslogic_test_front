/* eslint-disable import/no-anonymous-default-export */
import { branchesAdapter, editBranchesAdapter } from './serializers'

export default ($store) => {
  const getItems = () => $store.userItems

  const getFilters = () => $store.filters

  const getAdaptedItems = () => $store.userItems
    .map((item) => branchesAdapter(item))

  const getAdaptedEditItems = () => $store.userItems
    .map((item) => editBranchesAdapter(item))

  const getDefaultEntity = () => editBranchesAdapter({})

  return {
    getItems, getFilters, getAdaptedItems, getAdaptedEditItems, getDefaultEntity,
  }
}
