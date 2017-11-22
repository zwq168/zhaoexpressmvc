
/**
 * Created by zhao on 2017/11/21.
 * 这里类似与server层级
 */
const  User=require('../models/in_user/user');
const  Subscribes=require('../models/in_user/subscribe');
//写成对象的形式 也可以
// const  Users={
//     getAllusers:function () {
//           return User.list();
//       },
//     addUser:(id,firstname,lastname,age)=>{
//        return User.insert(id,firstname,lastname,age);
//        } ,
//     getUserid:(userid)=>{
//         return User.getbyid(userid);
//        },
//     creaTion:(userid,url)=>{
//       const  user= User.getbyid(userid);
//       if(!user) throw Error("not user none");
//       const sub=Subscribes.insert(userid,url);
//        return sub;
//        }
//        // 修改id
//
// }
// module.exports.Users=Users;

// 下面的写法也是可以的
module.exports.getAllusers=function () {
      return User.list();

};
// 添加
module.exports.addUser=(id,firstname,lastname,age)=>{
        return User.insert(id,firstname,lastname,age);
}
// 获取添加id
module.exports.getUserid=(userid)=>{
        return User.getbyid(userid);
}


module.exports.creaTion=(userid,url)=>{
    const  user= User.getbyid(userid);
    if(!user) throw Error("not user none");
    const sub=Subscribes.insert(userid,url);
    return sub;

}

// 删除一个
module.exports.deluser=(userid)=>{
    const  user= User.delist(userid);
    return user;
}