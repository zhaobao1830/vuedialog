import HDialog from './core/master'
const install = function (Vue) {
  Vue.component(HDialog.name, HDialog)
}
module.exports = {
  version: '1.0.9',
  install,
  HDialog
}
