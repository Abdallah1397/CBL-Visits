import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserRequest } from "../store/actions/user";
import { withRouter } from "react-router-dom";
import MainVisits from "../components/Visits/visits";
import Title from "../components/Title/Title";
import Hero from "../components/Hero/Hero";


/* User Profile that get the data for every user */
const UserProfile = ({ user, getUser }) => {
  useEffect(() => {
    getUser();
  }, []);

  /* Get User Data */
  const MyVisit = () => {
    return (
      <>
        {user.visits
          ? user.visits.map((item) => {
              return (
                <>
                  <MainVisits
                    id={item.id}
                    mainImage={item.img}
                    visitName={item.name}
                    leader={item.leader}
                    visitCourse={item.visit_course}
                    start={item.from}
                    to={item.to}
                    buttonShow={true}
                  />{" "}
                </>
              );
            })
          : "no Data"}
      </>
    );
  };
  return (
    <div>
       <div className="userName">
        </div>
    <div className="container-fluid p-5 ">
     
      <div className="m-5">
      <Title title="My Profile"/>

        <div className="row mt-5">

          <div className="col-lg-4 col-md-5">
            <div className="col-12">
              <img src={user.img} alt="" className="col-12" />
            </div>
            <div className="text-center mt-3">
              <h1 className="">{user.user_name}</h1>
            </div>
          </div>

          <div className="col-lg-8 col-md-7 mt-5">
            <div className="mt-5">
              <h1 className="">{user.user_name}</h1>
              <div className="">
                <ul className="mt-5">
                  <li style={{listStyle:"none"}}>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-graduation-cap text-orange"></i>
                        <strong className=" text-orange">Status :</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>No data</p>
                      </div>
                    </div>
                  </li>
                  <li style={{listStyle:"none"}}>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="far fa-file text-lightred"></i>
                        <strong className="">Country:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>{user.country}</p>
                      </div>
                    </div>
                  </li>
                  <li style={{listStyle:"none"}}>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-map-marker-alt text-green"></i>
                        <strong className="text-green">Address:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>{user.address}</p>
                      </div>
                    </div>
                  </li>
                  <li style={{listStyle:"none"}}>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-mobile-alt text-purple"></i>
                        <strong className=" text-purple">Phone:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>(+44) 123 456 789</p>
                      </div>
                    </div>
                  </li>
                  <li style={{listStyle:"none"}}>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-envelope text-pink"></i>
                        <strong className="text-pink">Email:</strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>
                          <a href="javascript:void(0)">{user.email}</a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
         <Title title="My Visits"/>
          <div className="row mt-5">
            <h3>Number of visits : {user.visits_no}</h3>
          </div>
          <div className="row justify-content-center mt-5">
            <MyVisit />
          </div>
        </div>
      </div>
      </div>
      <Hero title="Community Based Learning" showButton={true} />{" "}

    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
});
const mapDispatchToProps = {
  getUser: getUserRequest,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserProfile)
);
