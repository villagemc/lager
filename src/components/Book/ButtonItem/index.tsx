import { Button, Col } from "antd"
import { useTranslation } from "react-i18next"
import { ContactStruct } from "@/utils/sections/contacts/types"

interface ButtonItemProps {
  contact: ContactStruct
}

export default function ButtonItem({ contact }: ButtonItemProps) {
  const { t } = useTranslation()

  const ComponentIcon = contact.icon

  if (contact.id === 2) return null

  return (
    <Col span={24} lg={{ span: 12 }}>
      <Button size="large" color="green" type="link" href={contact.href} variant="filled" block>
        <ComponentIcon />
        {contact.trans ? t(contact.name) : contact.name}
      </Button>
    </Col>
  )
}
