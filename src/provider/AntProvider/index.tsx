import { ReactNode } from "react"
import { ConfigProvider, Layout, theme } from "antd"
import styles from "./styles.module.css"

interface AntProviderProps {
  children: ReactNode
}

const isDark = false

export default function AntProvider({ children }: AntProviderProps) {
  return (
    <ConfigProvider theme={{
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: 'green',
      },
      components: {
        Typography: {
          fontFamily: 'var(--font-nunito)',
        },
        Menu: {
          colorPrimary: 'var(--color-green)',
          itemSelectedBg: 'var(--color-green-hover)',
          lineWidth: 0,
        },
        Layout: {
          bodyBg: isDark
            ? 'var(--color-black)'
            : 'var(--color-white)',
        },
        Button: {
          colorPrimaryHover: 'var(--color-green)',
          green1: 'rgba(var(--green), .2)',
          green5: 'rgba(var(--green), .8)',
          green6: 'var(--color-green)',
          green2: 'rgba(var(--green), .1)',
          green7: 'rgba(var(--green), .6)',
        },
        Rate: {
          starBg: 'rgba(var(--feil), .4)',
        },
      }
    }}>
      <Layout className={styles.layout}>
        {children}
      </Layout>
    </ConfigProvider>
  )
}
