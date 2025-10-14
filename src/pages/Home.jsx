import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../apis/posts/posts.api";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";
import AddPost from "../components/AddPost";
import { Helmet } from "react-helmet";

export default function Home() {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2>{error.message}</h2>;

  console.log(data.posts);

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <AddPost></AddPost>
      {data.posts.map((post) => (
        <PostItem key={post._id} post={post}></PostItem>
      ))}
    </div>
  );
}
