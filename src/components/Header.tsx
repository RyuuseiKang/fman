import React from 'react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    padding-top: 10px;
    z-index: 99;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.span`
    margin-left: 40px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
`;

const Menu = styled.ul`
    list-style-type: none;
    right: 0px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuItem = styled.li`
    list-style-type: none;
    float: left;
    margin-right: 40px;
`;

const MenuLink = styled(Link)`
    font-size: 1.1rem;
    text-decoration: none;
    display: inline-block;
    position: relative;
    color: #333;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 9px;
        bottom: 0;
        left: 5px;
        background-color: #B3A4C6;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        z-index: -1;
    }

    &:hover:after {
        text-decoration: none;
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

const Header: React.FC = () => {
    return (
        <Container>
            <Title>
                {t<string>('header.title')}
            </Title>
            <Menu>
                <MenuItem>
                    <MenuLink to="/#">{t<string>('header.home')}</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/#policy">{t<string>('header.policy')}</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/#voicebank">{t<string>('header.voicebank')}</MenuLink>
                </MenuItem>
            </Menu>
        </Container>
    );
}

export default Header;