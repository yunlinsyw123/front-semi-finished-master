
//实现递归菜单js
import {getRequest} from './api'
import {Message} from 'element-ui'

export const isNotNullORBlank = (...args)=> {
  for (var i = 0; i < args.length; i++) {
    let argument = args[i];
    if (argument == null || argument === '' || argument === undefined) {
      Message.warning({message: '数据不能为空!'})
      return false;
    }
  }
  return true;
}
//但登录成功后由main.js的initMenu跳转
export const initMenu = (router, store)=> {
  if (store.state.routes.length > 0) {
    return;
  }
//登录成功后发送请求json菜单对应后台ConfigController控制类sysmenu方法
  getRequest("/config/sysmenu").then(resp=> {
    if (resp && resp.status === 200) {
      let fmtRoutes = formatRoutes(resp.data);
      router.addRoutes(fmtRoutes);
      store.commit('initMenu', fmtRoutes);
      store.dispatch('connect');
    }
  })
}
/*

export const formatRoutes = (routes)=> {
  let fmRoutes = [];
  routes.forEach(router=> {
    let {
      path,
      component,
      name,
      meta
      /!*iconCls,
      children*!/
    } = router;

    let fmRouter = {
      path: path,
      component(resolve){
        //，拿到父页面对应的URL地址
        if (component.startsWith("/")) {
          require(['../components/' + component + '.vue'], resolve)
        } else if (component.startsWith("marketing")) {//营销管理
          require(['../components/marketing/' + component + '.vue'], resolve)
        } else if (component.startsWith("client")) {//客户管理
          require(['../components/client/' + component + '.vue'], resolve)
        }else if(component.startsWith("service")){//服务管理
          require(['../components/service/'+component + '.vue'], resolve)
        }else if(component.startsWith("customer")){//统计报表
          require(['../components/customer_analysis/'+component + '.vue'], resolve)
        }else if(component.startsWith("data")){//基础数据
          require(['../components/data/'+component + '.vue'], resolve)
        }
      },
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children
    };
    fmRoutes.push(fmRouter);
  })
  return fmRoutes;
}
*/

