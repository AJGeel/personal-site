import Transition from "../components/transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}

export default MyApp;
