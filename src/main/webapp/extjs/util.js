function getRelativePath()

{

    var strLocation = window.location.pathname;

    var uri = strLocation.substring(0, strLocation.lastIndexOf("/") + 1);

    return uri;

}

function isInteger(string, sign)

{

    var integer;

    if ((sign != null) && (sign != '-') && (sign != '+'))

    {

        alert('IsInter(string,sign)的参数出错： sign为null或"-"或"+"');

        return false;

    }

    integer = parseInt(string);

    if (isNaN(integer))

    {

        return false;

    }

    else if (integer.toString().length == string.length)

    {

        if ((sign == null) || (sign == '-' && integer < 0) || (sign == '+' && integer > 0))

        {

            return true;

        }

        else

            return false;

    }

    else

        return false;

}


function searchparams()

{

    if (((document.all.searchSpareSign.value == "按缴费日期查询") ||

         (document.all.searchSpareSign.value == "按生效日期查询") ||

         (document.all.searchSpareSign.value == "按失效日期查询")) && ((document.all.table1.style.display = "none" ) && (document.all.table2.style.display = "none")))

        document.all.table1.style.display = "";

    else

        ((document.all.table1.style.display = "none") && (document.all.table2.style.display = "" ))


}

function allhospital()

{

    if (document.all.table1.style.display == "none")

        document.all.table1.style.display = "";

    else

        document.all.table1.style.display = "none";

}

function prescriptionParams()

{

    if ((document.all.searchSpareSign.value == "按处方日期查询") && (document.all.table1.style.display = "none" ) && (document.all.table2.style.display = "none" ))



        document.all.table1.style.display = "";

    else  if (document.all.searchSpareSign.value == "按医院名称查询")

        ((document.all.table1.style.display = "") && (document.all.table2.style.display = "" ));

    else

        ((document.all.table1.style.display = "none") && (document.all.table2.style.display = "" ));


}

function payok()

{

    document.all.needPay.value = "ok";

}

function notpay()

{

    document.all.needPay.value = "no";

}
// add by  zhaohu  
function displayGettingData()
{
    document.all.gettingData.style.display = "";
}
function hideGettingData()
{
    document.all.gettingData.style.display = "none";
}
//选择可变参数
function allInsuranceParamsListForChoose()
{
    displayGettingData();
    var paramsInformation = window.showModalDialog('../settings/insuranceParamsListForChoose.smis?paramersSort=' + '1', "", "dialogHeight:700px;dialogWidth:700px");
    hideGettingData();
    if (paramsInformation != null)

    {
        document.all.paramersName.value = paramsInformation[paramsInformation.length - 3];
        document.all.paramersUnit.value = paramsInformation[paramsInformation.length - 2];
        document.all.paramersAttributeName.value = paramsInformation[paramsInformation.length - 1];
        document.all.publicParamsId.value = paramsInformation[paramsInformation.length - 4];
        document.all.paramersAttribute.value = paramsInformation[paramsInformation.length - 5];
    }
}
//选择固定参数
function allInsuranceParamsInvariableListForChoose()
{
    displayGettingData();
    var paramsInformation = window.showModalDialog('../settings/insuranceParamsInvariableListForChoose.smis?paramersSort=' + '0', "", "dialogHeight:700px;dialogWidth:700px");
    hideGettingData();
    if (paramsInformation != null)

    {
        document.all.paramersName.value = paramsInformation[paramsInformation.length - 2];
        document.all.paramersUnit.value = paramsInformation[paramsInformation.length - 1];
        document.all.publicParamsId.value = paramsInformation[paramsInformation.length - 3];

    }
}
function hospitalListForChoose()
{

    var paramsInformation = window.showModalDialog('../operation/hospitalListForChoosing.jsp', "", "dialogHeight:600px;dialogWidth:700px");

    if (paramsInformation != null)

    {
        document.all.hospitalName.value = paramsInformation[paramsInformation.length - 1];
        document.all.hospitalNumber.value = paramsInformation[paramsInformation.length - 2];

    }
}
function hospitalListForChooseToSeach()
{

    var paramsInformation = window.showModalDialog('../operation/hospitalListForChoosing.jsp', "", "dialogHeight:600px;dialogWidth:700px");

    if (paramsInformation != null)

    {
        document.all.searchValue.value = paramsInformation[paramsInformation.length - 1];
        document.all.hospitalNumber.value = paramsInformation[paramsInformation.length - 2];

    }
}
function isCheck(tableObj) {
    var isCheck = false;
    for (i = 1; i < tableObj.rows.length; i++) {
        var oneTd = tableObj.rows[i].cells[1].childNodes[0];
        if (oneTd.checked)
            isCheck = true;
    }
    ;
    return isCheck;
}

