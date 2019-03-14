let qq_number="2212761114";
// 函数表达式
/**
 * 
 * @param  qq type String
 * @return type boolean
 * @功能 判断qq是否合格
 * @desc 只能是数字 数字有长度五位号以上，
 */
const is_valid_qq=(qq)=>{
    if(!qq){return false;}

    if(/^[0-9]{5,13}$/.test(qq)){
        return true;
    }else{
        return false;
    }
    // return true||false;
    // console.log(qq);
    return true;
};
console.log(is_valid_qq(qq_number));
// 选择了一种数据结构:数组
let enc_qq=[6,3,1,7,5,8,9,2,4],
arr=[],
// 指针 start开始
head=0,
//指针 end 结束  
tail=9;
 // 拿到一个正确的数字 操作原来的两个数字
while(head<tail){
   
    arr.push(enc_qq[head]);
    head++;
    enc_qq[tail]=enc_qq[head];
    tail++;
    head++;
}
console.log(arr);
console.log(enc_qq);
