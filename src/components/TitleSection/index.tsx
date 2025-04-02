import { AllHTMLAttributes, ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import styles from "./styles.module.css"

interface TitleSectionProps extends AllHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export default function TitleSection({ children, className }: TitleSectionProps) {
  const { ref, inView } = useInView({ threshold: 0 })

  return (
    <h2 ref={ref} className={`${inView ? styles.title_active : styles.title} ${className}`}>{children}</h2>
  )
}
