import { Container } from '@/components/ui-components/Container/Container'
import './globals.css'

export const metadata = {
  title: 'RUIX | Registration From',
  description: 'Fill the form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          {children}
        </Container>
        <div id='modal_root'></div>
      </body>
    </html>
  )
}
