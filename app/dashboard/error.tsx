"use client";

import { Button } from "@/components/ui/button";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <Button
        className="mt-4"
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  );
};

export default Error;
