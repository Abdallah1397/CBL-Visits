import React, { useEffect, useState } from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getVisitDetailsRequest } from "../store/actions/visitDetails";
import { getUserRequest } from "../store/actions/user";
import Cookies, { set } from "js-cookie";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import LoadingSpinner from "../components/spinner/spinner";


// Visit Detail Page that get the visit details 
const VisitDetailPage = ({ user, getUser, visitDetail, getVisitDetail }) => {
  const params = useParams();
  const history=useHistory();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    getUser();
    if (params.id) {
      getVisitDetail(params.id);
    }
  }, [params.id]);
  if (visitDetail != "") console.log(visitDetail);
  const token = Cookies.get("token");
  const AuthStr = `Token ${token}`;
  // Dispatch Function to make apply visits
  const onClickApply = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .patch(`http://10.0.30.166:8080/private/visits/main/${visitDetail.id}/`, {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setResult(res.data);
        setLoading(false);
        history.go(0);

      });
  };
  return (
    <div>
      {/* Visit Detail Page */}
      <div className="container background-white ">
        {visitDetail.id ? (
          <>
            <div key={visitDetail.id} className="row mt-5 ">
              {/* Visit Name */}
              <Title
                title={`Welcome to ${
                  visitDetail.name ? visitDetail.name : "No Data"
                }`}
              />

              <div className="row mt-5">
                <div className="col-md-6 col-12">
                  <img src={visitDetail.main_img} className="col-12" />
                </div>
                <div className="col-md-6">
                  <div className="row col-12 mt-5 ">
                    <label className="col-3"> Code :</label>
                    <h4 className="col-9">{visitDetail.code}</h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> Department ID :</label>
                    <h4 className="col-9">{visitDetail.department.id}</h4>
                    {/* {console.log(visitDetail.department)} */}
                  </div>
                  <div className="row col-12 mt-3 ">
                    <label className="col-3"> Department Name :</label>
                    <h4 className="col-9">{visitDetail.department.name}</h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> Department Faculty :</label>
                    <h4 className="col-9">{visitDetail.department.faculty}</h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> Meeting Title :</label>
                    <h4 className="col-9">
                      {visitDetail.meeting != null
                        ? visitDetail.meeting.title
                        : "No Data"}
                    </h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> Meeting Time :</label>
                    <h4 className="col-9">
                      {visitDetail.meeting
                        ? visitDetail.meeting.time
                        : "No Data"}
                    </h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> Meeting Location :</label>
                    <h4 className="col-9">
                      {visitDetail.meeting
                        ? visitDetail.meeting.location.location
                        : "No Data"}
                    </h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> Start :</label>
                    <h4 className="col-9">{visitDetail.start}</h4>
                  </div>
                  <div className="row col-12 mt-3">
                    <label className="col-3"> To :</label>
                    <h4 className="col-9">{visitDetail.to}</h4>
                  </div>
                </div>
              </div>
              <div className="row col-12 mt-3">
                <label className="col-3"> Objective :</label>
                <h4 className="col-9">{visitDetail.objectives}</h4>
              </div>
              <div className="row col-12 mt-3">
                <label className="col-3"> Leader :</label>
                <h4 className="col-9">{visitDetail.leader.user_name}</h4>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <button
                className="btn btn-primary col-md-4 col-9 justify-content-center mb-2"
                onClick={onClickApply}
                type="submit"
                key={visitDetail.id}
                disabled={visitDetail.current_user.is_allowed ? false : true}
              >
                Apply
              </button>
            </div>
            <h4 className="row justify-content-center mb-5">
            <div className="">
            {loading ? <LoadingSpinner /> : "" }
            </div>
              {visitDetail.current_user.reason}
            </h4>
             
          </>
        ) : (
          ""
        )}
      </div>

    
    </div>
  );
};
const mapStateToProps = (state) => ({
  visitDetail: state.visitsDetails.visitDetail,
  user: state.user.user,
});
const mapDispatchToProps = {
  getVisitDetail: getVisitDetailsRequest,
  getUser: getUserRequest,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VisitDetailPage)
);
