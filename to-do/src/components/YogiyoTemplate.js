import React from 'react';
import styled from 'styled-components';
import { colorSet } from '../colorSet';

const YogiyoTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 512px;
    position: relative;
    background: ${colorSet.background};
    box-sizing: border-box;
    overflow: hidden;
    padding-bottom: 100px;
    margin: 0 auto;
`;

function YogiyoTemplate({ children }) {
    return <YogiyoTemplateBlock>{children}</YogiyoTemplateBlock>
}

export default YogiyoTemplate;