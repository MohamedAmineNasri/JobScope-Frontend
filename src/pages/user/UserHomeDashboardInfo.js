    import { Typography, Box } from "@mui/material";
    import { Stack } from "@mui/system";
    import React, { useEffect } from "react";
    import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
    import WorkIcon from "@mui/icons-material/Work";
    import { useDispatch, useSelector } from "react-redux";
    import moment from "moment";
    import StatComponent from "../../components/StatComponent";
    import { userProfileAction } from "../../redux/actions/userAction";

    const UserHomeDashboardInfo = () => {
    const { user } = useSelector((state) => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfileAction());
    }, []);

    return (
        <>
        <Box>
            <Typography variant="h4" sx={{ color: "#000000", pb: 3 }}>
            Dashboard
            </Typography>
            {user && (
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <StatComponent
                value={
                    <Typography sx={{ color: "#000000" }}>
                    {moment(user.createdAt).format("YYYY / MM / DD")}
                    </Typography>
                }
                icon={
                    <CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />
                }
                description="Member since"
                money=""
                />
                <StatComponent
                value={
                    <Typography sx={{ color: "#000000" }}>
                    {user.jobHistory ? user.jobHistory.length : 0}
                    
                    </Typography>
                }
                icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                description="Number of jobs submitted"
                money=""
                />
            </Stack>
            )}
        </Box>
        </>
    );

    };

    export default UserHomeDashboardInfo;
