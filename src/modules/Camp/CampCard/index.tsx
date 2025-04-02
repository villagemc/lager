import { CampStruct } from "@/utils/sections/camps/types"
import { Trans, useTranslation } from "react-i18next"
import styles from "./styles.module.css"
import CampMark from "../CampMark"

interface CampCardProps {
  camp: CampStruct
  activeId: number
}

export default function CampCard({ camp, activeId }: CampCardProps) {
  const { t } = useTranslation()

  return camp.id === activeId && (
    <li className={styles.card}>
      <div className={styles.text}>
        <h3 className={styles.title}>
          <Trans>{camp.name}</Trans>
        </h3>
        <p className={styles.subtitle}>
          <Trans>{camp.description}</Trans>
        </p>
        <div className={styles.marks} style={{
          gridTemplateColumns: camp.marks.length > 2
            ? "repeat(2, 1fr)" : "1fr"
        }}>
          {camp.marks.map((mark) => (
            <CampMark key={mark.id} mark={mark} />
          ))}
        </div>
      </div>
      <img
        className={styles.image}
        alt={t('IMAGE_ALT')}
        src={camp.image}
      />
    </li>
  )
}
