import { Flex } from "antd"
import { CgArrowsHAlt } from "react-icons/cg"
import { useTranslation } from "react-i18next"
import { GALLERIES_ONE, GALLERIES_TWO } from "@/utils/sections/galleries"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import Section from "@/components/Section"
import styles from "./styles.module.css"

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <Section id="gallery">
      <Flex vertical className={styles.flex}>
        <Container>
          <TitleSection>
            {t('GALLERY_TITLE')}
            <span className={styles.arrow}><CgArrowsHAlt /></span>
          </TitleSection>
        </Container>
        <Flex vertical className={styles.block}>
          <Flex className={styles.list}>
            {GALLERIES_ONE.map((gallery) => (
              <img
                key={gallery.id}
                src={gallery.image}
                alt={t('IMAGE_ALT')}
                className={styles.image}
              />
            ))}
          </Flex>
          <Flex className={styles.list}>
            {GALLERIES_TWO.map((gallery) => (
              <img
                key={gallery.id}
                src={gallery.image}
                alt={t('IMAGE_ALT')}
                className={styles.image}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  )
}
