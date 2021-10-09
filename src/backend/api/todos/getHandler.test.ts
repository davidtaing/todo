import getHandler from "./getHandler";
import { createMocks } from "node-mocks-http";

const mockedResponse = [
  {
    _id: {
      $oid: "61615ff52c04c33707721ae5",
    },
    category: "Sleep",
    status: "done",
    title: "Go to sleep at 12AM",
    uid: "tJ77RHA696prqWG9BHwStGQnc0Ww",
  },
  {
    _id: {
      $oid: "6161601a2c04c33707721ae7",
    },
    category: "Exercise",
    status: "pending",
    title: "Do 10 push ups",
    uid: "tJ77RHA696prqWG9BHwStGQnc0Ww",
  },
  {
    _id: {
      $oid: "616160472c04c33707721ae9",
    },
    category: "Diet",
    status: "pending",
    title: "Eat an apple today.",
    uid: "tJ77RHA696prqWG9BHwStGQnc0Ww",
  },
  {
    _id: {
      $oid: "6161604e2c04c33707721aea",
    },
    category: "Exercise",
    status: "pending",
    title: "Do 10 push ups",
    uid: "tJ77RHA696prqWG9BHwStGQnc0Ww",
  },
];

describe("GET api/todos", () => {
  describe("Status: 200 OK", () => {
    const { req, res } = createMocks();

    beforeAll(() => getHandler(req, res));

    test("Status Code: 200 OK", () => {
      expect(res._getStatusCode()).toBe(200);
    });

    test("Returns JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });
  })
});