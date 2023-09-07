import axios from "axios";
import { toast } from "react-toastify";
import {
  ALL_USER_LOAD_FAIL,
  ALL_USER_LOAD_REQUEST,
  ALL_USER_LOAD_SUCCESS,
  COMPANY_SIGNUP_FAIL,
  COMPANY_SIGNUP_REQUEST,
  COMPANY_SIGNUP_SUCCESS,
  GET_APPLIED_USERS_FAIL,
  GET_APPLIED_USERS_REQUEST,
  GET_APPLIED_USERS_SUCCESS,
  GET_USERS_APPLIED_TO_JOB_FAIL,
  GET_USERS_APPLIED_TO_JOB_REQUEST,
  GET_USERS_APPLIED_TO_JOB_SUCCESS,
  UPDATE_USER_APPLICATION_STATUS_FAIL,
  UPDATE_USER_APPLICATION_STATUS_REQUEST,
  UPDATE_USER_APPLICATION_STATUS_SUCCESS,
  USER_APPLY_JOB_FAIL,
  USER_APPLY_JOB_REQUEST,
  USER_APPLY_JOB_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstant";
import { useNavigate } from "react-router-dom";


export const userSignInAction = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await axios.post("/api/signin", user);
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    toast.success("Login Successfully!");
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

//log out action
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
    const { data } = await axios.get("/api/logout");
    localStorage.removeItem("userInfo");
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: data,
    });
    toast.success("Log out successfully!");
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data.error,
    });
    toast.error(error.response.data.error);
  }
};

export const userProfileAction = () => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
    const { data } = await axios.get("/api/me");
    console.log("Fetched user profile data:", data); // Add this line
    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error.response.data.error,
    });
  }
};

//user job apply action
export const userApplyJobAction = (job) => async (dispatch) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST });
    try {
        const { data } = await axios.post("/api/user/jobshistory", job);

        dispatch({
            type: USER_APPLY_JOB_SUCCESS,
            payload: data
        });
        toast.success("Apply Successfully for this Job!");
    } catch (error) {
        dispatch({
            type: USER_APPLY_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//all user action
export const allUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("/api/allusers");
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const userSignUpAction = (userData) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });

  try {
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    const response = await axios.post("/api/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Make sure to set the content type
      },
    });
    toast.success("Signup Successfully!");
    console.log("Response from Backend:", response.data);

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const companySignUpAction = (companyData) => async (dispatch) => {
  dispatch({ type: COMPANY_SIGNUP_REQUEST });

  try {
    const response = await axios.post("/api/signupcompany", companyData, {
      headers: {
        "Content-Type": "application/json", // Set the content type accordingly
      },
    });
    toast.success("Signup Successfully!");
    console.log("Response from Backend:", response.data);

    dispatch({
      type: COMPANY_SIGNUP_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_SIGNUP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Action to fetch users who applied to a specific job
// export const getUsersAppliedToJobAction = (jobId) => async (dispatch) => {
//   dispatch({ type: GET_USERS_APPLIED_TO_JOB_REQUEST });

//   try {
//     const response = await axios.get(`/api/users/applied/${jobId}`);
//     const appliedUsers = response.data.users;

//     dispatch({
//       type: GET_USERS_APPLIED_TO_JOB_SUCCESS,
//       payload: appliedUsers,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_USERS_APPLIED_TO_JOB_FAIL,
//       payload: error.response.data.error,
//     });
//   }
// };
export const getUsersAppliedToJobAction = (jobId) => async (dispatch) => {
  dispatch({ type: GET_USERS_APPLIED_TO_JOB_REQUEST });

  try {
    const response = await axios.get(`/api/users/applied/${jobId}`);
    const appliedUsers = response.data.users;

    dispatch({
      type: GET_USERS_APPLIED_TO_JOB_SUCCESS,
      payload: appliedUsers,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_APPLIED_TO_JOB_FAIL,
      payload: error.response.data.error,
    });
  }
};



export const updateUserApplicationStatusAction =
  (userId, jobId, newStatus) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_APPLICATION_STATUS_REQUEST });

    try {
      // Make an API request to update the user's application status
      const response = await axios.put(
        `/api/user/${userId}/jobHistory/${jobId}`, // Updated URL
        {
          applicationStatus: newStatus,
        }
      );

      // Dispatch success action
      dispatch({
        type: UPDATE_USER_APPLICATION_STATUS_SUCCESS,
        payload: response.data, // You can pass the response data if needed
      });
    } catch (error) {
      // Dispatch failure action with error message
      dispatch({
        type: UPDATE_USER_APPLICATION_STATUS_FAIL,
        payload: error.response.data.error, // You can customize the error payload
      });
    }
  };
  
