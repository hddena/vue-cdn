var addSystemCode = Vue.extend({
name:"addSystemCode",
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
            title: 'buy',
            key: 'buy'
        },
        {
            title: 'code',
            key: 'code'
        },
        {
            title: '描述',
            key: 'describe'
        },
        {
            title: '基础操作A',
            key: 'operationA'
        },
        {
            title: '基础操作B',
            key: 'operationB'
        },
        {
            title: '基础操作C',
            key: 'operationC'
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
        let describe = ['110指令','110报警','口头报警','举报','其他'];
        t.listData = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|1-10': [{
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    'buy': 'buy',
                    'code|+1': 1,
                    'describe|1': describe,
                    'operationA':'选择',
                    'operationB':'编辑',
                    'operationC':'删除'
                    
              }]
          });
        // t.litigant = data;
        console.log(t.listData.list);
    },
},

template:'\
<div class="addSystemCode">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
                <h1 class="formTitle">添加系统代码</h1>\
                <Form :model="formItem" :label-width="100">\
                    <FormItem label="姓名">\
                        <Row>\
                            <Col span="6">\
                                <Select v-model="formItem.select">\
                                    <Option value="110指令">110指令</Option>\
                                    <Option value="110报警">110报警</Option>\
                                    <Option value="口头报警">口头报警</Option>\
                                    <Option value="举报">举报</Option>\
                                    <Option value="其他">其他</Option>\
                                </Select>\
                            </Col>\
                            <Col span="3" style="text-align: center">编码(Code)</Col>\
                            <Col span="6">\
                                <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                            </Col>\
                        </Row>\
                    </FormItem>\
                    <FormItem label="描述">\
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
                    </FormItem>\
                    <FormItem>\
                        <Button type="primary">添加</Button>\
                        <Button style="margin-left: 8px">取消</Button>\
                    </FormItem>\
                </Form>\
                <Table :columns="listTitle" :data="listData.list"></Table>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});