/* 购物车部分 */
define(["jquery"],function($){
	class shopcars{
		constructor(){
			this.init();
		}
		init(){
			this.loading();
			this.priceAll = $(".priceDisplay").html();
			$('[name="chkAll"]').click($.proxy(this.checkAll,this));
			$('[name="chk-Supplier"]').click($.proxy(this.sellerAll));
			$('.chk-Calc').click($.proxy(this.goodsAll));
			$(".minus").click($.proxy(this.minus));
			$(".plus").click($.proxy(this.plus));
			$(".a-delete").click($.proxy(this.deleteLink));
			$("#a-BatchDel").click($.proxy(this.aBatchDel));
		}
		/* 初始显示加载 */
		loading(){
			try{
				var goods = JSON.parse($.cookie("goods"));
			}catch(e){

			}
			var _this = this;
			var totalNum = 0;
			$(goods).each(function(index,item){
				_this.$shoppingBox = $("<div></div");
				_this.$shoppingBox.addClass("shoppingBox");
				$(".firmbox").before(_this.$shoppingBox);
				totalNum += Number(item.num);
				var html =  '<div class="order-title divdel" name="divTitle-'+item.supplierID+'" supplierid="'+item.supplierID+'">'+
								'<label class="inline col-666 checkbox checked check" name="chk-Supplier" data-value="'+item.supplierID+'">'+
									'<i class="openIcon inline mg-r10"></i>'+
								'</label>'+
								'<a>'+
									'<span class="inline">商家：</span>'+
									'<span id="J-product-name" class="inline col-666">'+item.seller+'</span>'+
								'</a>'+
							'</div>'+
							'<table class="sop-table1 lastTh tabledel bg-fff" cellpadding="0" cellspacing="0">'+
								'<tbody>'+
									'<tr>'+
										'<td width="30px" align="left" class="pd-l10">'+
											'<label class="checkbox chk-Calc checked check" name="chk-'+item.supplierID+'" supplierid="'+item.supplierID+'" data-value="2512126" data-design="'+item.id+'" data-num="2">'+
												'<i class="openIcon inline"></i>'+
											'</label>'+
										'</td>'+
										'<td width="130" align="left">'+
											'<span class="sop-img inline">'+
												'<a href="/products/'+item.id+'.html" target="_blank">'+
													'<img src="'+item.imgSrc+'" width="100" height="100">'+
												'</a>'+
											'</span>'+
										'</td>'+
										'<td align="left">'+
											'<a href="/products/'+item.id+'.html">'+
												'<span class="col-523">'+item.goodsName+'</span>'+
											'</a>'+
											'<br>'+
											'<div class="col-999 mg-t5 w300 escp" style="line-height: 20px;">'+item.color+'<br>'+item.size+'</div>'+
										'</td>'+
										'<td width="10%" align="center" class="ff6600 unitPrice">¥<em>'+item.price+'</em></td>'+
										'<td width="10%" align="center" class="sizeZero">'+
											'<i class="sign minus inline"></i>'+
											'<input type="text" name="quantity" maxlength="3" value="'+item.num+'" shopcarid="2512126" discount="0.0" price="'+item.price+'" num="'+item.num+'" packageprice="0.0" modelid="0" supplierid="'+item.supplierID+'" designid="'+item.id+'" sizename="'+item.color+'|'+item.size+'" class="inpCom w40 inline t-c">'+
											'<i class="sign plus inline"></i>'+
											'<p class="col-b76 mg-t5"></p>'+
										'</td>'+
										'<td width="20%" align="center" class="col-666 none">'+
											'<span class="span-package-type">普通包装</span>'+
											'<span class="span-package-price pack-selects">(免费)</span>'+
										'</td>'+
										'<td width="10%" align="center" class="subtotal">'+
											'<strong class="ff6600">¥<em>'+(item.num * item.price)+'</em></strong>'+
										'</td>'+
										'<td width="5%" align="center">'+
											'<a href="javascript:void(0);" class="link-09c a-delete" id="deleteLink" data="2512126" designid="'+item.id+'"></a>'+
										'</td>'+
									'</tr>'+
								'</tbody>'+
							'</table>';
				$.each(_this.$shoppingBox,function(index,item){
					$(item).html(html);
				});
				return totalNum;
			})
			$("#totalNum").html(totalNum);
			var totalPrice = 0;
			$(".subtotal em").each(function(index,item){
				totalPrice += Number($(item).html());
				return totalPrice;
			});
			$("#totalPrice").html("¥"+totalPrice);
			$(".priceDisplay").html("¥ "+totalPrice);
		}
		/* 全选 */
		checkAll(){
			$('[name="chkAll"]').toggleClass("checked");
			$(".checkbox").each(function(index,item){
				if($('[name="chkAll"]').hasClass("checked")){
					$(item).addClass('checked');
				}else{
					$(item).removeClass('checked');
				}
			})
			var totalPrice = 0;
			$('.chk-Calc').each(function(index,item){
				if($(item).hasClass('checked')){
					totalPrice += Number($(item).parent().siblings('.subtotal').find('em').html());
				}
				return totalPrice;
			});
			$("#totalPrice").html("¥"+totalPrice);
			$(".priceDisplay").html("¥ "+totalPrice);
		}
		/* 商家全选 */
		sellerAll(){
			$(this).toggleClass("checked");
			if($(this).hasClass("checked")){
				$('[name="chk-'+$(this).attr("data-value")+'"]').addClass("checked");
			}else{
				$('[name="chk-'+$(this).attr("data-value")+'"]').removeClass("checked");
			}
			$(".check").each(function(index,item){
				if(!$(item).hasClass("checked")){
					$('[name="chkAll"]').removeClass("checked");
					return false;
				}else if($(item).hasClass("checked")){
					$('[name="chkAll"]').addClass("checked");
				}
			});
			var totalPrice = 0;
			$('.chk-Calc').each(function(index,item){
				if($(item).hasClass('checked')){
					totalPrice += Number($(item).parent().siblings('.subtotal').find('em').html());
				}
				return totalPrice;
			});
			$("#totalPrice").html("¥"+totalPrice);
			$(".priceDisplay").html("¥ "+totalPrice);
		}
		/* 商品选择 */
		goodsAll(){
			$(this).toggleClass("checked");
			$('[name="chk-'+$(this).attr("supplierid")+'"]').each(function(index,item){
				if(!$(item).hasClass("checked")){
					$('[data-value="'+$(this).attr("supplierid")+'"]').removeClass("checked");
					return false;
				}else if($(item).hasClass("checked")){
					$('[data-value="'+$(this).attr("supplierid")+'"]').addClass("checked");
				}
			});
			$('.check').each(function(index,item){
				if(!$(item).hasClass("checked")){
					$('[name="chkAll"]').removeClass("checked");
					return false;
				}else if($(item).hasClass("checked")){
					$('[name="chkAll"]').addClass("checked");
				}
			});
			var totalPrice = 0;
			$('.chk-Calc').each(function(index,item){
				if($(item).hasClass('checked')){
					totalPrice += Number($(item).parent().siblings('.subtotal').find('em').html());
				}
				return totalPrice;
			});
			$("#totalPrice").html("¥"+totalPrice);
			$(".priceDisplay").html("¥ "+totalPrice);
		}
		/* 减少商品数量 */
		minus(){
			var Num = Number($(this).siblings('input').attr("value"));
			var unitPrice = Number($(this).parent().siblings(".unitPrice").find("em").html());
			var subtotal = Number($(this).parent().siblings(".subtotal").find("em").html());
			if(Num > 1){
				--Num;
			}
			subtotal = Num * unitPrice;
			$(this).siblings('input').attr("value",Num);
			$(this).parent().siblings(".subtotal").find("em").html(subtotal);
			var totalNum = 0;
			$(".minus").siblings('input').each(function(index,item){
				totalNum += Number($(item).attr("value"));
				return totalNum;
			});
			$("#totalNum").html(totalNum);
			$("#shopCar").html(totalNum);
			var aCookie = JSON.parse($.cookie("goods"));
			var flag = false;
			this.index = "";
			var _this = this;
			aCookie.forEach(function(item,index){
				if(Number(item.id) == Number($(_this).siblings('input').attr("designid"))){
					flag = true;
					_this.index = index;
					return _this.index;
				}
			});
			if(flag){
				var oldNum = aCookie[this.index].num;
				aCookie[this.index].num = Num;
			}
			$.cookie("goods",JSON.stringify(aCookie),{expires:7,path:'/'});
			var totalPrice = 0;
			$(".subtotal em").each(function(index,item){
				totalPrice += Number($(item).html());
				return totalPrice;
			});
			$("#totalPrice").html("¥"+totalPrice);
			$(".priceDisplay").html("¥ "+totalPrice);
		}
		/* 增加商品数量 */
		plus(){
			var Num = Number($(this).siblings('input').attr("value"));
			var unitPrice = Number($(this).parent().siblings(".unitPrice").find("em").html());
			var subtotal = Number($(this).parent().siblings(".subtotal").find("em").html());
			++Num;
			subtotal = Num * unitPrice;
			$(this).siblings('input').attr("value",Num);
			$(this).parent().siblings(".subtotal").find("em").html(subtotal);
			var totalNum = 0;
			$(".minus").siblings('input').each(function(index,item){
				totalNum += Number($(item).attr("value"));
				return totalNum;
			});
			$("#totalNum").html(totalNum);
			$("#shopCar").html(totalNum);
			var aCookie = JSON.parse($.cookie("goods"));
			var flag = false;
			this.index = "";
			var _this = this;
			aCookie.forEach(function(item,index){
				if(Number(item.id) == Number($(_this).siblings('input').attr("designid"))){
					flag = true;
					_this.index = index;
					return _this.index;
				}
			});
			if(flag){
				var oldNum = aCookie[this.index].num;
				aCookie[this.index].num = Num;
			}
			$.cookie("goods",JSON.stringify(aCookie),{expires:7,path:'/'});
			var totalPrice = 0;
			$(".subtotal em").each(function(index,item){
				totalPrice += Number($(item).html());
				return totalPrice;
			});
			$("#totalPrice").html("¥"+totalPrice);
			$(".priceDisplay").html("¥ "+totalPrice);
		}
		/* 删除所有商品 */
		aBatchDel(){
			$.cookie("goods",null,{expires:-1,path:'/'});
			window.location.reload();
		}
		/* 删除商品 */
		// deleteLink(){
		// 	
		// }
	}
	return new shopcars();
})