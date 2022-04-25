import {createSSRApp} from "vue";
import App from "./App.vue";

import {Http} from "./utils/Http.js"

export function createApp() {
  const app = createSSRApp(App);
  app.config.globalProperties.$http = (url) => {
    return new Http(url)
  }

  return {
    app,
  };
}
