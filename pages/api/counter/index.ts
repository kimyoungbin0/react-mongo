import { dbConnectCount } from "../../../src/commons/libraries/dbConnect";
import CountModel from "../../../src/commons/libraries/counter.model";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const conn = await dbConnectCount();
  const Counter = CountModel(conn);

  if (req.method === "POST") {
    // POST가 새로운 카운터를 생성하기 위한 것이라고 가정하면, 그에 맞게 처리
  } else if (req.method === "GET") {
    try {
      // 1. 현재 count 값을 가져옵니다.
      const counter = await Counter.findOne({ type: "board" }); // "type"을 사용하여 카운터를 구별한다고 가정
      if (!counter) {
        // 카운터가 존재하지 않는 경우 처리
        return res.status(404).send("Counter를 찾을 수 없습니다");
      }
      const currentCount = counter.count;

      // 2. count 값을 1 증가시킵니다.
      counter.count += 1;

      // 3. 증가된 count 값을 저장합니다.
      await counter.save();

      // 클라이언트에 현재 count 값 (증가하기 전)을 전송합니다.
      res.status(200).send({ currentCount });
    } catch (error) {
      res.status(500).send("서버 오류");
    }
  }
  // 필요한 경우 다른 HTTP 메서드를 처리
}
