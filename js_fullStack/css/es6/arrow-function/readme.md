## 怎么用
- 只有一个参数省略括号
- 函数只有一条语句可以省略 {} return
- 返回对象是添加()

## arguements
- 所有函数中(箭头函数除外)都可用的局部变量
- [arg1,arg2,arg3]



## 普通函数、箭头函数 区别
- 箭头函数不支持重名形参，普通函数可以
- 箭头函数没有this，他的this是定义时所处的上下文（外部函数）this
- 箭头函数不能通过.call()&.apply()...改变函数的this
- 箭头函数没有 .prototype 属性
- 箭头函数不能作为构造函数var arr_es6=()=>{}
                        undefined
                        new arr_es6();
                        VM134:1 Uncaught TypeError: ***arr_es6 is not a constructor***
                            at <anonymous>:1:1
                        (anonymous) @ VM134:1
- 箭头函数没有arguements
- 箭头函数没有new.target


********************************************************************************
        function Person(){
            console.log(new.target);
        }
        new Person();
## new.target 
es6新增
一般构造函数之内的 返回 new 作用的那个构造函数



##类数组
- 有length属性
- 可以通过 索引 获取值
- Array.from()从类数组对象中创建一个数组