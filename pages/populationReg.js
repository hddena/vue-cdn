var populationReg = Vue.extend({
name:"populationReg",
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
    animal: '男'
  };
},
mounted: function() {
    this.$nextTick(function() {
        console.log('populationReg');
        this.listData();
    });
},
methods: {
    listData(){
        // t.litigant = data;
        console.log('人口基本信息录入')
    },
},

template:'\
<div class="populationReg">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">人口基本信息录入</h1>\
            <Form :model="formItem" :label-width="100">\
                <FormItem label="信住户姓名">\
                    <Row>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="3" style="text-align: center">性别</Col>\
                        <Col span="6">\
                            <RadioGroup v-model="animal">\
                                <Radio label="男"></Radio>\
                                <Radio label="女"></Radio>\
                            </RadioGroup>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="居住性质">\
                    <Row>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="3" style="text-align: center">迁入日期</Col>\
                        <Col span="6">\
                            <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="联系方式">\
                    <Row>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                        <Col span="3" style="text-align: center">身份证号码</Col>\
                        <Col span="6">\
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                        </Col>\
                    </Row>\
                </FormItem>\
                <FormItem label="居住地址">\
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>\
                </FormItem>\
                <FormItem label="备注">\
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\
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