/*
 * @Author: zxd
 * @Date: 2021-08-23 16:57:00
 * @Description: mock 方法
 */
import axios from "axios";
import Users from "../js/user";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual(users));
});
