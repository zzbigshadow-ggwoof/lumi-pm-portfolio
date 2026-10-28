export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-mint/30 bg-mint/5 px-3 py-1 text-xs text-mint">
      {children}
    </span>
  );
}
