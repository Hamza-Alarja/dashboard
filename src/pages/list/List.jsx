import React from "react";
import "./list.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "react-bootstrap";
import DataTable from "../../components/dataTable/DataTable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Container fluid>
          <DataTable />
        </Container>
      </div>
    </div>
  );
};

export default List;
