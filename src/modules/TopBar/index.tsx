import { useTranslation } from "react-i18next"
import { Card, Row, Col, Typography, Grid } from "antd"
import Navigations from "@/components/Navigations"
import MobileMenu from "@/components/MobileMenu"
import Container from "@/components/Container"
import Language from "@/components/Language"
import LogoImage from '@/images/logo.svg'
import styles from "./styles.module.css"
import Book from "@/components/Book"

const { Link } = Typography

const { useBreakpoint } = Grid

export default function TopBar() {
  const { t } = useTranslation()
  const { lg } = useBreakpoint()

  return (
    <Container className={styles.header}>
      <Card className={styles.content} type="inner">
        <Row wrap={false} gutter={[20, 0]} align="middle">
          <Col flex="120px">
            <Link href="/" className={styles.logo}>
              <img src={LogoImage} alt={t('IMAGE_ALT')} />
            </Link>
          </Col>
          <Col flex="auto">
            {lg && <Navigations mode="horizontal" />}
          </Col>
          <Col flex="none" style={{ padding: 0 }}>
            <Language />
          </Col>
          {lg && (
            <Col flex="none">
              <Book buttonClassName={styles.button} />
            </Col>
          )}
          {!lg && (
            <Col flex="none" className={styles.col_menu}>
              <MobileMenu />
            </Col>
          )}
        </Row>
      </Card>
    </Container>
  )
}
