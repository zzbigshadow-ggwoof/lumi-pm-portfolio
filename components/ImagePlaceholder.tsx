/**
 * 图片占位组件：后续替换为真实图片时，
 * 将该组件替换为 <Image src="/images/xxx.png" ... /> 即可，
 * 或直接把图片放进 public/images/ 并修改 src。
 */
export default function ImagePlaceholder({
  label,
  ratio = 'aspect-[16/9]',
  hint,
  src,
}: {
  label: string;
  ratio?: string;
  hint?: string;
  src?: string; // 若提供 src 则直接渲染图片
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label} className={`w-full rounded-xl border border-line object-cover ${ratio}`} />;
  }
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-mint/30 bg-surface text-center ${ratio}`}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#87E8DE" strokeWidth="1.5" opacity="0.6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M4 18l5-5 3 3 4-4 4 4" />
      </svg>
      <p className="px-4 text-sm text-body">{label}</p>
      {hint && <p className="px-4 text-xs text-muted">{hint}</p>}
    </div>
  );
}
