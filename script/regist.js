/* 注册页面表单验证部分 */
define(["jquery"],function($){
	class regist{
		constructor(){
			this.init();
		}
		init(){
			this.flag1 = "";
			this.flag2 = "";
			this.flag3 = "";
			this.flag4 = "";
			this.flag5 = "";
			this.$accountLogin = $(".account-login");// 登录按钮;
			this.$accountLogin.on("click",$.proxy(this.loginJump,this));
			this.$userName = $("#userName");// 手机号输入框;
			/* 手机号输入框 获焦失焦事件 */
			this.$userName.focus($.proxy(this.delClass));
			this.$userName.blur($.proxy(this.registUN,this));
			this.$phoneCode = $("#phoneCode");// 手机验证码输入框;
			/* 手机验证码输入框 获焦失焦事件 */
			this.$phoneCode.focus($.proxy(this.deleteClass));
			this.$phoneCode.blur($.proxy(this.registPC,this));
			this.$regsitCode = this.$phoneCode.siblings("span");// 获取验证码按钮;
			this.$imgCode = $(".account-imgCode");// 图片验证;
			this.$regsitCode.on("click",$.proxy(this.imgCode,this));
			// this.$regsitCode.on("click",$.proxy(this.getVerifyingCode,this));
			this.$password = $("#password");// 登录密码输入框;
			/* 登录密码输入框 获焦失焦事件 */
			this.$password.focus($.proxy(this.delClass));
			this.$password.blur($.proxy(this.password,this));
			this.$repeatPassword = $("#repeatPassword");// 重新输入密码框;
			/* 重新输入密码框 获焦失焦事件 */
			this.$repeatPassword.focus($.proxy(this.delClass));
			this.$repeatPassword.blur($.proxy(this.repeatPassword,this));
			this.$registAgree = $(".regist-agree");// 协议选框;
			this.$registAgree.on("click",$.proxy(this.agree,this));
			this.$registBtn = $(".account-btn");// 注册按钮;
			this.$registBtn.on("click",$.proxy(this.validate,this));
		}
		/* 跳转到登录页面 */
		loginJump(){
			window.location.href = "login.html";
		}
		/* 输入手机号码 */
		registUN(){
			var value = this.$userName[0].value;
			var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
			if(reg.test(value)){
				this.flag1 = true;
			}else if(value == ""){
				this.$userName.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入手机号");
				this.flag1 = false;
			}else{
				this.$userName.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("手机号格式错误");
				this.flag1 = false;
			}
		}
		/* 输入手机验证码 */
		registPC(){
			var value = this.$phoneCode[0].value;
			var reg = /^[0-9]{6}$/;
			if(reg.test(value)){
				this.flag2 = true;
			}else if(value == ""){
				this.$phoneCode.addClass("input-error")
				.siblings().eq(1).css({
					display:"block"
				}).html("请输入短信验证码");
				this.flag2 = false;
			}else{
				this.$phoneCode.addClass("input-error")
				.siblings().eq(1).css({
					display:"block"
				}).html("手机验证码格式错误");
				this.flag2 = false;
			}
		}
		/* 图片验证 */
		imgCode(){
			this.$imgCode.css({
				display:"block"
			});
			this.$imgCode.find("img").attr("src","http://www.zhiwo.com/verifycode?");
			this.$imgCode.find("span").on("click",function(){
				$(this).siblings("img").attr("src","http://www.zhiwo.com/verifycode?" + new Date().getTime())
			})
			this.$imgCode.find("input").focus(function(){
				$(this).removeClass("input-error")
				.siblings("i").css({
					display:"none"
				});
			});
			var _this = this;
			this.$imgCode.find("input").blur(function(){
				var value = this.value;
				var reg = /^[0-9a-zA-Z]{4}$/;
				if(reg.test(value)){
					_this.$regsitCode.on("click",$.proxy(_this.getVerifyingCode,_this));
				}else if(value = ""){
					$(this).addClass("input-error")
					.siblings("i").css({
						display:"block"
					}).html("图片验证码格式错误");
				}else{
					$(this).addClass("input-error")
					.siblings("i").css({
						display:"block"
					}).html("请先输入图片验证码");
				}
			});
		}
		/* 获取验证码 */
		getVerifyingCode(){
			this.$imgCode.css({
				display:"none"
			});
			var count = 30;
			var timer = null;
			var _this = this;
			timer = setInterval(function(){
				if(count == 0){
					clearTimeout(timer);
					_this.$regsitCode.css({
						background:"rgb(114,74,136)"
					}).html("获取验证码");
					_this.$userName.siblings("i").html("验证码已发出，请在10分钟内完成输入。");
					count = 25;
					return;
				}else{
					_this.$regsitCode.css({
						background:"rgb(213,205,218)"
					}).html("重新发送（" + count + "s）");
					_this.$userName.siblings("i").html("验证码已发出，请在10分钟内完成输入。");
					count--;
				}
			},1000)
		}
		/* 输入登录密码 */
		password(){
			var value = this.$password[0].value;
			var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![^0-9a-zA-Z]+$).{6,32}$/;
			if(reg.test(value)){
				this.flag3 = true;
			}else if(value == ""){
				this.$password.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入登录密码");
				this.flag3 = false;
			}else{
				this.$password.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请输入6-32位字符，需字母数字符号两种以上组合");
				this.flag3 = false;
			}
		}
		/* 再次输入登录密码 */
		repeatPassword(){
			var password = this.$password[0].value;
			var repeatPassword = this.$repeatPassword[0].value;
			if(repeatPassword == ""){
				this.$repeatPassword.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("请再次输入登录密码");
				this.flag4 = false;
			}else if(!(repeatPassword == password)){
				this.$repeatPassword.addClass("input-error")
				.siblings().css({
					display:"block"
				}).html("两次密码不一致，请重新输入");
				this.flag4 = false;
			}else{
				this.flag4 = true;
			}
		}
		/* 是否同意服务协议 */
		agree(){
			this.$registAgree.find("b").toggleClass("regist-yes");
		}
		/* 注册验证 */
		validate(){
			if(this.$registAgree.find("b").hasClass("regist-yes")){
				$(".account-prompt").html("");
				this.flag5 = true;
				if(this.flag1 && this.flag2 && this.flag3 && this.flag4 && this.flag5){
					$.cookie("user",this.$userName[0].value/*'[{"id":' + this.$userNameInput[0].value + ', "password":' + this.$passwordInput[0].value + '}]'*/,{expires:7,path:'/'});
					window.location.href = "../index.html";
				}
			}else{
				$(".account-prompt").html("请同意必要服务协议");
				this.flag5 = false;
			}	
		}
		/* 删除样式 */
		delClass(){
			$(this).removeClass("input-error")
			.siblings().eq(0).css({
				display:"none"
			});
		}
		deleteClass(){
			$(this).removeClass("input-error")
			.siblings().eq(1).css({
				display:"none"
			});
		}
	}
	return new regist();
})