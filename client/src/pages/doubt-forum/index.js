import React, { useEffect, useState } from 'react'; 
import './style.css';
import Doubt from './components/doubt';
import DoubtHeader from './components/doubt-header';
import { allDoubts } from '../../api/doubt';
import Navbar from '../../componets/navbar/navbar';


function DoubtForum() {
    const [doubts, setDoubts] = useState([]);

    useEffect(() => {
        const fetchDoubts = async () => {
            try {
                const allDoubtsData = await allDoubts();
                allDoubtsData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setDoubts(allDoubtsData);
            } catch (error) {
                console.error('Error fetching doubts:', error);
            }
        };

        fetchDoubts();
    }, []); 


    return (
        <>
            <Navbar />
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
