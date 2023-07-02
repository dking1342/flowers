import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prefix } from '../utils/prefix';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = cookies().getAll();
  const url = prefix();

  if (cookie.length) {
    return (
      <section
        className={montserrat.className}
        lang="en"
        suppressHydrationWarning
      >
        {children}
      </section>
    );
  } else {
    redirect(`${url.url.API_URL}/login`);
  }
}
