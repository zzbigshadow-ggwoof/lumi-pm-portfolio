export default function SectionTitle({
  index,
  title,
  desc,
}: {
  index?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8">
      {index && <p className="mb-2 text-xs font-medium tracking-widest text-mint">{index}</p>}
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <span className="title-line mt-4 block h-px w-16 bg-gradient-to-r from-mint to-transparent" />
      {desc && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{desc}</p>}
    </div>
  );
}
