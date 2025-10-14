import React, { useContext, useState } from "react";
import formateDate from "../lib/formateDate";
import { Link, useLocation } from "react-router-dom";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import { auth } from "../context/auth.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../apis/posts/deteletePost.api";
import toast from "react-hot-toast";

export default function PostItem({ post }) {
  const queryClient = useQueryClient();

  const { userData } = useContext(auth);
  const location = useLocation().pathname.startsWith("/posts");
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      if (userData?._id) {
        queryClient.invalidateQueries({ queryKey: ["profile", userData._id] });
      }
    },
  });
  const [isOpen, setIsOpen] = useState(location);

  const {
    body,
    image,
    _id,
    user: { name, photo, _id: userId },
    createdAt,
  } = post;

  return (
    <div className="max-w-2xl mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {isPending && toast("Loading...")}
      {isSuccess && toast.success("Post deleted")}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center ">
          <img src={photo} className="size-20" />
          <div>
            <p>{name}</p>
            <span className="text-gray-500 text-sm">
              {formateDate(createdAt)}
            </span>
          </div>
        </div>
        {userId == userData?._id && (
          <i
            onClick={() => mutate(_id)}
            className="fa-solid fa-trash fa-xl text-red-600 cursor-pointer"
          ></i>
        )}
      </div>

      <Link to={`/posts/${_id}`}>
        <img className="w-full" src={image} alt />
      </Link>

      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <div className="flex justify-between fa-xl border-t border-b py-4">
          <i className="fa-solid fa-thumbs-up"></i>
          <i
            onClick={() => setIsOpen(!isOpen)}
            className="fa-solid fa-comment cursor-pointer"
          ></i>
          <i className="fa-solid fa-share"></i>
        </div>
      </div>
      {isOpen && (
        <>
          <CreateComment id={_id}></CreateComment>
          <Comments id={_id}></Comments>
        </>
      )}
    </div>
  );
}
