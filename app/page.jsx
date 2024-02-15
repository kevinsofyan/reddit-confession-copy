import { Post } from "@/components/post/Post";

import Script from "next/script";

const handleFetchPost = async (eventId) => {
  const res = await fetch(`https://www.reddit.com/r/confession.json?limit=10`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  const data = await res.json();
  return data.data;
};

const SubreditPage = async () => {
  const postData = await handleFetchPost();
  return <main className="flex min-h-screen bg-reddit-gray"></main>;
};

export default SubreditPage;
