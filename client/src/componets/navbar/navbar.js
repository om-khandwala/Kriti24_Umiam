import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { findAllUsers } from "../../api/user";
import { allProject } from "../../api/project";
import { allGroups } from "../../api/groups";

function Navbar() {
  const [query, setQuery] = useState("");

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await findAllUsers();

        const projects = await allProject();

        const groups = await allGroups();

        // Now that all data is fetched, update filtered results
        setFilteredResults([...groups, ...users, ...projects]);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, if necessary
      }
    };

    fetchData();
  }, []);
  console.log(filteredResults);
  const handleChange = (e) => {
    setQuery(e.target.value);
    const results = filteredResults.filter((item) => {
      // Check if projectName and name properties exist and then apply toLowerCase()
      const projectName = item.projectName
        ? item.projectName.toLowerCase()
        : "";
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
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div class="main-navbar">
      <div className="left flex">
        <img />
        <h4>Project Alpha</h4>
      </div>

      {display && (
        <div className="middle flex">
          <ul>
            <li>Home</li>
            <Link to={"/communities"}>
              <li>Communities</li>
            </Link>
            <Link to={"/doubt"}>
              <li>Doubt Forum</li>
            </Link>

            <li>Projects</li>
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
                  <li key={index}>
                    <h3>{item.name}</h3>
                    <h4>{item.projectName}</h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
