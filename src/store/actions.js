export default {
    addCart(context, payload) {
        return new Promise((resolve,reject)=>{
            let oldProduct = null
            for (const item of context.state.cartList) {
                if (item.id === payload.id) {
                    oldProduct = item
                }
            }
            if (oldProduct) {
                // oldProduct.count += 1
                context.commit('addcount', oldProduct)
                resolve('当前商品数量+1')
            } else {
                payload.count = 1
                // state.cartList.push(payload)
                context.commit('addtocatList', payload)
                resolve('该商品成功添加到购物车')
            }
        })
    }
}