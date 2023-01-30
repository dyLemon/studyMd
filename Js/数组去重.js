/**
 *  new Set是es6新增得一种类型，set类型中的数据该类型不可以有重复得值
 *
 *  方法：数组转为set数据，再转换为数组，就完成去重、
 *
 *  无法去重引用类型的数据
 */
const numberArr = [1, 2, 3, 4, 5, 6, 1, 1, 1, 3];

console.log(new Set(numberArr)); // Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(Array.from(new Set(numberArr)));

//数组对象去重
const obj = [
  { id: 1, a: 1 },
  { id: 1, a: 1 },
  { id: 13, b: 2 },
];

// const map = new Map();
// map.set(1,{name:'dyy'})
// console.log(map);
// console.log([...map.keys()]); //键名
// console.log([...map.values()]);//键值
/**
 * 1.Map是一个类似于对象的数据类型,是键控集合
 */

// function uniqueFunc(arr) {
//   const map = new Map();
//   arr.forEach((item) => {
//     if (!map.has(item.id)) { //如果map键名没有相同id Map(1) { 1 => { name: 'dyy' } }
//       map.set(item.id, item);
//     }
//   });
//   return [...map.values()]
// }

// console.log(uniqueFunc(obj));

/**
 *
 *reduce 去重
 */
function uniqueFunc(arr) {
  let newObj = {};
  return arr.reduce((total, item) => {
    newObj[item.id] ? "" : (newObj[item.id] = true && total.push(item));
  }, []);
}

console.log(uniqueFunc(arr));

