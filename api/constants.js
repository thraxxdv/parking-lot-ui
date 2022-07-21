// @flow
import Echo from "laravel-echo";
import Pusher from "pusher-js";

export const API_URL: string = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://127.0.0.1:8000/api";
export const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL
  ? process.env.NEXT_PUBLIC_API_BASE_URL
  : "http://127.0.0.1:8000";

export const makeEchoInstance = (): any => {
  return new Echo({
    broadcaster: "pusher",
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    client: new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      wsHost: process.env.NEXT_PUBLIC_PUSHER_HOST,
      wsPort: process.env.NEXT_PUBLIC_PUSHER_PORT,
      forceTLS: false,
      disableStats: true,
    }),
  });
};
