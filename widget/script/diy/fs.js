window.fd = null;
function objCreateDir(){
    var fs = api.require('fs');
    var path = $api.byId('file1').value;
    if (path) {
        fs.createDir(
            {
                path: path
            },function(ret,err){
                var status = ret.status;
                if (status) {
                    api.alert({msg:'创建目录成功'});
                }else {

                    api.alert({msg:err.msg});

                };
            }
        )
    }
};
function objExistFile(){
    var obj = api.require('fs');
    var path = $api.byId('file1').value;
    if(path){
        obj.exist({
            path:path
        },function(ret,err){
            if(ret.exist){
                if(ret.directory){
                    api.alert({msg:'该路径指向一个文件夹'});
                }else{
                    api.alert({msg:'该路径指向一个文件'});
                }
            }else{
                api.alert({msg:'该路径不存在任何文件'});
            }
        });
    }
};
function objCreateFile(){
    var fs = api.require('fs');
    var path = $api.byId('file1').value;
    if (path) {
        fs.createFile(
            {
                path: path
            },function(ret,err){
                var status = ret.status;
                if (status) {
                    api.alert({msg:'创建文件成功'});
                }else {

                    api.alert({msg:err.msg});
                };
            })
    };
};
function objRemove(){
    var fs = api.require('fs');
    var path = $api.byId('file1').value;
    if (path) {
        fs.remove(
            {
                path: path
            },function(ret,err){
                var status = ret.status;
                if (status) {
                    api.alert({msg:'删除文件成功'});
                }else {

                    api.alert({msg:err.msg});
                };
            }
        )
    };
};
function objCopyTo(){
    var fs = api.require('fs');
    var oldPath = $api.byId('file1').value;
    var newPath = $api.byId('file2').value;
    if (oldPath) {
        if (newPath) {
            fs.copyTo(
                {
                    oldPath: oldPath,
                    newPath: newPath
                },function(ret,err){
                    var status = ret.status;
                    if (status) {
                        api.alert({msg:'拷贝文件成功'});
                    }else {

                        api.alert({msg:err.msg});
                    };
                })
        }else{
            api.alert({msg:'请输入目标路径'});
        };
    }else{
        api.alert({msg:'请输入源路径'});
    };
};
function objMoveTo(){
    var fs = api.require('fs');
    var oldPath = $api.byId('file1').value;
    var newPath = $api.byId('file2').value;
    if (oldPath) {
        if (newPath) {
            fs.moveTo(
                {
                    oldPath: oldPath,
                    newPath: newPath
                },function(ret,err){
                    var status = ret.status;
                    if (status) {
                        api.alert({msg:'移动文件成功'});
                    }else {

                        api.alert({msg:err.msg});
                    };
                })
        }else{
            api.alert({msg:'请输入目标路径'});
        };
    }else{
        api.alert({msg:'请输入源路径'});
    };
};
function objRename(){
    var fs = api.require('fs');
    var oldPath = $api.byId('file1').value;
    var newPath = $api.byId('file2').value;
    if (oldPath) {
        if (newPath) {
            fs.rename(
                {
                    oldPath: oldPath,
                    newPath: newPath
                },function(ret,err){
                    var status = ret.status;
                    if (status) {
                        api.alert({msg:'重命名成功'});
                    }else{

                        api.alert({msg:err.msg});
                    };
                })
        }else{
            api.alert({msg:'请输入目标路径'});
        };
    }else{
        api.alert({msg:'请输入源路径'});
    };
};
function objReadDir(){
    var fs = api.require('fs');
    var cont = $api.byId('text');
    var path = $api.byId('file1').value;
    if (path) {
        fs.readDir(
            {
                path: path
            },function(ret,err){
                var status = ret.status;
                if (status) {
                    var data = ret.data;
                    if (data) {
                        var jsonStr = JSON.stringify(data);
                        // cont.innerHTML = jsonStr;
                        cont.value = jsonStr;
                    } else{
                        // cont.innerHTML = '此目录下为空';
                        cont.value = '此目录下为空';
                    };
                }else{
                    api.alert({msg:err.msg})
                }
            }

        );
    };
};
function objOpen(){
    var fs = api.require('fs');
    var cont = $api.byId('text');
    var path = $api.byId('file1').value;
    var fileOpenFlags = $api.byId('fileOpenFlags');
    fileOpenFlags = $api.val(fileOpenFlags);
    if (path) {
        fs.open(
            {
                path: path,
                flags: fileOpenFlags,
                offset: $('#offset').val() || "0",
                length: $("#length").val() || "0"
            },function(ret,err){
                if (ret.status) {
                    api.alert({msg:'open操做成功'});
                    fd = ret.fd;
                }else{
                    api.alert({msg:err.msg});
                }
            }
        );
    };
};
function objClose(){
    var fs = api.require('fs');
    var cont = $api.byId('text');
    if (fd) {
        fs.close(
            {
                fd: fd
            },function(ret,err){

                if (ret.status) {
                    cont.value='';
                    api.alert({msg:'close操作成功'});
                }else{

                    api.alert({msg:err.msg});
                };
            }
        );
    };
};
function objRead(){
    var fs = api.require('fs');
    var cont = $api.byId('text');
    var startPoint = document.getElementById("offset").value
    var lengthSize = document.getElementById("length").value
    if (fd) {
        fs.read(
            {
                fd: fd,
                offset: startPoint,
                length: lengthSize
            },function(ret,err){
                if (ret.status) {
                    api.alert({msg:'读取文件内容成功'});
                    cont.value=ret.data;
                }else {

                    api.alert({msg:err.msg});
                };
            }
        );
    };
};
function objWrite(){
    var fs = api.require('fs');
    var cont = $api.byId('text');
    var data = cont.value;
    if (fd) {
        fs.write(
            {
                fd: fd,
                data: data,
                offset: 0
            },function(ret,err){
                if (ret.status) {
                    api.alert({msg:'写入操作成功'});
                }else{

                    api.alert({msg:err.msg});
                };
            }
        );
    };
};

function readUp(){

    var fs = api.require("fs");
    fs.readUp({"length": $("#length").val()},function(ret,err){
        if (ret.status) {
            api.alert({msg:ret.data});
        } else{
            api.alert({msg:err.msg});
        }
    });

}

function readDown(){
    var fs = api.require("fs");
    fs.readDown({"length": $("#length").val()},function(ret,err){
        if (ret.status) {
            api.alert({msg:ret.data});
        } else{
            api.alert({msg:err.msg});
        }
    });
}