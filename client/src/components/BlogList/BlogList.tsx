import EmptyPage from "../ErrorPage/EmptyPage";
import BlogCard from "./BlogCard";
import { Post } from "../../utils/types";

type BloglistProps = {
  posts: Post[];
};

function BlogList({ posts }: BloglistProps) {
  if (posts.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:ms-0 ms-5 mb-5 min-h-screen">
        {posts?.map((value, index) => {
          return (
            <BlogCard
              key={index}
              title={value.title}
              body={value.desc}
              id={value._id ? value._id : ""}
              category={value.category}
              img={value.thumbnail}
              blogInfo={value}
              userProfile={value.userProfile ? value.userProfile : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
