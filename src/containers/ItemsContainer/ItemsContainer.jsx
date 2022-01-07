import React, { useEffect } from 'react'
import ReactLoader from 'assets/Loaders/ReactLoader/ReactLoader'
import { useItems, useRoot } from 'store'
import EntitiesContainer from 'components/EntitiesContainer/EntitiesContainer'
import { entitiesTypes } from 'shared/interfaces/entities'
import { MainPageFilter } from 'components'

const ItemsContainer = () => {
  const {
    getFilters,
    saveFilters,
    activate,
    deactivate,
    getAdaptedItems,
    getAdaptedEditItems,
    getDefaultEntity,
    create,
    deleteItem,
    update,
  } = useItems()

  const { getIsLoading } = useRoot()

  const filters = getFilters()

  const adaptedEntities = getAdaptedItems()

  const adaptedEditEntities = getAdaptedEditItems()

  const defaultCreateEntity = getDefaultEntity()

  return (
    <>
      <MainPageFilter
        filters={filters}
        saveFilters={saveFilters}
      />
      {getIsLoading()
        ? (
          <ReactLoader />
        )
        : (
          <EntitiesContainer
            entities={adaptedEntities}
            editEntities={adaptedEditEntities}
            createEntity={defaultCreateEntity}
            type={entitiesTypes.branches}
            editRequest={update}
            createRequest={create}
            deleteRequest={deleteItem}
            activate={activate}
            deactivate={deactivate}
          />
        )}
    </>
  )
}

export default ItemsContainer
