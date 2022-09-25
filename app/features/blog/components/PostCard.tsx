import { Link } from "@remix-run/react";
import { Post } from "~/models/post.server";

interface IPostCard {
  post: Post;
}

export const PostCard: React.FC<IPostCard> = ({ post }) => {
  console.log(post.title, "title");

  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
      <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
        <Link to={post.slug} className="block">
          <img
            src="images/news/news-1.jpg"
            alt="TODO promeni"
            className="w-full"
          />
        </Link>
        <div className="py-8 px-6 sm:px-11">
          <h3>
            <Link
              to={post.slug}
              className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate"
            >
              {post.title}
            </Link>
          </h3>
          <p className="font-medium text-body-color text-base mb-4">
            Automate your Business for more results, Creating Business that.
          </p>
          <Link
            to={post.slug}
            className="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
