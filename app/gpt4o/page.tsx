import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { baseUrl } from "app/sitemap";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Download ChatGPT Desktop APP",
    alternates: {
      canonical: `${baseUrl}/gpt4o`,
    },
  };
}

export default function Page() {
  return (
    <section className="relative">
      {/* Container */}

      {/* Component */}
      <div className="flex flex-col items-center gap-8">
        {/* Heading Content */}
        <div className="max-w-[720px]">
          <h1 className="mb-3 pb-4 mt-12 text-4xl font-bold md:text-6xl">
            ChatGPT Desktop APP
          </h1>
          <p className="mb-6 px-1 text-xl md:mb-10">
            Use ChatGPT your way. Talk to type or have a conversation. Take
            pictures and ask about them.
          </p>

          <div className="flex items-center">
            <Link
              href="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg"
              download={true}
              className="mr-4 text-xs inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black md:text-sm md:mr-6 lg:mr-8"
            >
              Download for Mac
            </Link>
            <Link
              href={`${baseUrl}/posts/using-the-chatgpt-macos-app`}
              className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
            >
              <p className="text-xs md:text-sm">How to use GPT-4o</p>
            </Link>
          </div>
        </div>
        {/* Image Div */}
        <div>
          <Image
            src="/chatgpt-macos-app.jpg"
            alt="chatgpt-macos-app"
            width={1280}
            height={720}
            className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
