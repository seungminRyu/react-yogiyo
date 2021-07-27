import React from 'react';
import styled from 'styled-components';
import { MdMyLocation } from 'react-icons/md';
import { colorSet } from '../colorSet';

const SearchLoactionBlock = styled.div`
    display: none;
    width: 100%;
    background-color: ${colorSet.main};
    box-sizing: border-box;
    padding: 0 20px 8px;

    &.--activated {
        display: block;
    }

    .search-body {
        display: grid;
        grid-template-columns: 48px auto;
        max-width: 420px;
        margin: 0 auto;
    }
`;

const LoacationButton = styled.div`
    display: grid;
    place-content: center;
    width: 40px;
    height: 40px;
    color: ${colorSet.main};
    font-size: 24px;
    border-radius: 4px;
    background-color: ${colorSet.white};
    cursor: pointer;
    margin-right: 8px;
`

const Search = styled.div`
    position: relative;
`

const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 6px 12px
`

function SearchLocation() {
    return (
        <SearchLoactionBlock className="--activated">
            <div className="search-body">
                <LoacationButton>
                    <MdMyLocation/>
                </LoacationButton>
                <Search>
                    <SearchInput placeholder="건물명, 도로명, 지번으로 검색하세요." />
                </Search>
            </div>
        </SearchLoactionBlock>
    )
}

export default SearchLocation;