import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <AppStyled>
      <Sidebar />
      <Dashboard />
    </AppStyled>
  );
}

const AppStyled = styled.div``;
