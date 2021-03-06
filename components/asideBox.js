var asideBox = Vue.extend({
name:"asideBox",
data(){
  return{
    collapse:0,
    asideList: [
        {
            title:'人口信息管理',
            list:[
                {
                   title:'人口基本信息录入',
                   link:'/populationReg', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'人口信息管理',
                   link:'/populationInfo', 
                   icon:'md-arrow-dropright'
                }
            ]
        },
        {
            title:'值班管理',
            list:[
                {
                   title:'接警登记表',
                   link:'/alarmRegistration', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'刑事案件登记',
                   link:'/criminalRegistration', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'治安案件登记',
                   link:'/caseRegistration', 
                   icon:'md-arrow-dropright'
                }              
            ]
        },
        {
            title:'社区简介',
            list:[
                {
                   title:'社区基本信息',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'社区新闻',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                }
            ]
        },
        {
            title:'居民信息管理',
            list:[
                {
                   title:'常住人口管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'暂住人口管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'重点人口管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                }
            ]
        },
        {
            title:'房屋管理',
            list:[
                {
                   title:'商品房管理',
                   link:'/houseInfo', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'商品建筑管理',
                   link:'/houseBuildInfo', 
                   icon:'md-arrow-dropright'
                }
            ]
        },
        {
            title:'治安管理',
            list:[
                {
                   title:'治安事件管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'突发事件管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'交通事故管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                }
            ]
        },
        {
            title:'系统管理',
            list:[
                {
                   title:'用户管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'日志管理',
                   link:'javascript:;', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'代码管理',
                   link:'/addSystemCode', 
                   icon:'md-arrow-dropright'
                },
                {
                   title:'权限管理',
                   link:'/adminPower', 
                   icon:'md-arrow-dropright'
                }
            ]
        }
    ],
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
<div id="asideBox">\
    <h1 class="asideTitle"><Icon type="ios-apps" />管理栏目</h1>\
    <Collapse v-model="collapse" accordion>\
        <Panel v-for="(k,i) in asideList" :key="i">\
            {{k.title}}\
            <p slot="content"><span v-for="(kk,ii) in k.list"><Icon :type="kk.icon" /><router-link :to="kk.link">{{kk.title}}</router-link></span></p>\
        </Panel>\
    </Collapse>\
</div>\
',

});