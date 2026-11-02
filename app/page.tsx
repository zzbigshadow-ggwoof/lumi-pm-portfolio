import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import AppPrototype from '@/components/app/AppPrototype';
import RevealOnScroll from '@/components/RevealOnScroll';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import { profile } from '@/data/profile';
import { lumi } from '@/data/lumi';

export default function Home() {
  return (
    <div className="mx-auto max-w-site px-6">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden py-20">
        {/* 极缓呼吸的背景光晕，无粒子/流光 */}
        <div
          aria-hidden
          className="halo pointer-events-none absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-mint/[0.07] blur-[110px]"
        />
        <p className="enter mb-4 text-sm tracking-widest text-mint" style={{ animationDelay: '0ms' }}>
          {profile.role}
        </p>
        <h1
          className="enter max-w-3xl text-3xl font-semibold leading-snug text-white md:text-5xl md:leading-tight"
          style={{ animationDelay: '120ms' }}
        >
          {profile.oneLiner}
        </h1>
        <div className="enter mt-8 flex flex-wrap gap-4" style={{ animationDelay: '260ms' }}>
          <Link
            href="/projects/lumi"
            className="lift rounded-lg bg-mint px-6 py-3 text-sm font-medium text-ink hover:opacity-90"
          >
            查看 Lumi 项目 →
          </Link>
          <a
            href={profile.pdfUrl}
            className="lift rounded-lg border border-mint/50 px-6 py-3 text-sm text-mint hover:bg-mint hover:text-ink"
          >
            下载 PDF 作品集
          </a>
        </div>
      </section>

      {/* 核心项目入口 */}
      <RevealOnScroll>
        <section className="py-16">
          <SectionTitle index="FEATURED" title="核心项目" />
          <Link
            href="/projects/lumi"
            className="lift group block overflow-hidden rounded-2xl border border-line bg-surface hover:border-mint/50"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="mb-4 flex flex-wrap gap-2">
                  {lumi.hero.roleTags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-mint">
                  {lumi.hero.title}
                </h3>
                <p className="mt-2 text-sm text-mint">{lumi.hero.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-body">{lumi.hero.oneLiner}</p>
                <p className="mt-6 inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-mint">
                  进入项目
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </p>
              </div>
              <div className="p-6 md:p-8">
                <ImagePlaceholder label="Lumi 脑波灯实物" src="/images/lamp-desk.jpg" ratio="aspect-[4/3] md:aspect-auto md:h-full" />
              </div>
            </div>
          </Link>
        </section>
      </RevealOnScroll>

      {/* 配套 APP 入口 */}
      <RevealOnScroll>
        <section className="py-16">
          <SectionTitle index="SOFTWARE" title="配套 APP" desc="硬件的遥控器与说明书，含可点击的交互原型。" />
          <div className="grid gap-0 md:grid-cols-2">
            <div className="order-2 p-6 md:order-1 md:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {['ToC', '移动端', '硬件交互'].map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <h3 className="text-2xl font-semibold text-white">脑波灯配套 APP</h3>
              <p className="mt-2 text-sm text-mint">三种模式 · 灯光调节 · 冥想计时</p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                把一台没有屏幕的硬件，压缩成一个普通人能看懂、能按的界面。
                连接设备、调灯光颜色、选音效与时长，到冥想结束。
              </p>
              <Link
                href="/projects/app"
                className="mt-6 inline-flex items-center gap-1 text-sm text-mint hover:underline"
              >
                体验交互原型
                <span>→</span>
              </Link>
            </div>
            <div className="order-1 flex items-center justify-center overflow-hidden bg-[#22261f] p-4 md:order-2 md:p-6">
              <div className="origin-center scale-[0.78]">
                <AppPrototype />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 其他入口 */}
      <section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { href: '/projects', title: '其他项目', desc: '增长 / 平台化 / 数据工具等轻量项目合集' },
            { href: '/notes', title: '笔记 / 复盘', desc: '脑机行业思考、竞品笔记与工程复盘' },
            { href: '/about', title: 'About 我', desc: '我的脑机产品方法论、能力栈与联系方式' },
          ].map((c, i) => (
            <RevealOnScroll key={c.href} delay={i * 90}>
              <Link
                href={c.href}
                className="lift group block h-full rounded-2xl border border-line bg-surface p-8 hover:border-mint/50"
              >
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-mint">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
                <p className="mt-6 inline-flex items-center gap-1 text-sm text-mint">
                  进入
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 能力标签 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <p className="mb-6 text-xs tracking-widest text-muted">CORE CAPABILITIES</p>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((s, i) => (
              <span key={s} className="enter" style={{ animationDelay: `${i * 60}ms` }}>
                <Tag>{s}</Tag>
              </span>
            ))}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
