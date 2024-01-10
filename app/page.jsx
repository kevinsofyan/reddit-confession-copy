import { CommentList } from "@/components/comments/CommentList/PostList";
import Filter from "@/components/filter/filter";

export default function SubreditPage() {
  return (
    <main className="flex min-h-screen bg-gray">
      <section className="w-inner-container mx-auto">
        <div className=" p-[20px] w-100 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Filter />
            <CommentList />
          </div>
          <div>
            <Filter />
          </div>
        </div>
      </section>
    </main>
  );
}
