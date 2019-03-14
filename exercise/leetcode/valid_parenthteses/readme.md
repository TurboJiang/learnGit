- js文件的终端打开方式：node index.js；
- js的类型：
        基本数据类型：数值型、字符串、布尔值、null、undefined、
        Object(剩余都为该类型):Array可遍历的对象——>for（）
                              JSON Object对象字面量 可枚举的对象
                              function
  js的dom编程：document.querySelectorAll('a');类数组
        arr.push()
        arr.pop()
- 字符串是字符的数组，具有.length属性，具有使用下标访问的能力；
- 运算符匹配的问题时，选择数组作为数据结构
    只在顶部做操作pop+push 栈stack
    算法加数据结构"()"
    sta=[]空
    (sta.push("("）入栈 sta.length=1;
    sta[0]="("
    )栈不为空，跟顶部元素进行比较，如果是一对，则将顶部的元素pop()；或则push为新的顶部
    sta为空true，否则为false
