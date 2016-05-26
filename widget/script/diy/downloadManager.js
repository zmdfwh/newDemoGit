var isViewOpen = false; // 下载视图是否打开.

window.dmg = api.require('downloadManager');

function closeManagerView(){
    dmg.closeManagerView();
    isViewOpen = false;
}
function keybackHandle(){
    if(isViewOpen){
        closeManagerView();
        return;
    }

    api.closeWin();
}

function openview(){
    dmg.openManagerView(onItemClick);
    isViewOpen = true;
}

function startdown(){
    var url = "http://apicloudvideo.qiniudn.com/OK1.mp4";
    dmg.enqueue({url:url}, function(ret, err){
        alert("下载已经开始!");
    });
}

function startdown1(){
    var url = "http://yinyueshiting.baidu.com/data2/music/10525833/105258321411167661128.mp3?xcode=74c4b0575b9fcaf67a68f9480cd102ff643c010200b24750";
    dmg.enqueue({url:url}, function(ret, err){
        alert("下载已经开始!");
    });
}

function startdown2(){
    var url = "http://doc.apicloud.com/apicloud_demo.apk";
    if("ios" === api.systemType){
        url = "http://doc.apicloud.com/apicloud_demo.ipa";
    }
    dmg.enqueue({url:url}, function(ret, err){
        alert("下载已经开始!");
    });
}

window.list = null;
function query(){
    dmg.query(function(ret, err){
        if(ret && ret.data){
            list = ret.data;
            var len = list.length;
            if(0 == len){
                document.getElementById('list').innerHTML = "";
                alert('没有任何下载数据');
                return;
            }
            var inner = "";
            for (var i in list) {
                var ons = list[i];
                var id = ons.id;
                var status = ons.status;
                var title = ons.title;
                var totalSize = ons.totalSize;
                var finishSize = ons.finishSize;
                var mimeType = ons.mimeType;
                var reason = ons.reason;
                var savePath = ons.savePath;
                var url = ons.url;
                if(status == 0){
                    status = '等待下载';
                    reason = '无错误';
                }else if(status == 1){
                    status = '正在下载';
                    reason = '无错误';
                }else if(status == 2){
                    status = '暂停中..';
                    reason = '无错误';
                }else if(status == 3){
                    status = '下载成功';
                    reason = '无错误';
                }else{
                    status = '下载发生错误';
                    if(reason == 1000){
                        reason = '未知错误';
                    }else if(reason == 1001){
                        reason = 'I/O错误，存储已满，下载文件已存在等';
                    }else if(reason == 1002){
                        reason = '未发现存储设备';
                    }else if(reason == 1003){
                        reason = '目标资源发生了重定向';
                    }else if(reason == 1004){
                        reason = '网络资源错误，如不存在等';
                    }else{
                        reason = '无';
                    }
                }
                var p = finishSize / totalSize;
                p = (Math.round(p * 100) / 100) * 100 + '%';
                var item = "<li class='item'> " +
                    "<div id='id'>id：" + id + "</div> " +
                    "<div id='status'>下载状态：" + status + "</div> " +
                    "<div id='title'>标题：" + title + "</div> " +
                    "<div id='percent'>文件大小：" + totalSize + "</div> " +
                    "<div id='percent'>完成大小：" + finishSize + "</div> " +
                    "<div id='percent'>完成进度：" + p + "</div> " +
                    "<div id='mimeType'>文件类型：" + mimeType + "</div> " +
                    "<div id='reason'>失败原因：" + reason + "</div> " +
                    "<div id='savePath'>本地保存路径：" + sub(savePath) + "</div> " +
                    "<div id='url'>下载路径：" + sub(url) + "</div> " +
                    "<div class='op'> " +
                    "<div class='btn-small' tapmode='active' onclick='pause(" + id + ")'>暂停</div> " +
                    "<div class='btn-small' tapmode='active' onclick='resume(" + id + ")'>继续</div> " +
                    "<div class='btn-small' tapmode='active' onclick='removeDownload(" + id + ")'>删除</div> " +
                    "<div class='btn-small' tapmode='active' onclick='openApp(" + id + ")'>打开</div> " +
                    "</div> " +
                    "</li> <br><br>";

                inner += item;
            }

            var list = document.getElementById("list");

            if( ! list){
                var list = document.createElement("ul");
                list.id = "list";
                document.getElementsByTagName("body")[0].appendChild(list);
            }

            list.innerHTML = inner;
        }else{
            document.getElementById('list').innerHTML = "";
            alert('没有任何下载数据');
        }
    });
}

function isFinish(did){
    if(!list){
        return false;
    }
    for(var i in list){
        var ons = list[i];
        if(ons.id == did){
            if(3 == ons.status){
                return true;
            }
        }
    }
    return false;
}

function sub(str){

    return str.substring(0, 15);
}

function pause(did){
    dmg.pause({id:did}, function(ret, err){
        if(ret && !ret.status){
            alert('操作失败：' + ret.msg);
        }
        query();
    });
}

function resume(did){
    dmg.resume({id:did}, function(ret, err){
        if(ret && !ret.status){
            alert('操作失败：' + ret.msg);
        }
        query();
    });
}

function removeDownload(did){
    var ids = [did];
    dmg.remove({ids:ids}, function(ret, err){
        if(ret){
            var number = ret.number;
            if(number > 0){
                alert('删除成功');
            }else{
                alert('删除失败，该下载不存在');
            }
        }
        query();
    });
}

function openApp(did){
    if(!isFinish(did)){
        alert('文件还在下载');
        return;
    }
    dmg.openDownloadedFile({id:did}, function(ret, err){

    });
}

function onItemClick(ret, err){
    if(ret){
        var did = ret.id;
        dmg.openDownloadedFile({id:did});
    }
}