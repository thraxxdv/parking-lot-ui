import Echo from "laravel-echo";

// @flow
const boot = () => {
  window.Pusher = require("pusher-js");
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    wsHost: process.env.NEXT_PUBLIC_PUSHER_HOST,
    wsPort: process.env.NEXT_PUBLIC_PUSHER_PORT,
    forceTLS: false,
    disableStats: true,
  });
};

export default boot;
