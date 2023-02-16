//数组转对象
const arr = [1, 2, 3, 45];
console.log({ ...arr });

/**
 * 转为数字类型 一般parseInt() Number()
 * + 来转换
 */
const age = "12";
console.log(+age);

/**
 * 转字符串类型 toString() String()
 * + " "
 */

const a = 123;
console.log(a + "");

//数组扁平化
//es6提供了一个新方法 flat(depth)，参数depth，代表展开嵌套数组的深度，默认是1
let flatArr = [1, [2, 3, [4, [5]]]];
 // [1,2,3,4,5]
console.log(flatArr.flat(3));

/**
 * 求幂运算 math.pow()
 * es7 引入了指数运算符**
 */
console.log(Math.pow(2,10));
console.log(2 ** 10);


//递归工具函数
const tree =(organization)=>{
    let arr = []
    organization.map(item => {
      let obj = {
        label: item.companyName,
        value: item.companyCode 
      }
      if (item.childList
      ) {
        obj.children = tree(item.childList)
      }
      arr.push(obj)
    })
    return arr
}

let data =[{
    companyName:'qq',
    companyCode:'01',
    childList:[{}]
}]
tree(data)