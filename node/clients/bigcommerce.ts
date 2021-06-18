import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export class BigCommerceAPI extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.bigcommerce.com', context, options)
  }

  public async getProducts() {
    const headers = {
      'X-Auth-Token': `mtamq2bdmdfwx6bqgjasnwvfyiyq0tj`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    const storeHash = `fe0gwzdnww`

    try {
      const response = await this.http.get(
        `stores/${storeHash}/v3/catalog/products`,
        { headers }
      )

      return response
    } catch (e) {
      return e
    }
  }
}
