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
      <body>{children}</body>
    </html>
  )
}
