import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getComments } from "../apis/Comments/comments.api";
import CommentItem from "./CommentItem";
import Loading from "./Loading";

export default function Comments({ id }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getComments(id),
  });

  if (isError) return <h2>{error.message}</h2>;

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      {data.comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment}></CommentItem>
      ))}
    </div>
  );
}
