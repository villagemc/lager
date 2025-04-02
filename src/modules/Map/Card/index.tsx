import { GoCopy } from "react-icons/go"
import { Fragment } from "react/jsx-runtime"
import { useTranslation } from "react-i18next"
import { Button, Flex, notification } from "antd"
import { MapStruct } from "@/utils/sections/maps/types"
import styles from "./styles.module.css"

interface CardProps {
  card: MapStruct
}

export default function Card({ card }: CardProps) {
  const [api, contextHolder] = notification.useNotification()

  const { t } = useTranslation()

  const onCopy = () => {
    window.navigator.clipboard.writeText(card.description)
      .then(() => (
        api.success({
          message: t('COPY', {
            text: card.description
          }),
        })
      ))
      .catch(() => (
        api.error({
          message: t('COPY_ERROR', {
            text: card.description
          }),
        })
      ))
  }

  return (
    <Fragment>
      {contextHolder}
      <Flex align="center" gap={15} justify="space-between" className={styles.card}>
        <Flex vertical gap={6}>
          <span className={styles.name}>{t(card.name)}</span>
          <span className={styles.description}>{t(card.description)}</span>
        </Flex>
        <Button
          color="green"
          variant="filled"
          onClick={onCopy}
          className={styles.button}
          icon={<GoCopy className={styles.icon} />}
        />
      </Flex>
    </Fragment>
  )
}
