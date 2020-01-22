var populationInfo = Vue.extend({
name:"populationInfo",
data(){
  return{
    formItem: {
      input: '',
      select: '',
      radio: 'male',
      checkbox: [],
      switch: true,
      date: '',
      time: '',
      slider: [20, 50],
      textarea: ''
    },

    listTitle: [
        {
            title: '姓名',
            key: 'name'
        },
        {
            title: '性别',
            key: 'gender'
        },
        {
            title: '居住性质',
            key: 'live'
        },
        {
            title: '迁入日期',
            key: 'date'
        },
        {
            title: '联系电话',
            key: 'phone'
        },
        {
            title: '身份证号码',
            key: 'cardNo'
        },
        {
            title: '详细住址',
            key: 'address'
        },
        {
            title: '基础操作',
            key: 'operation'
        }
    ],
    listData:[],
  };
},
mounted: function() {
    this.$nextTick(function() {
        console.log('caseRegistration');
        this.listDataFn();
    });
},
methods: {
    listDataFn(){
        let t = this;
        let genders = ['男','女'];
        let work = ['失业','就业中'];
        t.listData = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|1-10': [{
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    'name': '@cname',
                    'gender|1':genders,
                    'live':'暂住人口',
                    'date': '@date',
                    'phone|+12345':13766666666,
                    'cardNo|+12345': 430112195034519934,
                    'address': '@county(true)',
                    'operation':'编辑 删除'
                    
              }]
          });
        // t.litigant = data;
        console.log(t.listData.list);
    },
},

template:'\
<div class="populationInfo">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">人口信息管理</h1>\
            <h2>信息检索</h2>\
            <Form :model="formItem" :label-width="100">\
                <FormItem label="姓名">\
                    <Row>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="3" style="text-align: center">身份证号码</Col>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="3" style="text-align: center"><Button type="primary" icon="ios-search">查询</Button></Col>\
                    </Row>\
                </FormItem>\
            </Form>\
            <h2>信息预览</h2>\
            <Table :columns="listTitle" :data="listData.list"></Table>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});