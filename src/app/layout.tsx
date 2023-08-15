import './globals.css'
import type { Metadata } from 'next'
import '@fontsource/iosevka'

export const metadata: Metadata = {
  title: 'Você viu Ágata?',
  description:
    'Jogo de terror virtual sobre uma garota especial que tem paixão pelo mistério.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}
