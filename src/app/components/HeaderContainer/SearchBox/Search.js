import React from 'react';

const Search = (props) => {
  return (
    <form className="form-inline ml-auto">
    <input className="form-control mr-sm-2" type="search" placeholder="Search tweets" aria-label="Search"/>
    <button className="btn-search"><i className="zmdi zmdi-search"></i></button>
  </form>
  );
};

export default Search;
