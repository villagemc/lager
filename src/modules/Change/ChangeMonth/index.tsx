import { Flex } from "antd"
import { useTranslation } from "react-i18next"
import { ChangeMonthStruct } from "@/utils/sections/changes/types"
import styles from "./styles.module.css"

interface ChangeMonthProps {
  month: ChangeMonthStruct
}

export default function ChangeMonth({ month }: ChangeMonthProps) {
  const { t } = useTranslation()

  const formatter = new Intl.NumberFormat('kk-KZ', {
    style: 'currency',
    currency: 'KZT',
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol'
  });

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Flex gap={16} vertical>
          <Flex gap={10} align="center">
            <Flex
              align="center"
              justify="center"
              className={styles.overlay}
              style={{ backgroundColor: month.id % 2 !== 0 ? "var(--color-green)" : "var(--color-yellow)" }}
            >
              {month.id}
            </Flex>
            <span className={styles.title}>{t('CHANGE_ONE')}</span>
          </Flex>
          <span className={styles.text_desktop}>
            {`${t('CHANGE_CHECK_IN')} ${month.start} - ${month.end} ${t('CHANGE_EXIT')}`}
          </span>
          <Flex className={styles.tablet} vertical gap={8}>
            <p>{`${t('CHANGE_CHECK_IN')} ${month.start}`}</p>
            <p>{`${t('CHANGE_EXIT')} ${month.end}`}</p>
          </Flex>
        </Flex>
        <div className={styles.divider} />
        <div className={styles.desc}>
          <span className={styles.price}>{formatter.format(month.price).replace('KZT', '₸')}</span>
          {month.out_price && (
            <span className={styles.out_price}>
              <s>{formatter.format(month.out_price).replace('KZT', '₸')}</s>  
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
