import Tocast from './Tocast'

const obj={}

obj.install=function(Vue){
    // 1、穿件组件构造器
    const toastContrustor = Vue.extends(Tocast)

    // 2、new的方式，根据组件构造器，可以创建出来一个组件对象

    const tocast = new toastContrustor()

    // 3、将组件对象手动挂载到某一个元素上

    tocast.$mount(document.createElement('div'))

    // 4、totast.$el对应的就是div
    
    document.body.appendChild(tocast.$el)

    Vue.prototype.$tocast = tocast
}

export default obj