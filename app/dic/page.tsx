import { Metadata } from "next";
import { baseUrl } from "app/sitemap";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: "test dic",
    alternates: {
      canonical: `${baseUrl}/dic`,
    },
  };
}

export default function Page() {
  return (
    <div>
      <p>Dic</p>
    </div>
  );
}
