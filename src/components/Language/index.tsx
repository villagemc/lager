import { useMemo } from "react"
import { Button, Dropdown } from "antd"
import { IoIosArrowDown } from "react-icons/io"
import { MenuItemType } from "antd/es/menu/interface"
import styles from "./styles.module.css"
import i18n from "@/locale"

export default function Language() {
  const { language, languages } = i18n

  const items = useMemo(() => (
    languages.map((lang): MenuItemType => ({
      key: lang,
      label: <span className={styles.button}>{lang.toUpperCase()}</span>,
      onClick: (eventLang) => {
        i18n.changeLanguage(eventLang.key)
        localStorage.setItem("language", eventLang.key);
      }
    }))
  ), [languages])

  return (
    <Dropdown menu={{ items }}>
      <Button className={styles.button} color="default" variant="filled" shape="round" size="large">
          {language.toUpperCase()}
          <IoIosArrowDown className={styles.button} />
      </Button>
    </Dropdown>
  )
}
