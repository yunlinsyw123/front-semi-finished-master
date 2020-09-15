<template>
    <!--侧边菜单栏-->
    <div class="sidebar">
        <el-menu
                class="sidebar-el-menu"
                :default-active="onRoutes"
                :collapse="collapse"
                background-color="#324157"
                text-color="#bfcbd9"
                active-text-color="#20a0ff"
                unique-opened
                router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                    v-if="subItem.subs"
                                    :index="subItem.index"
                                    :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                        v-for="(threeItem,i) in subItem.subs"
                                        :key="i"
                                        :index="threeItem.index"
                                >{{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                    v-else
                                    :index="subItem.index"
                                    :key="subItem.index"
                            >{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'Home',
                        title: '我的工作平台',
                        subs: [
                            {
                                index: 'ToDoList',
                                title: '代办列表'
                            },
                            {
                                index: 'UserInfoUpdate',
                                title: '个人信息修改'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'RoleManager',
                                title: '角色管理'
                            },
                            {
                                index: 'UserManager',
                                title: '用户管理'
                            },
                            {
                                index: 'Permission',
                                title: '角色权限配置'
                            },
                            {
                                index: 'SystemSetting',
                                title: '系统配置'
                            }

                        ]
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'TowerManager',
                        title: '杆塔查询'
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'LineManager',
                        title: '线路管理'
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'tabs2',
                        title: '缺陷管理',
                        subs: [
                            {
                                index: 'FlawType',
                                title: ' 缺陷类型设置'
                            },
                            {
                                index: 'FlawGrade',
                                title: '缺陷等级确认'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'tabs3',
                        title: '巡检任务管理',
                        subs: [
                            {
                                index: 'FlawTaskManager',
                                title: '指定与分配'
                            },
                            {
                                index: 'FlawExecutionAndReceipt',
                                title: '执行与回执'
                            }, {
                                index: 'FlawQuery',
                                title: '缺陷查询'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'tabs4',
                        title: '消缺任务管理',
                        subs: [
                            {
                                index: 'EiminateTaskManager',
                                title: '指定与分配'
                            },
                            {
                                index: 'EiminateExecutionAndReceipt',
                                title: '执行与回执'
                            }, {
                                index: 'EiminateQuery',
                                title: '消缺查询'
                            }
                        ]

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'tabs5',
                        title: '信息统计',
                        subs: [
                            {
                                index: 'PatrolStats',
                                title: '巡检记录统计'
                            },
                            {
                                index: 'EliminateStats',
                                title: '消缺记录统计'
                            }
                        ]
                    }

                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
                bus.$emit('collapse-content', msg);
            });
        }
    };
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
