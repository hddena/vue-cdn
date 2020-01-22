var caseRegistration = Vue.extend({
name:"caseRegistration",
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
    litigant:[]
  };
},
mounted: function() {
    this.$nextTick(function() {
        console.log('caseRegistration');
        this.listData();
    });
},
methods: {
    listData(){
        let t = this;
        let genders = ['男','女'];
        let work = ['失业','就业中'];
        t.litigant = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|1-10': [{
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    'name': '@cname',
                    'gender|1':genders,
                    'age|16-50': 18,
                    'work|1':work,
                    'address': '@county(true)',
                    'date': '@date'
              }]
          });
        // t.litigant = data;
        console.log(t.litigant.list);
    },
    onSave (type) {
        this.$Message[type]({

        //this.$Message['success']({
            background: true,
            content: '保存成功！'
        })

        console.log('保存成功！');
    }
},

template:'\
<div class="caseRegistration">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">治安案件登记</h1>\
            <Form :model="formItem" :label-width="100">\
                <FormItem label="案情">\
                    <Select v-model="formItem.select">\
                        <Option value="打架">打架</Option>\
                        <Option value="抢劫">抢劫</Option>\
                        <Option value="杀人">杀人</Option>\
                    </Select>\
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
                <FormItem label="案发地点">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
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
                <FormItem label="当事人">\
                    <Button>新增</Button>\
                    <Table :columns="litigantTitle" :data="litigant.list"></Table>\
                </FormItem>\
                <FormItem label="案件情况">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="调查结果">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="工作进度">\
                    <Steps :current="1" size="small">\
                        <Step title="已完成"></Step>\
                        <Step title="进行中"></Step>\
                        <Step title="待进行"></Step>\
                        <Step title="待进行"></Step>\
                    </Steps>\
                </FormItem>\
                <FormItem label="意见和结果">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="处理日期">\
                    <Row>\
                        <Col span="6">\
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="经办人">\
                    <Select v-model="formItem.select">\
                        <Option value="管理员">管理员</Option>\
                    </Select>\
                </FormItem>\
                <FormItem>\
                    <Button type="primary" @click="onSave(\'success\')">保存</Button>\
                    <Button style="margin-left: 8px">取消</Button>\
                </FormItem>\
            </Form>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});