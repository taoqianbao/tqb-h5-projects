
/** 
 * 校验密码格式 
 *  
 * @param str 
 * @returns 
 */  
function checkPassword(str){
		var reg = /^[0-9a-zA-Z]{6,16}$/;
		if(!reg.test(str)){
    		return false; 
		}else{
			return true;							
		}
};


/** 
 * 去掉字符串前后空格 
 *  
 * @param str 
 * @returns 
 */  
function trim(str){     
    return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');     
}   
  
/** 
 * 清空select 
 *  
 * @param selectObj 
 * @return 
 */  
function clearOption(selectObj){  
    for(var i = 0,len = selectObj.options.length; i < len; i++){  
        selectObj.options[0] = null;  
    }  
}  
  
/** 
 * 验证手机号 
 *  
 * @param value 
 * @return 
 */  
function isMobel(value)  
{  
    if(/^13\d{9}$/g.test(value)||(/^14[0-9]\d{8}$/g.test(value))||(/^15[0-9]\d{8}$/g.test(value))|| (/^18[0-9]\d{8}$/g.test(value))|| (/^17[0-9]\d{8}$/g.test(value)))  
    {return true; }  
    else  
    {return false;}  
}  
  
/** 
 * 转换为int型数字 
 *  
 * @param va 
 * @returns 
 */  
function string2Int(va){  
    if(isNaN(va)){  
        return 0;  
    }else{  
        return parseInt(va);  
    }  
}  
  
/** 
 * 获取checkbox选中的值 
 * @param checkName 
 * @returns {String} 
 */  
function getCheckBoxValue(checkName){  
    var obj = document.getElementsByName(checkName);  
    var checkValue = "";  
    if(obj){  
        for(var i=0;i<obj.length;i++){  
            if(obj[i].checked){  
                if(checkValue!=""){  
                    checkValue+=",";  
                }  
                checkValue+=obj[i].value;  
            }  
        }  
    }  
    return checkValue;  
}  
  
//去掉左边的空白    
function trimLeft(s){    
    if(s == null) {    
    return "";    
    }    
    var whitespace = new String(" \t\n\r");    
    var str = new String(s);    
    if (whitespace.indexOf(str.charAt(0)) != -1) {    
        var j=0, i = str.length;    
        while (j < i && whitespace.indexOf(str.charAt(j)) != -1){    
            j++;    
        }    
    str = str.substring(j, i);    
    }    
    return str;    
}    
//去掉右边的空白    
function trimRight(s){    
    if(s == null) return "";    
    var whitespace = new String(" \t\n\r");    
    var str = new String(s);    
    if (whitespace.indexOf(str.charAt(str.length-1)) != -1){    
        var i = str.length - 1;    
        while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1){    
        i--;    
        }    
    str = str.substring(0, i+1);    
    }    
    return str;    
}  


//是否为空
function isEmpty(str){
	var whitespace = " \t\n\r";
	var i;
	if((str == null) || (str.length == 0))
	return true;
	for(i = 0; i < str.length; i++){
		var c = str.charAt(i);
		if(whitespace.indexOf(c) == -1)
			return false;
	}
	return true;
}

//合法Email地址
function isEmail(str){
	var isEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if(isEmail.test(str)){
		return true;
	}
	return false;
}

//固定电话
function isPhone(str){
	var isPhone = /^0(((\d{2,3})-(\d){7,8})|(\d{2,3}(\d){7,8}))$/;
	if(isPhone.test(str)){
		return true;
	}
	return false;
}

//身份证号
function isIdCard(str){
	var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[A-Za-z0-9]{1}$/;
	if(isIDCard1.test(str)||isIDCard2.test(str)){
		return true;
	}
	return false;
}

//移动电话
function isMobile(str){
	var isMobile =  /^1[3|4|5|8][0-9]\d{4,8}$/;
	if(isMobile.test(str)){
		return true;
	}
	return false;
}


//中文名字
function isName(str){
	var isName = /^([A-Za-z\u0391-\uFFE5]){2,20}$/;
	if(isName.test(str)){
		return true;
	}
	return false;
}


//合法昵称
function isStandard(str){
	var isStandard = /^([\u4e00-\u9fa5A-Za-z0-9]){1,12}$/;
	if(isStandard.test(str)){
		return true;
	}
	return false;
}


//是否为邮编
function isPostCode(str){  
    var reg = /^[1-9]\d{5}$/;
    if (reg.test(str)){
    	return true; 
    }
    return false;  
}  

function isNumber( s )
{
    var regu = "^[0-9]+$";
    var re = new RegExp(regu);
    if (s.search(re) != - 1) {
        return true;
    }
    else {
        return false;
    }
};



