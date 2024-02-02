import React, { useEffect, useState } from 'react'; 
import './style.css';
import Doubt from './components/doubt';
import DoubtHeader from './components/doubt-header';
import { allDoubts } from '../../api/doubt';


function DoubtForum() {
    const [doubts, setDoubts] = useState([]);

    useEffect(() => {
        const fetchDoubts = async () => {
            try {
                const allDoubtsData = await allDoubts();
                setDoubts(allDoubtsData);
            } catch (error) {
                console.error('Error fetching doubts:', error);
            }
        };

        fetchDoubts();
    }, []); 


    return (
        <>
            <DoubtHeader />
            <div className="doubt-forum">
                <div className="left">
                    <h4>My Question</h4>
                    <h4>My Answers</h4>
                </div>

                <div className="middle">
                    {doubts.map((doubt) => (
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
