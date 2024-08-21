"use client";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg border-2 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                className="peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                defaultValue={"user@nextmail.com"}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                className="peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 "
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                defaultValue={"123456"}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-full"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
          ) : (
            <>
              Log in <ChevronRightIcon className="ml-auto h-4 w-4" />
            </>
          )}
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
