const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 bab b--green bg-lightest-blue shadow-5"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
