import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import RevealOnScroll from '@/components/RevealOnScroll';
import { notes } from '@/data/notes';

export const metadata = { title: '笔记 / 复盘 · PM Portfolio' };

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-site px-6 py-16">
      <SectionTitle
        index="NOTES"
        title="笔记 / 复盘"
        desc="脑机行业思考、竞品笔记与一线工程复盘。"
      />
      <div className="space-y-5">
        {notes.map((n, i) => (
          <RevealOnScroll key={n.title} delay={i * 70}>
            <article className="lift rounded-2xl border border-line bg-surface p-6 hover:border-mint/40 md:p-8">
              <p className="text-xs text-muted">{n.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{n.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {n.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
