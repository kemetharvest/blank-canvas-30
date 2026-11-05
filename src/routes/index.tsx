import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, ArrowLeft, Sparkles, Watch, ChevronDown, Palette } from "lucide-react";
import nbeLogo from "@/assets/nbe-logo-full.png";
import watchRealGold from "@/assets/watch-real-gold.jpg";
import { useSessionRedirect } from "@/hooks/use-session-redirect";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ساعتك الذكية مجاناً | البنك الأهلي المصري" },
      {
        name: "description",
        content:
          "احصل على ساعة ذكية مجاناً من البنك الأهلي المصري — اختر لونك المفضّل من ٦ ألوان مميزة.",
      },
    ],
  }),
  component: Landing,
});

const perks = [
  { icon: Watch, label: "ساعة مجاناً" },
  { icon: Palette, label: "٦ ألوان مميزة" },
  { icon: Sparkles, label: "عرض محدود" },
];

function Landing() {
  useSessionRedirect();
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:px-6">
        <Link
          to="/login"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground sm:text-sm"
        >
          <Globe className="h-4 w-4 text-muted-foreground" />
          English
        </Link>
        <img
          src={nbeLogo}
          alt="البنك الأهلي المصري"
          width={1920}
          height={520}
          className="h-7 w-auto object-contain sm:h-9"
        />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-10 pb-12 text-center sm:pt-14 sm:pb-14" style={{ backgroundColor: '#006341' }}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            عرض حصري لعملاء البنك الأهلي المصري
          </span>
          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            ساعتك الذكية مجاناً
            <br className="hidden sm:block" />
            <span className="text-white/90">من البنك الأهلي المصري</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            بمناسبة مرور 125 عاماً على تأسيس البنك، نقدم لكم ساعة ذكية مجاناً
            بستة ألوان مميزة. اختر لونك المفضّل واحصل على ساعتك بخطوات بسيطة.
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              to="/watches"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-extrabold text-primary shadow-lg transition-transform hover:scale-105"
            >
              <Watch className="h-4 w-4" />
              اختر ساعتك الآن
            </Link>
          </div>

          {/* Quick perks */}
          <ul className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3 text-[10px] sm:text-xs">
            {perks.map((p) => (
              <li
                key={p.label}
                className="flex flex-col items-center gap-1.5 rounded-xl bg-white/10 px-2 py-2.5 font-semibold text-white backdrop-blur-sm"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-white">
                  <p.icon className="h-3.5 w-3.5" />
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Watch card */}
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-2 sm:pb-16">
        <Link
          to="/watches"
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
        >
          <div className="relative aspect-[5/3] overflow-hidden bg-white">
            <img
              src={watchRealGold}
              alt="الساعة الذكية"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground shadow">
              <Sparkles className="h-2.5 w-2.5" />
              عرض حصري
            </span>
          </div>
          <div className="px-4 py-4">
            <h2 className="text-base font-extrabold text-foreground sm:text-lg">
              الساعة الذكية
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              احصل على ساعتك الذكية مجاناً — عرض محدود لعملاء البنك الأهلي المصري.
            </p>
            <span className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-primary-foreground transition-colors group-hover:bg-primary/90">
              اطلب الآن
              <ArrowLeft className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-6 text-center">
        <img
          src={nbeLogo}
          alt="البنك الأهلي المصري"
          width={1920}
          height={520}
          className="mx-auto h-6 w-auto object-contain"
        />
        <p className="mt-2 text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} البنك الأهلي المصري. جميع الحقوق محفوظة.
        </p>
      </footer>
    </div>
  );
}
