'use client';

import { useState } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { lumi } from '@/data/lumi';

/** ToC / ToB 方案 Tab 切换 */
export default function SolutionTabs() {
  const [tab, setTab] = useState<'toc' | 'tob'>('toc');
  const t = lumi.tabs;

  return (
    <div>
      <div className="mb-8 inline-flex rounded-xl border border-line bg-surface p-1">
        {(['toc', 'tob'] as const).map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`rounded-lg px-5 py-2 text-sm transition-all duration-300 ${
              tab === k ? 'bg-mint text-ink shadow-[0_0_24px_-8px_rgba(135,232,222,0.7)]' : 'text-body hover:text-white'
            }`}
          >
            {k === 'toc' ? 'ToC 消费方案' : 'ToB SDK 交付方案'}
          </button>
        ))}
      </div>

      {tab === 'toc' ? (
        <div key="toc" className="tab-panel grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <ImagePlaceholder label="APP 截图占位 1" ratio="aspect-[9/16] max-h-[420px]" hint={t.toc.appShotHint} />
            <ImagePlaceholder label="APP 截图占位 2" ratio="aspect-[9/16] max-h-[420px]" hint={t.toc.appShotHint} />
          </div>
          <div className="space-y-6">
            <ImagePlaceholder label="硬件实拍占位" ratio="aspect-[4/3]" hint={t.toc.hardwareHint} />
            {t.toc.sections.map((s) => (
              <div key={s.heading} className="lift rounded-xl border border-line bg-surface p-5 hover:border-mint/40">
                <h4 className="font-semibold text-mint">{s.heading}</h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div key="tob" className="tab-panel grid gap-6 md:grid-cols-2">
          {t.tob.sections.map((s) => (
            <div key={s.heading} className="lift rounded-xl border border-line bg-surface p-6 hover:border-mint/40">
              <h4 className="font-semibold text-mint">{s.heading}</h4>
              <p className="mt-3 text-sm leading-relaxed text-body">{s.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
