// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'

import HDialog from './index'

Vue.use(HDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><App></App><HDialog ref="hDialog" ></HDialog></div>',
  components: { App }
})
