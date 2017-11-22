/**
 * Created by zhao on 2017/11/22.
 * 订阅
 */
class Subscribe{
      constructor(userId,url){
             this.userId=userId;
             this.url=url;
      }
      // 获取数据
    static list(){
            return Subscribe.subations;
      }
     // 插入数据
    static  insert(userId,url){
       const  us=new Subscribe(userId,url);
        Subscribe.subations.push(us);
        return us;
    }
    // 循环查找id
    static getyoneid(userId){
        return Subscribe.subations.map(s=>s.userId===userId);
    }
}
Subscribe.subations=[];
module.exports=Subscribe;