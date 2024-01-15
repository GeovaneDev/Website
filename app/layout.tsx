export const metadata = {
  title: 'GeovaneDev',
  description: 'GeovandeDev, um entusiasta da tecnologia com apenas 16 anos, é um desenvolvedor iniciante apaixonado pelo universo open source.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
