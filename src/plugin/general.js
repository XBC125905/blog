'use strict'
import axios from 'axios'
import marked from 'marked'

export default {
  install (Vue, options) {
    Vue.prototype.$ajax = axios
    Vue.prototype.$marked = marked
  }
}
