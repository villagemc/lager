import { SeasonCardStruct } from "@/utils/sections/seasons/types"
import styles from "./styles.module.css"
import { useTranslation } from "react-i18next"

interface SeasonCardProps {
  card: SeasonCardStruct
  slideId: number
}

export default function SeasonCard({ card, slideId }: SeasonCardProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.card} style={{
      '--color': card.id % 2 === 0 ? "var(--color-green)" : "var(--color-yellow)",
      transform: `translateX(calc(-100% * ${slideId}))`
    }}>
      <img
        className={styles.image}
        src={card.image}
        alt={t('IMAGE_ALT')}
      />
      <div className={styles.overlay}>
        <div className={styles.disc}>
          <h3 className={styles.title}>{t(card.name)}</h3>
          <p className={styles.subtitle}>{t(card.description)}</p>
        </div>
      </div>
    </div>
  )
}
