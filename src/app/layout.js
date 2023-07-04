import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata = {
  title: 'Gardenia',
  description: 'Generated by Gardenia created by es_developer(Chandan Sayed)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} text-defaultColor`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
