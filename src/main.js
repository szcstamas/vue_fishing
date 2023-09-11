import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import hu from "./locales/hu.json";
import es from "./locales/es.json";

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    hu,
    es
  },
});

createApp(App).use(store).use(i18n).use(router).mount("#app");
