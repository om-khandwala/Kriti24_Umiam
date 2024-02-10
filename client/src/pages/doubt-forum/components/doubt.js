import React, { useState, useEffect } from "react";
import DoubtAnswer from "./answer";
import { getRepliesOfDoubt } from "../../../api/doubt";
import "./doubt.css";
import ReplyForm from "./reply";
import HorizontalLine from "../../../componets/line";

function Doubt({ doubt }) {
  const [replies, setReplies] = useState([]);
  const [showAllReplies, setShowAllReplies] = useState(false);
 // console.log(replies);

  replies.sort((a, b) => {
    return b.created_at - a.created_at;
  });
  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const fetchedReplies = await getRepliesOfDoubt(doubt._id);

        setReplies(fetchedReplies);
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    };

    fetchReplies();
  }, [doubt._id]);

  const time = Date.now() - new Date(doubt.created_at).getTime();

  const toggleReplies = () => {
    setShowAllReplies((showAllReplies) => !showAllReplies);
  };
  const handleShareButtonClick = () => {
    const url = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        alert("Failed to copy URL");
      });
  };
  return (
    <div className="doubt">
      <h2>{doubt.title}</h2>
      <div className="tags">
        {doubt.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <p className="description">{doubt.description}</p>
      <p>
        Asked by <span className="bold">{doubt.authorName.toLowerCase()}</span>,{" "}
        <span className="bold">{(time / (1000 * 60)).toFixed(0)}</span> minutes
        ago
      </p>
      <HorizontalLine color={"white"} />
      <ReplyForm doubtId={doubt._id} setReplies={setReplies} doubt={doubt} />

      {replies.length > 0 && (
        <>
          <div className="footer space-between">
            <div onClick={toggleReplies} className="flex">
              <i className="fa-regular fa-comments"></i>
              <p>Answer</p>
            </div>
            <div className="flex">
              <i className="fa-solid fa-share"></i>
              <p onClick={handleShareButtonClick}>Share</p>
            </div>
          </div>
          {showAllReplies && <DoubtAnswer replies={replies} />}
        </>
      )}
    </div>
  );
}

export default Doubt;
