import { getPublishedArticles } from "@/db/queries/articles";
import { SignalsSection } from "./recent-news";

export async function RecentNewsServer() {
  const articles = await getPublishedArticles({
    limit: 8,
    offset: 0,
  });

  return <SignalsSection articles={articles} />;
}
