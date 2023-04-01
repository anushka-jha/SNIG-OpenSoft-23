import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        fontFamily: "muli, sans-serif",
        fontWeight: "400",
        lineHeight: "1.5",
      }}
    >
      <CDBSidebar textColor="#676b84" backgroundColor="#f7faff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent
          className="sidebar-content"
          style={{ fontSize: "14px" }}
        >
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="table">Transactions</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="table">
              Transactions History
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="user">
              <Link to="/myaccount">My Accounts</Link>
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="chart-line">
              <Link to="/accountstatement">Account statement</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line">
              <Link to="/analytics">Analytics</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line">
              <Link to="/">Logout option</Link>
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="exclamation-circle">
              <Link to="/settings"> Settings</Link>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
