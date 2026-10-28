import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lumi PM Portfolio · 软硬一体脑机方向产品经理',
  description: '非侵入式脑机接口方向产品经理作品集：Lumi 脑波感知疗愈生态（软硬一体 ToB2ToC 项目）。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
