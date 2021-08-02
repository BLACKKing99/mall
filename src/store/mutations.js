export default{
        addcount(state,payload){
            payload.count++
        },
        addtocatList(state,payload){
            payload.checked = false
            state.cartList.push(payload)
        }
}