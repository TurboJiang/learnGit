/**
 * 功能是决定字符串中的符号是正确的
 * @params str 字符串 包含()[]{}运算符号
 */

const isValid=(str)=>{
    let sta=[];
    let obj={};
    obj["{"]="}";
    obj["("]=")";
    obj["["]="]";
    // 1.空栈先入栈2.将栈顶元素匹配的消除规则与待入栈相比较，相同则pop栈顶元素 否则入栈
    //3.重复2 4.判断数组长度 返回bool
    for(let i=0;i<str.length;i++){
        //sta.push(str[i]);
        if(!sta.length){
            sta.push(str[i]);
        }else{
                if(str[i]===obj[sta[sta.length-1]]){
                    sta.pop();
                 }else{sta.push(str[i]);}  
        }
    }
        return !sta.length;
};
 console.log(isValid('()'));//true
 console.log(isValid('{}[]'));//true
 console.log(isValid('{[]}'));//true
 console.log(isValid('(])'));//false

//如何做匹配规则：
// let obj={
// };
// //obj.=obj[]
// obj["{"]="}";
// obj["("]=")";
// obj["["]="]";
// let sta=["("];
// let s=")";
// // 在obj中查找sta[最后一项]是否等于s
// if(obj[sta[sta.length-1]]===s){
//     sta.pop();
// }
// // sta.length=0 !sta.length则为true
// console.log(!sta.length);