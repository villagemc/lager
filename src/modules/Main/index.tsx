import { Flex } from "antd"
import { ReactNode } from "react"
import styles from "./styles.module.css"

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <main className={styles.main}>
      <Flex className={styles.flex} vertical>{children}</Flex>
    </main>
  )
}
