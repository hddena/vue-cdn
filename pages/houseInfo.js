var houseInfo = Vue.extend({
name:"houseInfo",
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
            title: '房屋编号',
            key: 'number'
        },
        {
            title: '业主姓名',
            key: 'ownerName'
        },
        {
            title: '房屋户型',
            key: 'housingType'
        },
        {
            title: '使用单位名称',
            key: 'company'
        },
        {
            title: '是否出租',
            key: 'lease'
        },
        {
            title: '业主身份证号码',
            key: 'cardNo'
        },
        {
            title: '详细住址',
            key: 'address'
        },
        {
            title: '楼栋',
            key: 'dong'
        },
        {
            title: '单元号',
            key: 'dan'
        },
        {
            title: '室号',
            key: 'shi'
        },
        {
            title: '联系电话',
            key: 'phone'
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
        let lease = ['是','否'];
        let work = ['失业','就业中'];
        let project = ['文具','餐具'];
        let housingType = ['三房一厅','四房两厅'];
        t.listData = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|1-10': [{
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    'number|123456789-999999999': 123456789,
                    'ownerName': '@cname',
                    'housingType|1':housingType,
                    'lease|1':lease,
                    'cardNo|+12345': 430112195034519934,
                    'address': '@county(true)',
                    'dong|1-30':15,
                    'dan|1-30':15,
                    'shi|1-30':15,
                    'phone|+12345':13766666666

              }]
          });
        // t.litigant = data;
        console.log(t.listData.list);
    },
},

template:'\
<div class="houseInfo">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">商品房管理</h1>\
            <h2>信息检索</h2>\
            <Form :model="formItem" :label-width="100">\
                <FormItem label="房屋编号">\
                    <Row>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="4" style="text-align: center">业主身份证号码</Col>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="3" style="text-align: center"><Button type="primary" icon="ios-search">查询</Button></Col>\
                    </Row>\
                </FormItem>\
            </Form>\
            <h2>房屋信息列表</h2>\
            <Table :columns="listTitle" :data="listData.list"></Table>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});