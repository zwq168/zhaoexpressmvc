/**
 * Created by zhao on 2017/11/28.
 */

/**
 * Created by zhao on 2017/11/21.
 * 这里类似与server层级
 */
const  User=require('../models/in_mongoose/user_mongose');
const  Subscribes=require('../models/in_mongoose/user_subscribt');

// 获得数据
module.exports.getAllusers=async function () {
    const  user=await User.List();
    return user;

};
// 添加
module.exports.addUser=async function(name,age){
    const  userdata=await User.inSert(name,age);
    return userdata;
}
// 获取添加id
module.exports.getUserid=async function (userid){
    const  id=await User.getbyId(userid);
    return id;
}




// 删除一个
module.exports.deluser=async function (userid){
    const  user=await User.deList(userid);
    return user;
}

// 修改数据
module.exports.edituser=async function (userid,name,age){
    const  user=await User.Edit(userid,name,age);
    return user;
}
module.exports.creaTion=async function(userid,url){
    const  user=await User.getbyId(userid);
    if(!user) throw Error("用户不存在") ;
    const sub=await Subscribes.inSert(userid,url);
    return sub;
}