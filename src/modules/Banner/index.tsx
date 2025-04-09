import { Flex } from "antd"
import { useTranslation } from "react-i18next"
import Container from "@/components/Container"
import Section from "@/components/Section"
import styles from "./styles.module.css"
import Book from "@/components/Book"

export default function Banner() {
  const { t } = useTranslation()

  return (
    <Section id="banner">
      <Container>
        <div className={styles.container}>
          <Flex className={styles.flex} gap={28} align="center" justify="space-between">
            <h4 className={styles.title}>{t('PUSH_BOOK')}</h4>
            <div className={styles.book}>
              <Book buttonClassName={styles.button} />
            </div>
          </Flex>
        </div>
      </Container>
    </Section>
  )
}
