import React, { useState, useEffect } from "react";
import { useParams, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllVisitsRequest } from "../store/actions/visits";
import ReactPaginate from "react-paginate";
import Title from "../components/Title/Title";
import MainVisits from "../components/Visits/visits";
import Hero from "../components/Hero/Hero";
const Visits = ({ visits, getVisits }) => {
  useEffect(() => {
    getVisits();
  }, []);
  console.log(visits);
  /* State used to the paginate */
  const [pageNumber, setPageNumber] = useState(0);
  /* state to get the visit search */
  const [searchVisits, setSearchVisits] = useState([]);
  const [visit, setVisit] = useState([]);
  const [submit, setSubmit] = useState(false);
  /* number of visits per page */
  const visitsPerPage = 6;
  const pagesVisited = pageNumber * visitsPerPage;
  const pageCount = Math.ceil(visits.length / visitsPerPage);
  /* Changing Page Function  */
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // Search Visits
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setVisit(value.toLowerCase());
    if (value == "") {
      setSubmit(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const result = visits.filter((i) => {
      return i.name == visit;
    });
    setSearchVisits(result);
  };
  // Function Return Search Visit Div
  const Searched = () => {
    return (
      <div>
        {searchVisits.length != 0 ? (
          <>
            <MainVisits
              id={searchVisits[0].id}
              mainImage={searchVisits[0].main_img}
              visitName={searchVisits[0].name}
              leader={searchVisits[0].leader}
              visitCourse={searchVisits[0].visit_course}
              start={searchVisits[0].start}
              to={searchVisits[0].to}
              buttonShow={false}
            />
          </>
        ) : (
          <>
            <h1>Oops , No Data Found</h1>
          </>
        )}
      </div>
    );
  };
  /* VISITS DISPLAY USING MAP & SLICE TO PAGINATE*/
  const displayVisits = visits
    .slice(pagesVisited, pagesVisited + visitsPerPage)
    .map((item) => {
      return (
        <MainVisits
          id={item.id}
          mainImage={item.main_img}
          visitName={item.name}
          leader={item.leader}
          visitCourse={item.visit_course}
          start={item.start}
          to={item.to}
          buttonShow={false}
        />
      );
    });
  return (
    <div className="">
      <div className="container-fluid visitsCover"></div>
      <div className="container-container-fluid">
        <Title title="Visits" />
        {/* <form
          className="row col-12 justify-content-center mt-5"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            className="col-6 text-center search-input mt-5 mb-5"
            placeholder="SEARCH VISITS"
            onChange={handleSearch}
          ></input>
        </form> */}
        {submit ? (
          <div className=" container-fluid">
            <div className="row justify-content-center">
              <Searched />
            </div>
          </div>
        ) : (
          <div>
            {/* Visits Div that was created above with MAP function */}
            <div className=" row col-12 justify-content-center mt-5">
              <div className="row justify-content-center">{displayVisits}</div>
            </div>
            {/* React Paginate to make pagination in the page */}
            <div className="row col-12 justify-content-center mt-5">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                className="mt-5"
              />
            </div>
          </div>
        )}
      </div>
      <Hero title="Community Based Learning" showButton={true} />{" "}
    </div>
  );
};
const mapStateToProps = (state) => ({
  visits: state.visits.visits,
});
const mapDispatchToProps = {
  getVisits: getAllVisitsRequest,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Visits));
