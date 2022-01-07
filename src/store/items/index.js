/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import { useRoot } from 'store/root'
import { filterInterface } from './filters'
// import { extractInitialFilters } from '../filterMethods/extractInitialFilters'
import storeActions from './actions'
import storeSelectors from './selectors'
import useCreateStore from '../useCreateStore'

const initialState = {
  userItems: [],
  filters: filterInterface,
  query: '',
}

const ItemsStore = useCreateStore(() => {
  const [$Items, setItems] = useState(initialState)
  const actions = storeActions($Items, setItems, useRoot)
  const selectors = storeSelectors($Items)

  useEffect(() => {
    actions.fetchUserItems()
  }, [])
  
  useEffect(() => {
      actions.fetchUserItems($Items.query)
  }, [$Items.query])

  return { $Items, ...actions, ...selectors }
})

export const useItems = () => ItemsStore()
export const ItemsContext = ItemsStore.Context
export const ItemsProvider = ItemsStore.Provider
