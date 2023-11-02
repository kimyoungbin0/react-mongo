import mongoose, { Schema, Connection } from "mongoose";

export const CounterSchema = new Schema({
  count: { type: Number, required: true },
  type: { type: String, required: true },
});

function counterModel(conn: Connection) {
  return conn.model("Count", CounterSchema);
}

export default counterModel;
