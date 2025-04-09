import { Trans, useTranslation } from "react-i18next"
import { CampMarkStruct } from "@/utils/sections/camps/types"
import styles from "./styles.module.css"

interface CampMarkProps {
  mark: CampMarkStruct
}

export default function CampMark({ mark }: CampMarkProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.mark}>
      {mark.icon && <img className={styles.icon} src={mark.icon} alt={t('IMAGE_ALT')} />}
      <span className={styles.desc}>
        <Trans>{mark.mark}</Trans>
      </span>
    </div>
  )
}
