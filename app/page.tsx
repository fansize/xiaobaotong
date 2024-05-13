import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-6 mt-8">
        <h1>Loading Ads with the Script Component</h1>
        <p>
          Ads on web pages are typically loaded from script tags, but without
          the proper attributes this can easily introduce a delay before a page
          becomes interactive. This is where the{" "}
          <Link
            href="https://nextjs.org/docs/api-reference/next/script"
            target="_blank"
          >
            Next.js Script Component
          </Link>{" "}
          comes into play.
        </p>
        <p>
          It allows you to change the loading priority of scripts. For this
          example we set the <p>strategy</p> prop to{" "}
          <Link
            href="https://nextjs.org/docs/basic-features/script#lazyonload"
            target="_blank"
          >
            &quot;lazyOnload&quot;
          </Link>{" "}
          so that ads load during idle time and don&apos;t hurt the{" "}
          <Link href="https://web.dev/interactive/" target="_blank">
            TTI
          </Link>
          .
        </p>
        <p>
          We have a loading state for ads while they load While our ads are
          loading, we show a fallback state to reserve a space for them and
          avoid a{" "}
          <Link href="https://web.dev/cls/" target="_blank">
            layout shift (CLS)
          </Link>
          .
        </p>
      </section>
      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
