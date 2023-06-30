import { Header } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty show',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='container mx-auto'>{children}</main>
      </body>
    </html>
  )
}
