var criminalRegistration = Vue.extend({
name:"criminalRegistration",
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

    litigantTitle: [
        {
            title: '姓名',
            key: 'name'
        },
        {
            title: '性别',
            key: 'gender'
        },
        {
            title: '年龄',
            key: 'age'
        },
        {
            title: '工作单位',
            key: 'work'
        },
        {
            title: 'Address',
            key: 'address'
        }
    ],
    listData:[],
  };
},
mounted: function() {

    this.$nextTick(function() {
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
                    'age|16-50':18,
                    'work|1':work,
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
<div class="criminalRegistration">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">刑事案件登记</h1>\
            <Form :model="formItem" :label-width="100">\
                <FormItem label="案别">\
                    <Select v-model="formItem.select">\
                        <Option value="打架">打架</Option>\
                        <Option value="抢劫">抢劫</Option>\
                        <Option value="杀人">杀人</Option>\
                    </Select>\
                </FormItem>\
                <FormItem label="接报时间">\
                    <Row>\
                        <Col span="6">\
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>\
                        </Col>\
                        <Col span="6">\
                            <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="发案时间">\
                    <Row>\
                        <Col span="6">\
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>\
                        </Col>\
                        <Col span="6">\
                            <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="接案单位">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="发案警区">\
                    <Select v-model="formItem.select">\
                        <Option value="警务一区">警务一区</Option>\
                        <Option value="警务二区">警务二区</Option>\
                        <Option value="警务三区">警务三区</Option>\
                    </Select>\
                </FormItem>\
                <FormItem label="案发地点">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="**时间">\
                    <Row>\
                        <Col span="6">\
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>\
                        </Col>\
                        <Col span="6">\
                            <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="事主姓名">\
                    <Button>新增</Button>\
                    <Table :columns="litigantTitle" :data="listData.list"></Table>\
                </FormItem>\
                <FormItem label="发案经过">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="周边证据">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="主犯姓名">\
                    <Button>新增</Button>\
                    <Table :columns="litigantTitle" :data="listData.list"></Table>\
                </FormItem>\
                <FormItem label="经过">\
                    <Button>新增</Button>\
                    <Table :columns="litigantTitle" :data="listData.list"></Table>\
                </FormItem>\
                <FormItem label="从犯姓名">\
                    <Button>新增</Button>\
                    <Table :columns="litigantTitle" :data="listData.list"></Table>\
                </FormItem>\
                <FormItem label="经办人">\
                    <Row>\
                        <Col span="6">\
                            <Select v-model="formItem.select">\
                                <Option value="管理员A">管理员A</Option>\
                            </Select>\
                        </Col>\
                        <Col span="6">\
                            <Select v-model="formItem.select">\
                                <Option value="管理员B">管理员B</Option>\
                            </Select>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="是否破案">\
                    <Row>\
                        <Col span="6">\
                            <Select v-model="formItem.select">\
                                <Option value="未破案">未破案</Option>\
                            </Select>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem>\
                    <Button type="primary">保存</Button>\
                    <Button style="margin-left: 8px">取消</Button>\
                </FormItem>\
            </Form>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});