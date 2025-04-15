import { SeasonCardStruct } from "@/utils/sections/seasons/types"
import styles from "./styles.module.css"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

interface SeasonCardProps {
  card: SeasonCardStruct
  slideId: number
}

export default function SeasonCard({ card, slideId }: SeasonCardProps) {
  const { t } = useTranslation()
  const { inView, ref } = useInView({ threshold: 0 })

  return (
    <div ref={ref} className={`${styles.card} ${inView && styles.card_active}`} style={{
      '--color': card.id % 2 === 0 ? "var(--color-green)" : "var(--color-yellow)",
      transform: `translateX(calc(-100% * ${slideId}))`
    }}>
      <img
        className={styles.image}
        src={card.image}
        alt={t('IMAGE_ALT')}
      />
      <div className={styles.line} />
      <div className={styles.overlay}>
        <div className={styles.disc}>
          <h3 className={styles.title}>{t(card.name)}</h3>
          <p className={styles.subtitle}>{t(card.description)}</p>
        </div>
      </div>
    </div>
  )
}
