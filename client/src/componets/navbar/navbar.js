import './style.css'

function Navbar(){
    return(
        <div class="main-navbar">
            <div className="left flex">
                <img/>
                <h4>Project Alpha</h4>
            </div>

            <div className="middle flex">
                <ul>
                    <li>Home</li>
                    <li>Communites</li>
                    <li>Doubt Forum</li>
                    <li>Projects</li>
                </ul>
            </div>

            <div className="right flex">
                <input type='text'/>
                
            </div>
        </div>
    )
}

export default Navbar;