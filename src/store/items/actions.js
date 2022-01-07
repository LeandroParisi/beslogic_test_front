/* eslint-disable react-hooks/rules-of-hooks */
import {
  saveFiltersFactory, setState,
} from 'store/sharedMethods/actions'
import { toast } from 'react-toastify'
import Provider from './provider'
import * as sharedProviders from '../sharedMethods/providers'
import { normalizeEditPayload } from './serializers'
import validationFactory from '../sharedMethods/validationFactory'
import { editValidations, createValidations, errorsLib } from './validations'
import ItemsProvider from './provider'

export const actions = (store, setStore, useRoot) => {
  const {
    errorHandler,
    fetchUserBranches: rootFetchUserBranches,
  } = useRoot()

  const setField = setState(setStore)

  const saveFilters = saveFiltersFactory(setField)

  const fetchUserItems = async (query = '') => {
    const { response } = await errorHandler(ItemsProvider.findAll(query))

    if (response) {
      setField('userItems', response)
    }
  }

  const create = async ({ body }) => {
    const { hasErrors, errors } = await validationFactory(body, createValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')
      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.create(normalizedBody))

    if (response) {
      await fetchUserItems()
    }

    return { hasErrors }
  }

  const deleteItem = async (id) => {
    const { response } = await errorHandler(Provider.delete(id))

    if (response) {
      await fetchUserItems()
    }
  }

  const update = async ({ id, body }) => {
    const { hasErrors, errors } = await validationFactory(body, editValidations, errorsLib)

    if (hasErrors) {
      toast.error('Favor corrigir os campos inválidos')

      return { hasErrors, errors }
    }

    const normalizedBody = normalizeEditPayload(body)

    const { response } = await errorHandler(Provider.update(
      { id, body: normalizedBody },
    ))

    if (response) {
      await fetchUserItems()
    }

    return { hasErrors }
  }

  const activate = async (id) => {
    const { response } = await errorHandler(Provider.activate(id))

    if (response) {
      await fetchUserItems()
    }
  }

  const deactivate = async (id) => {
    const { response } = await errorHandler(Provider.deactivate(id))

    if (response) {
      await fetchUserItems()
    }
  }

  return {
    setField,
    fetchUserItems,
    saveFilters,
    activate,
    deactivate,
    create,
    deleteItem,
    update,
  }
}

export default actions
