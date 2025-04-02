import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CAMPS } from "@/utils/sections/camps"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import Section from "@/components/Section"
import styles from "./styles.module.css"
import CampButton from "./CampButton"
import CampCard from "./CampCard"

export default function Camp() {
  const { t } = useTranslation()

  const [activeId, setActiveId] = useState(1)

  const onSetActiveId = (id: number) => setActiveId(id)

  return (
    <Section id="camp">
      <Container>
        <TitleSection>
          {t('CAMP_TITLE')}
        </TitleSection>
        <div className={styles.buttons}>
          {CAMPS.map((camp) => (
            <CampButton
              key={camp.id}
              camp={camp}
              activeId={activeId}
              onSetActiveId={onSetActiveId}
            />
          ))}
        </div>
        <ul className={styles.cards}>
          {CAMPS.map((camp) => (
            <CampCard
              key={camp.id}
              camp={camp}
              activeId={activeId}
            />
          ))}
        </ul>
      </Container>
    </Section>
  )
}
