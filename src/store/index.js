import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//把用户信息存入store 全局的储存
export default new Vuex.Store({
    state: {
        user: {},
        routes: [],

    },
    mutations: {
        initMenu(state, menus) { //登录成功跳转
            state.routes = menus;//生成菜单
        },
        login(state, user) {//登录
            state.user = user;
            window.sessionStorage.setItem('user', JSON.stringify(user));//保存用户
        },
        logout(state) {//退出登陆
            window.sessionStorage.removeItem('user');//清空用户
            state.routes = [];//清空菜单节点
        }
    },
    actions: {}
});
