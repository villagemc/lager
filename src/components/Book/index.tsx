import { useState } from "react"
import { Trans } from "react-i18next"
import { Fragment } from "react/jsx-runtime"
import { CONTACTS } from "@/utils/sections/contacts"
import { Button, Grid, Modal, Row, Typography } from "antd"
import styles from './styles.module.css'
import ButtonItem from "./ButtonItem"

const { Title, Text } = Typography

const { useBreakpoint } = Grid

interface BookProps {
  buttonClassName?: string
}

export default function Book({ buttonClassName }: BookProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { sm } = useBreakpoint()

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <Fragment>
      <Button className={buttonClassName} color="green" shape="round" variant="solid" onClick={onOpen} size="large">
        <span className={styles.button}>
          <Trans>SUBMIT_BOOK</Trans>
        </span>
      </Button>
      <Modal centered open={isOpen} footer={null} onCancel={onClose}>
        <Title level={sm ? 1 : 2}>
          <Trans>MODAL_HEADER</Trans>
        </Title>
        <Text>
          <Trans>MODAL_DESCRIPTION</Trans>
        </Text>
        <Row className={styles.row} gutter={[30, 10]}>
          {CONTACTS.map((contact) => (
            <ButtonItem key={contact.id} contact={contact} />
          ))}
        </Row>
      </Modal>
    </Fragment>
  )
}
