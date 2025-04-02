import { AllHTMLAttributes, ReactNode } from "react"
import styles from "./styles.module.css"

interface SectionProps extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>{children}</section>
  )
}
