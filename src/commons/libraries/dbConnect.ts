import mongoose, { Connection } from "mongoose";

const DB_URI = process.env.MONGODB_URI || "";
const DB_URI_DEVICE = process.env.MONGODB_URI_DEVICE || "";
const DB_URI_BOARD = process.env.MONGODB_URI_BOARD || "";
const DB_URI_COUNTER = process.env.MONGODB_URI_COUNTER || "";

let cachedLoginConn: Connection | null = null;
let cachedDeviceConn: Connection | null = null;
let cachedBoardConn: Connection | null = null;
let cachedCountConn: Connection | null = null;

async function dbConnectLogin() {
  if (cachedLoginConn) return cachedLoginConn;

  const conn = await mongoose.createConnection(DB_URI);

  cachedLoginConn = conn;
  return cachedLoginConn;
}

async function dbConnectDevice() {
  if (cachedDeviceConn) return cachedDeviceConn;

  const conn = await mongoose.createConnection(DB_URI_DEVICE);

  cachedDeviceConn = conn;
  return cachedDeviceConn;
}

async function dbConnectBoard() {
  if (cachedBoardConn) return cachedBoardConn;

  const conn = await mongoose.createConnection(DB_URI_BOARD);

  cachedBoardConn = conn;
  return cachedBoardConn;
}

async function dbConnectCount() {
  if (cachedCountConn) return cachedCountConn;

  const conn = await mongoose.createConnection(DB_URI_COUNTER);

  cachedCountConn = conn;
  return cachedCountConn;
}

export { dbConnectLogin, dbConnectDevice, dbConnectBoard, dbConnectCount };
