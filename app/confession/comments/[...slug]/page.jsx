import { CommentList } from "@/components/comments/commentList";
import { PostBottomMenu } from "@/components/post/PostBottomMenu";
import { PostLayoutCardArticles } from "@/components/post/postLayout/card/postLayoutCardArticles";
import { Vote } from "@/components/vote/vote";
import { commentsData } from "@/mock/comments";
import axios from "axios";

const handleFetchPostDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://www.reddit.com/r/confession/comments/${id}.json`,
      {
        headers: { "Cache-Control": "no-store" },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function generateMetadata({ params }) {
  let postId;
  let fetchData;
  let postData;
  if (params.slug && params.slug[0]) {
    postId = params.slug[0];
    fetchData = commentsData;
    //fetchData = await handleFetchPostDetails(postId);
    if (fetchData && fetchData[0]) {
      postData = fetchData[0]?.data?.children[0].data;
    }
  }
  return {
    title: postData?.title,
    description: postData?.selftext,
  };
}

const Comments = async ({ params }) => {
  let postId;
  let fetchData;
  let postData;
  let commentData;

  if (params.slug && params.slug[0]) {
    postId = params.slug[0];
    fetchData = commentsData;
    //fetchData = await handleFetchPostDetails(postId);
    if (fetchData && fetchData[0]) {
      postData = fetchData[0]?.data?.children[0].data;
    }
    if (fetchData && fetchData[1]) {
      commentData = fetchData[1].data?.children;
    }
  }

  return (
    <main className="flex min-h-screen bg-reddit-gray">
      <section className="w-inner-container mx-auto">
        <div className=" p-[20px] w-100 grid lg:grid-cols-4 gap-4">
          {fetchData && postData && (
            <div className="col-span-3 ">
              <div className="bg-white rounded-[4px] border flex mb-[10px] pr-4">
                <div className="flex-none w-[50px] rounded-[4px]">
                  <Vote score={postData.score} />
                </div>
                <div className="flex-row p-[10px] pb-1 ">
                  <PostLayoutCardArticles
                    selftext={postData.selftext}
                    title={postData.title}
                    createdUtc={postData.created_utc}
                    author={postData.author}
                    subreddit="/confession"
                  />
                  <PostBottomMenu
                    comments={postData.num_comments}
                    commentArea
                  />

                  <hr className="mt-2 mb-8" />
                  <CommentList commentData={commentData} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Comments;
