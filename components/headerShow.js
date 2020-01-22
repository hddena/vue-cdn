var headerShow = Vue.extend({
name:"headerShow",
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
<div id="headerShow">\
	<h1 class="title">警务综合办公系统</h1>\
</div>\
',

});