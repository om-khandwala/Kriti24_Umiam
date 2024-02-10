import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { findAllUsers } from "../../api/user";
import { allProject } from "../../api/project";
import { allGroups } from "../../api/groups";

function Navbar() {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await findAllUsers();
        const usersWithCategory = users.map(user => ({ ...user, category: 'user' }));
        
        const groups = await allGroups();
        const groupsWithCategory = groups.map(group => ({ ...group, category: 'group' }));

        const projects = await allProject();
        const projectsWithCategory = projects.map(project => ({ ...project, category: 'project' }));

        setFilteredResults([...usersWithCategory, ...groupsWithCategory, ...projectsWithCategory]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    const results = filteredResults.filter((item) => {
      const projectName = item.projectName ? item.projectName.toLowerCase() : "";
      const name = item.name ? item.name.toLowerCase() : "";
      return (
        projectName.includes(query.toLowerCase()) ||
        name.includes(query.toLowerCase())
      );
    });
    setSearchResults(results);
  };

  useEffect(() => {
    if (query === "") {
      setSearchResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.tagName !== "INPUT") {
        const prevDisplay = true;
        setDisplay(prevDisplay);
        setQuery("")
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
   // console.log('Clicked item:', item);
    console.log('Category:', item.category);
  
    if (item.category === 'user') {
        navigate(`/profile/${item._id}`);

    } else if (item.category === 'group') {
        navigate(`/communities/${item._id}`);
        
    } else if (item.category === 'project') {
        navigate(`/project-feed/${item._id}`); 
    }

  };
  

  return (
    <div className="main-navbar">
      <div className="left flex">
        <Link to={'/feed'}>
          <img src='/images/logo-light.png' alt='logo'/>
        </Link>
        <Link to={"/feed"}>
          <h4>Project Alpha</h4>
        </Link>    
      </div>

      {display && (
        <div className="middle flex">
          <ul>
            <Link to={"/feed"}>
              <li>Home</li>
            </Link>
            <Link to={"/communities"}>
              <li>Communities</li>
            </Link>
            <Link to={"/doubt"}>
              <li>Doubt Forum</li>
            </Link>
            <Link to="/project-feed">
              <li>Projects</li>
            </Link>
            <Link to="/course">
              <li>Course</li>
            </Link>
          </ul>
        </div>
      )}

      <div className="right flex">
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            onFocus={() => {
              const x = false;
              setDisplay(x);
            }}
          />
          {searchResults.length > 0 && (
            <div className="dialog-box">
              <ul>
                {searchResults.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(item)}>
                    <h4>{item.name}</h4>
                    <h4>{item.projectName}</h4>
                    <span>Category: {item.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link to='https://login.microsoftonline.com/common/oauth2/v2.0/logout'><i className="fa-solid fa-right-from-bracket"></i></Link>
        <i className="fa-regular fa-message"></i>
        <div className="user-profile"></div>
      </div>
    </div>
  );
}

export default Navbar;
