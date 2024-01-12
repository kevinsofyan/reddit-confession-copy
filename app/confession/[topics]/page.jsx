import { Post } from "@/components/post/Post";

const handleFetchPostTopics = async (topics) => {
  const res = await fetch(
    `https://www.reddit.com/r/confession/${topics}.json?limit=50`,
    {
      method: "GET",
      revalidate: 3000,
    }
  );
  try {
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const Confession = async ({ params }) => {
  const { topics } = params;
  const postData = await handleFetchPostTopics(topics);
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      {postData && <Post data={postData} topics={topics} />}
    </main>
  );
};

export default Confession;
