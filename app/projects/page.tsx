import ImagePlaceholder from '@/components/ImagePlaceholder';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import RevealOnScroll from '@/components/RevealOnScroll';
import { otherProjects } from '@/data/other-projects';

export const metadata = { title: '其他项目 · PM Portfolio' };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16">
      <SectionTitle
        index="MORE WORK"
        title="其他项目"
        desc="轻量化项目合集：增长、平台化、数据工具等方向的实践。"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {otherProjects.map((p, i) => (
          <RevealOnScroll key={p.title} delay={(i % 2) * 90}>
            <article className="lift overflow-hidden rounded-2xl border border-line bg-surface hover:border-mint/40">
              <div className="p-4 pb-0">
                <ImagePlaceholder label={p.title} ratio="aspect-[16/9]" hint={p.imageHint} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
