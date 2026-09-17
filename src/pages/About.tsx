import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

export const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <section className="animate-fadeIn" aria-labelledby="about-title">
      <div className="mb-10 flex items-center justify-between border-b border-line pb-6">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-[#c9964a] sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Ana Sayfa
        </button>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-xs">
          Mertyapı / Hakkımızda
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Biz kimiz?</p>
          <h1 id="about-title" className="max-w-xl font-[Georgia,serif] text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Ahşabın Doğallığı, 15 Yıllık Ustalıkla Buluşuyor
          </h1>
          <div className="mt-8 h-px w-20 bg-gold" aria-hidden="true" />
        </div>

        <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
          <p>
            15 yıldır ahşaba ruh katıyor, yaşam alanlarınıza sıcaklık, estetik ve dayanıklılık taşıyoruz.
            <strong className="font-semibold text-ink"> Mertyapı</strong> olarak çıktığımız bu yolculukta,
            geleneksel el işçiliği ustalığını modern tasarım anlayışıyla harmanlayarak her projemizde en yüksek
            kaliteyi hedefliyoruz.
          </p>
          <p>
            Tasarımdan montaj aşamasına kadar her detayı titizlikle planlıyor, yaşam alanlarınıza özel ve uzun
            ömürlü çözümler üretiyoruz.
          </p>
        </div>
      </div>

      <div className="mt-16 border-y border-line py-10 sm:mt-20 sm:py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Üretim yelpazemiz</p>
            <h2 className="font-[Georgia,serif] text-3xl text-ink sm:text-4xl">Neler Yapıyoruz?</h2>
          </div>
          <ArrowUpRight className="hidden h-8 w-8 text-gold sm:block" aria-hidden="true" />
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          <article className="border-t border-[#d9d0c2] pt-4">
            <h3 className="text-sm font-semibold text-ink sm:text-base">Mutfak &amp; Banyo Bütünü</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Kullanışlı, estetik ve uzun ömürlü özel tasarım mutfak ve banyo dolapları.</p>
          </article>
          <article className="border-t border-[#d9d0c2] pt-4">
            <h3 className="text-sm font-semibold text-ink sm:text-base">İç Mekân Mobilya &amp; Dolap Çözümleri</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Alanı en verimli şekilde değerlendiren gardırop, portmanto ve özel ölçü depolama sistemleri.</p>
          </article>
          <article className="border-t border-[#d9d0c2] pt-4">
            <h3 className="text-sm font-semibold text-ink sm:text-base">Kapı Sistemleri</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Şıklığı ve dayanıklılığı bir arada sunan özel üretim ahşap kapılar.</p>
          </article>
          <article className="border-t border-[#d9d0c2] pt-4">
            <h3 className="text-sm font-semibold text-ink sm:text-base">Bahçe &amp; Dış Mekân</h3>
            <p className="mt-2 text-sm leading-6 text-muted">Bahçelerinize değer katan kamelya, pergola, ahşap çit ve dış mekân yapıları.</p>
          </article>
        </div>
      </div>

      <div className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Yaklaşımımız</p>
          <h2 className="font-[Georgia,serif] text-3xl leading-tight text-ink sm:text-4xl">Kalite sözümüz, işimizin temelidir.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
          <p>
            15 senelik aktif saha tecrübemizin getirdiği en büyük kazanım, müşteri memnuniyeti ve güven üzerine
            kurulu iş ilişkimizdir. Kurumsal disiplinimizden taviz vermeden, projelerinizi sanki kendi evimize
            yapıyormuşçasına bir samimiyet ve özenle ele alıyoruz.
          </p>
          <p>
            Doğru ahşap seçimi, milimetrik işçilik, sağlam montaj ve zamanında teslimat prensiplerimizle; sadece
            bir mobilya dükkanı değil, hayallerinizi gerçeğe dönüştüren çözüm ortağınız olmaya devam ediyoruz.
          </p>
          <p className="border-l-2 border-gold pl-5 font-[Georgia,serif] text-lg italic leading-8 text-ink">
            Ahşabın zamansız dokusunu mekânlarınıza taşımak ve projelerinizi birlikte planlamak için Mertyapı&apos;ya davetlisiniz.
          </p>
        </div>
      </div>
    </section>
  );
};