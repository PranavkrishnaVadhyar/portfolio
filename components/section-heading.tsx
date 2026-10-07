import type { ReactNode } from "react"
export function SectionHeading({ index, label, title, children }: { index: string; label: string; title: ReactNode; children?: ReactNode }) {
 return <header className="section-heading"><p className="section-kicker"><span>{index}</span> / {label}</p><h2>{title}</h2>{children && <p className="section-description">{children}</p>}</header>
}
