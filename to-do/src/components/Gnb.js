import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

import { colorSet } from '../colorSet';

const GnbBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${colorSet.main};
    box-sizing: border-box;
    padding: 12px 20px;
`

const Logo = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 72px;
    height: 28px;
    cursor: pointer;
`;

const Location = styled.div`
    position: relative;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    padding-right: 20px;
`

const LocationIcon = styled.i`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 18px;
`

export default function Gnb() {
    const [location, setLocation] = useState('위치 정보 없음');

    return (
        <GnbBlock>
            <Link to="/">
                <Logo className="logo"></Logo>
            </Link>
            <Location>
                {location}
                <LocationIcon>
                    <MdLocationOn/>
                </LocationIcon>
            </Location>
        </GnbBlock>
    )
}