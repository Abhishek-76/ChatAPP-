import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/13691177/pexels-photo-13691177.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>Shri Ram </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
