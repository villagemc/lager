import { Flex, Rate, Typography } from "antd"
import { useTranslation } from "react-i18next"
import { TfiArrowTopRight } from "react-icons/tfi"
import { ReviewStruct } from "@/utils/sections/reviews/types"
import styles from "./styles.module.css"

interface CardProps {
  activeId: number
  card: ReviewStruct
}

const { Link } = Typography

export default function Card({ activeId, card }: CardProps) {
  const { t } = useTranslation()

  const transform = `translateX(calc((-100% * ${activeId}) - (${activeId} * 20px)))`;
  return (
    <div className={styles.card} style={{ transform }}>
      <div className={styles.header}>
        <Flex className={styles.vertical} vertical gap={6}>
          <h5 className={styles.title}>{card.name}</h5>
          <Link className={styles.link} href="https://2gis.kz/kokshetau/firm/70000001065305183/tab/reviews">
            <Flex align="center" gap={3}>
              {t('VIEW')} <TfiArrowTopRight className={styles.icon} />
            </Flex>
          </Link>
        </Flex>
        <Rate
          disabled
          defaultValue={card.rang}
          className={styles.rate}
        />
      </div>
      <div className={styles.block}>
        <p className={styles.text}>
          {card.description}
        </p>
      </div>
    </div>
  )
}
