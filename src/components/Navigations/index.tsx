import { useMemo } from "react"
import { Menu, MenuProps } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { NAVIGATIONS } from "@/utils/sections/navigations"
import styles from "./styles.module.css"
import { useTranslation } from "react-i18next"

interface NavigationsProps {
  mode: MenuProps['mode']
  onClick?(): void
}

export default function Navigations({ mode, onClick }: NavigationsProps) {
  const { t } = useTranslation()

  const item = useMemo(() => (
    NAVIGATIONS.find((navigation) => navigation.href === window.location.hash)
  ), [])

  const items = useMemo(() => (
    NAVIGATIONS.map((navigation): MenuItemType => ({
      onClick,
      key: navigation.id,
      label: <a href={navigation.href} className={styles.link}>{t(navigation.name)}</a>,
    }))
  ), [t, onClick])

  return (
    <Menu
      mode={mode}
      items={items}
      className={styles.nav}
      defaultSelectedKeys={[String(item?.id || 0)]}
    />
  )
}


