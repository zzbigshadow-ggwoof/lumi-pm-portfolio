import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import RevealOnScroll from '@/components/RevealOnScroll';
import Tag from '@/components/Tag';
import AppPrototype from '@/components/app/AppPrototype';
import { appCase } from '@/data/app';

export const metadata = { title: '脑波灯配套 APP · PM Portfolio' };

export default function AppCasePage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16">
      {/* 头部 */}
      <div className="enter">
        <p className="text-xs tracking-[0.2em] text-mint/70">{appCase.eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{appCase.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">{appCase.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {appCase.meta.map((m, i) => (
          <div
            key={m.label}
            className="enter rounded-xl border border-line bg-surface p-5"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="text-xs text-muted">{m.label}</p>
            <p className="mt-2 text-sm text-white">{m.value}</p>
          </div>
        ))}
      </div>

      {/* 背景 */}
      <section className="mt-20">
        <RevealOnScroll>
          <SectionTitle index="CONTEXT" title={appCase.background.title} />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {appCase.background.body.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-body">
                {p}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* 约束 */}
      <section className="mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {appCase.constraints.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 90}>
              <div className="lift h-full rounded-xl border border-line bg-surface p-5 hover:border-mint/40">
                <h3 className="text-sm font-medium text-mint">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{c.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 原型 */}
      <section className="mt-20">
        <RevealOnScroll>
          <SectionTitle index="PROTOTYPE" title="交互原型" desc={appCase.disclaimer} />
        </RevealOnScroll>
        <div className="mt-10 flex justify-center">
          <AppPrototype />
        </div>
      </section>

      {/* 信息架构 */}
      <section className="mt-20">
        <RevealOnScroll>
          <SectionTitle index="STRUCTURE" title={appCase.structure.title} desc={appCase.structure.desc} />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="text-xs text-muted">主模式</p>
              <ul className="mt-3 space-y-3">
                {appCase.structure.modes.map((m) => (
                  <li key={m.name}>
                    <p className="text-sm text-white">{m.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{m.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="text-xs text-muted">使用场景</p>
              <ul className="mt-3 space-y-3">
                {appCase.structure.scenes.map((m) => (
                  <li key={m.name}>
                    <p className="text-sm text-white">{m.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{m.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="text-xs text-muted">设备管理</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {appCase.structure.device.map((d) => (
                  <Tag key={d}>{d}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="text-xs text-muted">账号体系</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {appCase.structure.account.map((d) => (
                  <Tag key={d}>{d}</Tag>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 关键决策 */}
      <section className="mt-20">
        <RevealOnScroll>
          <SectionTitle index="DECISIONS" title="关键决策" desc="每个决定都标明了代价。" />
        </RevealOnScroll>
        <div className="mt-6 overflow-hidden rounded-xl border border-line">
          <div className="hidden grid-cols-4 border-b border-line bg-surface px-4 py-3 text-xs text-muted md:grid">
            <span>问题</span>
            <span>我的选择</span>
            <span className="col-span-2">理由与取舍</span>
          </div>
          {appCase.decisions.map((d, i) => (
            <RevealOnScroll key={d.problem} delay={i * 90}>
              <div className="grid gap-3 border-b border-line px-4 py-5 text-sm transition hover:bg-mint/[0.04] md:grid-cols-4">
                <p className="text-white">{d.problem}</p>
                <p className="text-mint">{d.choice}</p>
                <div className="col-span-2 space-y-2">
                  <p className="text-xs leading-relaxed text-body">{d.reason}</p>
                  <p className="text-xs leading-relaxed text-muted">取舍：{d.cost}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 结果 */}
      <section className="mt-20">
        <RevealOnScroll>
          <SectionTitle index="OUTCOME" title={appCase.outcome.title} />
          <ul className="mt-6 space-y-3">
            {appCase.outcome.items.map((t, i) => (
              <li
                key={i}
                className="stagger-item flex gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-body"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-mint" />
                {t}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      {/* 返回 */}
      <div className="mt-16 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="lift rounded-full border border-line px-6 py-3 text-sm text-body hover:border-mint/50 hover:text-mint"
        >
          ← 返回其他项目
        </Link>
        <Link
          href="/projects/lumi"
          className="lift rounded-full bg-mint px-6 py-3 text-sm font-medium text-ink"
        >
          查看 Lumi 核心项目 →
        </Link>
      </div>
    </div>
  );
}
