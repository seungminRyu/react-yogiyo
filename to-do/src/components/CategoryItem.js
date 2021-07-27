import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorSet } from '../colorSet';

import './CategoryItem.css';

const CategoryItemBlock = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${colorSet.white};
    border: solid 1px ${colorSet.border};
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    padding: 16px;
    
    &:hover {
        background-size: 105%;
    }
    &.sale:hover {
        background-size: 115%;
    }
`;

const ItemName = styled.span`
    color: ${colorSet.black};
    font-weight: bold;
    font-size: 18px;

    &:visited {
        color: ${colorSet.black};
    }
`;

function CategoryItem({ id, itemName }) { 
    return (
        <Link to={`/${itemName}`} style={{ textDecoration: 'none'}}>
            <CategoryItemBlock className={"category-item" + (itemName === "세일" ? " sale" : "")}>
                <ItemName>{itemName === "세일" ? '' : itemName}</ItemName>
            </CategoryItemBlock>
        </Link>
    )
}

export default CategoryItem;