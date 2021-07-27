import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const categoryList = ['세일', '전체', '1인분', '치킨', '피자'];

const CategoryListBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 12px 20px 0;
`;

function CategoryList() { 
    return (
        <CategoryListBlock>
            {categoryList.map((itemName, id) => <CategoryItem id={id} key={id} itemName={itemName}></CategoryItem>)}
        </CategoryListBlock>
    )
}

export default CategoryList;