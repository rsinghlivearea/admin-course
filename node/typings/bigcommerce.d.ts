interface IGetBCProduct {
  name: String
  id: Int
  sale_price: Float
}

interface IGetBCProducts {
  items: [IGetBCProduct]
  total: Int
}
