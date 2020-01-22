var adminPower = Vue.extend({
name:"adminPower",
data(){
  return{
    indeterminate: true,
    checkAll: false,
    checkAllGroup: [],

    operation : ['110指令','110报警','口头报警','举报','其他'],

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
        t.listData = Mock.mock({
              // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
              'list|1-10': [{
                  // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    'operation|1':t.operation
                    
              }]
          });
        // t.litigant = data;
        console.log(t.listData.list);
    },

    handleCheckAll () {
        let t = this;
        if (this.indeterminate) {
            this.checkAll = false;
        } else {
            this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
            this.checkAllGroup = t.operation;
        } else {
            this.checkAllGroup = [];
        }
    },
    checkAllGroupChange (data) {
        let t = this;
        if (data.length === t.operation.length) {
            this.indeterminate = false;
            this.checkAll = true;
        } else if (data.length > 0) {
            this.indeterminate = true;
            this.checkAll = false;
        } else {
            this.indeterminate = false;
            this.checkAll = false;
        }
    },
    onSave (type) {
        this.$Message[type]({
            background: true,
            content: '保存成功！'
        })
    }
},

template:'\
<div class="adminPower">\
    <header-show></header-show>\
    <breadcrumb></breadcrumb>\
    <div id="container">\
        <aside-box></aside-box>\
        <div id="main">\
            <h1 class="formTitle">人员权限维护</h1>\
            <div class="userList">\
                <p>管理员</p>\
                <p>测试用户</p>\
            </div>\
            <div class="checkboxList">\
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">\
                    <Checkbox\
                        :indeterminate="indeterminate"\
                        :value="checkAll"\
                        @click.prevent.native="handleCheckAll">全选</Checkbox>\
                </div>\
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">\
                    <Checkbox v-for="(k,i) in operation" :label="k"></Checkbox>\
                </CheckboxGroup>\
                <div class="checkboxListBut">\
                    <Button type="primary" @click="onSave(\'success\')">保存</Button>\
                    <Button style="margin-left: 8px">取消</Button>\
                </div>\
            </div>\
        </div>\
    </div>\
    <footer-show></footer-show>\
</div>\
',

});