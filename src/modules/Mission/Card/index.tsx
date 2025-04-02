import { Flex, Typography } from "antd"
import { useTranslation } from "react-i18next"
import { MissonStruct } from "@/utils/sections/missions/types"
import styles from "./styles.module.css"

interface CardProps {
  card: MissonStruct
}

const { Text } = Typography

export default function Card({ card }: CardProps) {
  const { t } = useTranslation()

  return (
    <Flex vertical gap={16} className={styles.card}>
      <h4 className={styles.title}>{t(card.name)}</h4>
      <Text className={styles.subtitle}>{t(card.description)}</Text>
    </Flex>
  )
}
