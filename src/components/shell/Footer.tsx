import Link from "next/link";
import { EicMark } from "@/components/brand/EicMark";
import { PRIMARY_NAV_ITEMS } from "@/lib/nav";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/eic_mahindrauni/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eic-mu" },
  { label: "Email", href: "mailto:eic@mahindrauniversity.edu.in" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-surface/55 dark:to-surface/28" />

      <div className="border-t border-border/60 bg-[linear-gradient(180deg,rgba(0,0,0,0.012),rgba(0,0,0,0.03))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.022))]">
        <div className="w-full px-6 py-14 md:px-10 md:py-16 lg:px-16 xl:px-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.72fr_0.95fr] lg:gap-12 lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4">
                <EicMark size="lg" />
                <div>
                  <div className="text-sm font-semibold tracking-[0.16em] text-text">
                    ENTREPRENEURSHIP & INNOVATION CELL
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted">
                    Mahindra University
                  </div>
                </div>
              </div>
            </div>

            <FooterGroup title="Navigation" className="lg:justify-self-center lg:pl-4">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.title}
                </FooterLink>
              ))}
            </FooterGroup>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:justify-self-end lg:max-w-[24rem]">
              <FooterGroup title="Contact">
                <FooterText>eic@mahindrauniversity.edu.in</FooterText>
                <FooterText>+91 84128 73562</FooterText>
                <FooterText>
                  AIC Mahindra University, e-Hub Foundation Technology Center, TECH MAHINDRA,
                  Mahindra University, Hyderabad
                </FooterText>
              </FooterGroup>

              <FooterGroup title="Social">
                {SOCIAL_LINKS.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </FooterGroup>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <div>© 2026 Entrepreneurship & Innovation Cell</div>
            <div>Built for campus innovation at Mahindra University</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-xs uppercase tracking-[0.18em] text-muted">{title}</div>
      <div className="mt-3 grid gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-text/82 transition-colors hover:text-text"
    >
      {children}
    </Link>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return <div className="text-sm text-text/82">{children}</div>;
}
