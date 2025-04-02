import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { HelmetProvider, Helmet } from "react-helmet-async"

interface HelmetAppProviderProps {
  children: ReactNode;
}

export default function HelmetAppProvider({ children }: HelmetAppProviderProps) {
  const { t, i18n } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("META_TITLE")}</title>
        <meta name="title" content={t("META_TITLE")} />
        <meta name="description" content={t("META_DESCRIPTION")} />
      </Helmet>
      {children}
    </HelmetProvider>
  );
}
