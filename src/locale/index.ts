import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ru from "@/locale/ru"
import kz from "@/locale/kz"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      kz: { translation: kz },
    },
    lng: localStorage.getItem("language") || "ru",
    fallbackLng: ["ru", "kz"],
    interpolation: {
      escapeValue: false
    }
  })

export default i18n