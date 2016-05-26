function registerApp()
{
    var iaf = api.require('tencentShare');
    iaf.register({
        appKey:'801512213',
        appSecret:'57c220d79b7edbed2387fdd6aadee02b',
        appUrl:'www.apicloud.com'
    },function(ret,err)
    {
        if(ret.status)
        {
            alert('注册成功');
        }else
        {alert(err.msg);}
    });
};
function logOutapp()
{
    var iaf = api.require('tencentShare');
    iaf.logOut({
    },function(ret,err)
    {
        if(ret.status)
        {
            alert('用户推出当前账户成功');
        }else
        {alert(err.msg);}
    });
};
function shareTextapp()
{
    var iaf = api.require('tencentShare');
    iaf.shareText({
        text:'这是来自世界上最优秀的手机跨平台开发引擎柚子科技的测试'
    },function(ret,err)
    {
        if(ret.status)
        {
            alert('分享成功');
        }else
        {alert(err.msg);}
    });
};
function shareImageapp()
{
    var iaf = api.require('tencentShare');
    iaf.shareImage({
        text:'这是来自世界上最优秀的手机跨平台开发引擎柚子科技的测试',
        imagePath:'widget://image/shareTest.png'
    },function(ret,err)
    {
        if(ret.status)
        {
            alert('分享成功');
        }else
        {alert(err.msg);}
    });
};