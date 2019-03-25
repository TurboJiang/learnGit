new时发生什么了呢？

构造函数的运行方式：是以new的方式被运行，所以函数内部的this是动态的，指向实例化后的this

实例化后对象的是否为空？
--刚开始为空，通过构造函数运行之后获取了构造函数里属性，最后又获取了prototype上定义的属性和方法

对象？由属性和方法构成

1. 实例化一个新对象，并且是这类的实例
2. 构造函数被执行，this指向实例
    constructor运行慢半拍
    构造函数在面向对象中为this服务，this由函数的运行方式决定 
            this——>实例 new
            this——>任何对象 call
3. Otaku.prototype 值是对象，添加属性&对象 ——>原型对象
    任何函数都拥有一个prototype属性，才能构建类
        just like 火车:constructor 车头,车头上勾着车身