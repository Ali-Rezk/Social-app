import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSinglePosts } from "../apis/posts/singlePost.api";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";

export default function PostDetails() {
  const { id } = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getSinglePosts(id),
  });

  if (isError) return <h2>{error.message}</h2>;

  if (isLoading) return <Loading></Loading>;

  return <PostItem post={data.post}></PostItem>;
}
