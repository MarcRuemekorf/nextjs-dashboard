import '@/app/ui/global.css'
import { flexo } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={flexo.className}>
      <body>{children}</body>
    </html>
  );
}
