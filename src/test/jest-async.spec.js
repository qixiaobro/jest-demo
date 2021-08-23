/*
 * @Author: zxd
 * @Date: 2021-08-23 15:27:12
 * @Description: 测试异步代码
 */

describe("异步代码测试", () => {
  it("callback", (done) => {
    //使用done  try catch
    function callback(data) {
      try {
        expect(data).toBe("peanut butter");
        done();
      } catch (error) {
        done(error);
      }
    }
    function fetchData(callback) {
      setTimeout(() => {
        callback("peanut butter");
      }, 3000);
    }
    fetchData(callback);
  });

  it("Promise", () => {
    expect.assertions(1);
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve("peanut butter");
          reject("Error");
        }, 3000);
      });
    }
    //一定不要忘记把整个断言作为返回值返回
    // return expect(fetchData()).resolves.toBe("peanut butter");
    return expect(fetchData()).rejects.toBe("Error");
  });

  it("async await", async () => {
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve("peanut butter");
          reject("Error");
        }, 3000);
      });
    }
    try {
      const data = await fetchData();
      expect(data).toBe("peanut butter");
    } catch(err) {
      expect(err).toBe("Error");
    }
  });
});
