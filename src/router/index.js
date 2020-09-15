import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      /*  {
            path: '/',
            redirect: '/Home'
        },*/
        {
            path: '/',
            component: () => import('../components/page/Login.vue'),
            meta: {title: '登录'}
        },

        {
            path: '/Home',
            component: () => import( '../components/common/Home.vue'),
            meta: {title: '我的工作平台'},
            children: [
                {
                    path: '/UserInfoUpdate',
                    component: () => import( '../components/page/gongzuopingtai/UserInfoUpdate.vue'),
                    meta: {title: '个人信息修改'},
                },
                {
                    path: '/ToDoList',
                    component: () => import( '../components/page/gongzuopingtai/ToDoList.vue'),
                    meta: {title: '代办列表'},
                },
                /*---------系统管理Router------------*/
                {
                    path: '/RoleManager',
                    component: () => import( '../components/page/systemSetting/RoleManager'),
                    meta: {title: '角色管理'},
                },
                {
                    path: '/UserManager',
                    component: () => import( '../components/page/systemSetting/UserManager'),
                    meta: {title: '用户管理'},
                },
                {
                    path: '/Permission',
                    component: () => import( '../components/page/systemSetting/Permission'),
                    meta: {title: '角色权限配置'},
                },
                {
                    path: '/SystemSetting',
                    component: () => import( '../components/page/systemSetting/SystemSetting'),
                    meta: {title: '系统配置'},
                },
                /*---------杆塔查询-------------*/
                {
                    path: '/TowerManager',
                    component: () => import( '../components/page/towerManager/TowerManager'),
                    meta: {title: '杆塔查询'},
                },
                /*线路管理*/
                {
                    path: '/LineManager',
                    component: () => import( '../components/page/lineManager/LineManager'),
                    meta: {title: '杆塔查询'},
                },

                /*缺陷管理*/
                {
                    path: '/FlawType',
                    component: () => import( '../components/page/flawManager/FlawType'),
                    meta: {title: '缺陷类型设置'},
                },
                {
                    path: '/FlawGrade',
                    component: () => import( '../components/page/flawManager/FlawGrade'),
                    meta: {title: '缺陷等级确认'},
                },
                /*巡检任务管理*/
                {
                    path: '/FlawTaskManager',
                    component: () => import( '../components/page/pTaskManager/FlawTaskManager'),
                    meta: {title: '缺陷指定与分配'},
                },
                {
                    path: '/FlawExecutionAndReceipt',
                    component: () => import( '../components/page/pTaskManager/FlawExecutionAndReceipt'),
                    meta: {title: '缺陷执行与回执'},
                },
                {
                    path: '/FlawQuery',
                    component: () => import( '../components/page/pTaskManager/FlawQuery'),
                    meta: {title: '缺陷查询'},
                },
                /*消缺任务管理*/
                {
                    path: '/EiminateTaskManager',
                    component: () => import( '../components/page/xiaoqueManager/EiminateTaskManager'),
                    meta: {title: '消缺指定与分配'},
                },
                {
                    path: '/EiminateExecutionAndReceipt',
                    component: () => import( '../components/page/xiaoqueManager/EiminateExecutionAndReceipt'),
                    meta: {title: '消缺执行与回执'},
                },
                {
                    path: '/EiminateQuery',
                    component: () => import( '../components/page/xiaoqueManager/EiminateQuery'),
                    meta: {title: '消缺查询'},
                },
                /*信息统计*/
                {
                    path: '/PatrolStats',
                    component: () => import( '../components/page/information/PatrolStats'),
                    meta: {title: '巡检记录统计'},
                },
                {
                    path: '/EliminateStats',
                    component: () => import( '../components/page/information/EliminateStats'),
                    meta: {title: '消缺记录统计'},
                }

            ]
        },


    ]
});
