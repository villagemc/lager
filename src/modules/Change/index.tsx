import { Divider, Flex } from "antd"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CHANGES } from "@/utils/sections/changes"
import TitleSection from "@/components/TitleSection"
import Container from "@/components/Container"
import Section from "@/components/Section"
import ChangeButton from "./ChangeButton"
import styles from "./styles.module.css"
import ChangePlan from "./ChangePlan"

export default function Change() {
  // Дефолтное значение времени года
  const [activeId, setActiveId] = useState(3)

  const { t } = useTranslation()

  const onSetActiveId = (id: number) => setActiveId(id)

  return (
    <Section id="change">
      <Container>
        <TitleSection className={styles.title}>
          {t('CHANGE_TITLE')}
        </TitleSection>
        <Flex gap={9} wrap justify="center" className={styles.flex}>
          {CHANGES.map((change) => (
            <ChangeButton
              key={change.id}
              change={change}
              activeId={activeId}
              onSetActiveId={onSetActiveId}
            />
          ))}
        </Flex>
        {CHANGES[activeId - 1].plans.length < 1 && (
          <Divider plain>{t('EMPTY')}</Divider>
        )}
        {CHANGES[activeId - 1].plans.length > 0 && (
          <div className={styles.flex_month}>
            {CHANGES[activeId - 1].plans.map((plan) => (
              <ChangePlan key={plan.id} plan={plan} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
