import config from "./config";

describe("Loads from process.env", () => {
  test("process.env.NODE_ENV is 'test'", () => {
    expect(process.env.NODE_ENV).toBe("test");
  });

  test("config.NODE_ENV is not null", () => {
    expect(config.NODE_ENV).toBeNull();
  });

  test("config.NODE_ENV is 'test'", () => {
    expect(config.NODE_ENV).toBe("test");
  });
});