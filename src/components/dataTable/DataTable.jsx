import React, { useState, useEffect } from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddButton from "./../modalbutton/ModalButton";
import { userColumns, userRows } from "../../dataTablesource";
import AnimatedPages from "../AnimatedPages";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify(userRows));
    } else {
      let loadUsers = JSON.parse(localStorage.getItem("users"));
      setData(loadUsers);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("users", JSON.stringify(data));
    }
  }, [data]);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  function handleAddUser(newUser) {
    const updatedUser = { ...newUser, img: preview };
    setData([updatedUser, ...data]);
    setPreview(null);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              className="me-5 btn"
              style={{ border: "none" }}
              onClick={() => handleDelete(params.row.id)}
            >
              <i className="fa-regular fa-trash-can fs-5 text-danger"></i>
            </button>
            <Link to={"/users/" + params.row.id}>
              <button className="btn" style={{ border: "none" }}>
                <i className="fa-regular fa-eye text-warning"></i>
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <AnimatedPages>
      <div className="dataTable" style={{ height: "80vh" }}>
        <div className="my-3"></div>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
        />
        <AddButton
          handleAddUser={handleAddUser}
          handlePreview={setPreview}
          preview={preview}
        />
      </div>
    </AnimatedPages>
  );
};

export default DataTable;
