import { useState, useEffect } from "react";
import "./SinglePage.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [users, setUsers] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const filterUserById = users.filter((user) => userId == user.id);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <Container fluid>
          <>
            <h2 className="mt-3">User Information</h2>
            <hr className="w-25" />

            <Col md={12} className="user-info mt-5 p-5">
              {filterUserById.map((user) => {
                return (
                  <div key={user.id} className=" users">
                    <div>
                      <div className="p-3">
                        <h6>
                          <span className="fw-bold">
                            <i className="fa-solid fa-bookmark text-warning pe-1">
                              :
                            </i>
                            {user.status}
                          </span>
                        </h6>

                        <h6 className="mt-2">
                          <span className="fw-bold">
                            <i className="fa-solid fa-calendar-days text-warning pe-1 mt-2">
                              :
                            </i>
                            {user.age}
                          </span>
                        </h6>
                      </div>
                      <p className="fs-6 p-1 m-0 text-muted fw-bolder">
                        Contact Details
                      </p>
                      <h6 className="p-3">
                        <span className="fw-bold">
                          <i className="fa-solid fa-envelope text-warning pe-1 mt-1">
                            :
                          </i>
                          {user.email}
                        </span>
                      </h6>
                      <h6 className="ps-3">
                        <span className="fw-bold">
                          <i className="fa-solid fa-mobile-screen-button text-warning pe-1">
                            :
                          </i>
                          {user.number}
                        </span>
                      </h6>
                    </div>
                    <div className="p-2 rtl">
                      <div className="h5 d-flex test">
                        <div className="user-name">
                          <div className="m-0">
                            <i className="fa-solid fa-user text-warning pe-1">
                              :
                            </i>
                            {user.username}
                          </div>
                          <div className="mt-3 email fw-bold">
                            <i className="fa-solid fa-briefcase text-warning pe-1">
                              :
                            </i>
                            {user.career}
                          </div>
                        </div>
                      </div>
                      <img className="user-img" src={user.img} alt="user img" />
                    </div>
                    <p className="w-25 text-muted ps-3 mt-3">
                      Game of Thrones attracted a record viewership on HBO and
                      has a broad, active, and international fan base. Critics
                      have praised the series for its acting, complex
                      characters, story, scope, and production values, although
                      its frequent use of nudity, violence, and sexual violence
                      has attracted criticism.
                    </p>
                  </div>
                );
              })}
            </Col>
          </>
        </Container>
      </div>
    </div>
  );
};

export default SinglePage;
