import routerLink from './components/link';
import routerView from './components/view';

export let Vue;

export default function install (_Vue) {
  Vue = _Vue;
  // console.log('install');
  
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);  // 进行初始化，后续监听路由变化更新_route的值
        Vue.util.defineReactive(this, '_route', this._router.history.current); // 定义_route属性为响应式，这样当前路由发生变化时能重新渲染页面
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot);
      }
    },
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get () {
      return this._routerRoot._router;
    }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () {
      console.log('get', this._routerRoot);
      
      return this._routerRoot._route;
    }
  })

  Vue.component('router-link', routerLink);
  Vue.component('router-view', routerView);
}
