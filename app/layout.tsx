import './globals.css';

export const metadata = {
  title: 'Next.JS With BackEnd!',
  description: 'Learning Next.JS With BackEnd',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
};