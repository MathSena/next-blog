import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mathsena.dev',
  description: 'Tech, lifestyle, travel and photography!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="container">{children}</div>
        <div className="footer">{children}</div>
      </body>
    </html>
  )
}
