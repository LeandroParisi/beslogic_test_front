import React from 'react'
import BaseLayout from 'shared/templates/BaseLayout/BaseLayout'
import { ItemsProvider } from 'store'
import ItemsContainer from '../../containers/ItemsContainer/ItemsContainer'

const Items = () => (
  <BaseLayout>
    <ItemsProvider>
      <ItemsContainer />
    </ItemsProvider>
  </BaseLayout>
)

export default Items
