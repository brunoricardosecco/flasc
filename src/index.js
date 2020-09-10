import React, { useState } from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { AppLoading } from "expo";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./routes";
import { persistor, store } from "./store";
import { RouteProvider } from "./context/routes";

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(true);

  if (!isLoadingComplete)
    return (
      <AppLoading updatePushToken onFinish={() => setLoadingComplete(true)} />
    );

  return (
    <>
      <StatusBar translucent backgroundColor="#000731" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouteProvider>
            <Router />
          </RouteProvider>
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </>
  );
}

export default App;
