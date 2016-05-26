function btnOpenContacts(){
    api.openContacts(
        {},function(ret,err){
            if(ret.status){
                $api.val($api.byId('showMsg'),('姓名:' + ret.name+'\n电话:' + ret.phone));
            }else{
                api.alert({msg:err.msg});
            };

        }
    );
}
function btnClearCache(){
    api.clearCache();
    api.alert({msg: '清除成功'});
};
function btnActionSheet(flag){
    var tit = $api.byId('i_title').value;
    var del = $api.byId('i_dele').value;
    var cal = $api.byId('i_canl').value;

    var bt_1 = $api.byId('bt_1').value;
    var bt_2 = $api.byId('bt_2').value;
    var bt_3 = $api.byId('bt_3').value;

    var bts = [bt_1, bt_2, bt_3];
    var param = {buttons: bts};
    if (tit) {
        param.title = tit;
    }
    if (del) {
        param.destructiveTitle = del;
    }
    if (cal) {
        param.cancelTitle = cal;
    }
    if(flag){
        var st = {itemNormalColor:'#FF00FF',
            itemPressColor:'#0000FF',
            fontNormalColor:'#FFFF00',
            fontPressColor:'#FF0000'};
        param.style = st;
    }
    api.actionSheet(param, function(ret,err){
            var index = ret.buttonIndex;
            var val = "buttonIndex：" + index;
            api.alert({msg: val});
        }
    );
};
function btnActionSheet2(){
    btnActionSheet(true);
};
function openPicker(){
    $api.val($api.byId('i_result'),('时间是'));
    var type = $api.val($api.byId('timeType'));
    api.openPicker(
        {
            type: type,
            date: '2014-05-01 12:30'
        },function(ret,err){
            var year = ret.year;
            var month = ret.month;
            var day = ret.day;
            var hour = ret.hour;
            var minute = ret.minute;
            if (type == 'date') {
                $api.val($api.byId('i_result'),(year+'年'+month+'月'+day+'日'));
            } else if (type == 'time') {
                $api.val($api.byId('i_result'),(hour+'时'+minute+'分'));
            } else if (type == 'date_time') {
                $api.val($api.byId('i_result'),(year+'年'+month+'月'+day+'日'+hour+'时'+minute+'分'));
            }
        }
    );
};