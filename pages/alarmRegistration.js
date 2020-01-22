var alarmRegistration = Vue.extend({
name:"alarmRegistration",
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
<div class="alarmRegistration">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">接警登记表</h1>\
            <Form :model="formItem" :label-width="100">\
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
                <FormItem label="报警方式">\
                    <Select v-model="formItem.select">\
                        <Option value="110">110</Option>\
                        <Option value="微信">微信</Option>\
                    </Select>\
                </FormItem>\
                <FormItem label="单位">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="联系方式">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="位置">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="类别">\
                    <Select v-model="formItem.select">\
                        <Option value="110">110</Option>\
                        <Option value="微信">微信</Option>\
                    </Select>\
                </FormItem>\
                <FormItem label="接警人">\
                    <Select v-model="formItem.select">\
                        <Option value="管理员">管理员</Option>\
                    </Select>\
                </FormItem>\
                <FormItem label="到达现场时间">\
                    <Row>\
                        <Col span="6">\
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>\
                        </Col>\
                        <Col span="6">\
                            <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="报警内容">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="报警情况">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
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
                <FormItem label="结果">\
                    <Select v-model="formItem.select">\
                        <Option value="立案">立案</Option>\
                        <Option value="未立案">未立案</Option>\
                    </Select>\
                </FormItem>\
                <FormItem label="经办人">\
                    <Select v-model="formItem.select">\
                        <Option value="管理员">管理员</Option>\
                    </Select>\
                </FormItem>\
                <FormItem>\
                    <Button type="primary">新增</Button>\
                    <Button style="margin-left: 8px">保存</Button>\
                    <Button style="margin-left: 8px">取消</Button>\
                </FormItem>\
            </Form>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});