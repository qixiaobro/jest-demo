/*
 * @Author: zxd
 * @Date: 2021-08-23 14:15:28
 * @Description: jest 官方教程demo
 */

it("2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

it("判断对象属性值", () => {
  const data = {
    one: 1,
  };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

it("检测相反的值", () => {
  expect(2 + 2).not.toBe(3);
});

//真值
/**
 * toBeNull 只匹配 null
   toBeUndefined 只匹配 undefined
   toBeDefined 与 toBeUndefined 相反
   toBeTruthy 匹配任何 if 语句为真
   toBeFalsy 匹配任何 if 语句为假
 */
it("真值", () => {
  expect(null).toBeNull();
  expect(2).not.toBeNull();
  expect(undefined).toBeUndefined();
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

it("数字比较", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  //浮点数比较使用 toBeCloseTo
  const value2 = 0.1 + 0.2;
  // expect(value2).toEqual(0.3)  //error
  expect(value2).toBeCloseTo(0.3);
});

it("字符串", () => {
  expect("jest").toMatch("j");
  expect("jest").not.toMatch("1");
  expect("Christoph").toMatch(/stop/);
});

it("可迭代对象",()=>{
 const shoppingList = [
   "diapers",
   "kleenex",
   "trash bags",
   "paper towels",
   "milk",
 ];
 expect(shoppingList).toContain("diapers")
 expect(new Set(shoppingList)).toContain("milk");
 expect(shoppingList).not.toContain("banner");
})

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}
it("函数抛错",()=>{
  //函数需要在expect的包装函数中调用，否则 toThrow断言总是会失败。
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
})