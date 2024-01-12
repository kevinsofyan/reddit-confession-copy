import { Post } from "@/components/post/Post";
import axios from "axios";

export const metadata = {
  title: "Admit your wrongdoings",
  description:
    "r/confession: /r/Confession is a place to admit your wrongdoings, acknowledge your guilt, and alleviate your conscience.",
};

const handleFetchPost = async () => {
  try {
    const response = await axios.get(
      "https://www.reddit.com/r/confession.json?limit=50",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const Confession = async () => {
  const postData = await handleFetchPost();
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      {postData && <Post data={postData} />}
    </main>
  );
};

export default Confession;
