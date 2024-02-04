import './collaborate.css';

const Collaborate = () => {
    return ( 
        <>
        <div className="collaborate ">
            <div>
                <p className="heading">Collaberate And Discuss your project with campus janta</p>
                <p className='col_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
                <button className="page_btn">Start for Free</button>
            </div>
            <img src='/images/Laptop mockup.png' alt='rectangle' className='laptop_img'></img>
            <img src='/images/Rectangle2.png' alt='rectangle' className='black_img'></img>
            <img src='/images/Rectangle3.png' alt='rectangle' className='yellow_img'></img>
        </div>
        <div className='aboutus right'>
            <img src='/images/Rectangle5.png' alt='rectangle' className='about_img'></img>
            <img src='/images/Rectangle6.png' alt='rectangle' className='outline_img'></img>
            <div className='content'>
                <p className="heading">About Us</p>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
            </div>     
        </div>
        <div className="feature1 left">
            <div className="content">
                <p className='heading'>Feature 1</p>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
                <button className='page_btn' >Learn More</button>
            </div>
            <div className='im'>
            <img src='/images/Rectangle17.png' alt='rectangle' className='white_box'></img>
            <img src='/images/Rectangle7.png' alt='rectangle' className='black_box'></img>
            </div>
        </div>
        <div className="feature2 right">
            <img src='/images/Rectangle8.png' alt='rectangle' className='l_black_box'></img>
            <img src='/images/Rectangle17.png' alt='rectangle' className='l_white_box'></img>
            <div className="content">
                <p className='heading'>Feature 2</p>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
                <button className='page_btn' >Learn More</button>
            </div>
        </div>
        <div className="contact_us">
            <img src='/images/Rectangle9.png' alt='rectangle' className='rec1'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec2'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec3'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec4'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec5'></img>
            <img src='/images/Rectangle18.png' alt='rectangle' className='rec6'></img>
            <img src='/images/Rectangle1.png' alt='rectangle' className='rec7'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec8'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec9'></img>
            <img src='/images/Rectangle13.png' alt='rectangle' className='rec10'></img>
            <p className='get_help'>Get Help</p>
            <p className='get_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius diam justo, id sagittis ipsum dictum feugiat.</p>
            <button className='page_btn cont_btn'>Contact us</button>
            
        </div>
        <div className="footer">
            <img src='/images/Group21.png' alt='logo' className='logo'></img>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
            </ul>
        </div>
        </>
     );
}
 
export default Collaborate;