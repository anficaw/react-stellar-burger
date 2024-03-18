import { ordersReducer } from "./reducer";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actoins";
import { WebsocketStatus } from "../types/types";
import { report } from "../utils/data";

const initialState = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  orders: [],
  total: 0,
  totalToday: 0,
};

describe("Test ordersReducer", () => {
  it("wsConnecting test", () => {
    expect(
      ordersReducer(initialState, {
        type: wsConnecting,
      })
    ).toEqual({
      status: WebsocketStatus.CONNECTING,
      connectionError: "",
      orders: [],
      total: 0,
      totalToday: 0,
    });
    expect(
      ordersReducer(undefined, {
        type: wsConnecting,
      })
    ).toEqual({
      status: WebsocketStatus.CONNECTING,
      connectionError: "",
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });

  it("wsOpen test", () => {
    expect(
      ordersReducer(initialState, {
        type: wsOpen,
      })
    ).toEqual({
      status: WebsocketStatus.ONLINE,
      connectionError: "",
      orders: [],
      total: 0,
      totalToday: 0,
    });
    expect(
      ordersReducer(undefined, {
        type: wsOpen,
      })
    ).toEqual({
      status: WebsocketStatus.ONLINE,
      connectionError: "",
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });

  it("wsClose test", () => {
    expect(
      ordersReducer(initialState, {
        type: wsClose,
      })
    ).toEqual({
      status: WebsocketStatus.OFFLINE,
      connectionError: "",
      orders: [],
      total: 0,
      totalToday: 0,
    });
    expect(
      ordersReducer(undefined, {
        type: wsClose,
      })
    ).toEqual({
      status: WebsocketStatus.OFFLINE,
      connectionError: "",
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });

  it("wsError test", () => {
    expect(
      ordersReducer(initialState, {
        type: wsError,
        payload:"error",
      })
    ).toEqual({
      status: WebsocketStatus.OFFLINE,
      connectionError: "error",
      orders: [],
      total: 0,
      totalToday: 0,
    });
    expect(
      ordersReducer(undefined, {
        type: wsError,
      })
    ).toEqual({
      status: WebsocketStatus.OFFLINE,
      connectionError:undefined,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });

  it("wsMessage test", () => {
    expect(
      ordersReducer(initialState, {
        type: wsMessage,
        payload:report,
      })
    ).toEqual({
      status: WebsocketStatus.OFFLINE,
      connectionError: '',
      orders: report.orders,
      total: report.total,
      totalToday: report.totalToday,
    });
    expect(
      ordersReducer(undefined, {
        type: wsMessage,
        payload:report,
      })
    ).toEqual({
      status: WebsocketStatus.OFFLINE,
      connectionError: '',
      orders: report.orders,
      total: report.total,
      totalToday: report.totalToday,
    });
  });
});
