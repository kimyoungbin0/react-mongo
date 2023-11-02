import mongoose, { Schema, Connection } from "mongoose";

export const LoginSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

function loginModel(conn: Connection) {
  return conn.model("Login", LoginSchema);
}

export default loginModel;
