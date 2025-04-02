import { Button, Flex, Modal } from "antd"
import { useState } from "react"
import { Fragment } from "react/jsx-runtime"
import { GiHamburgerMenu } from "react-icons/gi"
import Navigations from "@/components/Navigations"
import styles from './styles.module.css'
import Book from "@/components/Book"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onToggle = () => setIsOpen(!isOpen)

  return (
    <Fragment>
      <Button
        size="large"
        color="green"
        shape="round"
        variant="solid"
        onClick={onToggle}
        icon={(
          <GiHamburgerMenu
            className={styles.menu}
          />
        )}
      />
      <Modal
        width={1000}
        open={isOpen}
        footer={null}
        closable={false}
        onCancel={onClose}
        className={styles.modal}
      >
        <Flex vertical gap={30}>
          <Navigations mode="vertical" onClick={onClose} />
          <Book />
        </Flex>
      </Modal>
    </Fragment>
  )
}
