import Link from "next/link";
import { Button } from "../ui/button";

export function FooterSection() {
  return (
    <div className="flex justify-center items-center h-screen w-full mt-16">
      <div className="grid justify-items-center gap-2 max-w-lg">
        <p className="text-4xl font-bold">Get in Touch</p>
        <p className="text-center text-xl text-primary/90">
          Have a question? Just send me an email with your question, and
          I&apos;ll get back to you as soon as I can.
        </p>
        <Link href="/contact">
          <Button size="lg" className="rounded-full cursor-pointer text-md">Contact</Button>
        </Link>
      </div>
    </div>
  );
}
