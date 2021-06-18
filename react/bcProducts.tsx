import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import getBCProducts from './graphql/getBCProducts.graphql'

const BCProducts: FC = () => {
  const { data } = useQuery(getBCProducts)

  return (
    <Layout>
      <PageBlock
        title="Integration with Big Commerce Products API"
        subtitle="Direct integration with BC Rest API https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts"
        variation="full"
      >
        <h1>BC Products!</h1>
        <p>{data?.getBCProducts}</p>
      </PageBlock>
    </Layout>
  )
}

export default BCProducts
