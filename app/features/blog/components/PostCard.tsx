export const PostCard: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
      <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-blog">
        <a href="blog-details.html" className="block">
          <img
            src="images/news/news-1.jpg"
            alt="TODO promeni"
            className="w-full"
          />
        </a>
        <div className="py-8 px-6 sm:px-11">
          <h3>
            <a
              href="blog-details.html"
              className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate
            "
            >
              UI/UX Design Trend 2024
            </a>
          </h3>
          <p className="font-medium text-body-color text-base mb-4">
            Automate your Business for more results, Creating Business that.
          </p>
          <a
            href="blog-details.html"
            className="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
