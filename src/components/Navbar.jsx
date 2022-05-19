import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="title">
        <h4>Hi Shrey,</h4>
        <h1>
          Welcome to <span>MY TAXI DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    font-size: 1.5rem;
    h1 {
      span {
        margin: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.3rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0rem 10rem 0 1.5rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
      font-size: 1.6rem;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-size: 1.5rem;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #ffc107;
      }
      &:focus {
        outline: none;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
    .search {
      input {
        background-color: transparent;
        border: none;
        color: #ffc107;
        font-size: 1.5rem;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.3rem;
        padding: 1rem 0 1rem;
        &::placeholder {
          color: #ffc107;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
