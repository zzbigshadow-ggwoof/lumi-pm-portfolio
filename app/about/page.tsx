import ImagePlaceholder from '@/components/ImagePlaceholder';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import RevealOnScroll from '@/components/RevealOnScroll';
import { profile } from '@/data/profile';

export const metadata = { title: 'About · PM Portfolio' };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16">
      <RevealOnScroll>
        <SectionTitle index="ABOUT" title="About 我" />
      </RevealOnScroll>

      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <RevealOnScroll delay={80}>
          <div className="space-y-4">
            <ImagePlaceholder label="个人照片占位" ratio="aspect-[3/4]" hint="建议 3:4 竖版，≥900px 宽" />
            <div className="rounded-2xl border border-line bg-surface p-5 text-sm">
              <p className="text-muted">邮箱</p>
              <a href={`mailto:${profile.email}`} className="mt-1 block break-all text-mint transition-colors hover:text-white">{profile.email}</a>
              <p className="mt-4 text-muted">微信</p>
              <p className="mt-1 text-body">{profile.wechat}</p>
              <p className="mt-4 text-muted">LinkedIn</p>
              <a href={profile.linkedin} className="mt-1 block break-all text-mint transition-colors hover:text-white">{profile.linkedin}</a>
            </div>
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          <RevealOnScroll delay={140}>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <h3 className="text-lg font-semibold text-white">自我介绍</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-body">
                <p>
                  我是软硬一体方向的脑机产品经理，聚焦非侵入式脑机接口（EEG）在健康与疗愈场景的产品化。
                  我的判断标准很直接：采集是否可靠、反馈是否可感知、商业是否可持续——三者缺一，产品就只是演示。
                </p>
                <p>
                  过去 █ 年，我主导了 Lumi 脑波感知疗愈生态的 0→1：
                  从需求定义、SDK 能力规范、蓝牙协议评审，到双端上架与 ToB 商务签单，
                  完整走过一个软硬一体脑机产品从技术 Demo 到商业化交付的全链路。
                  这套「一套能力支撑 ToC 硬件与 ToB 算法服务」的方法，是我最想继续做深的事。
                </p>
                <p>
                  我希望加入在非侵入脑机 / 健康硬件方向有长期投入的团队，
                  负责从能力定义到商业闭环的完整链路，把技术指标翻译成用户愿意付费的体验。
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <h3 className="text-lg font-semibold text-white">能力栈</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {profile.skills.map((s, i) => (
                  <span key={s} className="enter" style={{ animationDelay: `${i * 60}ms` }}>
                    <Tag>{s}</Tag>
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={260}>
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.resumeUrl}
                className="lift rounded-lg bg-mint px-6 py-3 text-sm font-medium text-ink hover:opacity-90"
              >
                下载简历 PDF
              </a>
              <a
                href={profile.pdfUrl}
                className="lift rounded-lg border border-mint/50 px-6 py-3 text-sm text-mint hover:bg-mint hover:text-ink"
              >
                下载作品集 PDF
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
