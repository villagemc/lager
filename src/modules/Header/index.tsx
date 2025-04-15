import { Flex, Grid, Typography } from "antd"
import { Trans, useTranslation } from "react-i18next"
import Image1 from "@/images/header/image1.png"
import Image2 from "@/images/header/image2.png"
import Image3 from "@/images/header/image3.png"
import Image4 from "@/images/header/image4.png"
import Container from "@/components/Container"
import styles from "./styles.module.css"
import Book from "@/components/Book"

const { Text } = Typography

const { useBreakpoint } = Grid

export default function Header() {
  const { t } = useTranslation()
  const { sm } = useBreakpoint()

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Flex className={styles.flex} vertical align="center" justify="center" gap={sm ? 30 : 14}>
          <h1 className={styles.title}>
            <Trans>HOME_TITLE</Trans>
          </h1>
          <Text className={styles.subtitle}>
            <Trans>HOME_SUBTITLE</Trans>
          </Text>
          {sm && <Book buttonClassName={styles.button} />}
        </Flex>
        <img src={Image1} className={styles.image} alt={t('IMAGE_ALT')} />
        <img src={Image2} className={styles.image} alt={t('IMAGE_ALT')} />
        <img src={Image3} className={styles.image} alt={t('IMAGE_ALT')} />
        <img src={Image4} className={styles.image} alt={t('IMAGE_ALT')} />
      </Container>
    </header>
  )
}
