let arr=[];
// 后进先出，先进后出；
// 将数组内容传到数组的末尾；
arr.push("{");
// 打印输出数组的内容及长度；
console.log(arr,arr.length);
// 返回数组的数据类型是Object；
console.log(typeof arr);
arr.push("}");
console.log(arr);
// 将数组的最后一个元素弹出；
arr.pop();
console.log(arr);
// 在数组的开头增加一个或多个元素；
arr.unshift("]");
console.log(arr);
//删除第一个元素；不需要传参
arr.shift();
console.log(arr);