require.config({
    shim: {
        'underscore': {
            deps: [
                'json'
            ],
            exports:'_'
        },
        'backbone':{
            deps: [
                'paui',
                'underscore'
            ],
            exports:'Backbone'
        },
        'jquery': {
            exports:'$'
        },
        'paui': {
            deps: ['jquery']
        }
    },
    paths : {
    	jquery: '/app_js/wap/v30/c2/weixin/js_lib/jquery/jquery-1.9.1.min',
    	paui: 'https://pa-ssl.pingan.com/app_js/paui/1.0.3/build/pa.ui.min',
        //zepto: '../../lib/zepto/zepto-0.6',
        json: '/app_js/wap/v30/c2/weixin/js_lib/json-js/json2',
        underscore : '/app_js/wap/v30/c2/weixin/js_lib/underscore/underscore-min',
        text : '/app_js/wap/v30/c2/weixin/js_lib/require/text',
        backbone : '/app_js/wap/v30/c2/weixin/js_lib/backbone/backbone',
        logger: '/app_js/wap/v30/c2/weixin/js_lib/tools/logger',
        partials: '/weixin/modules/hostScreen/partials',                         //模板根目录
        jquerymin:'/app_js/wap/v30/c2/weixin/js_lib/jquery/jquery-1.8.2.min',
        unionrsa:'/app_js/wap/v30/c2/weixin/js_lib/tools/unionrsa'
    }
});
require([
    'logger',
    'app'
], function(logger,app) {
    logger.i("日志处理器开始初始化开始......");
    logger.setCnf({
        level: logger.DEBUG,        //日志级别
        moduleName: '微信-HTML5页面优化-主页',
        maxLogCache: 1000,          //当日志堆栈中有1000条日志的时候就记录日志
        logServer: 'http://hsz-9413/logger'//, //日志服务器
        //loggerExp: []
    });
    logger.i("日志处理器开始初始化完毕。");
    logger.i(logger.moduleName + "模块初始化开始......");
    app.initialize();
    logger.i(logger.moduleName +  "模块初始化完毕！");
});
