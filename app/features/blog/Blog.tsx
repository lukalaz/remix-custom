import { Post } from "~/models/post.server";
import { PostCard } from "./components/PostCard";

interface IBlog {
  posts: Post[];
}

const Blog: React.FC<IBlog> = ({ posts }) => {
  return (
    <section id="blog">
      <div className="container flex flex-wrap justify-center p-0">
        {posts.map((post: Post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
