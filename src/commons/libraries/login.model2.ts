import mongoose, { Schema, Connection } from "mongoose";

const LoginSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  Pass: {
    type: String,
    required: true,
  },
  Salt: {
    type: String,
    default: 1234,
  },
  Token: String,
  State: {
    type: Number,
    default: 1, // Default to '정상'
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

function loginModel(conn: Connection) {
  return conn.model("Login", LoginSchema);
}

export default loginModel;
