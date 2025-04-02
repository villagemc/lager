import { Rate } from "antd"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { AboutStruct } from "@/utils/sections/abouts/types"
import styles from "./styles.module.css"

interface CardProps {
  card: AboutStruct
  index: number
}

export default function Card({ card, index }: CardProps) {
  const { ref, inView } = useInView({ threshold: 0 })

  const { t } = useTranslation()

  return (
    <li ref={ref} className={inView ? styles.card_active : styles.card}>
      <div className={styles.rate}>
        <Rate disabled defaultValue={1} count={1} />
        <div className={inView ? styles.gradient_animation : styles.gradient} />
      </div>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            {t(card.name)}
          </h3>
          <p className={styles.description}>
            {t(card.description)}
          </p>
        </div>
        <div className={styles.images} style={{
          borderColor: 3 * index + index === index
            ? "var(--color-yellow)"
            : "var(--color-bluz"
        }}>
          <img
            src={card.image}
            alt={t('IMAGE_ALT')}
            className={styles.image}
          />
        </div>
      </div>
    </li>
  )
}
