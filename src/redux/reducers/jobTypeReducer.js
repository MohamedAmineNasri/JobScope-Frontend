import { JOB_TYPE_CREATE_FAIL, JOB_TYPE_CREATE_REQUEST, JOB_TYPE_CREATE_SUCCESS, JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_RESET, JOB_TYPE_LOAD_SUCCESS } from "../constants/jobTypeConstant"


export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
  switch (action.type) {
    case JOB_TYPE_LOAD_REQUEST:
      return { loading: true };
    case JOB_TYPE_LOAD_SUCCESS:
      return {
        loading: false,
        jobType: action.payload.jobT,
      };
    case JOB_TYPE_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case JOB_TYPE_LOAD_RESET:
      return {};
    default:
      return state;
  }
};


export const createJobTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_TYPE_CREATE_REQUEST:
      return { loading: true };
    case JOB_TYPE_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        jobType: action.payload.jobT,
      };
    case JOB_TYPE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
