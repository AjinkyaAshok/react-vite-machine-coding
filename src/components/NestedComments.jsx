import React, { useState } from "react";
import Comment from "./Comment";

export default function NestedComments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "John",
      text: "Great article!",
      replies: [
        {
          id: 2,
          user: "Sarah",
          text: "Thanks!",
          replies: [
            {
              id: 3,
              user: "Mike",
              text: "I agree!",
              replies: [],
            },
          ],
        },
      ],
    },
  ]);

   const addReply = (comments, parentId, newReply) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }

      return {
        ...comment,
        replies: addReply(comment.replies, parentId, newReply),
      };
    });
  };

  const handleAddReply = (parentId, newReply) => {
    setComments((prev) => addReply(prev, parentId, newReply));
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-screen">
      NestedComments
      {comments.map((item) => (
        <Comment key={item.id} comment={item} onAddReply={handleAddReply} />
      ))}
    </div>
  );
}
