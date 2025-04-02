import { Button } from "antd"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { SeasonStruct } from "@/utils/sections/seasons/types"
import styles from "./styles.module.css"

interface SeasonButtonProps {
  activeId: number
  season: SeasonStruct
  onSetActiveId(id: number): void
  onSetSlideId(id: number): void
}

export default function SeasonButton({ season, activeId, onSetActiveId, onSetSlideId }: SeasonButtonProps) {
  const { ref, inView } = useInView({ threshold: 0 })
  const { t } = useTranslation()

  const handleCLick = () => {
    onSetActiveId(season.id)
    onSetSlideId(0)
  }

  return (
    <Button
      ref={ref}
      size="large"
      style={{ animationDelay: `${season.id * 0.15}s` }}
      color={activeId === season.id ? "green" : "default"}
      variant={activeId === season.id ? "filled" : "outlined"}
      className={inView ? styles.animate_active : styles.animate}
      onClick={handleCLick}
    >
      {t(season.name)} {season.icon}
    </Button>
  )
}
