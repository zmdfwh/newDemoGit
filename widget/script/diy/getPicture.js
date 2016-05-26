window.lastMediaValue = null;
window.lastResUrl = null;

function getPicture(){
    var mediaValue = $api.byId('mediaValue');
    var tagImgs = $api.byId('imgs');
    var tagUrl = $api.byId('urls');
    var medImageDataType = $api.byId('medImageDataType');
    var quality = $api.byId('quality');
    var widthMain = $api.byId('main');
    var qualiW = $api.byId('qualiW');
    var qualiH = $api.byId('qualiH');
    var btn_play = $api.byId('play');

    lastMediaValue = mediaValue.value;

    var IDT = medImageDataType.value;

    var qua = quality.value;
    var data = {
        sourceType: 'library',
        encodingType: 'png',
        mediaValue: lastMediaValue,
        destinationType: IDT,
        allowEdit: true,
        quality: qua,
        saveToPhotoAlbum: false
    }
    var W = parseFloat(qualiW.value),
        H = parseFloat(qualiH.value);
    if (W && H) {
        data.targetWidth = W;
        data.targetHeight= H;
    };
    api.getPicture(data, function(ret, err){

        if (ret) {
            api.alert({
                title: "结果",
                msg: JSON.stringify(ret)
            });
            pictureBack(tagImgs,ret.data,ret.duration);
        } else{
            api.alert({msg:err.msg});
        };
    });
};

function getPhoto(){
    var mediaValue = $api.byId('mediaValue');
    var tagImgs = $api.byId('imgs');
    var tagUrl = $api.byId('urls');
    var medImageDataType = $api.byId('medImageDataType');
    var quality = $api.byId('quality');
    var widthMain = $api.byId('main');
    var qualiW = $api.byId('qualiW');
    var qualiH = $api.byId('qualiH');
    var btn_play = $api.byId('play');

    lastMediaValue = mediaValue.value;

    var IDT = medImageDataType.value;

    var qua = quality.value;
    var W = parseFloat(qualiW.value),
        H = parseFloat(qualiH.value);
    var data = {
        sourceType: 'camera',
        encodingType: 'jpg',
        mediaValue: lastMediaValue,
        destinationType: IDT,
        allowEdit: false,
        quality: qua,
        saveToPhotoAlbum: true
    };
    if (W && H) {
        data.targetWidth = W;
        data.targetHeight= H;
    };

    api.getPicture(data, function(ret, err){
        if (ret) {
            api.alert({"title": "base64", "msg": JSON.stringify(ret)});
            pictureBack(tagImgs,ret.data,ret.duration);
        } else{
            api.alert({msg:err.msg});
        };
    });
}
function getByAblum(){
    var mediaValue = $api.byId('mediaValue');
    var tagImgs = $api.byId('imgs');
    var tagUrl = $api.byId('urls');
    var medImageDataType = $api.byId('medImageDataType');
    var quality = $api.byId('quality');
    var widthMain = $api.byId('main');
    var qualiW = $api.byId('qualiW');
    var qualiH = $api.byId('qualiH');
    var btn_play = $api.byId('play');

    lastMediaValue = mediaValue.value;

    var IDT = medImageDataType.value;

    var qua = quality.value;
    var data = {
        sourceType: 'album',
        encodingType: 'jpg',
        mediaValue: lastMediaValue,
        destinationType: IDT,
        allowEdit: true,
        quality: qua,
        saveToPhotoAlbum: false
    }
    var W = parseFloat(qualiW.value),
        H = parseFloat(qualiH.value);
    if (W && H) {
        data.targetWidth = W;
        data.targetHeight= H;
    };
    api.getPicture(data, function(ret, err){
        if (ret) {
            api.alert({
                title: "结果",
                msg: JSON.stringify(ret)
            });
            pictureBack(tagImgs, ret.data, ret.duration);
        } else{
            api.alert({msg:err.msg});
        };
    });
}

function pictureBack(el,url,time){
    var mediaValue = $api.byId('mediaValue');
    var tagImgs = $api.byId('imgs');
    var tagUrl = $api.byId('urls');
    var medImageDataType = $api.byId('medImageDataType');
    var quality = $api.byId('quality');
    var widthMain = $api.byId('main');
    var qualiW = $api.byId('qualiW');
    var qualiH = $api.byId('qualiH');
    var btn_play = $api.byId('play');

    lastResUrl = url;
    if(lastMediaValue == 'video'){
        tagUrl.value = '时长:' + time + 's;路径:' + url;
    }else{
        tagUrl.value = '';

        var reg = /\.(png|jpg)$/;
        if(reg.test(url)){
            var oImg = new Image();
            oImg.src = url;
            var w = 0;
            var h = 0;
            oImg.onload = function(){
                var w = this.width;
                var h = this.height;
                el.src = url;
            };
        }
    }
}

function play(){
    var mediaValue = $api.byId('mediaValue');
    var tagImgs = $api.byId('imgs');
    var tagUrl = $api.byId('urls');
    var medImageDataType = $api.byId('medImageDataType');
    var quality = $api.byId('quality');
    var widthMain = $api.byId('main');
    var qualiW = $api.byId('qualiW');
    var qualiH = $api.byId('qualiH');
    var btn_play = $api.byId('play');

    if(lastResUrl){
        api.openVideo({url:lastResUrl});
    }
}
    