//带参数的列表验证框
function isCheckParams(tableObj, row, tier) {
    var isCheck = false;
    for (i = row; i < tableObj.rows.length; i++) {
        var oneTd = tableObj.rows[i].cells[tier].childNodes[0];
        if (oneTd.checked)
            isCheck = true;
    }
    ;
    return isCheck;
}

//医疗目录带参数的列表验证框
function isCheckParams(tableObj, row, tier) {
    var isCheck = false;
    for (i = row; i < tableObj.rows.length; i++) {
        var oneTd = tableObj.rows[i].cells[tier].childNodes[0];
        var oneTd1 = tableObj.rows[i].cells[tier+1].childNodes[0];
        if (oneTd.checked ||oneTd1.checked )
            isCheck = true;
    }
    ;
    return isCheck;
}


function checknum(num)
{
    if (isNaN(num) && num != '-') {
        alert('请输入数字！');
        return '';
    }
    return num;
}
//身份证号有效性验证 此处只对格式进行了验证 
//在后续改进中可以对有效性进行验证
function checkIdentitycardNumber(str) {
    var returnStr = checkIdcard(str);
    if (returnStr == '验证通过!') {
        return true;
    } else {
        alert(returnStr);
        return false;
    }
}
function checkIdcard(idcard) {
    var Errors = new Array(
            "验证通过!",
            "身份证号码位数不对!",
            "身份证号码出生日期超出范围或含有非法字符!",
            "身份证号码校验错误!",
            "身份证地区非法!"
            );
    var area = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}

    var idcard,Y,JYM;
    var S,M;
    var idcard_array = new Array();
    idcard_array = idcard.split("");
    //地区检验

    //身份号码位数及格式检验
    switch (idcard.length) {
        case 15:
            if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 )) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
                //测试出生日期的合法性
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
                //测试出生日期的合法性
            }
            if (ereg.test(idcard)) return Errors[0];
            else return Errors[2];
            break;
        case 18:
            if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];
            //18位身份号码检测
            //出生日期的合法性检查
            //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
            //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
            if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0 )) {
                ereg = /^[1-9][0-9]{5}19|20[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
                //闰年出生日期的合法性正则表达式
            } else {
                ereg = /^[1-9][0-9]{5}19|20[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
                //平年出生日期的合法性正则表达式
            }
            if (ereg.test(idcard)) {//测试出生日期的合法性
                //计算校验位
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                        + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                        + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                        + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                        + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                        + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                        + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                        + parseInt(idcard_array[7]) * 1
                        + parseInt(idcard_array[8]) * 6
                        + parseInt(idcard_array[9]) * 3;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y, 1);
                //判断校验位
                if (M == idcard_array[17]) return Errors[0]; //检测ID的校验位
                else return Errors[3];
            }
            else return Errors[2];
            break;
        default:
            return Errors[1];
            break;
    }

}

