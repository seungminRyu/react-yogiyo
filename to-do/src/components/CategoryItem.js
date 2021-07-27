import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorSet } from '../colorSet';

import './CategoryItem.css';

const CategoryItemBlock = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colorSet.white};
    border: solid 1px ${colorSet.border};
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    padding-bottom: 100%;
    
    &:hover {
        background-size: 105%;
    }

    &.sale:hover {
        background-size: 115%;
    }

    .category-item-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        hieght: 100%;
        padding: 16px;
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
                <div className="category-item-wrapper">
                    <ItemName>{itemName === "세일" ? '' : itemName}</ItemName>
                </div>
            </CategoryItemBlock>
        </Link>
    )
}

export default CategoryItem;