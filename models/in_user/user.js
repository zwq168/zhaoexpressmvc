/**
 * Created by zhao on 2017/11/21.
 * es6 的写法   主要是插入数据    查询数据
 */
const  users=[];
class User{
   constructor(id,firstname,lastname,age){
             this.firstname=firstname;
             this.lastname=lastname;
             this.age=age;
             this.id=id;
             //  User.id+=1
             // this.id=User.id;
    }
    getName(){
         return  `${this.firstname} ${this.lastname} ${this.age} ${this.id}`;
    }
    // 插入数据
    static  insert(id,firstname,lastname,age){
          const  u=new User(id,firstname,lastname,age);
           User.users.push(u);
           return u;
    }
    static  getbyid(userid){
     return User.users.find(a=>Number(a.id)===Number(userid));
    }
    // 获取数据
    static  getbyname(firstname,lastname){
         // return User.users.find(function (u) {
         //         u 就是users数据里边的回调
         //        u.firstname===firstname("传递进来的参数")
         // })
        // es6 写法 上面的普通写法很容易理解 es6 就能理解了
        return User.users.find(a=>a.firstname===firstname && a.lastname===lastname);
    }
    // 获取所有数据
    static list(query){
        return User.users;
    }
    static  get['users'](){
         return users;
    }

    // 删除数据
    static  delist(userid){
        User.users.forEach((item,i)=>{
             if(Number(userid)===Number(item.id)){
                 console.log(item);
                 User.users.splice(i,1);
             }
        })
        return User.users;
    }
}
// User.id=0;
// 本js中的static 类似在user类上直接挂载了一个 方法 静态方法只能直接调用 不能实例化
// getName 需要实例化
module.exports=User;