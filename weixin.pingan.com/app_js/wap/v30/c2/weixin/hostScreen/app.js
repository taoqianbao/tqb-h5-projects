define([
    'jquery',
    'underscore',
    'backbone',
    'logger',
    'router/HostScreenRouter'
], function ($, _, Backbone, logger, hostScreenRouter) {
    return {
        initialize: function () {
            //初始化控件库的配置
            // window.$.paui.config({combo:false,comboVersion:'1.0.3',comboBase:'http://script1.pingan.com/paui/min.jsp'});
            //初始化router
            var homeRouter = new hostScreenRouter();
            Backbone.history.start({pushState: false});
        }
    }
});
