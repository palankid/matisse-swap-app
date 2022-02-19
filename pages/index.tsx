import * as React from "react";
import type { NextPage } from "next";
import { Provider } from "react-redux";

import App from "features";
import store from "store";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Home;
