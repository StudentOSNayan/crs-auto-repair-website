import type { Metadata } from "next";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | CRS Auto Repair",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-obsidian">
      <div className="page py-24">
        <p className="text-eyebrow text-white/45">Error 404</p>
        <h1 className="text-h2 mt-4 max-w-lg">We couldn&apos;t find that page.</h1>
        <p className="text-lead mt-5 max-w-md text-white/60">
          The page you were looking for isn&apos;t here. Call {business.name} at{" "}
          {business.phone.display} or head back to the homepage.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href={business.phone.href} size="lg" variant="outline">
            {business.phone.display}
          </Button>
        </div>
      </div>
    </section>
  );
}
