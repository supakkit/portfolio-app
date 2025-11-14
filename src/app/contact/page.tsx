import { DATA } from "@/data/profile";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid gap-2">
        {Object.entries(DATA.contact).map(([name, social]) => (
          <p key={name} className="flex gap-2 text-2xl items-center">
            <social.icon className="size-6" />
            {name}:
            <Link
              href={social.url}
              aria-label={social.name}
              className="underline text-xl"
              target="_blank"
            >
              {social.url.split("https://")}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
