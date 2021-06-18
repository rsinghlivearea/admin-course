export const getBCProducts = async (_: any, ctx: Context) => {
  try {
    console.log("context clients is:" + ctx.cookies)
    const response = await ctx.clients.bigCommerceAPI.getProducts()

    return response
  } catch (e) {
    //ctx.response.status = 404

    return e
  }
}
