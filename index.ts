import { ReadableStream } from "node:stream/web";

console.log('readableStream', ReadableStream)

export default {
  async fetch(request) {
    const data = {
      hello: "world",
    };

    return Response.json(data);
  },
};
