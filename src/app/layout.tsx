import './styles/globals.sass';
import { Montserrat } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import { cookies } from 'next/headers';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Airlie Mockup',
  description: 'Generic site showcasing product offering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = cookies().getAll();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className} cz-shortcut-listen="false">
        <Navbar cookie={cookie} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
