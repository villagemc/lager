import { Divider } from "antd"
import { useTranslation } from "react-i18next"
import { ChangePlanStruct } from "@/utils/sections/changes/types"
import styles from "./styles.module.css"
import ChangeMonth from "../ChangeMonth"

interface ChangePlanProps {
  plan: ChangePlanStruct
}

export default function ChangePlan({ plan }: ChangePlanProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.flex}>
      <Divider plain>{t(plan.month)}</Divider>
      <div className={styles.months}>
        {plan.months.map((month) => (
          <ChangeMonth key={month.id} month={month} />
        ))}
      </div>
    </div>
  )
}
