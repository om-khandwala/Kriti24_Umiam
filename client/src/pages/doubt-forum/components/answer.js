import Replies from "./Replies";
import "./answer.css";

function DoubtAnswer({ replies }) {
  return (
    <div>
      {replies.map((reply, index) => (
        <Replies reply={reply} key={index} />
      ))}
    </div>
  );
}

export default DoubtAnswer;
