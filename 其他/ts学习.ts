function demo(par: number): number {
  return 1;
}

//泛型
function demo1<T>(par: T): T {
  return par;
}

demo1<number>(1);

const demo3 = <T>(par: T): T => {
  return par;
};

demo3<string>("ddd");

//多个类型参数
const demo4 = <T, U>(par: [T, U]): [T, U] => {
  return par;
};

console.log(demo4<number, string>([12, "333"]));

//约束泛型
type Unino1 = string | number;
class Stack<T extends Unino1> {}

new Stack<number>();
// new Stack<boolean>();

//泛型接口
interface keyValue<T, U> {
  key: T;
  value: U;
}

const person: keyValue<number, string> = {
  key: 1,
  value: "ddd",
};
