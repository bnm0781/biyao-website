/* 登录页面表单验证部分 */
define(["jquery"],function($){
	class login{
		constructor(){
			this.init();
		}
		init(){
			this.$regist = $(".account-regist");// 注册按钮;
			this.$regist.on("click",$.proxy(this.registJump,this));
			this.$smsBtn = $(".sms-btn");// 短信登录按钮;
			this.$smsBtn.on("click",$.proxy(this.smsBtnJump,this));
			this.$pwdBtn = $(".pwd-btn");// 密码登录按钮;
			this.$pwdBtn.on("click",$.proxy(this.pwdBtnJump,this));
			this.$smsLogin = $(".sms-login");// 短信登录页面;
			this.$pwdLogin = $(".pwd-login");// 密码登录页面;
			this.$userNameInput = $("#userName");// 密码登录页面手机号码输入框;
			this.$passwordInput = $("#password");// 密码登录页面密码输入框;
			this.$loginAuto = $(".login-auto");// 自动登录按钮;
			this.$smsCode = $(".sms-code");// 短信验证码输入框;
			this.$accountBtn = $(".account-btn");
			// var validate = [this.$userNameInput[0].pass,this.$passwordInput[0]];
			this.$smsPhoneNumber = $(".sms-phone-number");// 短信登录页面手机号码输入框;
			/* 密码登录页面手机号码输入框 获焦失焦事件 */
			this.$userNameInput.focus($.proxy(this.delStyle));
			this.$userNameInput.blur($.proxy(this.loginUserName));
			/* 密码登录页面密码输入框 获焦失焦事件 */
			this.$passwordInput.focus($.proxy(this.delStyle));
			this.$passwordInput.blur($.proxy(this.loginPassword));
			/* 自动登录事件 */
			this.$loginAuto.on("click",$.proxy(this.automatic));
			/* 短信登录页面手机号码输入框 获焦失焦事件 */
			this.$smsPhoneNumber.focus($.proxy(this.delStyle));
			this.$smsPhoneNumber.blur($.proxy(this.loginPhone));
			/* 短信验证码输入框 获焦失焦事件 */
			this.$smsCode.focus($.proxy(this.deleteStyle));
			this.$smsCode.blur($.proxy(this.loginCode));
		}
		/* 注册页面跳转 */
		registJump(){
			window.location.href = "regist.html";
		}
		/* 短信登录跳转 */
		smsBtnJump(){
			this.$smsBtn.addClass("hide");
			this.$pwdBtn.removeClass("hide");
			this.$pwdLogin.addClass("hide");
			this.$smsLogin.removeClass("hide");
		}
		/* 密码登录跳转 */
		pwdBtnJump(){
			this.$pwdBtn.addClass("hide");
			this.$smsBtn.removeClass("hide");
			this.$smsLogin.addClass("hide");
			this.$pwdLogin.removeClass("hide");
		}
		/* 用户名验证 */
		loginUserName(){
			var value = this.value;
			var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if(reg.test(value)){
				this.pass = true;
			}else if(value == ""){
				$(this).addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入手机号");
				this.pass = false;
			}else{
				$(this).addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("账号格式错误，请重新输入");
				this.pass = false;
			}
		}
		/* 登录密码验证 */
		loginPassword(){
			var value = this.value;
			var reg = /^[a-zA-Z0-9]{6,10}$/;
			if(reg.test(value)){
				this.pass = true;
			}else if(value == ""){
				$(this).addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入登录密码");
				this.pass = false;
			}else{
				$(this).addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("登录密码格式错误");
				this.pass = false;
			}
		}
		/* 自动登录选项 */
		automatic(){
			$(this).find("b").toggleClass("login-remember");
			if($(this).find("b").hasClass("login-remember")){
				$(this).find("i").text("请勿在公用电脑上勾选此选项");
			}else {
				$(this).find("i").text("下次自动登录");
			}
		}
		/* 手机号码验证 */
		loginPhone(){
			var value = this.value;
			var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if(reg.test(value)){
				this.pass = true;
			}else if(value == ""){
				$(this).addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入手机号");
				this.pass = false;
			}else{
				$(this).addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("账号格式错误，请重新输入");
				this.pass = false;
			}
		}
		/* 短信验证码验证 */
		loginCode(){
			var value = this.value;
			var reg = /^[0-9]{6}$/;
			if(reg.test(value)){
				this.pass = true;
			}else if(value == ""){
				this.pass = false;
			}else{
				$(this).addClass("input-error")
				.siblings().eq(1).css({
					display:"block"
				}).html("短信验证码格式错误");
				this.pass = false;
			}
		}
		/* 删除样式 */
		delStyle(){
			$(this).removeClass("input-error")
			.siblings().eq(0).css({
				display:"none"
			});
		}
		deleteStyle(){
			$(this).removeClass("input-error")
			.siblings().eq(1).css({
				display:"none"
			});
		}
	}
	return new login();
})