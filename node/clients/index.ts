import { IOClients } from '@vtex/api'

import { BigCommerceAPI } from './bigcommerce'

export class Clients extends IOClients {
  public get bigCommerceAPI() {
    return this.getOrSet('bigCommerceAPI', BigCommerceAPI)
  }
}
