import axios from 'axios';
import { JOB_TYPE_CREATE_FAIL, JOB_TYPE_CREATE_REQUEST, JOB_TYPE_CREATE_SUCCESS, JOB_TYPE_DELETE_FAIL, JOB_TYPE_DELETE_SUCCESS, JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_SUCCESS, JOB_TYPE_UPDATE_FAIL, JOB_TYPE_UPDATE_REQUEST, JOB_TYPE_UPDATE_SUCCESS } from '../constants/jobTypeConstant';
import { JOB_LOAD_SINGLE_FAIL, JOB_LOAD_SINGLE_REQUEST, JOB_LOAD_SINGLE_RESET, JOB_LOAD_SINGLE_SUCCESS } from '../constants/jobconstant';


export const jobTypeLoadAction = () => async (dispatch) => {
  dispatch({ type: JOB_TYPE_LOAD_REQUEST });
  try {
    const { data } = await axios.get("/api/type/jobs");
    dispatch({
      type: JOB_TYPE_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_TYPE_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};
// single job reducer
export const loadJobSingleReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case JOB_LOAD_SINGLE_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job,

            }
        case JOB_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case JOB_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }
}


// Redux Action
export const createJobTypeAction = (jobTypeName) => async (dispatch, getState) => {
  dispatch({ type: JOB_TYPE_CREATE_REQUEST });
  try {
    const response = await axios.post(
      "/api/type/create",
      { jobTypeName },
    );

    dispatch({
      type: JOB_TYPE_CREATE_SUCCESS,
      payload: response.data, // Use response.data here
    });
  } catch (error) {
    dispatch({
      type: JOB_TYPE_CREATE_FAIL,
      payload: error.response.data.error,
    });
  }
};


// Redux Action
export const deleteJobTypeAction = (categoryId) => async (dispatch) => {
  try {
    await axios.delete(`/api/type/delete/${categoryId}`);
    dispatch({
      type: JOB_TYPE_DELETE_SUCCESS,
      payload: categoryId,
    });
  } catch (error) {
    dispatch({
      type: JOB_TYPE_DELETE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Redux Action
export const updateJobTypeAction = (categoryId, jobTypeName) => async (
  dispatch
) => {
  dispatch({ type: JOB_TYPE_UPDATE_REQUEST });
  try {
    const response = await axios.put(
      `/api/type/update/${categoryId}`,
      { jobTypeName }
    );

    dispatch({
      type: JOB_TYPE_UPDATE_SUCCESS,
      payload: response.data, // Use response.data here
    });
  } catch (error) {
    dispatch({
      type: JOB_TYPE_UPDATE_FAIL,
      payload: error.response.data.error,
    });
  }
};
