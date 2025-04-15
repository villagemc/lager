import { Button } from "antd"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { ChangeStruct } from "@/utils/sections/changes/types"
import styles from "./styles.module.css"

interface ChangeButtonProps {
  change: ChangeStruct
  activeId: number
  onSetActiveId(id: number): void
}

export default function ChangeButton({ change, activeId, onSetActiveId }: ChangeButtonProps) {
  const { t } = useTranslation()

  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <Button
      ref={ref}
      size="large"
      shape="round"
      variant={change.id === activeId ? "filled" : "outlined"}
      color={change.id === activeId ? "green" : "default"}
      onClick={() => onSetActiveId(change.id)}
      className={`${styles.button} ${inView ? styles.animate : ''}`}
      style={{ animationDuration: inView ? `${change.id * 0.1}s` : '' }}
    >
      {t(change.name)} {change.icon}
    </Button>
  )
}
