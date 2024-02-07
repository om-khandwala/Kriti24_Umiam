import React, { useEffect, useState } from "react";
import "./style.css";
import Doubt from "./components/doubt";
import DoubtHeader from "./components/doubt-header";
import { allDoubts, currentUserDoubts } from "../../api/doubt";
import Navbar from "../../componets/navbar/navbar";

function DoubtForum({ id }) {
  const [doubts, setDoubts] = useState([]);
  const [userDoubts, setUserDoubts] = useState([]);
  const [allQs, setAllQs] = useState(true);
  console.log(userDoubts, "User doubts are:");
  useEffect(() => {
    const fetchDoubts = async () => {
      try {
        const allDoubtsData = await allDoubts();
        allDoubtsData.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setDoubts(allDoubtsData);
      } catch (error) {
        console.error("Error fetching doubts:", error);
      }
    };

    fetchDoubts();
  }, []);
  const handleUserQs = async () => {
    const data = await currentUserDoubts(id);
    setUserDoubts(data.doubts);
    setAllQs(false);
  };
  return (
    <>
      <Navbar />
      <DoubtHeader setDoubts={setDoubts} id={id} />
      <div className="doubt-forum">
        <div className="left">
          <button onClick={handleUserQs}>My Questions</button>
          <button onClick={() => setAllQs(true)}>All Questions</button>
        </div>

        <div className="middle">
          {allQs
            ? doubts.map((doubt) => <Doubt key={doubt._id} doubt={doubt} />)
            : userDoubts.map((doubt) => (
                <Doubt key={doubt._id} doubt={doubt} />
              ))}
        </div>

        <div className="right">
          <h4>Help Community to grow</h4>
          <button>Invite Friends</button>
        </div>
      </div>
    </>
  );
}

export default DoubtForum;
