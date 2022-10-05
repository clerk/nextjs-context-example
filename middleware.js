import { NextResponse } from "next/server";
import { withContext } from "./context";

// Pre-define the possible context keys to prevent spoofing
const allowedContextKeys = ["foo"];

export default withContext(allowedContextKeys, (setContext, req) => {
  setContext("foo", "bar");
  return NextResponse.next();
});
