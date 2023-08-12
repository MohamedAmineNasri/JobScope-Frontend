import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/actions/userAction";
import { Box, Typography } from "@mui/material";
import CardElement from "../../components/CardElement";

const UserJobsHistory = () => {
  const { user } = useSelector((state) => state.userProfile);

  const dispatch = useDispatch();
  console.log("User profile data:", user?.jobHistory); // Add this line

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "#000000" }}>
          {" "}
          Jobs History
        </Typography>
        <Box>
          {user?.jobHistory?.map((history, i) => (
            <CardElement
              key={i}
              id={history._id}
              jobTitle={history.title}
              description={history.description}
              category=""
              location={history.location}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UserJobsHistory;
