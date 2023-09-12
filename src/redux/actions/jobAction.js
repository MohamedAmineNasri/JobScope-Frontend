import axios from 'axios';
import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SINGLE_FAIL, JOB_LOAD_SINGLE_REQUEST, JOB_LOAD_SINGLE_SUCCESS, JOB_LOAD_SUCCESS
, JOB_CREATE_REQUEST, JOB_CREATE_SUCCESS, JOB_CREATE_FAIL, JOB_DELETE_REQUEST, JOB_DELETE_SUCCESS, JOB_DELETE_FAIL, JOB_UPDATE_REQUEST, JOB_UPDATE_SUCCESS, JOB_UPDATE_FAIL, TOGGLE_JOB_AVAILABILITY_REQUEST, TOGGLE_JOB_AVAILABILITY_SUCCESS, TOGGLE_JOB_AVAILABILITY_FAIL
} from "../constants/jobconstant"



export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/show?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}
export const jobAllLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/showAll?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}


export const createJobAction = (jobData) => async (dispatch) => {
  dispatch({ type: JOB_CREATE_REQUEST });
  try {
    const { data } = await axios.post(`/api/create/job`, jobData);
    dispatch({
      type: JOB_CREATE_SUCCESS,
      payload: data.job,
    });
  } catch (error) {
    dispatch({
      type: JOB_CREATE_FAIL,
      payload: error.response.data.error,
    });
  }
};


export const deleteJobAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/job/delete/${id}`);
    dispatch({
      type: JOB_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: JOB_DELETE_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const updateJobAction = (jobId, title, salary) => async (dispatch) => {
  dispatch({ type: JOB_UPDATE_REQUEST });
  try {
    const response = await axios.put(`/api/job/update/${jobId}`, {
      title, // Use the correct field name here
      salary, // Use the correct field name here
    });

    dispatch({
      type: JOB_UPDATE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: JOB_UPDATE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Action to update job availability
export const updateJobAvailability = (jobId, availability) => async (dispatch) => {
    dispatch({ type: JOB_UPDATE_REQUEST });

    try {
        const response = await axios.put(`/api/job/updateAvailability/${jobId}`, { available: availability });
        const updatedJob = response.data.job;

        dispatch({
            type: JOB_UPDATE_SUCCESS,
            payload: updatedJob,
        });
    } catch (error) {
        dispatch({
            type: JOB_UPDATE_FAIL,
            payload: error.response.data.message || "An error occurred",
        });
    }
};


// export const toggleJobAvailability = (jobId) => async (dispatch) => {
//   dispatch({ type: TOGGLE_JOB_AVAILABILITY_REQUEST });

//   try {
//     const response = await axios.put(`/api/job/toggleAvailability/${jobId}`);
//     const updatedJob = response.data.job;

//     dispatch({
//       type: TOGGLE_JOB_AVAILABILITY_SUCCESS,
//       payload: updatedJob,
//     });
//   } catch (error) {
//     dispatch({
//       type: TOGGLE_JOB_AVAILABILITY_FAIL,
//       payload: error.response.data.message || "An error occurred",
//     });
//   }
// };
