import { useState } from "react"
import { Button, Flex, Grid } from "antd"
import { useTranslation } from "react-i18next"
import { REVIEWS } from "@/utils/sections/reviews"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import MapImage from "@/images/map/map.svg"
import Section from "@/components/Section"
import styles from "./styles.module.css"
import Card from "./Card"

const { useBreakpoint } = Grid

export default function Review() {
  const [activeId, setActiveId] = useState(0)

  const { t } = useTranslation()
  const { lg } = useBreakpoint()

  const minusClick = () => setActiveId(activeId - 1)
  const plusClick = () => setActiveId(activeId + 1)

  return (
    <Section id="review">
      <Container className={styles.grid}>
        <Flex className={styles.flex} align="center" gap={15}>
          <img
            className={styles.image}
            alt={t('IMAGE_ALT')}
            src={MapImage}
          />
          <TitleSection>
            {t('REVIEW_TITLE')}
          </TitleSection>
        </Flex>
        <Flex className={styles.buttons} gap={12} align="stretch">
          <Button
            block={!lg}
            className={styles.button}
            disabled={activeId <= 0}
            shape={lg ? "circle" : "default"}
            icon={<FaArrowLeft />}
            onClick={minusClick}
          />
          <Button
            block={!lg}
            className={styles.button}
            disabled={activeId >= REVIEWS.length - 1}
            shape={lg ? "circle" : "default"}
            icon={<FaArrowRight />}
            onClick={plusClick}
          />
        </Flex>
        <Flex gap={20} align="stretch" className={styles.cards}>
          {REVIEWS.length > 0 && REVIEWS.map((review) => (
            <Card
              card={review}
              key={review.id}
              activeId={activeId}
            />
          ))}
          {REVIEWS.length <= 0 && t('EMPTY')}
        </Flex>
      </Container>
    </Section>
  )
}
