import './ProjectsList.css'; 

const Aboutproject = () => {
    return ( 
        <div className="about_proj">
            <div className="proj_title">
                <p className='title'>Weather App</p>
            </div>
            <div className="proj_img">
                <img src='./images/Rectangle 67.png' alt='project related images' className='projrelimg'></img>
                <img src='./images/Rectangle 67.png' alt='project related images' className='projrelimg'></img>
            </div>
            <div className="proj_details">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="tech_used">
                <button className='tools'>HTML</button>
                <button className='tools'>Javascript</button>
                <button className='tools'>Mondo db</button>
            </div>
        </div>
     );
}
 
export default Aboutproject;