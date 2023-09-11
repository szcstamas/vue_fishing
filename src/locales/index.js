import { createI18n } from "vue-i18n";
import en from "./languages/en.json";
import hu from "./languages/hu.json";
import es from "./languages/es.json";

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    hu,
    es,
  },
});

export default i18n;
