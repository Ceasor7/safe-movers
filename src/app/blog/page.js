import RecentArticle from '@/components/Articles/RecentArticle';
import PostCard from '@/components/PostCard';
import getPostMetadata from '@/utils/getPostMetadata';

export default function SafeMoversBlog() {
  const postMetadata = getPostMetadata('src/movers');

  return (
    <main className="mx-5 sm:mx-24 my-10">
      <h1 className="text-[#570598] text-4xl font-bold my-4">
        Your Latest News
      </h1>
      <hr className="border-black" />
      <div className="flex flex-col sm:flex-row sm:gap-x-10">
        <article className="sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-x-10 gap-y-8 my-10 ">
          {postMetadata.map((post, postIndex) => {
            return <PostCard key={postIndex} post={post} />;
          })}
        </article>
        <div className="sm:w-1/3 my-10 ">
          <RecentArticle />
        </div>
      </div>
    </main>
  );
}
