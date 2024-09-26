import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/tutor"></Link>
        <Link href="/pets"></Link>
      </nav>
      <div>{children}</div>
    </>
  )
}