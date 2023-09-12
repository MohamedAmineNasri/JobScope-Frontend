import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../admin/AdminDashboard.css";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  createJobAction,
  deleteJobAction,
  jobAllLoadAction,
  jobLoadAction,
  updateJobAction,
} from "../../redux/actions/jobAction";
import SelectComponent from "../../components/SelectComponent";
import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";
import SelectComponentLocation from "../../components/SelectComponentLocation";
import { allUserAction, userLogoutAction, userProfileAction } from "../../redux/actions/userAction";

const CompanyDashJobs = () => {
     const dispatch = useDispatch();
     const [isDialogOpen, setIsDialogOpen] = useState(false);
     const [isDialogOpenCreate, setisDialogOpenCreate] = useState(false);
     const [jobtitle, setjobtitle] = useState("");
     const [jobdescription, setjobdescription] = useState("");
     const [jobdsalary, setjobdsalary] = useState("");
     const [selectedJobId, setSelectedJobId] = useState(null);
     const [page, setPage] = useState(1);
     const [cat, setCat] = React.useState("");
     const { keyword, location: urlLocation } = useParams(); // Rename location to urlLocation
     const { jobType } = useSelector((state) => state.jobTypeAll);
     const [location, setLocation] = useState("");
     const [selectedjobId, setSelectedjobid] = useState(null);
     const linkStyle = {
       color: "#000", // Set the desired color for visited links
       textDecoration: "none", // Remove underline
       // Add other styling properties if needed
     };

     const [year, setYear] = useState(""); // Add year state
     const [specialization, setSpecialization] = useState(""); // Add specialization state

     useEffect(() => {
       dispatch(jobAllLoadAction());
     }, []);
     const handleOpenDialog = (jobId) => {
       setIsDialogOpen(true);
       setSelectedJobId(jobId);
     };

     useEffect(() => {
       dispatch(allUserAction());
     }, []);

     const handleCloseDialog = () => {
       setIsDialogOpen(false);
       setSelectedJobId(null);
       setjobtitle("");
       setjobdescription("");
       setjobdsalary("");
     };
     const handleOpenDialogCreate = (jobId) => {
       setisDialogOpenCreate(true);
       setSelectedJobId(jobId);
     };

     const handleCloseDialogCreate = () => {
       setisDialogOpenCreate(false);
       setSelectedJobId(null);
       setjobtitle("");
       setjobdescription("");
       setjobdsalary("");
     };
     // const handleCreateJob = () => {
     //   const jobData = {
     //     title: jobtitle,
     //     description: jobdescription,
     //     salary: jobdsalary,
     //     location: location, // Use the selected location
     //     JobType: cat,
     //   };
     //   dispatch(createJobAction(jobData));
     //   handleCloseDialogCreate();
     // };

     const handleCreateJob = () => {
       const jobData = {
         title: jobtitle,
         description: jobdescription,
         salary: jobdsalary,
         location: location,
         JobType: cat,
         year: year, // Add year
         specialization: specialization, // Add specialization
       };
       dispatch(createJobAction(jobData));
       handleCloseDialogCreate();
     };

     const handleChangeLocation = (e) => {
       setLocation(e.target.value); // Update the location state
     };

     //const { jobs, loading } = useSelector((state) => state.loadJobs);
     const { jobs, setUniqueLocation, pages, loading } = useSelector(
       (state) => state.loadJobs
     );
     let data = [];
     //data = jobs !== undefined && jobs.length > 0 ? jobs : [];
     const { user } = useSelector((state) => state.userProfile);
      useEffect(() => {
        dispatch(userProfileAction());
      }, []);
     const [gridData, setGridData] = useState([]);
    useEffect(() => {
      if (user && jobs) {
        // Check if user and jobs are not null or undefined
        const userJobs = jobs.filter((job) => job.user === user._id);
        console.log("user id", user._id);
        console.log("the created the job id", jobs.filter((job) => job.user));
        setGridData(userJobs);
      }
    }, [jobs, user]);

     //delete job by Id
     const deleteJobById = (e, id) => {
       console.log(id);
     };

     const handleUpdateJob = () => {
       const jobData = {
         title: jobtitle,
         description: jobdescription,
         salary: jobdsalary,
         location: location,
         JobType: cat,
         year: year, // Add year
         specialization: specialization, // Add specialization
       };
       if (selectedJobId) {
         dispatch(
           updateJobAction(selectedJobId, jobData.title, jobData.salary)
         );
         handleCloseDialog();
       }
     };

     const handleDeleteJob = (id) => {
       if (window.confirm("Are you sure you want to delete this Job Offer?")) {
         dispatch(deleteJobAction(id));
         console.log(id);
       }
     };

     useEffect(() => {
       dispatch(jobAllLoadAction(page, keyword, cat, location));
     }, [page, keyword, cat, location]);
     const handleChangeCategory = (e) => {
       setCat(e.target.value);
     };
     useEffect(() => {
       dispatch(jobTypeLoadAction());
     }, []);
     const columns = [
       {
         field: "_id",
         headerName: "Job ID",
         width: 150,
         editable: true,
       },
       {
         field: "title",
         headerName: "Job name",
         width: 150,
       },
       {
         field: "jobType",
         headerName: "Category",
         width: 150,
         valueGetter: (data) =>
           data.row.jobType ? data.row.jobType.jobTypeName : "N/A",
       },
       // {
       //   field: "user",
       //   headerName: "User",
       //   width: 150,
       //   valueGetter: (data) => data.row.user.firstName,
       // },
       {
         field: "available",
         headerName: "available",
         width: 150,
         renderCell: (values) => (values.row.available ? "Yes" : "No"),
       },

       {
         field: "salary",
         headerName: "Salary",
         type: Number,
         width: 150,
         renderCell: (values) => "$" + values.row.salary,
       },

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
             <Button
               variant="contained"
               onClick={() => handleOpenDialog(values.row._id)}
             >
               Edit
             </Button>
             <Button
               onClick={() => handleDeleteJob(values.row._id)}
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
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Company Dashboard</title>
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
                      <div className="dashboard-icon01">
                        <Link
                          to="/CompanyHomeDash"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <DashboardIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-list-item3">
                    <div className="dashboard-container04">
                      <div className="dashboard-icon03">
                        <Link
                          to="/CompanyJobsDash"
                          className="dashboard-link"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <WorkIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-list-item3">
                    <div className="dashboard-icon03">
                      <Link
                        to="/CompanyJobOffer"
                        className="dashboard-link"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <WorkIcon />
                      </Link>
                    </div>
                  </div>
                  <div className="dashboard-list-item3">
                    <div className="dashboard-container04">
                      <div className="dashboard-icon03">
                        <Link
                          to="/CompanyDash"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <img
                            src="/external4/personoutline1174-82b9.svg"
                            alt="PersonOutline1174"
                            className="dashboard-person-outline"
                          />
                        </Link>
                      </div>
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
                    <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
                      Jobs list
                    </Typography>
                    <Box
                      sx={{ pb: 2, display: "flex", justifyContent: "right" }}
                    >
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<AddIcon />}
                        onClick={handleOpenDialogCreate}
                      >
                        Create Job Offer
                      </Button>
                    </Box>
                    <Paper sx={{ bgcolor: "#f05151" }}>
                      <Box sx={{ height: 400, width: "100%" }}>
                        <DataGrid
                          getRowId={(row) => row._id}
                          sx={{
                            "& .MuiTablePagination-displayedRows": {
                              color: "white",
                            },
                            button: {
                              color: "#ffffff",
                            },
                          }}
                          rows={gridData}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[10]}
                          checkboxSelection
                        />
                      </Box>
                    </Paper>

                    <Dialog
                      open={isDialogOpenCreate}
                      onClose={handleCloseDialogCreate}
                    >
                      <DialogTitle>Create Job Offer</DialogTitle>
                      <DialogContent>
                        {/* Add your form or content for creating a category */}
                        {/* For example, you can add text fields, dropdowns, etc. */}
                        <TextField
                          label="Job Title"
                          variant="outlined"
                          fullWidth
                          value={jobtitle}
                          onChange={(e) => setjobtitle(e.target.value)}
                        />
                        <TextField
                          label="Job Description"
                          variant="outlined"
                          fullWidth
                          value={jobdescription}
                          onChange={(e) => setjobdescription(e.target.value)}
                        />
                        <TextField
                          label="Job Salary"
                          variant="outlined"
                          fullWidth
                          value={jobdsalary}
                          onChange={(e) => setjobdsalary(e.target.value)}
                        />
                        <SelectComponent
                          // handleChangeCategory={handleChangeCategory}
                          handleChangeCategory={handleChangeCategory}
                          cat={cat}
                        />
                        <SelectComponentLocation
                          // handleChangeCategory={handleChangeCategory}
                          handleChangeLocation={handleChangeLocation} // Pass the handler
                          location={location}
                        />
                        <TextField
                          select
                          fullWidth
                          id="year"
                          label="Year"
                          name="year"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          //error={/* Handle error based on your validation logic */}
                          //helperText={/* Helper text based on your validation logic */}
                        >
                          {["first", "second", "third", "fourth", "fifth"].map(
                            (yearOption) => (
                              <MenuItem key={yearOption} value={yearOption}>
                                {yearOption}
                              </MenuItem>
                            )
                          )}
                        </TextField>

                        <TextField
                          select
                          fullWidth
                          id="specialization"
                          label="Specialization"
                          name="specialization"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          // error={/* Handle error based on your validation logic */}
                          // helperText={/* Helper text based on your validation logic */}
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
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleCloseDialogCreate}
                          color="primary"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleCreateJob} color="primary">
                          Create
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                      <DialogTitle>Update Job Offer</DialogTitle>
                      <DialogContent>
                        {/* Add your form or content for creating a category */}
                        {/* For example, you can add text fields, dropdowns, etc. */}
                        <TextField
                          label="Job Title"
                          variant="outlined"
                          fullWidth
                          value={jobtitle}
                          onChange={(e) => setjobtitle(e.target.value)}
                        />
                        {/* <TextField
                          label="Job Description"
                          variant="outlined"
                          fullWidth
                          value={jobdescription}
                          onChange={(e) => setjobdescription(e.target.value)}
                        /> */}
                        <TextField
                          label="Job Salary"
                          variant="outlined"
                          fullWidth
                          value={jobdsalary}
                          onChange={(e) => setjobdsalary(e.target.value)}
                        />
                        {/* <SelectComponent
                          // handleChangeCategory={handleChangeCategory}
                          handleChangeCategory={handleChangeCategory}
                          cat={cat}
                        /> */}
                        {/* <SelectComponentLocation
                          // handleChangeCategory={handleChangeCategory}
                          handleChangeLocation={handleChangeLocation} // Pass the handler
                          location={location}
                        /> */}
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleCloseDialogCreate}
                          color="primary"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleUpdateJob} color="primary">
                          Update
                        </Button>
                      </DialogActions>
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
};

export default CompanyDashJobs;
