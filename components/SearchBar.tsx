import React from "react";

import styled from "styled-components";

const Wrapper = styled.div``;

interface Props {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch, onSort }) => (
  <Wrapper>
    <input placeholder="search" type="text" onChange={onSearch} />
    <select onChange={onSort}>
      <option value="desc">New</option>
      <option value="asc">Old</option>
    </select>
  </Wrapper>
);

export default SearchBar;
