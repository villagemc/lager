import { Flex } from "antd"
import { useTranslation } from "react-i18next"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import MapImage from "@/images/map/map.svg"
import Section from "@/components/Section"
import styles from "./sty;es.module.css"
import { MAPS } from "@/utils/sections/maps"
import Card from "./Card"

export default function Map() {
  const { t } = useTranslation()

  return (
    <Section id="map">
      <Container className={styles.content}>
        <Flex className={styles.flex} align="center" gap={16}>
          <img
            alt={t('IMAGE_ALT')}
            className={styles.image}
            src={MapImage}
          />
          <TitleSection className={styles.title}>{t('MAP_TITLE')}</TitleSection>
        </Flex>
        <iframe
          allowFullScreen
          className={styles.frame}
          src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A52.95691159357149%2C%22lon%22%3A70.38472652435304%2C%22zoom%22%3A15%7D%2C%22opt%22%3A%7B%22city%22%3A%22kokshetau%22%7D%2C%22org%22%3A%2270000001065305183%22%7D"
          height="100%"
          width="100%"
        />
        <div className={styles.cards}>
          {MAPS.map((map) => (
            <Card key={map.id} card={map} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
