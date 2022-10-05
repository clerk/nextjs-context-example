import { getContext } from "../../context";

export default function handler(req, res) {
  res.status(200).json({ foo: getContext(req, "foo") });
}

export const config = {
  runtime: "nodejs",
};
