import { Post } from "@/components/post/Post";

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
  return (
    <main className="flex min-h-screen bg-reddit-gray">
      <script src="https://azara-ai-images.s3.ap-southeast-1.amazonaws.com/static/azara-bot-loader.js"></script>
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

export default SubreditPage;
