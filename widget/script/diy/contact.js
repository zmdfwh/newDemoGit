function deletegroupname()
{
    var getObj = api.require('contact');
    getObj.deleteGroup({
        id:document.getElementById("getdeleteGroupid").value
    },function(ret,err){
        if(ret.status){api.alert({msg:'分组删除完成'});}
    });
}

function modgroupname()
{
    var getObj = api.require('contact');
    getObj.updateGroupName({
        id:document.getElementById("getmodGroupid").value,
        name:document.getElementById("getmodGroupname").value
    },function(ret,err){
        if(ret.status)
        {
            api.alert({msg:'分组修改完成'});
        }
    });
}
function checkGroupOut()
{

    var groupIDS=document.getElementById("groupContact").value;

    var iaf = api.require('contact');
    iaf.queryContactByGroupId(
        {
            id:groupIDS
        },function(ret,err)
        {
            if(ret.status)
            {
                var array = new Array();
                array = ret.contacts;
                var first = array[0];

                var arrayPho = new Array();
                arrayPho = first.phones;
                var firstnum = arrayPho[0];
                var secondnum = arrayPho[1];
                var thirdnum = arrayPho[2];

                document.getElementById("chegroupgroupid").value = first.groupId;
                document.getElementById("chegroupgroupname").value = first.groupName;
                document.getElementById("chegroupfirstid").value = first.id;
                document.getElementById("chegroupfirstname").value = first.name;
                for (prop in firstnum)
                {
                    document.getElementById("chegroupfirstphoneNum1").value = prop+'-'+firstnum[prop];
                }
                for (prop in secondnum)
                {
                    document.getElementById("chegroupfirstphoneNum2").value = prop+'-'+secondnum[prop];
                }
                for (prop in thirdnum)
                {
                    document.getElementById("chegroupfirstphoneNum3").value = prop+'-'+thirdnum[prop];
                }
                document.getElementById("chegroupfirstemail").value = first.email;
                document.getElementById("chegroupfirstcomp").value = first.company;
                document.getElementById("chegroupfirstpost").value = first.title;

                if("undefined" !== typeof(first["address"])){
                    document.getElementById("chegroupfirstcountry").value = first.address.Country;
                    document.getElementById("chegroupfirststate").value =  first.address.State;
                    document.getElementById("chegroupfirstcity").value =  first.address.City;
                    document.getElementById("chegroupfirststreet").value = first.address.Street;
                    document.getElementById("chegroupfirstzip").value = first.address.ZIP;
                }

                document.getElementById("chegroupfirstmemo").value = first.note;
            }else
            { }
        });
};
function queryallGroups()
{
    var getObj = api.require('contact');
    getObj.queryGroups({
    },function(ret,err)
    {
        if(ret.status){
            var array = new Array();
            array = ret.groups;
            var first = array[0];
            document.getElementById("getGroupname").value=first.name;
            document.getElementById("getGroupid").value=first.id;
        }
        else
        { }
    });
}
function createGroups()
{
    var getObj = api.require('contact');
    getObj.addGroup({
        name:document.getElementById("createGroup").value
    },function(ret,err){
        if(ret.status){api.alert({msg:'分组创建完成'+'*'+ret.id});}else
        { }
    });
}
function read()
{

    try{
        var iaf = api.require('contact');
    }catch(e){
        api.alert({"title":"提示",
            "msg": JSON.stringify(e),
            "buttons": ["确定"]
        });
    }

    iaf.openContact({},function(ret,err)
    {
        api.alert({msg:JSON.stringify(ret)});
        if(ret.status)
        {
            var array = new Array();
            array = ret.phones;
            var firstnum = array[0];
            var secondnum = array[1];
            var thirdnum = array[2];

            document.getElementById("ID").value = ret.id;
            document.getElementById("name").value = ret.name;
            document.getElementById("groupsID").value = ret.groupId;
            document.getElementById("groupsname").value = ret.groupName;
            for (prop in firstnum)
            {
                document.getElementById("phoneNum1").value = prop+'-'+firstnum[prop];
            }
            for (prop in secondnum)
            {
                document.getElementById("phoneNum2").value = prop+'-'+secondnum[prop];
            }
            for (prop in thirdnum)
            {
                document.getElementById("phoneNum3").value = prop+'-'+thirdnum[prop];
            }
            document.getElementById("email").value = ret.email;
            document.getElementById("comp").value = ret.company;
            document.getElementById("post").value = ret.title;

            if({} != ret.address && "undefined" !== typeof ret.address){
                document.getElementById("country").value = ret.address.Country;
                document.getElementById("state").value =  ret.address.State;
                document.getElementById("city").value =  ret.address.City;
                document.getElementById("street").value = ret.address.Street;
                document.getElementById("zip").value = ret.address.ZIP;
            }

            document.getElementById("memo").value = ret.note;
        }else
        {
            api.alert({
                "title": "提示",
                "msg": "用户取消",
                "buttons": ["确定"]
            });
        }
    });
};
function add()
{
    var addPhoneNumber1Label = document.getElementById("phoneNumberLabel1").value;
    var addPhoneNumber1Numb = document.getElementById("phoneNumber1").value;
    var addPhoneNumber2Label = document.getElementById("phoneNumberLabel2").value;
    var addPhoneNumber2Numb = document.getElementById("phoneNumber2").value;
    var phoneDicte = {};
    phoneDicte[addPhoneNumber1Label] = addPhoneNumber1Numb;
    phoneDicte[addPhoneNumber2Label] = addPhoneNumber2Numb;
    var iaf = api.require('contact');
    iaf.addContact({
        groupId:document.getElementById("addGroupID").value,
        firstName:document.getElementById("addfirstname").value,
        lastName:document.getElementById("addlastname").value,
        phones:[{label:addPhoneNumber1Label,phone:addPhoneNumber1Numb},{label:addPhoneNumber2Label,phone:addPhoneNumber2Numb}],
        address:
        {
            Country:document.getElementById("addcountry").value,
            State:document.getElementById("addstate").value,
            City:document.getElementById("addcity").value,
            Street:document.getElementById("addstr").value,
            ZIP:document.getElementById("addzip").value
        },
        email:document.getElementById("addemail").value,
        company:document.getElementById("addcom").value,
        title:document.getElementById("addtitle").value,
        note:document.getElementById("addnote").value
    },function(ret,err)
    {
        if(ret.status)
        {api.alert({msg:'添加成功'});}
    });
};
function deleteCon()
{
    var name1=document.getElementById("delename1").value;
    var name2=document.getElementById("delename2").value;
    var name3=document.getElementById("delename3").value;
    var name = [];
    if(name1) {name.push(name1)}
    if(name2) {name.push(name2)}
    if(name3) {name.push(name3)}

    var iaf = api.require('contact');
    iaf.deleteContact({
        ids:name
    },function(ret,err)
    {
        if(ret.status)
        {api.alert({msg:'删除成功'});}else
        {api.alert({msg:'删除失败'});}
    });
};
function modification()
{
    var name1=document.getElementById("targname").value;
    var firstname=document.getElementById("modfirstname").value;
    var lastname=document.getElementById("modlastname").value;
    var name4=document.getElementById("modemail").value;
    var name5=document.getElementById("modcomp").value;
    var name6=document.getElementById("modpost").value;
    var name8=document.getElementById("modmemo").value;


    var addPhoneNumber1Label = document.getElementById("modNumberLabel1").value;
    var addPhoneNumber1Numb = document.getElementById("modNumber1").value;
    var addPhoneNumber2Label = document.getElementById("modNumberLabel2").value;
    var addPhoneNumber2Numb = document.getElementById("modNumber2").value;
    var phoneDicte = {};
    phoneDicte[addPhoneNumber1Label] = addPhoneNumber1Numb;
    phoneDicte[addPhoneNumber2Label] = addPhoneNumber2Numb;

    var iaf = api.require('contact');
    iaf.updateContact({
        id:name1,
        groupId:document.getElementById("modgroupID").value,
        firstName:firstname,
        lastName:lastname,
        phones:[{label:addPhoneNumber1Label,phone:addPhoneNumber1Numb},{label:addPhoneNumber2Label,phone:addPhoneNumber2Numb}],
        address:
        {
            Country:document.getElementById("modcountry").value,
            State:document.getElementById("modstate").value,
            City:document.getElementById("modcity").value,
            Street:document.getElementById("modstr").value,
            ZIP:document.getElementById("modzip").value
        },
        email:name4,
        company:name5,
        title:name6,
        note:name8
    },function(ret,err)
    {
        if(ret.status)
        {api.alert({msg:'修改成功'});}
    });
};
function checkOut()
{

    var name1=document.getElementById("checkname1").value;
    var name2=document.getElementById("checkname2").value;
    var name3=document.getElementById("checkname3").value;
    var name = [];
    if(name1) {name.push(name1)}
    if(name2) {name.push(name2)}
    if(name3) {name.push(name3)}
    var iaf = api.require('contact');
    iaf.queryContact({
        ids:name
    },function(ret,err)
    {
        if(ret.status)
        {
            var array = new Array();
            array = ret.contacts;
            var first = array[0];

            var arrayPho = new Array();
            arrayPho = first.phones;
            var firstnum = arrayPho[0];
            var secondnum = arrayPho[1];
            var thirdnum = arrayPho[2];

            document.getElementById("chegroupid").value = first.groupId;
            document.getElementById("chegroupname").value = first.groupName;
            document.getElementById("cheid").value = first.id;
            document.getElementById("chename").value = first.name;
            for (prop in firstnum)
            {
                document.getElementById("chephoneNum1").value = prop+'-'+firstnum[prop];
            }
            for (prop in secondnum)
            {
                document.getElementById("chephoneNum2").value = prop+'-'+secondnum[prop];
            }
            for (prop in thirdnum)
            {
                document.getElementById("chephoneNum3").value = prop+'-'+thirdnum[prop];
            }
            document.getElementById("cheemail").value = first.email;
            document.getElementById("checomp").value = first.company;
            document.getElementById("chepost").value = first.title;

            if("undefined" !== typeof(first["address"])){
                document.getElementById("checountry").value = first.address.Country;
                document.getElementById("chestate").value =  first.address.State;
                document.getElementById("checity").value =  first.address.City;
                document.getElementById("chestreet").value = first.address.Street;
                document.getElementById("chezip").value = first.address.ZIP;
            }

            document.getElementById("chememo").value = first.note;
        }else
        {api.alert({msg:'id不存在'});}
    });
};
function queryOut()
{
    var iaf = api.require('contact');
    iaf.queryContactByKey(
        {
            key:document.getElementById("queryKey").value
        },function(ret,err)
        {
            if(ret.status)
            {


                var array = new Array();
                array = ret.contacts;
                var first = array[0];

                var arrayPho = new Array();
                arrayPho = first.phones;
                var firstnum = arrayPho[0];
                var secondnum = arrayPho[1];
                var thirdnum = arrayPho[2];

                document.getElementById("querygroupid").value = first.groupId;
                document.getElementById("querygroupname").value = first.groupName;
                document.getElementById("queryid").value = first.id;
                document.getElementById("queryname").value = first.name;

                for (prop in firstnum)
                {
                    document.getElementById("queryphoneNum1").value = prop+'-'+firstnum[prop];
                }
                for (prop in secondnum)
                {
                    document.getElementById("queryphoneNum2").value = prop+'-'+secondnum[prop];
                }
                for (prop in thirdnum)
                {
                    document.getElementById("queryphoneNum3").value = prop+'-'+thirdnum[prop];
                }
                document.getElementById("queryemail").value = first.email;
                document.getElementById("querycomp").value = first.company;
                document.getElementById("querypost").value = first.title;

                if("undefined" !== typeof(first["address"])){
                    document.getElementById("querycountry").value = first.address.Country;
                    document.getElementById("querystate").value =  first.address.State;
                    document.getElementById("querycity").value =  first.address.City;
                    document.getElementById("querystreet").value = first.address.Street;
                    document.getElementById("queryzip").value = first.address.ZIP;
                }

                document.getElementById("querymemo").value = first.note;
            }else
            {api.alert({msg:'获取失败'});}
        });
};