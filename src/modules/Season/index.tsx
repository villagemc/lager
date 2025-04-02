import { useEffect, useState } from "react"
import { Button, Flex, Grid } from "antd"
import { useTranslation } from "react-i18next"
import { SEASONS } from "@/utils/sections/seasons"
import { useInView } from "react-intersection-observer"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import Section from "@/components/Section"
import SectionButton from "./SeasonButton"
import styles from "./styles.module.css"
import SeasonCard from "./SeasonCard"

const { useBreakpoint } = Grid

export default function Season() {
  const { lg } = useBreakpoint()

  const [activeId, setActiveId] = useState(1)
  const [slideId, setSlideId] = useState(0)

  const { t } = useTranslation()
  const { ref, inView } = useInView()

  const onSetActiveId = (id: number) => setActiveId(id)
  const onSetSlideId = (id: number) => setSlideId(id)

  useEffect(() => {
    if (lg) setSlideId(0)
  }, [lg])

  return (
    <Section id="season">
      <Container className={styles.flex}>
        <TitleSection className={styles.title}>
          {t('SEASON_TITLE')}
        </TitleSection>
        <p ref={ref} className={inView ? styles.subtitle_active : styles.subtitle}>{t('SEASON_SUBTITLE')}</p>
      </Container>
      <div className={styles.seasons}>
        {SEASONS.map((season) => (
          <SectionButton
            key={season.id}
            season={season}
            activeId={activeId}
            onSetActiveId={onSetActiveId}
            onSetSlideId={onSetSlideId}
          />
        ))}
      </div>
      <div className={styles.cards}>
        {SEASONS[activeId - 1].cards.map((card) => (
          <SeasonCard
            key={card.id}
            card={card}
            slideId={slideId}
          />
        ))}
      </div>
      <Flex gap={12} className={styles.sliders}>
        <Button
          block
          size="large"
          color="default"
          variant="filled"
          onClick={() => setSlideId(state => state - 1)}
          disabled={slideId === 0}
        >
          <FaArrowLeft />
        </Button>
        <Button
          block
          size="large"
          color="default"
          variant="filled"
          onClick={() => setSlideId(state => state + 1)}
          disabled={slideId === SEASONS[activeId - 1].cards.length - 1}
        >
          <FaArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}
