    import { useTheme } from "@mui/material";
        import Box from "@mui/material/Box";
        import Card from "@mui/material/Card";
        import CardContent from "@mui/material/CardContent";
        import Typography from "@mui/material/Typography";
    import { useEffect } from "react";
        import { useDispatch, useSelector } from "react-redux";
    import { userProfileAction } from "../../redux/actions/userAction";

    const CompanyInfoDashboard = () => {
        const { user } = useSelector((state) => state.userProfile);
        const dispatch = useDispatch();

        useEffect(() => {
        dispatch(userProfileAction());
        }, []);
        const { palette } = useTheme();
    return (
      <>
        <Box sx={{ maxWidth: "80%", margin: "auto", pt: 10 }}>
          <Card sx={{ minWidth: 1200, bgcolor: "#f05151" }}>
            <CardContent>
              <Typography sx={{ fontSize: 16 }} color="white" gutterBottom>
                Personal Info
              </Typography>
              <hr style={{ marginBottom: "30px" }} />
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                Company Name: {user && user.userName}
              </Typography>
              <Typography variant="h6" component="div" sx={{ color: "white" }}>
                E-mail: {user && user.email}
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", pt: 2 }}
                color="text.secondary"
              >
                Status:{" "}
                {user && user.role === "user"
                  ? "Regular user"
                  : user && user.role === "company"
                  ? "Company"
                  : "Admin"}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </>
    );
    }

    export default CompanyInfoDashboard