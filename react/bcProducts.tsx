import React, {FC} from 'react'
import {Layout, PageBlock} from 'vtex.styleguide'
import {useQuery} from 'react-apollo'

import getBCProducts from './graphql/getBCProducts.graphql'

const BCProducts: FC = () => {
  console.log("test")
  const {data} = useQuery(getBCProducts)
  console.log("test")
  return (
    <Layout>
      <PageBlock title="Titulo" subtitle="Alguma explicação." variation="full">
        <h1>BC Products!</h1>
        <p>{data?.getBCProducts}</p>
      </PageBlock>
    </Layout>
  )
}

export default BCProducts
