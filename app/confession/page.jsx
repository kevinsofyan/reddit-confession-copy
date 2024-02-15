import { Post } from "@/components/post/Post";
import { confessionData } from "@/mock/confession";
import Script from "next/script";

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
  const postData = confessionData.data;
  //const postData = await handleFetchPost();
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      {postData && <Post data={postData} />}
      <Script src="https://azara-ai-images.s3.ap-southeast-1.amazonaws.com/static/azara-bot-loader.js"></Script>
      <azara-bot
        widget-id="ae63691b-622c-463a-b548-bd0dd8a639c1"
        mode="DARK"
        tenant-id="null"
        agent-id="c3814cfc-ebee-437d-b739-000efc66040e"
        show-form="true"
        show-source="false"
        show-branding="true"
        show-history="false"
        show-welcome="true"
        bg-color="#2D334D"
        chat-color="#1B1D39"
        show-chat-status="false"
      ></azara-bot>
    </main>
  );
};

export default Confession;
