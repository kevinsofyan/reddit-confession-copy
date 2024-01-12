import { Post } from "@/components/post/Post";

export const metadata = {
  title: "Admit your wrongdoings",
  description:
    "r/confession: /r/Confession is a place to admit your wrongdoings, acknowledge your guilt, and alleviate your conscience.",
};

const handleFetchPost = async () => {
  try {
    const res = await fetch(
      `https://www.reddit.com/r/confession.json?limit=50`,
      {
        method: "GET",
        revalidate: 3000,
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const Confession = async () => {
  const postData = await handleFetchPost();
  if (!postData) {
    return <p></p>;
  }
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      {postData && <Post data={postData} />}
    </main>
  );
};

export default Confession;
