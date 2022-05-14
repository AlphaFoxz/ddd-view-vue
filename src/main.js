import {createSSRApp} from "vue";
import App from "./App.vue";
import Particles from 'particles.vue3'
import {InputPassword} from 'ant-design-vue'

import {Http} from "./utils/Http.js"

export function createApp() {
  const app = createSSRApp(App);
  app.use(Particles)
  app.use(InputPassword)
  app.config.globalProperties.$http = (url) => {
    return new Http(url)
  }

  return {
    app,
  };
}
