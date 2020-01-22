var footerShow = Vue.extend({
name:"footerShow",
data(){
  return{
    step:1
  };
},
mounted: function() {
    /*
    this.$nextTick(function() {
        this.getNetUrlList();
    });
    */
},
methods: {

},

template:'\
<div id="footerShow">\
    <h1>警务综合办公系统</h1>\
</div>\
',

});