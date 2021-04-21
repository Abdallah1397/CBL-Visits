import { combineReducers } from "redux";
import AuthReducer from "./auth";
import VisitsReducer from "./visits";
import VisitDetailsReducer from "./visitDetails";
import UserReducer from "./user";
const rootReducer = combineReducers({
  auth: AuthReducer,
  visits: VisitsReducer,
  visitsDetails: VisitDetailsReducer,
  user: UserReducer,
});
export default rootReducer;
