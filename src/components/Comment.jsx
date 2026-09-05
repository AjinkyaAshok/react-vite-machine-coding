import React, { useState } from "react";

export default function Comment({ comment,onAddReply }) {
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState(false);
  const [replyText, setReplyText] = useState("");

    const handleAdd = () => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      user: "You",
      text: replyText,
      replies: [],
    };

    onAddReply(comment.id, newReply);

    setReplyText("");
    setReply(false);
    setShow(true);
  };

  return (
    <div>
      <h1>{comment.user}</h1>
      <p>{comment.text}</p>
      <button
        className="bg-amber-100 rounded-2xl p-2 m-2"
        onClick={() => setShow(!show)}
      >
        {show ? "Less" : "More"}
      </button>
      <button
        className="bg-amber-100 rounded-2xl p-2 m-2"
        onClick={() => setReply(!reply)}
      >
        Reply
      </button>
      {reply && (
        <div className="ml-5">
          <input
            onChange={(e) => setReplyText(e.target.value)}
            type="text"
            value={replyText}
            placeholder="Write a reply..."
            className="bg-amber-100 rounded-2xl p-2 m-2"
          />
          <button
            className="bg-amber-100 rounded-2xl p-2 m-2"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-amber-100 rounded-2xl p-2 m-2"
            onClick={() => setReply(!reply)}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="ml-5">
        {show &&
          comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} onAddReply={onAddReply} />
          ))}
      </div>
    </div>
  );
}
