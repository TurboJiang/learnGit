#如何实现红包算法
    发出一个固定金额的红包：由若干人抢，规则？

1. 抢到金额之和等于红包金额，不能超过也不能少于
2. 手气王，0.01至少，
3. 金额随机，产生随机数，确保公平，每个人抢到金额的概率相同

组织计算过程：变量计算的本质
发钱？ 发出去之后：总和total==剩余金额restAmount--
                restNum-- == num
   随机一次，restAmount=restAmount-随机数
            restNum--；
   最后一个人，拿最后的钱,不做随机
   for( i=0; i<num-1; i++){}

   每次随机值就是我们需要的push到数组内


   Math 是数学对象
    数学的随机函数Math.random()
    parseFloat()将一个对象转为float点数，toFixed(2)小数点后两位
   字符串转化为浮点数+设置两位小数(数据类型上拥有的方法)：
        数据类型：number
    类型转换parseFloat()"23.1"——>23.1、parseInt()"23.1"——>23
    parseFloat(math.random()).toFixed(2);
    


向上：无论小数点后为多少,都加1
console.log(Math.ceil(2.1));
 四舍五入
 console.log(Math.round(2.7));
 向下：无论小数点后为多少，都省略
 console.log(Math.floor(2.7));



 0-9之间的整数
 const ranNum=Math.floor(Math.random()*10);
 console.log(ranNum);



// 最小值与最大值之间的随机数：
let min=18;
let max=100;
ranNum1=min+Math.floor(Math.random()*(max-min));
console.log(ranNum1);