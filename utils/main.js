
$(document).ready(function() {

console.log(sayHello('外部 faunction 已经准备好了！'));

  Vue.component('header-show',headerShow);
  Vue.component('footer-show',footerShow);
  Vue.component('breadcrumb',breadcrumb);
  Vue.component('aside-box',asideBox);
  Vue.use(VueRouter);
  const router = new VueRouter({
    //mode: 'history', //切换路径模式，变成history模式  消除 #
    routes: [
      // { path: '/index/', component: indexContainer },
      { path: '/login', name :'登录',component: login },
      { path: '/adminPower', name :'人员权限维护',component: adminPower },
      { path: '/houseInfo', name :'商品房管理',component: houseInfo },
      { path: '/houseBuildInfo', name :'商业建筑管理',component: houseBuildInfo },
      { path: '/populationReg', name :'人口基本信息录入',component: populationReg },
      { path: '/populationInfo', name :'人口信息管理',component: populationInfo },
      { path: '/addSystemCode', name :'添加系统代码',component: addSystemCode },
      { path: '/alarmRegistration', name :'接警登记表',component: alarmRegistration },
      { path: '/criminalRegistration', name :'刑事案件登记',component: criminalRegistration },
      { path: '/caseRegistration', name :'治安案件登记',component: caseRegistration },
      { path: "/",redirect: "/login" },
      { path: "*",redirect: "/login" }  //404重定向
    ]
  });

  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      count: 0,
      msg: [
        "整个页面使用CDN引入库文件开发，主要使用 Vue框架、Vant页面框架、Axios请求数据、Swiper图片切换、WOW + Animate.css动画库！图片都为其它网站引入！所有代码都可在本页面可见",
        "下面内容只作为案例列表展示案例！",
        "下面内容是一个todo-list！通过本地的localStorage保存留言信息，在刷新页面时信息也可以得到保存下来！"

      ]
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

  new Vue({
    el: '#app',
    router,
    store,
    data: {
      visible: false,
      value2: '1',
      steps:1
    },
    props: {

    },
    components: {
      // caseRegistration,
    },
    watch: {
      visible(newValue,oldValue){

      },
    },
    computed: {
      message() {
        return this.visible;
      },
      messageState() {
        return store.state.msg
      },
    },
    //computed end
    mounted: function() {
      var self = this;
      this.$nextTick(function() {
        console.log('Vue 已经准备好了！');
        console.log(Mock); // 模拟数据
      });
    },
    methods: {
      show: function() {
        this.visible = true;
      }
    }
  })

});