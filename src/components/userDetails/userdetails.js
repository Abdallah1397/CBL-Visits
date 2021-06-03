import "./userdetails.scss";
const UserDetails = ({ userImage, userName, address, visitsNumber }) => {
  return (
    <div className="user">
      <div className="">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className=" pt-0  user__cover">
            <div className="media align-items-end user__profile-head">
              <div className="profile">
                <img
                  src={userImage}
                  alt="..."
                  width="130"
                  className="rounded mb-2 img-thumbnail"
                />
               
              </div>
              <div className="media-body mb-5 ml-5 text-white">
                <h4 className="mt-0 mb-0">{userName}</h4>
                <p className="small mb-4">
                  {" "}
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {address}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-light p-4 d-flex justify-content-end text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="font-weight-bold mb-0 d-block">{visitsNumber}</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fas fa-image mr-1"></i>Visits Number
                </small>
              </li>
            </ul>
          </div>
          <div className="px-4 py-3">
            <h5 className="mb-0">About</h5>
            <div className="p-4 rounded shadow-sm bg-light">
              <p className="font-italic mb-0">Web Developer</p>
              <p className="font-italic mb-0">Lives in New York</p>
              <p className="font-italic mb-0">Photographer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
