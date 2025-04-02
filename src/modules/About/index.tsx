import { CgArrowsHAlt } from "react-icons/cg"
import { useTranslation } from "react-i18next"
import { ABOUTS } from "@/utils/sections/abouts"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import Section from "@/components/Section"
import styles from "./styles.module.css"
import Card from "./Card"

export default function About() {
  const { t } = useTranslation()

  return (
    <Section id="about" className={styles.about}>
      <Container>
        <TitleSection>
          {t('ABOUT_TITLE')}
          <span className={styles.arrow}><CgArrowsHAlt /></span>
        </TitleSection>
      </Container>
      <ul className={styles.cards}>
        {ABOUTS.map((about, index) => (
          <Card
            key={about.id}
            card={about}
            index={index}
          />
        ))}
      </ul>
    </Section>
  )
}
