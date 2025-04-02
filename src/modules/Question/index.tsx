import { Collapse, Flex } from 'antd'
import type { CollapseProps } from 'antd'
import { MdAdd } from "react-icons/md"
import { FAQS } from '@/utils/sections/faqs'
import { useTranslation } from 'react-i18next'
import TitleSection from '@/components/TitleSection'
import Container from '@/components/Container'
import Section from '@/components/Section'
import styles from "./styles.module.css"

export default function Question() {
  const { t } = useTranslation()

  const items: CollapseProps['items'] = FAQS.map((faq) => ({
    key: faq.id.toString(),
    label: <span className={styles.collapse}>{t(faq.question)}</span>,
    children: <div className={styles.text}>{t(faq.answer)}</div>,
    headerClass: styles.header,
    className: styles.body,
  }));

  return (
    <Section id="question">
      <Container>
        <Flex vertical className={styles.flex}>
          <TitleSection>{t('QUESTION_TITLE')}</TitleSection>
          <Collapse
            className={styles.collapses}
            bordered={false}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <MdAdd className={isActive ? styles.rotate : styles.icon} />
            )}
            items={items}
          />
        </Flex>
      </Container>
    </Section>
  );
};