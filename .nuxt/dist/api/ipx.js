import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/Users/marti/granbyprofitez/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
