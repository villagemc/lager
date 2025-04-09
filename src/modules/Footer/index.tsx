import { Button, Flex } from "antd"
import { DOCS } from "@/utils/sections/docs"
import { Fragment } from "react/jsx-runtime"
import { useTranslation } from "react-i18next"
import { TRACKS } from "@/utils/sections/tracks"
import { CONTACTS } from "@/utils/sections/contacts"
import { NAVIGATIONS } from "@/utils/sections/navigations"
import LogoImage from "@/images/footer_logo.svg"
import Container from "@/components/Container"
import FooterImage from "@/images/footer.svg"
import styles from "./styles.module.css"
import Marquee from "react-fast-marquee"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <Container className={styles.content}>
        <Flex vertical gap={58} className={styles.container}>
          <img
            alt={t('IMAGE_ALT')}
            className={styles.mag}
            src={FooterImage}
          />

          <Flex className={styles.header} gap={58} justify="space-between">
            <Flex className={styles.head} align="center" vertical>
              <img
                src={LogoImage}
                alt={t('IMAGE_ALT')}
                className={styles.logo}
              />
              <h2 className={styles.title}>
                Zvezdnyy<br />Burabai
              </h2>
            </Flex>
            <Flex className={styles.sections}>
              <Flex vertical gap={20}>
                <h4 className={styles.name}>{t('FOOTER_SECTION')}</h4>
                <Flex className={styles.links} vertical gap={20}>
                  {NAVIGATIONS.map((nav) => (
                    <a className={styles.link} key={nav.id} href={nav.href}>{t(nav.name)}</a>
                  ))}
                </Flex>
              </Flex>
              <Flex vertical gap={20}>
                <h4 className={styles.name}>{t('FOOTER_DOCX')}</h4>
                <Flex className={styles.links} vertical gap={20}>
                  {DOCS.map((doc) => (
                    <a className={styles.link} key={doc.id} href={doc.href}>{t(doc.name)}</a>
                  ))}
                </Flex>
              </Flex>
              <Flex vertical gap={20}>
                <h4 className={styles.name}>{t('FOOTER_CONTACT')}</h4>
                <Flex className={styles.buttons} vertical gap={20}>
                  {CONTACTS.map((contact) => (
                    <Button
                      key={contact.id}
                      type="link"
                      size="large"
                      color="default"
                      variant="outlined"
                      href={contact.href}
                      className={styles.button}
                    >
                      {contact.trans ? t(contact.name) : contact.name}
                    </Button>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex className={styles.mask} align="center">
            <Marquee pauseOnHover speed={75} gradient={false}>
              <Flex className={styles.gap} align="center">
                {TRACKS.map((track) => (
                  <Fragment key={track.id}>
                    <span className={styles.text} key={track.id}>{t(track.name)}</span>
                    <span className={styles.text}>•</span>
                  </Fragment>
                ))}
              </Flex>
              <Flex className={styles.gap} align="center">
                {TRACKS.map((track) => (
                  <Fragment key={track.id}>
                    <span className={styles.text} key={track.id}>{t(track.name)}</span>
                    <span className={styles.text}>•</span>
                  </Fragment>
                ))}
              </Flex>
            </Marquee>
          </Flex>

          <div className={styles.end}>
            <span className={styles.end_text}>{t('FOOTER_COPYRIGHT', { year: new Date().getFullYear() })}</span>
            <Flex className={styles.end_flex} vertical align="center" gap={3}>
              <span className={styles.end_color}>{t('FOOTER_DESIGN')}</span>
              <span className={styles.end_author}>Dergachev Danil</span>
            </Flex>
            <a className={styles.end_link}>{t('FOOTER_POLITIC')}</a>
          </div>
        </Flex>
      </Container>
    </footer>
  )
}
