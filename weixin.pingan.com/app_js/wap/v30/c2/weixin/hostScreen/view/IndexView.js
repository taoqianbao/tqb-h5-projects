define([
    'jquery',
    'underscore',
    'backbone',
    'model/IndexModel',
    'text!partials/loginscards.html',
    'logger'
], function ($, _, Backbone, IndexModel, partial,logger) {
    return Backbone.View.extend({
        tagName: "div", //若指定tagName则不需要指定el和$el，视图将在初始化之前自动生成
        _template: _.template(partial), //初始化模板渲染器，非必须
        events: {//此处添加事件绑定
             "click #bill":"bill",
             "click #byStages":"byStages",
             "click #payment":"payment",
             "click #account":"account",
             "click #requital":"requital",
             "click #czjf":"czjf",
             "click #manage":"manage"
        },
        initialize: function () {
            var self = this;
            self.router = self.options['router'];
            if(!self.model) {
                self.model = new IndexModel();
            }
        	var par = window.location.search.replace(/amp;/g,"");
            var cid = "";
            if(par){
             if(par.indexOf("?")!=-1){
                var str = par.substr(1);     
                var strs = str.split("&");
                for(var i=0;i<strs.length;i++){        
                  if(strs[i].split("=")[0] == "cid"){
                  	cid = strs[i].split("=")[1];
                  } 
               }
             }
            }
            window.cid=cid;
            if(window.cid=="undefined"){
            	window.cid="";
            }
            
            var userAgentInfo = navigator.userAgent;  
            var Agents = new Array("iPhone", "Windows Phone", "iPad", "iPod");  
            var v=0;
            var flag = false;
            for (v = 0; v < Agents.length; v++) 
        	{  
                 if (userAgentInfo.indexOf(Agents[v]) > 0) { 
                	 flag = true; 
                	 break; 
                 }  
            }
            self.render();
            if(flag){
            	$("#xs").show();
            }
          
        },

        bill:function(){//我的账单
        	location.hash = "bill";
        },
        byStages:function(){//分期业务
        	location.hash = "byStages";
        },
        payment:function(){//网上支付
        	location.hash = "payment";
        },
        account:function(){//我的账户
        	location.hash = "account";
        },
        requital:function(){//我要还款
        	location.hash = "requital";
        },
        czjf:function(){//充值缴费
        	location.hash = "czjf";
        },
        manage:function(){//卡片管理
        	location.hash = "manage";
        },

        render: function () {
            window.$("body").html(this.el);
            this.$el.html(this._template());

        },
        destroy: function () {
            this.undelegateEvents();
            this.remove();
        }


    });
});