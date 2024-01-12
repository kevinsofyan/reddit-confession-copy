import { Post } from "@/components/post/Post";
import { confessionTopics } from "@/mock/confessionTopics";

import axios from "axios";

const handleFetchPostTopics = async (topics) => {
  try {
    const response = await axios.get(
      `https://www.reddit.com/r/confession/${topics}.json?limit=50`
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
const Confession = async ({ params }) => {
  const { topics } = params;
  const postData = confessionTopics[topics].data;
  //const postData = await handleFetchPostTopics(topics);
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      {postData && <Post data={postData} topics={topics} />}
    </main>
  );
};

export default Confession;
