function openPersonal()
{
    var obj = api.require('personalCenter');
    obj.open({
        x:document.getElementById("personx").value,
        y:document.getElementById("persony").value,
        height:document.getElementById("personheight").value,
        imgPath:document.getElementById("personheadimg").value,
        placeHoldImg:document.getElementById("placeholderheadimg").value,
        username:document.getElementById("personname").value,
        count:document.getElementById("personcount").value,
        collect:document.getElementById("personcollect").value,
        browse:document.getElementById("personbrowse").value,
        dwonload:document.getElementById("persondownload").value,
        activity:document.getElementById("personactiv").value,
        showLeftBtn:true,
        showRightBtn:true
    },function(ret,err){
        api.alert({msg:ret.click});
    });
};
function refleshData()
{
    var obj = api.require('personalCenter');
    obj.updateValue({
        imgPath:document.getElementById("personheadimg").value,
        placeHoldImg:document.getElementById("placeholderheadimg").value,
        username:document.getElementById("personname").value,
        count:document.getElementById("personcount").value,
        browse:document.getElementById("personbrowse").value,
        collect:document.getElementById("personcollect").value,
        dwonload:document.getElementById("persondownload").value,
        activity:document.getElementById("personactiv").value,
        showLeftBtn:true,
        showRightBtn:true
    });
};
function closePersonal()
{
    var obj = api.require('personalCenter');
    obj.close();
};
//新版接口
function openPersonalCenter()
{
    var arrayPath = new Array();
    arrayPath[0]={
        bgImg:document.getElementById("button1bgImg").value,
        selectedImg:document.getElementById("button1selectedImg").value,
        lightImg:document.getElementById("button1lightImg").value,
        title:document.getElementById("button1titlestr").value,
        count:document.getElementById("button1count").value,
        titleColor:document.getElementById("button1titlecolor").value,
        titleLightColor:document.getElementById("button1selectedtitleColor").value,
        countColor:document.getElementById("button1countcolor").value,
        countLightColor:document.getElementById("button1selectedcountColor").value
    };
    arrayPath[1]={
        bgImg:document.getElementById("button1bgImg").value,
        selectedImg:document.getElementById("button1selectedImg").value,
        lightImg:document.getElementById("button1lightImg").value,
        title:document.getElementById("button1titlestr").value,
        count:document.getElementById("button1count").value,
        titleColor:document.getElementById("button1titlecolor").value,
        titleLightColor:document.getElementById("button1selectedtitleColor").value,
        countColor:document.getElementById("button1countcolor").value,
        countLightColor:document.getElementById("button1selectedcountColor").value
    };
    arrayPath[2]={
        bgImg:document.getElementById("button1bgImg").value,
        selectedImg:document.getElementById("button1selectedImg").value,
        lightImg:document.getElementById("button1lightImg").value,
        title:document.getElementById("button1titlestr").value,
        count:document.getElementById("button1count").value,
        titleColor:document.getElementById("button1titlecolor").value,
        titleLightColor:document.getElementById("button1selectedtitleColor").value,
        countColor:document.getElementById("button1countcolor").value,
        countLightColor:document.getElementById("button1selectedcountColor").value
    };
    var obj = api.require('personalCenter');
    obj.open({
        y:document.getElementById("personaly").value,
        height:document.getElementById("personalheight").value,
        imgPath:document.getElementById("personalheadimg").value,
        placeHoldImg:document.getElementById("placeholderheadimage").value,
        username:document.getElementById("personalname").value,
        count:document.getElementById("personalcount").value,
        userColor:document.getElementById("personalcountnameColor").value,
        modButton:{
            bgImg:document.getElementById("personalresetbtnimg").value,
            lightImg:document.getElementById("personalresetbtnimglight").value
        },
        showLeftBtn:true,
        showRightBtn:true,
        btnArray:arrayPath,
        clearBtn:document.getElementById("isclearBtn").value
    },function(ret,err){
        api.alert({msg:ret.click});
    });
}

function refleshDataPersonal()
{
    var arrayPath = new Array();
    arrayPath[0]={
        count:document.getElementById("button1count").value
    };
    arrayPath[1]={
        count:document.getElementById("button1count").value
    };
    arrayPath[2]={
        count:document.getElementById("button1count").value
    };
    var obj = api.require('personalCenter');
    obj.updateValue({
        imgPath:document.getElementById("personalheadimg").value,
        placeHoldImg:document.getElementById("placeholderheadimage").value,
        username:document.getElementById("personalname").value,
        count:document.getElementById("personalcount").value,
        btnArray:arrayPath
    });
};
function setSelectButton(){
    var obj = api.require('personalCenter');
    obj.setSelect({
        index:document.getElementById("setSelectedBtn").value
    });
};

function setpersonalShow(){
    var obj = api.require('personalCenter');
    obj.show();
};

function setpersonalHide(){
    var obj = api.require('personalCenter');
    obj.hide();
};