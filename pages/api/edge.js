import { getContext } from "../../context";

export default function handler(req) {
  return new Response(JSON.stringify({ foo: getContext(req, "foo") }));
}

export const config = {
  runtime: "experimental-edge",
};
