import { useCallback, useMemo } from 'react'
import { Collapse, Flex, Grid } from 'antd'
import { MdAdd } from "react-icons/md"
import type { CollapseProps } from 'antd'
import { FAQS } from '@/utils/sections/faqs'
import { useTranslation } from 'react-i18next'
import { FaqStruct } from '@/utils/sections/faqs/types'
import TitleSection from '@/components/TitleSection'
import Container from '@/components/Container'
import Section from '@/components/Section'
import styles from "./styles.module.css"

const { useBreakpoint } = Grid

interface QuestionCollapseProps {
  items: CollapseProps['items'];
}

const QuestionCollapse = ({ items }: QuestionCollapseProps) => (
  <Collapse
    className={styles.collapses}
    bordered={false}
    expandIconPosition="end"
    expandIcon={({ isActive }) => (
      <MdAdd className={isActive ? styles.rotate : styles.icon} />
    )}
    items={items}
  />
)

export default function Question() {
  const { t } = useTranslation()
  const { lg } = useBreakpoint()

  const renderItems = useCallback((faq: FaqStruct) => ({
    key: faq.id.toString(),
    label: <span className={styles.collapse}>{t(faq.question)}</span>,
    children: <div className={styles.text}>{t(faq.answer)}</div>,
    headerClass: styles.header,
    className: styles.body,
  }), [t])

  const itemsAll: CollapseProps['items'] = useMemo(() => (
    FAQS.map((faq) => renderItems(faq))
  ), [renderItems])

  const [itemsOne, itemsTwo] = useMemo(() => {
    const oneList: CollapseProps['items'] = []
    const twoList: CollapseProps['items'] = []

    FAQS.forEach((faq) => {
      if (faq.id % 2 === 1) {
        oneList.push(renderItems(faq))
      }

      if (faq.id % 2 === 0) {
        twoList.push(renderItems(faq))
      }
    })

    return [oneList, twoList]
  }, [renderItems])

  return (
    <Section id="question">
      <Container>
        <Flex vertical className={styles.flex}>
          <TitleSection>{t('QUESTION_TITLE')}</TitleSection>
          {!lg && <QuestionCollapse items={itemsAll} />}
          {lg && (
            <div className={styles.grid}>
              <QuestionCollapse items={itemsOne} />
              <QuestionCollapse items={itemsTwo} />
            </div>
          )}
        </Flex>
      </Container>
    </Section>
  );
};