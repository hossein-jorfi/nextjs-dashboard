// components
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// assets
import AcmeLogo from "@/app/ui/acme-logo";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg border-2 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-primary-foreground px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl md:text-3xl md:leading-normal`}>
            <strong>Welcome,</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-600">
              Next.js Learn Course
            </a>
          </p>
          <Link href="/login" className="">
            <Button className="flex gap-1">
              Login
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center md:w-3/5 border-2 rounded-lg p-10">
          <div className="w-60 md:w-80 h-60 md:h-80 rounded-full border-2 border-dotted flex justify-center items-center text-border">
            Image
          </div>
        </div>
      </div>
    </main>
  );
}
