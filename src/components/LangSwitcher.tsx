import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

const LangSwitcher = () => {
  const currentLocale = useLocale();
  const locales = routing.locales;
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const nextLocale = event.currentTarget.value;

    startTransition(() => {
      router.push({ pathname }, { locale: nextLocale });
    });
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        className="uppercase flex items-center gap-2 p-2 fill-white hover:text-primary hover:fill-primary transition-colors"
        onClick={() => setOpen(!open)}
      >
        {currentLocale}
        <svg
          className={`w-4 transition-transform ${open && "rotate-90"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7292 9.90698L6.60417 16.032C6.39583 16.2403 6.295 16.4834 6.30167 16.7611C6.30833 17.0389 6.41611 17.282 6.625 17.4903C6.83389 17.6986 7.07694 17.8028 7.35417 17.8028C7.63139 17.8028 7.87444 17.6986 8.08333 17.4903L14.5 11.0945C14.6667 10.9278 14.7917 10.7403 14.875 10.532C14.9583 10.3236 15 10.1153 15 9.90698C15 9.69864 14.9583 9.49031 14.875 9.28198C14.7917 9.07364 14.6667 8.88614 14.5 8.71948L8.08333 2.30281C7.875 2.09448 7.62833 1.99364 7.34333 2.00031C7.05833 2.00698 6.81194 2.11475 6.60417 2.32364C6.39639 2.53253 6.29222 2.77559 6.29167 3.05281C6.29111 3.33003 6.39528 3.57309 6.60417 3.78198L12.7292 9.90698Z"
            fill="inherit"
          />
        </svg>
      </button>
      <div
        className={`absolute top-[calc(100%_+_8px)] right-0 p-3 rounded bg-dark-100 w-full ${
          open ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        {locales.map(
          (locale) =>
            currentLocale != locale && (
              <button
                key={locale}
                value={locale}
                onClick={handleClick}
                className="uppercase text-center hover:text-primary w-full transition-colors"
              >
                {locale}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default LangSwitcher;
