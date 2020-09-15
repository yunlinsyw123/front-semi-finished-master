import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';//国际化
import {messages} from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
//import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';

import {getRequest} from './utils/api'
import {postRequest} from './utils/api'
import {putRequest} from './utils/api'
import {deleteRequest} from './utils/api'
import {initMenu} from './utils/utils'
import {isNotNullORBlank} from './utils/utils'



Vue.prototype.getRequest = getRequest;//获取值接口接口
Vue.prototype.postRequest = postRequest;//添加接口接口
Vue.prototype.putRequest = putRequest;//修改接口
Vue.prototype.deleteRequest = deleteRequest;//删除接口
Vue.prototype.isNotNullORBlank = isNotNullORBlank;//菜单数据封装


Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});





new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
