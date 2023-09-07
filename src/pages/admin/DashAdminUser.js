        import React, { useEffect, useState } from 'react'
        import { Helmet } from "react-helmet";
        import "./AdminDashboard.css";
        import GroupAddIcon from "@mui/icons-material/GroupAdd";
        import DashboardIcon from "@mui/icons-material/Dashboard";
        import WorkIcon from "@mui/icons-material/Work";
        import CategoryIcon from "@mui/icons-material/Category";
    import moment from 'moment';
    import { Box, Button, MenuItem, Paper, Typography, gridClasses  } from '@mui/material';
    import { Link, useNavigate } from 'react-router-dom';
    import { useDispatch, useSelector } from 'react-redux';
    import { allUserAction, companySignUpAction, userLogoutAction, userSignUpAction } from '../../redux/actions/userAction';
    import { DataGrid, GridToolbar } from "@mui/x-data-grid";
    import axios from "axios";
    import LogoutIcon from "@mui/icons-material/Logout";
    import {
      Dialog,
      DialogTitle,
      DialogContent,
      TextField,
    } from "@mui/material";
import { useFormik } from 'formik';
    import * as yup from "yup";





        const DashAdminUser = () => {
                const dispatch = useDispatch();

        useEffect(() => {
            dispatch(allUserAction());
        }, []);


        const { users, loading } = useSelector(state => state.allUsers);
        const [openUserDialog, setOpenUserDialog] = useState(false);

                const linkStyle = {
                  color: "#000", // Set the desired color for visited links
                  textDecoration: "none", // Remove underline
                  // Add other styling properties if needed
                };
                const [openDialog, setOpenDialog] = useState(false);

        let data = [];
        data = (users !== undefined && users.length > 0) ? users : []

        const deleteUserById = async (id) => {
          try {
            const response = await axios.delete(`/api/user/delete/${id}`);
            console.log(response.data); // Assuming your backend returns a success message
            // You might also want to refresh the user list after successful deletion
            dispatch(allUserAction());
          } catch (error) {
            console.error("Error deleting user:", error);
          }
        };

        const columns = [
          {
            field: "_id",
            headerName: "User ID",
            width: 150,
            editable: true,
          },

          {
            field: "email",
            headerName: "E_mail",
            width: 150,
          },

          {
            field: "role",
            headerName: "User status",
            width: 150,
            renderCell: (params) =>
              params.row.role === "company"
                ? "Company"
                : params.row.role === "admin"
                ? "Admin"
                : "Regular user",
          },

          // {
          //     field: 'createdAt',
          //     headerName: 'Creation date',
          //     width: 150,
          //     renderCell: (params) => (
          //         moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
          //     )
          // },

          {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "170px",
                }}
              >
                {/* <Button variant="contained">
        <Link style={linkStyle} to={`/admin/edit/user/${values.row._id}`}>
          Edit
        </Link>
      </Button> */}
                <Button
                  onClick={() => deleteUserById(values.row._id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Box>
            ),
          },
        ];
        const navigate = useNavigate();
           const { userInfo } = useSelector((state) => state.signIn);
           const logOutUser = () => {
             localStorage.removeItem("userInfo");
             dispatch(userLogoutAction()); // Dispatch your logout action if needed
             navigate("/login");
           };
           const handleCompanySignup = async (values) => {
             try {
               // Dispatch your company signup action here
               await dispatch(companySignUpAction(values));
               setOpenDialog(false); // Close the dialog after successful signup
               // Optionally, you can navigate the user to the login page or perform other actions
             } catch (error) {
               // Handle error
             }
           };
           const validationSchema = yup.object({
             userName: yup
               .string("Enter your username")
               .required("Username is required"),
             email: yup
               .string("Enter your email")
               .email("Enter a valid email")
               .required("Email is required"),
             password: yup
               .string("Enter your password")
               .min(8, "Password should be of minimum 8 characters length")
               .required("Password is required"),
             role: yup
               .string("Select a role")
               .oneOf(["user", "admin", "company"], "Invalid role")
               .default("company"), // Set the default value to "company"
           });
           
            const formik = useFormik({
              initialValues: {
                userName: "",
                email: "",
                password: "",
                role: "company", // Set the initial role
              },
              validationSchema: validationSchema,
              onSubmit: async (values) => {
                try {
                  await dispatch(companySignUpAction(values));
                  navigate("/login");
                } catch (error) {
                  // Handle error
                }
              },
            });

                const formikk = useFormik({
              initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                role: "user",
                cv: "",
                year: "", // Added
                specialization: "", // Added
              },

              validationSchema: validationSchema,
              onSubmit: async (values) => {
                try {
                  await dispatch(userSignUpAction(values));
                  navigate("/login");
                } catch (error) {
                  // Handle error
                }
              },
            });

           const handleUserSignup = async () => {
             try {
               // Dispatch your user signup action here
               await dispatch(userSignUpAction(formikk.values));
               setOpenUserDialog(false); // Close the dialog after successful signup
               // Optionally, you can navigate the user to the login page or perform other actions
             } catch (error) {
               // Handle error
             }
           };


            const validationSchemaa = yup.object({
              firstName: yup
                .string("Enter your first name")
                .required("First name is required"),
              lastName: yup
                .string("Enter your last name")
                .required("Last name is required"),
              email: yup
                .string("Enter your email")
                .email("Enter a valid email")
                .required("Email is required"),
              password: yup
                .string("Enter your password")
                .min(8, "Password should be of minimum 8 characters length")
                .required("Password is required"),
              role: yup
                .string("Select a role")
                .oneOf(["user", "admin", "company"], "Invalid role")
                .default("user"), // Set the default value to "user"
              year: yup
                .string("Select your year")
                .oneOf(
                  ["first", "second", "third", "fourth", "fifth"],
                  "Invalid year"
                )
                .required("Year is required"),
              specialization: yup
                .string("Select your specialization")
                .oneOf(
                  [
                    "CLOUD",
                    "TWIN",
                    "DS",
                    "SIM",
                    "BI",
                    "SAE",
                    "WIN",
                    "IOSYS",
                    "SLEAM",
                    "INFINI",
                    "GAMIX",
                    "NIDS",
                    "SE",
                  ],
                  "Invalid specialization"
                ),
            });
            
        



        return (
          <div className="dashboard-container">
            <Helmet>
              <title>exported project</title>
            </Helmet>
            <div className="dashboard-dashboard">
              <div className="dashboard-frame1">
                <div className="dashboard-menu-collapsed-drawer">
                  <div className="dashboard-menu-drawer">
                    <div className="dashboard-menu-drawer1">
                      <div className="dashboard-dashboard1">
                        <div className="dashboard-list-item">
                          <div className="dashboard-container01">
                            <div className="dashboard-icon">
                              <img
                                src="/external4/homeoutlined1174-3fl.svg"
                                alt="HomeOutlined1174"
                                className="dashboard-home-outlined"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-section-separator">
                        <div className="dashboard-list-subheader">
                          <img
                            src="/external4/line11174-a8d.svg"
                            alt="Line11174"
                            className="dashboard-line1"
                          />
                        </div>
                      </div>
                      <div className="dashboard-appspages">
                        <div className="dashboard-list-item1">
                          <div className="dashboard-container02">
                            <Link
                              to="/AdminDash"
                              className="dashboard-link"
                              style={linkStyle}
                            >
                              <div className="dashboard-icon01">
                                <DashboardIcon />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="dashboard-list-item2">
                          <div className="dashboard-container03">
                            <Link
                              to="/AdminUserDash"
                              className="dashboard-link"
                              style={linkStyle}
                            >
                              <div className="dashboard-icon02">
                                <GroupAddIcon />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="dashboard-list-item3">
                          <div className="dashboard-container04">
                            <div className="dashboard-icon03">
                              <Link
                                to="/AdminJobsDash"
                                className="dashboard-link"
                                style={linkStyle}
                              >
                                <WorkIcon />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-list-item3">
                          <div className="dashboard-icon03">
                            <Link
                              to="/JobOffer"
                              className="dashboard-link"
                              style={linkStyle}
                            >
                              <WorkIcon />
                            </Link>
                          </div>
                        </div>
                        <div className="dashboard-list-item4">
                          <div className="dashboard-container05">
                            <Link
                              to="/AdminCatDash"
                              className="dashboard-link"
                              style={linkStyle}
                            >
                              <div className="dashboard-icon04">
                                <CategoryIcon />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="dashboard-list-item1">
                          <div className="dashboard-container02">
                            <div className="dashboard-icon01">
                              <button
                                onClick={logOutUser}
                                style={{
                                  background: "none",
                                  border: "none",
                                  padding: 0,
                                  cursor: "pointer",
                                }}
                              >
                                <LogoutIcon />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-section-separator1">
                        <div className="dashboard-list-subheader1">
                          <img
                            src="/external4/line11174-l1m5.svg"
                            alt="Line11174"
                            className="dashboard-line11"
                          />
                        </div>
                      </div>
                      <div className="dashboard-list-item6"></div>
                      <div className="dashboard-settings">
                        <div className="dashboard-container08">
                          <div className="dashboard-icon07">
                            <img
                              src="/external4/settings1174-c0iw.svg"
                              alt="Settings1174"
                              className="dashboard-settings1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-frame11">
                  <div className="dashboard-body">
                    <div className="dashboard-cards">
                      <div className="dashboard-filter">
                        <span className="dashboard-text LightTypographyH6">
                          <span>Search Filters</span>
                        </span>
                        <div className="dashboard-filter1">
                          <div className="dashboard-select-outlined">
                            <div className="dashboard-input">
                              <div className="dashboard-inactive">
                                <span className="dashboard-text002 LightComponentsInputText">
                                  <span>Select Role</span>
                                </span>
                                <div className="dashboard-arrow">
                                  <img
                                    src="/external4/arrowdropdown1215-rxve.svg"
                                    alt="ArrowDropDown1215"
                                    className="dashboard-arrow-drop-down"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dashboard-select-outlined1">
                            <div className="dashboard-input1">
                              <div className="dashboard-inactive1">
                                <span className="dashboard-text004 LightComponentsInputText">
                                  <span>Invoice Date</span>
                                </span>
                                <div className="dashboard-arrow1">
                                  <img
                                    src="/external4/arrowdropdown1215-kt6vl.svg"
                                    alt="ArrowDropDown1215"
                                    className="dashboard-arrow-drop-down1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dashboard-select-outlined2">
                            <div className="dashboard-input2">
                              <div className="dashboard-inactive2">
                                <span className="dashboard-text006 LightComponentsInputText">
                                  <span>Invoice Status</span>
                                </span>
                                <div className="dashboard-arrow2">
                                  <img
                                    src="/external4/arrowdropdown1215-tvjo.svg"
                                    alt="ArrowDropDown1215"
                                    className="dashboard-arrow-drop-down2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-table">
                      <div className="dashboard-content1">
                        <Box>
                          <Typography
                            variant="h4"
                            sx={{ color: "black", pb: 3 }}
                          >
                            All users
                          </Typography>
                          <Box
                            sx={{
                              pb: 2,
                              display: "flex",
                              justifyContent: "right",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="success"
                              startIcon={<GroupAddIcon />}
                              onClick={() => setOpenUserDialog(true)} // Open the dialog when the button is clicked
                            >
                              Create User
                            </Button>

                            <Button
                              variant="contained"
                              color="success"
                              startIcon={<GroupAddIcon />}
                              onClick={() => setOpenDialog(true)}
                            >
                              Create Company
                            </Button>
                          </Box>
                          <Paper sx={{ bgcolor: "#f05151" }}>
                            <Box sx={{ height: 400, width: "100%" }}>
                              <DataGrid
                                sx={{
                                  "& .MuiTablePagination-displayedRows": {
                                    color: "black",
                                  },
                                  color: "black",
                                  [`& .${gridClasses.row}`]: {
                                    bgcolor: (theme) =>
                                      // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                      theme.palette.secondary.main,
                                  },
                                  button: {
                                    color: "#ffffff",
                                  },
                                }}
                                getRowId={(row) => row._id}
                                rows={data}
                                columns={columns}
                                pageSize={3}
                                rowsPerPageOptions={[3]}
                                checkboxSelection
                                slots={{ toolbar: GridToolbar }}
                              />
                            </Box>
                          </Paper>
                          <Dialog
                            open={openDialog}
                            onClose={() => setOpenDialog(false)}
                          >
                            <DialogTitle>Create Company Account</DialogTitle>
                            <DialogContent>
                              <form onSubmit={formik.handleSubmit}>
                                <Box>
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="userName"
                                    label="userName"
                                    name="userName"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="userName "
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                      formik.touched.userName &&
                                      Boolean(formik.errors.userName)
                                    }
                                    helperText={
                                      formik.touched.userName &&
                                      formik.errors.userName
                                    }
                                  />
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    name="email"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="E-mail"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                      formik.touched.email &&
                                      Boolean(formik.errors.email)
                                    }
                                    helperText={
                                      formik.touched.email &&
                                      formik.errors.email
                                    }
                                  />
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                      formik.touched.password &&
                                      Boolean(formik.errors.password)
                                    }
                                    helperText={
                                      formik.touched.password &&
                                      formik.errors.password
                                    }
                                  />
                                  {/* Add other company signup fields here */}
                                </Box>
                                <Box mt={2}>
                                  <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    sx={{ backgroundColor: "#ed1c24" }}
                                  >
                                    Sign Up as Company
                                  </Button>
                                </Box>
                              </form>
                            </DialogContent>
                          </Dialog>
                          <Dialog
                            open={openUserDialog}
                            onClose={() => setOpenUserDialog(false)}
                          >
                            <DialogTitle>Create User Account</DialogTitle>
                            <DialogContent>
                              <form onSubmit={formikk.handleSubmit}>
                                <Box>
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="First Name"
                                    value={formikk.values.firstName}
                                    onChange={formikk.handleChange}
                                    onBlur={formikk.handleBlur}
                                    error={
                                      formikk.touched.firstName &&
                                      Boolean(formikk.errors.firstName)
                                    }
                                    helperText={
                                      formikk.touched.firstName &&
                                      formikk.errors.firstName
                                    }
                                  />
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="Last Name"
                                    value={formikk.values.lastName}
                                    onChange={formikk.handleChange}
                                    onBlur={formikk.handleBlur}
                                    error={
                                      formikk.touched.lastName &&
                                      Boolean(formikk.errors.lastName)
                                    }
                                    helperText={
                                      formikk.touched.lastName &&
                                      formikk.errors.lastName
                                    }
                                  />
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    name="email"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="E-mail"
                                    value={formikk.values.email}
                                    onChange={formikk.handleChange}
                                    onBlur={formikk.handleBlur}
                                    error={
                                      formikk.touched.email &&
                                      Boolean(formikk.errors.email)
                                    }
                                    helperText={
                                      formikk.touched.email &&
                                      formikk.errors.email
                                    }
                                  />
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    placeholder="Password"
                                    value={formikk.values.password}
                                    onChange={formikk.handleChange}
                                    onBlur={formikk.handleBlur}
                                    error={
                                      formikk.touched.password &&
                                      Boolean(formikk.errors.password)
                                    }
                                    helperText={
                                      formikk.touched.password &&
                                      formikk.errors.password
                                    }
                                  />
                                  <TextField
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="cv"
                                    name="cv"
                                    label="Upload CV (PDF)"
                                    type="file" // Make sure the input type is set to "file"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    inputProps={{
                                      accept: ".pdf", // Specify the accepted file format
                                    }}
                                    onChange={(event) =>
                                      formikk.setFieldValue(
                                        "cv",
                                        event.target.files[0]
                                      )
                                    } // Set the value of the uploaded file
                                    error={
                                      formikk.touched.cv &&
                                      Boolean(formikk.errors.cv)
                                    }
                                    helperText={
                                      formikk.touched.cv && formikk.errors.cv
                                    }
                                  />
                                  <TextField
                                    select
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="year"
                                    label="Year"
                                    name="year"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    value={formikk.values.year}
                                    onChange={formikk.handleChange}
                                    onBlur={formikk.handleBlur}
                                    error={
                                      formikk.touched.year &&
                                      Boolean(formikk.errors.year)
                                    }
                                    helperText={
                                      formikk.touched.year &&
                                      formikk.errors.year
                                    }
                                  >
                                    {[
                                      "first",
                                      "second",
                                      "third",
                                      "fourth",
                                      "fifth",
                                    ].map((yearOption) => (
                                      <MenuItem
                                        key={yearOption}
                                        value={yearOption}
                                      >
                                        {yearOption}
                                      </MenuItem>
                                    ))}
                                  </TextField>

                                  <TextField
                                    select
                                    sx={{ mb: 3 }}
                                    fullWidth
                                    id="specialization"
                                    label="Specialization"
                                    name="specialization"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    value={formikk.values.specialization}
                                    onChange={formikk.handleChange}
                                    onBlur={formikk.handleBlur}
                                    error={
                                      formikk.touched.specialization &&
                                      Boolean(formikk.errors.specialization)
                                    }
                                    helperText={
                                      formikk.touched.specialization &&
                                      formikk.errors.specialization
                                    }
                                    disabled={
                                      formikk.values.year === "first" ||
                                      formikk.values.year === "second" ||
                                      formikk.values.year === "third"
                                    }
                                  >
                                    {[
                                      "CLOUD",
                                      "TWIN",
                                      "DS",
                                      "SIM",
                                      "BI",
                                      "SAE",
                                      "WIN",
                                      "IOSYS",
                                      "SLEAM",
                                      "INFINI",
                                      "GAMIX",
                                      "NIDS",
                                      "SE",
                                    ].map((specializationOption) => (
                                      <MenuItem
                                        key={specializationOption}
                                        value={specializationOption}
                                      >
                                        {specializationOption}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                                  {/* Add other user signup fields here */}
                                </Box>
                                <Box mt={2}>
                                  <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    sx={{ backgroundColor: "#ed1c24" }}
                                    onClick={handleUserSignup}
                                  >
                                    Sign Up as User
                                  </Button>
                                </Box>
                              </form>
                            </DialogContent>
                          </Dialog>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        }

        export default DashAdminUser