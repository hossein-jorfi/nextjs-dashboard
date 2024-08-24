import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-14" />
      <h2 className="text-3xl font-semibold">404 Not Found</h2>
      <p className="text-xl">Could not find the requested invoice.</p>
      <Button className="mt-5">
        <Link href="/dashboard">Go to Home</Link>
      </Button>
    </main>
  );
}
