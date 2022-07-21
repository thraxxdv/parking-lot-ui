import { useEffect } from "react";
import boot from "../services/boot";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    boot();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
