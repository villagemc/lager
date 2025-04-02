import { Flex, Typography } from "antd"
import { useTranslation } from "react-i18next"
import { MISSIONS } from "@/utils/sections/missions"
import TitleSection from "@/components/TitleSection"
import StarsImage from "@/images/mission/starts.svg"
import Container from "@/components/Container"
import Section from "@/components/Section"
import styles from "./styles.module.css"
import Card from "./Card"

const { Text } = Typography

export default function Mission() {
  const { t } = useTranslation()

  return (
    <Section className={styles.section} id="mission">
      <div className={styles.overlay} />
      <img
        className={styles.image}
        alt={t('IMAGE_ALT')}
        src={StarsImage}
      />
      <Container className={styles.content}>
        <Flex className={styles.flex} vertical align="center" justify="center">
          <TitleSection className={styles.title}>
            {t('MISSION_TITLE')}
          </TitleSection>
          <Text className={styles.subtitle}>
            {t('MISSION_SUBTITLE')}
          </Text>
        </Flex>
        <div className={styles.grid}>
          {MISSIONS.map((mission) => (
            <Card card={mission} key={mission.id} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
