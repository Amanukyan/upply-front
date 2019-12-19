import React from "react";

import styled from "styled-components";

const Wrapper = styled.div``;

interface Props {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => (
  <Wrapper>
    <input placeholder="search" type="text" onChange={onSearch} />
  </Wrapper>
);

export default SearchBar;
