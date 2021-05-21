import notifyFrame from './Notify.vue'

let notify = {

}

notify.install = function (Vue, opt = {delay: 2000}) {
  Vue.prototype.$notify = function (text, option) {
    if (notify.el) return

    let options = {...opt, ...option}

    let newV = Vue.extend(notifyFrame)
    let vm = new newV()
    vm.text = text
    vm.$mount()
    document.body.appendChild(vm.$el)
    notify.el = vm.$el

    setTimeout(() => {
      vm.$el.remove()
      notify.el = null
    }, options.delay)
  }
}

export default notify
