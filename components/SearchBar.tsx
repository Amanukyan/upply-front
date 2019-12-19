import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const SearchWrapper = styled.div`
  width: 80%;
  padding-right: 20px;

  input {
    width: 100%;
    height: 40px;
    background-color: #f5f6f7;
    padding: 0 20px;
    border: 0px solid lightgray;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
    border: 1px solid lightgray;
    background-color: white;
  }
`;

const SortSelectWrapper = styled.div`
  width: 20%;

  select {
    width: 100%;
    height: 40px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid lightgray;
  }

  select:focus {
    outline: none;
    background-color: white;
  }
`;

const Label = styled.label`
  color: #999;
  display: block;
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

interface Props {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch, onSort }) => (
  <Wrapper>
    <SearchWrapper>
      <Label>TITLE</Label>
      <input placeholder="search" type="text" onChange={onSearch} />
    </SearchWrapper>
    <SortSelectWrapper>
      <Label>SORT BY</Label>
      <select onChange={onSort}>
        <option value="desc">New</option>
        <option value="asc">Old</option>
      </select>
    </SortSelectWrapper>
  </Wrapper>
);

export default SearchBar;
