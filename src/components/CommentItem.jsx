import React from "react";
import formateDate from "../lib/formateDate";

export default function CommentItem({ comment }) {
  const {
    content,
    commentCreator: { name, photo },
    createdAt,
  } = comment;

  return (
    <div>
      <div className="p-4 gap-5 flex items-center py-3">
        <img src={photo} className="rounded-circle size-9" />
        <div>
          <p>{name}</p>
          <span className="text-gray-500 text-sm">
            {formateDate(createdAt)}
          </span>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
