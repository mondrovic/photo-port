import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  // update tab name (document.title) to currentCategory.name
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => handleClick("About")}
            >
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick("Contact")}>Contact</span>
          </li>
          {/* 
          uses map on categories array to display each item in nav bar
          adds class of mx-1 and makes sure the currentCategory.name matches the mapped category.name
          adds class of navActive to highlight
          adds a key to list item for react to track !! Should be unique !!
          adds event listener to setCurrentCategory to the clicked category
          */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
