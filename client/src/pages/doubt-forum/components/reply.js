import { currentUser } from "../../../api/course";
import { getRepliesOfDoubt, replyDoubt } from "../../../api/doubt";
import "./reply.css";
import React, { useEffect, useState } from "react";

function ReplyForm({ doubtId, setReplies, doubt }) {
  const [replyText, setReplyText] = useState("");

  const handleChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await currentUser();
      const data = {
        text_body: replyText,
        user_id: user.user[0]._id,
      };
      const reply = await replyDoubt(doubtId, data);

      console.log("Reply added:", reply);
      setReplyText("");
      const fetchedReplies = await getRepliesOfDoubt(doubt._id);
      setReplies(fetchedReplies);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      <textarea
        value={replyText}
        onChange={handleChange}
        placeholder="Type your reply here..."
      />
      <button type="submit">Reply</button>
    </form>
  );
}

export default ReplyForm;
