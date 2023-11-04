import StyledTitle from "~/common/components/StyledTitle";
import { Post } from "~/models/post.server";
import { PostCard } from "./components/PostCard";

interface IBlog {
  posts: Post[];
}

const Blog: React.FC<IBlog> = ({ posts }) => {
  return (
    <section id="blog" className="pt-[40px]">
      <div className="container">
        <StyledTitle
          title="My Random Thoughts"
          preTitle="Insights and Reflections"
          description="Welcome to my corner of the digital realm where I explore and share insights, thoughts, and opinions about the exciting world of development. Join me on this journey as we dive deep into the ever-evolving landscape of technology and its impact on our lives. I'm excited to share my experiences and discoveries with you, and I promise there will be plenty to explore by the time you've finished reading!"
        />
        <div className="justify-center p-0 max-w-[800px] m-auto">
          {posts.map((post: Post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
