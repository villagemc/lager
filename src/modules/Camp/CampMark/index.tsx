import { Trans } from "react-i18next"
import { CampMarkStruct } from "@/utils/sections/camps/types"
import styles from "./styles.module.css"

interface CampMarkProps {
  mark: CampMarkStruct
}

export default function CampMark({ mark }: CampMarkProps) {
  const ComponentIcon = mark.icon

  return (
    <div className={styles.mark}>
      {ComponentIcon && <ComponentIcon className={styles.icon} />}
      <span className={styles.desc}>
        <Trans>{mark.mark}</Trans>
      </span>
    </div>
  )
}
