import { useTranslation } from "react-i18next"
import { Card, Flex, Row, Col, Typography, Grid } from "antd"
import Navigations from "@/components/Navigations"
import MobileMenu from "@/components/MobileMenu"
import Container from "@/components/Container"
import Language from "@/components/Language"
import LogoImage from '@/images/logo.svg'
import styles from "./styles.module.css"
import Book from "@/components/Book"

const { Link, Text } = Typography

const { useBreakpoint } = Grid

export default function TopBar() {
  const { t } = useTranslation()
  const { lg } = useBreakpoint()

  return (
    <Container className={styles.header}>
      <Card className={styles.content} type="inner">
        <Row wrap={false} gutter={[20, 0]} align="middle">
          <Col flex="120px">
            <Link href="/">
              <Flex gap={6}>
                <img
                  src={LogoImage}
                  alt={t('IMAGE_ALT')}
                  className={styles.logo__image}
                  style={{ width: lg ? 48 : 32 }}
                />
                <Text className={styles.logo__name} strong>
                  Zvezdnyy Burabai
                </Text>
              </Flex>
            </Link>
          </Col>
          <Col flex="auto">
            {lg && <Navigations mode="horizontal" />}
          </Col>
          <Col flex="none">
            <Language />
          </Col>
          {lg && (
            <Col flex="none">
              <Book />
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
