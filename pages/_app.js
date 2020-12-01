import { ChakraProvider } from "@chakra-ui/react";

// state
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";
import HocAuth from "../HocAuth";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <StateProvider initialState={initialState} reducer={reducer}>
        <HocAuth>
          <Component {...pageProps} />
        </HocAuth>
      </StateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
