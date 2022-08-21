import { Request, Response } from "express";

export function example(req: Request, res: Response) {
  return res.json({ message: "example" });
}
