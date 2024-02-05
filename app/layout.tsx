import '@/app/assets/fontawesome/css/fontawesome.min.css';
import '@/app/assets/fontawesome/css/brands.min.css'
import '@/app/assets/fontawesome/css/solid.min.css'
import '@/app/global.css'
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