//电话号码验证
function checkPhone(str) {
    var reg = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}[0-9]{11}$)/

    if (!reg.test(str)) {
        alert('请输入正确的电话号码:\n'
                + '(1)电话号码由数字、"("、")"和"-"构成\n'
                + '(2)电话号码为3到8位\n'
                + '(3)如果电话号码中包含有区号，那么区号为三位或四位\n'
                + '(4)区号用"("、")"或"-"和其他部分隔开\n'
                + '(5)移动电话号码为11或12位，如果为12位,那么第一位为0\n');
        return false;
    }
    else {
        return true;
    }
}
//客户号验证
function checkPersonNum(str) {
    var reg = /^\d{4}-\d{6}-\d{8}-\d{1}$/;
    if (reg.test(str)) {
        return true;
    }
    else {
        alert('请输入正确的客户号：\n'
                + '正确的客户号由4位年份，6位机构号，8位流水号，和1位识别码，中间以\'-\'间隔\n'
                + '如2006-510600-32356789-1\n');
        return false;
    }
}
//理赔延长期
function checkLookExtend(str) {
   
    if (str>=0) {
        return true;
    }
    else {
        alert('理赔延长期不能为负！');
        return false;
    }
}
//email验证
function checkEmail(str) {
    var reg = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
    if (reg.test(str)) {
        return true;
    }
    else {
        alert('请输入正确的email地址！\n'
                + '如：ybt@myjckj.com');
        return false;
    }
}
//机构码验证
function checkOrganizationCode(str) {
    var reg = /^\d{6}$/;
    if (reg.test(str)) {
        return true;
    }
    else {
        alert('机构号必须由6位数字组成.\n如：510601');
    }
}
//数字输入框验证
function checkNumA(temp) {
    if (checkNull(temp) == true) {
        if (!(/^\d+(\.\d+)?$/.test(temp.value))) {
            alert("输入有误!");
            return false;
        }
        return true;
    }
}
//空或者空格检查
function checkNull(temp)
{
    if (temp.value.length == 0 || temp.value.indexOf(" ") != -1)
    {
        alert("输入有误，不能为空或包含空格");
        return false;
    }
    return true;
}
//检查是否为空
function isNull(temp)
{
    if (temp.value.length == 0)
    {
        alert("输入有误，不能为空!");
        return false;
    }
    return true;
}
//输入金额验证 保费
function isNum(obj, str) {
    if (!/^(0|[1-9]\d{0,7})(.\d{1,2})?$/.test(obj.value)) {
        alert(str + "格式应当为:\n  99999999.99");

        return false;
    }
    return true;
}

//字符串为空或包含空格验证
function checkString(str) {
    if (str == "" || str.indexOf(" ") != -1 || str.indexOf("　") != -1)
        return false;
    return true;
}


//格式化数字
function FormatNumber(srcStr, nAfterDot) //nAfterDot小数位数
{
    var srcStr,nAfterDot;
    var resultStr,nTen;
    srcStr = "" + srcStr + "";
    strLen = srcStr.length;
    dotPos = srcStr.indexOf(".", 0);
    if (dotPos == -1) {
        resultStr = srcStr + ".";
        for (i = 0; i < nAfterDot * 1; i++) {
            resultStr = resultStr + "0";
        }
        return resultStr;
    }
    else {
        if ((strLen - dotPos - 1) >= nAfterDot) {
            nAfter = dotPos + nAfterDot + 1;
            nTen = 1;
            for (j = 0; j < nAfterDot; j++) {
                nTen = nTen * 10;
            }
            resultStr = Math.round(parseFloat(srcStr) * nTen) / nTen;
            return resultStr;
        }
        else {
            resultStr = srcStr;
            for (i = 0; i < (nAfterDot - strLen + dotPos + 1); i++) {
                resultStr = resultStr + "0";
            }
            return resultStr;
        }
    }
}
 function checkIsNull (obj,str)       
       {
         if (obj.value == "" || obj.value.indexOf(" ") != -1 )
          {
            alert (str+"不能为空或包含空格!"); 
            return false;
        }
	     	return true;
       }
//日期格式
function formatTime(str)
{

  var   r   =   str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);     
  if(r==null) return   false;     
  var  d=  new  Date(r[1],   r[3]-1,   r[4]);     
  return  (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);   

}

function CheckData(obj,str){
     if (obj.value=="")
   {
    alert(str+"不能为空或包含空格,请输入!");
    obj.focus();
   return false;
   } 
    if (!formatTime(obj.value))
   {
    alert(str+"格式错误!");
    obj.focus();
    return false;
    } 
   return true;
}

