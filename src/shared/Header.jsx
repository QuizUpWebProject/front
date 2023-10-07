import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../assets/fonts/font.css"

const Header = () => {

  return (
    <Wrapper>
      <Logo>Quiz up</Logo> 

      <NavContainer>
        <NavGroup>
          <NavItem><NavLinkStyled to='/'>홈</NavLinkStyled></NavItem>
          <NavItem><NavLinkStyled to='/front'>프론트엔드</NavLinkStyled></NavItem>
          <NavItem><NavLinkStyled to='/back'>백엔드</NavLinkStyled></NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem><NavLinkStyled to='/study'>스터디방</NavLinkStyled></NavItem>
          <NavItem isNotification><Button>알림</Button></NavItem>
          <NavItem><NavLinkStyled to='MyPage'>마이페이지</NavLinkStyled></NavItem>
        </NavGroup>
      </NavContainer>

    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0;
  display: flex;
  gap: 88px;
  padding: 51px 0 90px 0;

  @media (max-width: 1765px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;
const Logo = styled.div`
  font-family: "Unbounded";
  color: #5263FF;
  font-size: 35px;
  white-space: nowrap;
  position: absolute;
  left: 9vw;
  @media (max-width: 1765px) {
    position: static;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  max-width: 1090px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;
const NavGroup = styled.ul`
  list-style: none;
  display: flex;
  gap: 45px;
  padding: 0;
  justify-content: flex-start;
  &:first-child {
    margin-right: auto;
  }
`;
const NavItem = styled.li`
  position: relative;
`;
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #A4A4A4;
  position:relative;
  white-space: nowrap;

  &:hover {
    color: white;
  }

  &.active::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #5263FF;
    border-radius: 50%;
  }

  &.active {
    color: white;
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #A4A4A4;
  cursor: pointer;
  white-space: nowrap;
  font-size: 16px;
`;

export default Header;
