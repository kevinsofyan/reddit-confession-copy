import { Post } from "@/components/post/Post";

const handleFetchPostTopics = async (topics) => {
  try {
    const res = await fetch(
      `https://www.reddit.com/r/confession/${topics}.json?limit=50`,
      {
        method: "GET",
        revalidate: 3000,
      }
    );
    if (!res.ok) {
      console.log(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const Confession = async ({ params }) => {
  const { topics } = params;
  const postData = await handleFetchPostTopics(topics);
  if (!postData) {
    return <p></p>;
  }
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      {postData && <Post data={postData} topics={topics} />}
    </main>
  );
};

export default Confession;
