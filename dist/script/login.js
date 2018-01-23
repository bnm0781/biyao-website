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
			this.$smsGetCode = this.$smsCode.siblings("span");// 获取验证码按钮;
			this.$accountBtn = $(".account-btn");// 密码登录页面登录按钮;
			this.$accountBtn.on("click",$.proxy(this.pwdValidate,this));
			this.$accountSmsBtn = $(".account-sms-btn");
			this.$accountSmsBtn.on("click",$.proxy(this.smsValidate,this));
			this.pass1 = "";
			this.pass2 = "";
			this.pass3 = "";
			this.pass4 = "";
			this.$smsPhoneNumber = $(".sms-phone-number");// 短信登录页面手机号码输入框;
			/* 密码登录页面手机号码输入框 获焦失焦事件 */
			this.$userNameInput.focus($.proxy(this.delStyle));
			this.$userNameInput.blur($.proxy(this.loginUserName,this));
			/* 密码登录页面密码输入框 获焦失焦事件 */
			this.$passwordInput.focus($.proxy(this.delStyle));
			this.$passwordInput.blur($.proxy(this.loginPassword,this));
			/* 自动登录事件 */
			this.$loginAuto.on("click",$.proxy(this.automatic));
			/* 短信登录页面手机号码输入框 获焦失焦事件 */
			this.$smsPhoneNumber.focus($.proxy(this.delStyle));
			this.$smsPhoneNumber.blur($.proxy(this.loginPhone,this));
			/* 短信验证码输入框 获焦失焦事件 */
			this.$smsCode.focus($.proxy(this.deleteStyle));
			this.$smsCode.blur($.proxy(this.loginCode,this));
			/* 获取验证码事件 */
			this.$smsGetCode.on("click",$.proxy(this.getCode,this));

		}
		/* 跳转到注册页面 */
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
			var value = this.$userNameInput[0].value;
			var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if(reg.test(value)){
				this.pass1 = true;
			}else if(value == ""){
				this.$userNameInput.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入手机号");
				this.pass1 = false;
			}else{
				this.$userNameInput.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("账号格式错误，请重新输入");
				this.pass1 = false;
			}
		}
		/* 登录密码验证 */
		loginPassword(){
			var value = this.$passwordInput[0].value;
			var reg = /^[a-zA-Z0-9]{6,10}$/;
			if(reg.test(value)){
				this.pass2 = true;
			}else if(value == ""){
				this.$passwordInput.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入登录密码");
				this.pass2 = false;
			}else{
				this.$passwordInput.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("登录密码格式错误");
				this.pass2 = false;
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
			var value = this.$smsPhoneNumber[0].value;
			var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if(reg.test(value)){
				this.pass3 = true;
			}else if(value == ""){
				this.$smsPhoneNumber.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入手机号");
				this.pass3 = false;
			}else{
				this.$smsPhoneNumber.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("账号格式错误，请重新输入");
				this.pass3 = false;
			}
		}
		/* 短信验证码验证 */
		loginCode(){
			var value = this.$smsCode[0].value;
			var reg = /^[0-9]{6}$/;
			if(reg.test(value)){
				this.pass4 = true;
			}else if(value == ""){
				this.pass4 = false;
			}else{
				this.$smsCode.addClass("input-error")
				.siblings().eq(1).css({
					display:"block"
				}).html("短信验证码格式错误");
				this.pass4 = false;
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
		/* 获取验证码 */
		getCode(){
			var count = 25;
			var timer = null;
			var _this = this;
			timer = setInterval(function(){
				if(count == 0){
					clearTimeout(timer);
					_this.$smsGetCode.css({
						background:"rgb(114,74,136)"
					}).html("获取验证码");
					_this.$smsGetCode.siblings("i").html("验证码已发出，请在10分钟内完成输入。");
					count = 25;
					return;
				}else{
					_this.$smsGetCode.css({
						background:"rgb(213,205,218)"
					}).html("重新发送（" + count + "s）");
					_this.$smsGetCode.siblings("i").html("验证码已发出，请在10分钟内完成输入。");
					count--;
				}
			},1000)
		}
		pwdValidate(){
			if(this.pass1 && this.pass2){
				$.cookie("user",this.$userNameInput[0].value/*'[{"id":' + this.$userNameInput[0].value + ', "password":' + this.$passwordInput[0].value + '}]'*/,{expires:7,path:'/'});
				window.location.href = "../index.html";
			}
		}
		smsValidate(){
			if(this.pass3 && this.pass4){
				$.cookie("user",this.$smsPhoneNumber[0].value/*'[{"id":' + this.$smsPhoneNumber[0].value + ', "password":' + this.$passwordInput[0].value + '}]'*/,{expires:7,path:'/'});
				window.location.href = "../index.html";
			}
		}
	}
	return new login();
})