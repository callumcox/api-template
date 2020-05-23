const controller = require("./index");

const getMockResponse = () => {
  const res = {};
  res.status = jest.fn();
  res.json = jest.fn();
  return res;
};

describe("controllers/health", () => {
  it("should have the correct number of exports", () => {
    expect(Object.keys(controller)).toHaveLength(1);
  });

  it("should return status: UP from the getHealth function", () => {
    const res = getMockResponse();
    controller.getHealth({}, res);
    expect(res.json).toHaveBeenCalledWith({ status: "UP" });
  });
});
