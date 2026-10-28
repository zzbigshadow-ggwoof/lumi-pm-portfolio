import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-col gap-2 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name} · 软硬一体 / 非侵入脑机方向 PM</p>
        <p>
          <a className="hover:text-mint" href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </footer>
  );
}
