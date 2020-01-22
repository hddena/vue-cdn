var login = Vue.extend({
name:"login",
data(){
  return{
      username: '',
      password: '',

  };
},
mounted: function() {

    this.$nextTick(function() {
        // this.showLogin();
        console.log('准备登录！')
    });

},
methods: {
    
    showLogin(){
        console.log(this.$route);
        console.log(this.$route.path);
        let app = document.getElementById('app');
        let headerShow = document.getElementById('headerShow');
        let breadcrumb = document.getElementById('breadcrumb');
        let asideBox = document.getElementById('asideBox');
        let footerShow = document.getElementById('footerShow');
        let main = document.getElementById('main');
        app.style.backgroundColor = "#5f4dee"
        headerShow.style.display='none';
        breadcrumb.style.display='none';
        asideBox.style.display='none';
        footerShow.style.display='none';
        main.style.padding='0px';
    },

    goToNext(){
        let t = this;
        if (t.username != '' && t.password != '') {
            this.$router.push({path:'/caseRegistration'});
            this.$Message['success']({
                background: true,
                content: '登录成功！'
            })
        } else {
            this.$Message['error']({
                background: true,
                content: '请输入帐号密码！'
            })
        }
    },
    goToRegister(){
        this.$Message['info']({
            background: true,
            content: '注册页面更新中！'
        })
    }
},

template:'\
<div class="login">\
    <div class="form-container">\
        <h1>系统登录</h1>\
        <form id="logInForm" data-toggle="validator" data-focus="false" novalidate="true">\
            <div class="form-group">\
                <input type="email" class="form-control-input" v-model="username" id="lemail" required="" placeholder="帐号">\
                <div class="help-block with-errors"></div>\
            </div>\
            <div class="form-group">\
                <input type="text" class="form-control-input" v-model="password" id="lpassword" required="" placeholder="密码">\
                <div class="help-block with-errors"></div>\
            </div>\
            <div class="form-group">\
                <button type="submit" class="form-control-submit-button disabled" @click="goToNext">登录</button>\
                <button type="submit" class="form-control-submit-button disabled" @click="goToRegister">注册</button>\
            </div>\
            <div class="form-message">\
                <div id="lmsgSubmit" class="h3 text-center hidden"></div>\
            </div>\
        </form>\
    </div>\
</div>\
',

});