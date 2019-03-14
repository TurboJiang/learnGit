# 对象字面量学习笔记
- 对象字面量
    
    1. 对象字面量即Object，通过key：value,的形式描述出对象，语法的规则是{},可嵌套；
    2. 对象有属性和方法，只要对象上有receive Flower这个方法对象，都可以收花——>接口interface；
- 检索
    1. 格式：检索对象["属性"]/对象.属性(可多个.属性),检索不存在的属性会返回undifined；

    2. ||填充不存在属性默认值:对象["属性"]||"(none)";/对象.属性||"unkown";
    3. &&避免检索undifined值导致typeError异常：对象.属性——>undifined、
        对象.属性.元素——>typeError
        *对象.属性&&对象.属性.元素
- 更新
    1. 赋值语句更新对象的值：若已存在则覆盖，否则添加到对象结构中；
- 引用
    1. 通过引用传递值（不会被拷贝）：
    var x=对象；
    对象.属性='';
    var 新对象=x.属性；
- 原型
    1. 结构规则:Object.beget=function(o){
        var F=function(o){};
        F.prototype=o;
        return new F;};
    2. 创建对象时用此对原型对象进行操作:
     var 原对象={//属性...}；
     var 新对象=Object.beget(原对象);
    赋值运算：新对象.原对象属性='';
- 反射
    1. 确定属性的类型（检索）:typeof 对象.属性 返回类型
    2. 针对不需要的属性验证：对象.hasOwnProperty('属性')返回值为true & false
- 枚举
    1. for-in:遍历对象中所有的属性名并列出（无序）；排除函数typeof+过滤器(无关紧要的属性)hasOwnProperty
        1)规则：for(属性 in 对象){
            if(typeof 对象[属性]！==‘function’）{...}
            }
    2. for(属性有序):创建数组再使用for循环
- 删除
    1. delete：删除对象属性会让原型链中的属性显示出来
        1)规则:delete 对象.属性
- 减少全局变量污染
    1. 将多个全局变量整理在一个名称空间下；
        var 对象={}；
        对象.属性={}；
        ...
    
