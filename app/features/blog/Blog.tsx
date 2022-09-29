import { Link } from "@remix-run/react";
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
          preTitle="Don't read this"
          description="This is where I plan on writing down some of my thoughts and/or opinions regarding development. By the time somebody reads this, 
          I hope there is actually something to see :D"
        />
        <div className="mt-[-40px] text-center mb-10">
          <Link
            to="add-post"
            className="inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90"
          >
            Add New Post
          </Link>
        </div>
        <div className="flex flex-wrap justify-center p-0">
          {posts.map((post: Post) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
