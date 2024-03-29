import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import AuthSessionProvider from '@/components/providers/session-provider';
import { Toaster } from '@/components/ui/toaster';
import AuthButtons from '@/components/authButton';
import Link from 'next/link';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLogin = !!cookies().get('next-auth.session-token');
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <AuthSessionProvider>
          <main>
            <div className="h-[48px] bg-grey flex items-center">
              <Link href="/" className="text-black text-lg font-bold">
                대충 사이트 이름
              </Link>
              <ul className="ml-auto mr-5">
                <li>
                  <AuthButtons isLogin={isLogin} />
                </li>
              </ul>
            </div>
            {children}
          </main>
          <Toaster />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
