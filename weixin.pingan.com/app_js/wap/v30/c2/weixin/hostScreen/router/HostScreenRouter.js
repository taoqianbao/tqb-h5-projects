
define([
    'jquery',
    'underscore',
    'backbone',
    'view/IndexView',
    'logger'
], function ($, _, Backbone,IndexView,logger) {
    var Router = Backbone.Router.extend({
        routes:{   //指定url路由
            "": "handelIndex",
            "index": "handelIndex",
            "czjf":"doCZJF",
            "bill":"bill",
            "byStages":"byStages",
            "payment":"payment",
            "account":"account",
            "requital":"requital",
            "manage":"manage",
            "error":"toError"
        },
        initialize: function() {

        },

        handelIndex:function(){
            var self = this;
            self.oldView = self.currentView;
            self.currentView = new IndexView({router: self});
            self.destroyView();
        },

        doCZJF:function(){
            var self=this;
            require(["view/CzjfView"],function(CzjfView){
                self.oldView = self.currentView;
                self.currentView = new CzjfView({router: self});
                self.destroyView();
            });
        },
        manage:function(){
            var self=this;
            require(["view/ManageView"],function(ManageView){
                self.oldView = self.currentView;
                self.currentView = new ManageView({router: self});
                self.destroyView();
            });
        },
        requital:function(){
            var self=this;
            require(["view/RequitalView"],function(RequitalView){
                self.oldView = self.currentView;
                self.currentView = new RequitalView({router: self});
                self.destroyView();
            });
        },
        
        bill:function(){
            var self=this;
            require(["view/BillView"],function(BillView){
                self.oldView = self.currentView;
                self.currentView = new BillView({router: self});
                self.destroyView();
            });
        },

        byStages:function(){
            var self=this;
            require(["view/ByStagesView"],function(ByStagesView){
                self.oldView = self.currentView;
                self.currentView = new ByStagesView({router: self});
                self.destroyView();
            });
        },

        payment:function(){
            var self=this;
            require(["view/PaymentView"],function(PaymentView){
                self.oldView = self.currentView;
                self.currentView = new PaymentView({router: self});
                self.destroyView();
            });
        },

        account:function(){
            var self=this;
            require(["view/AccountView"],function(AccountView){
                self.oldView = self.currentView;
                self.currentView = new AccountView({router: self});
                self.destroyView();
            });
        },
        
        toError:function(){
            var self=this;
            logger.i("error...");
            require(["view/ErrorView"],function(ErrorView){
                self.oldView = self.currentView;
                self.currentView = new ErrorView({router: self});
                self.destroyView();
            });
        },

        destroyView: function() {
            if(this.oldView) {
                this.oldView.destroy();
                this.oldView = null;
            }
        }
    });
    return Router;
});
