var breadcrumb = Vue.extend({
name:"footerShow",
data(){
  return{
    dateAndTime:''
  };
},
mounted: function() {
    let t = this;
    this.$nextTick(function() {

        setInterval(function(){
          t.dateAndTimeFn();
        }, 1000); // 1秒
    });

},
methods: {
    dateAndTimeFn(){ //在规定时间里清空购物车
      let nowYear = new Date().getFullYear(); // 获取当前年份
      let nowMonth = new Date().getMonth() + 1; // 获取当前月份
      let nowToday = new Date().getDate(); // 获取当前日期
      let nowHour = new Date().getHours(); //获取当前小时
      let nowMinute = new Date().getMinutes(); //获得当前分钟
      let nowSeconds = new Date().getSeconds() //获得当前秒
      this.dateAndTime = nowYear+'年'+nowMonth+'月'+nowToday+'日'+nowHour+'时'+nowMinute+'分'+nowSeconds+'秒'
      //console.log(this.dateAndTime);
    },
},

template:'\
<div id="breadcrumb">\
    <Breadcrumb>\
        <BreadcrumbItem to="/">\
            <Icon type="ios-home-outline"></Icon> 首页\
        </BreadcrumbItem>\
        <BreadcrumbItem to="/components/breadcrumb">\
            <Icon type="logo-buffer"></Icon> 值班管理\
        </BreadcrumbItem>\
        <BreadcrumbItem>\
            <Icon type="ios-cafe"></Icon> 登记表\
        </BreadcrumbItem>\
    </Breadcrumb>\
    <strong>当前时间：{{dateAndTime}}</strong>\
</div>\
',

});