import ImagePlaceholder from '@/components/ImagePlaceholder';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import RevealOnScroll from '@/components/RevealOnScroll';
import ArchDiagram from '@/components/lumi/ArchDiagram';
import FlywheelDiagram from '@/components/lumi/FlywheelDiagram';
import SolutionTabs from '@/components/lumi/SolutionTabs';
import LampDemo from '@/components/lumi/LampDemo';
import { lumi } from '@/data/lumi';

export const metadata = {
  title: 'Lumi 脑波感知疗愈生态 · PM Portfolio',
  description: lumi.hero.oneLiner,
};

export default function LumiPage() {
  const d = lumi;
  return (
    <div className="mx-auto max-w-site px-6">
      {/* 1. 项目头图 */}
      <section className="relative overflow-hidden py-16">
        <div
          aria-hidden
          className="halo pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-mint/[0.06] blur-[100px]"
        />
        <div className="enter mb-8 flex flex-wrap gap-2">
          {d.hero.roleTags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <h1 className="enter text-3xl font-semibold text-white md:text-5xl" style={{ animationDelay: '100ms' }}>
          {d.hero.title}
        </h1>
        <p className="enter mt-3 text-lg text-mint" style={{ animationDelay: '180ms' }}>{d.hero.subtitle}</p>
        <p className="enter mt-6 max-w-3xl text-base leading-relaxed text-body" style={{ animationDelay: '260ms' }}>
          {d.hero.oneLiner}
        </p>
        <div
          className="enter mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm"
          style={{ animationDelay: '320ms' }}
        >
          <div>
            <p className="text-xs text-muted">项目周期</p>
            <p className="mt-1 text-white">{d.hero.period}</p>
          </div>
          <div>
            <p className="text-xs text-muted">我的角色</p>
            <p className="mt-1 text-white">{d.hero.role}</p>
          </div>
          <div>
            <p className="text-xs text-muted">版本节奏</p>
            <p className="mt-1 text-white">V1.0 → V1.3</p>
          </div>
        </div>
        <div className="enter mt-10" style={{ animationDelay: '360ms' }}>
          <ImagePlaceholder label="Lumi 脑波疗愈场景" src="/images/lumi-scene.jpg" ratio="aspect-[16/9]" />
        </div>
      </section>

      {/* 2. 项目背景 & 竞品对比 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="01 / CONTEXT" title={d.background.title} />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              {d.background.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-body">{p}</p>
              ))}
            </div>
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface">
                    {d.competitors.columns.map((c) => (
                      <th key={c} className="px-4 py-3 font-medium text-mint">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.competitors.rows.map((r, i) => (
                    <tr key={i} className="border-b border-line/60 transition-colors last:border-0 hover:bg-mint/[0.04]">
                      {r.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 align-top leading-relaxed ${j === 0 ? 'text-white' : 'text-body'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">{d.competitors.note}</p>
        </section>
      </RevealOnScroll>

      {/* 3. 产品闭环架构图 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="02 / ARCHITECTURE" title={d.arch.title} desc={d.arch.desc} />
          <ArchDiagram />
        </section>
      </RevealOnScroll>

      {/* 4. 用户分层 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="03 / SEGMENTS" title="用户分层" />
          <div className="grid gap-6 md:grid-cols-2">
            {[d.segments.toc, d.segments.tob].map((s, i) => (
              <div
                key={s.title}
                className="lift stagger-item rounded-2xl border border-line bg-surface p-8 hover:border-mint/40"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-mint">{s.subtitle}</p>
                <p className="mt-6 text-xs tracking-widest text-muted">痛点</p>
                <ul className="mt-2 space-y-2">
                  {s.pains.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint/70" />{p}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs tracking-widest text-muted">核心需求</p>
                <ul className="mt-2 space-y-2">
                  {s.needs.map((n) => (
                    <li key={n} className="flex gap-2 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />{n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* 5. 商业模式飞轮 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="04 / FLYWHEEL" title={d.flywheel.title} />
          <FlywheelDiagram />
        </section>
      </RevealOnScroll>

      {/* 6. 需求策略 & 取舍 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="05 / TRADE-OFFS" title="需求策略 & 取舍" />
          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-surface">
                  {d.tradeoffs.columns.map((c) => (
                    <th key={c} className="px-4 py-3 font-medium text-mint">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.tradeoffs.rows.map((r, i) => (
                  <tr key={i} className="border-b border-line/60 last:border-0">
                    {r.map((cell, j) => (
                      <td key={j} className="px-4 py-4 align-top leading-relaxed text-body">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </RevealOnScroll>

      {/* 7. Tab 切换：ToC / ToB 方案 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="06 / SOLUTIONS" title="双端方案" />
          <SolutionTabs />

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white">灯光演示</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
              产品的核心输出是光。四种灯色对应四种状态，由 APP 下发指令实时切换——下面是自己做的实物，可以点颜色看变化。
            </p>
            <LampDemo />
          </div>
        </section>
      </RevealOnScroll>

      {/* 8. 里程碑时间轴 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="07 / MILESTONES" title="项目里程碑" />
          <div className="relative">
            {/* 时间轴主线：进入视口后从左向右生长 */}
            <span
              aria-hidden
              className="grow-x absolute left-0 right-0 top-[6px] hidden h-px bg-gradient-to-r from-mint/60 via-mint/30 to-transparent md:block"
            />
            <div className="grid gap-4 md:grid-cols-4">
              {d.milestones.map((m, i) => (
                <div
                  key={m.version}
                  className="lift stagger-item relative rounded-xl border border-line bg-surface p-6 hover:border-mint/40"
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-mint px-3 py-0.5 text-xs font-semibold text-ink">
                    {m.version}
                  </span>
                  <p className="mt-4 text-xs font-mono text-muted">{m.date}</p>
                  <h4 className="mt-1 font-semibold text-white">{m.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 9. 落地成果 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="08 / OUTCOMES" title="落地成果" />
          <div className="grid gap-6 md:grid-cols-3">
            {[d.outcomes.toc, d.outcomes.tob, d.outcomes.assets].map((o, i) => (
              <div
                key={o.title}
                className="lift stagger-item rounded-2xl border border-line bg-surface p-6 hover:border-mint/40"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h4 className="font-semibold text-mint">{o.title}</h4>
                <ul className="mt-4 space-y-3">
                  {o.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* 10. 复盘风险 & 迭代路线 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="09 / RETRO" title="复盘风险 & 后续迭代路线" />
          <div className="grid gap-6 md:grid-cols-2">
            {[d.retro.risks, d.retro.roadmap].map((b, i) => (
              <div
                key={b.title}
                className="lift stagger-item rounded-2xl border border-line bg-surface p-8 hover:border-mint/40"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h4 className="font-semibold text-white">{b.title}</h4>
                <ul className="mt-4 space-y-3">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint/70" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* 11. 项目小结 */}
      <RevealOnScroll>
        <section className="border-t border-line py-16">
          <SectionTitle index="10 / SUMMARY" title={d.summary.title} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.summary.items.map((s, i) => (
              <div
                key={s.key}
                className="lift stagger-item rounded-xl border border-line bg-surface p-6 hover:border-mint/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h4 className="font-semibold text-mint">{s.key}</h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
