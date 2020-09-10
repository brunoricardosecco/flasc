import { AsyncStorage } from "react-native";
import { reactotronRedux } from "reactotron-redux";
import Reactotron, { asyncStorage } from "reactotron-react-native";
let reactotron = { createEnhancer() {} };

if (__DEV__) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: "192.168.1.101" })
    .useReactNative({
      networking: {
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      },
    })
    .use(reactotronRedux(), asyncStorage())
    .connect();
}

export default reactotron;
