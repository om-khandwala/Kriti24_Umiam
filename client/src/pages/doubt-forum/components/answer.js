import "./answer.css";

function DoubtAnswer({ replies }) {
  return (
    <div>
      {replies.map((reply, index) => (
        <div className="doubt-answer" key={index}>
          <div className="doubt-answer-left"></div>
          <div className="doubt-answer-right">
            <div className="flex">
              <p>{reply.user_id}</p>
              <p>{new Date(reply.created_at).toLocaleString()}</p>
            </div>

            <h5>{reply.text_body}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoubtAnswer;
