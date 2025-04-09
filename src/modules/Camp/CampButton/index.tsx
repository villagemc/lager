import { Button } from "antd"
import { Trans } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { CampStruct } from "@/utils/sections/camps/types"
import styles from "./styles.module.css"

interface CampButtonProps {
  camp: CampStruct
  activeId: number
  onSetActiveId(id: number): void
}

export default function CampButton({ camp, activeId, onSetActiveId }: CampButtonProps) {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <Button
      ref={ref}
      className={inView ? styles.button_active : styles.button}
      style={{ animationDelay: inView ? `${camp.id * 0.15}s` : '' }}
      color={activeId === camp.id ? "green" : "default"}
      variant={activeId === camp.id ? "solid" : "filled"}
      onClick={() => onSetActiveId(camp.id)}
      shape="round"
    >
      <Trans>{camp.item}</Trans>
    </Button>
  )
}
