"use strict";

import Vue from 'vue'
import Vuex from 'vuex'

//import Config from '../data/Config'

function getTypes() {
  let types=['all'];
  for(let key in Config.items){
    let item=Config.items[key]
    if(types.indexOf(item.type)<0){
      types.push(item.type)
    }
  }
  return types
}

function getPages() {
  return Config.items.length===0?0:(Config.items.length%Config.onePageNums===0?
    Config.items.length/Config.onePageNums:parseInt(Config.items.length/Config.onePageNums)+1);
}

Vue.use(Vuex)
// 首先声明一个状态 state
const state = {
  contentboxDisplay: true,
  mdDisplay: false,
  md: ' ',
  items: Config.items,
  types:getTypes(),
  onePageNums:parseInt(Config.onePageNums),
  pages:getPages(),
  currentPage:1
}

// 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
  setContentboxDisplay: ({commit}, isShow) => commit('setContentboxDisplay', isShow), // 提交到mutations中处理
  setMdDisplay: ({commit}, isShow) => commit('setMdDisplay', isShow),
  setMd: ({commit}, isShow) => commit('setMd', isShow)
}

// 更新状态
const mutations = {
  setContentboxDisplay (state, isShow) {
    state.contentboxDisplay = isShow
  },
  setMdDisplay (state, isShow) {
    state.mdDisplay = isShow
  },
  setMd (state, md) {
    state.md = md
  },
  setItems (state, key) {
    if(key==='all'){
      state.items=Config.items
    }else {
      state.items=Config.items.filter(function (item) {
        return item.type===key
      })
    }

    state.currentPage=1;
    state.pages=state.items.length===0?0:(state.items.length%state.onePageNums===0?
      state.items.length/state.onePageNums:parseInt(state.items.length/state.onePageNums)+1)
  },
  setPreviousPage(state){
    state.currentPage=state.currentPage>1?state.currentPage-1:1
  },
  setNextPage(stata){
    state.currentPage=state.currentPage<state.pages?state.currentPage+1:state.pages
  }
}

// 获取状态信息
const getters = {}

// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
