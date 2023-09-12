        import React, { useEffect, useState } from "react";
        import { Helmet } from "react-helmet";
        import "./AdminDashboard.css";
        import GroupAddIcon from "@mui/icons-material/GroupAdd";
        import DashboardIcon from "@mui/icons-material/Dashboard";
        import WorkIcon from "@mui/icons-material/Work";
        import CategoryIcon from "@mui/icons-material/Category";
        import { useDispatch, useSelector } from "react-redux";
        import { getUsersAppliedToJobAction, updateUserApplicationStatusAction, userLogoutAction, userProfileAction } from "../../redux/actions/userAction";
        import { Box, Button, Checkbox, MenuItem, Paper, Select, Typography } from "@mui/material";
        import { DataGrid, gridClasses } from "@mui/x-data-grid";
        import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";
        import { updateJobAvailability } from "../../redux/actions/jobAction";
        import axios from "axios";
        import { Link, useNavigate } from "react-router-dom";
        import LogoutIcon from "@mui/icons-material/Logout";
        import { Worker, Viewer } from "@react-pdf-viewer/core";
        import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
        import "@react-pdf-viewer/core/lib/styles/index.css";
        import "@react-pdf-viewer/default-layout/lib/styles/index.css";


        import "@react-pdf-viewer/core/lib/styles/index.css";
        import "@react-pdf-viewer/default-layout/lib/styles/index.css";





      const JobOffers = () => {
        const { user, loading } = useSelector((state) => state.userProfile);
        const { jobType } = useSelector((state) => state.jobTypeAll);
        const dispatch = useDispatch();
        const [gridDataa, setGridData] = useState([]); // Initialize gridData state
        
        //console.log("User profile createdJobs:", user?.createdJobs); // Add this line
        const { appliedUsers } = useSelector((state) => state.signIn);

        const [jobIds, setJobIds] = useState([]); // Store jobIds in a state variable
        
        useEffect(() => {
          dispatch(userProfileAction());
          dispatch(jobTypeLoadAction());
        }, [dispatch]);

        const [appliedUsersByJob, setAppliedUsersByJob] = useState({});

       useEffect(() => {
         if (user && user.createdJobs && user.createdJobs.length > 0) {
           const ids = user.createdJobs.map((job) => job._id);
           setJobIds(ids);

           // Fetch applied users for each job ID
           ids.forEach(async (jobId) => {
             try {
               const response = await axios.get(`/api/users/applied/${jobId}`);
               const appliedUsers = response.data.users;

               setAppliedUsersByJob((prevState) => ({
                 ...prevState,
                 [jobId]: appliedUsers,
               }));
             } catch (error) {
               // Handle the error
             }
           });
         }
       }, [dispatch, user]);

        //console.log("testing", user);

        // Create a lookup for jobType using _id as key
        const jobTypeLookup = {};
        if (jobType) {
          // Check if jobType is defined
          jobType.forEach((type) => {
            jobTypeLookup[type._id] = type.jobTypeName;
          });
        }

        // Prepare the data for DataGrid
        const gridData = user?.createdJobs?.map((job) => ({
          _id: job._id,
          title: job.title,
          description: job.description,
          location: job.location,
          salary: job.salary,
          JobType: jobTypeLookup[job.JobType],
          available: job.available,
          year: job.year,
          specialization: job.specialization,
          editable: true,
          // Map other properties here based on your columns
        }));
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
            field: "description",
            headerName: "description",
            width: 150,
          },
          {
            field: "location",
            headerName: "location",
            width: 100,
          },
          {
            field: "JobType",
            headerName: "JobType",
            width: 150,
          },
          {
            field: "year",
            headerName: "year",
            width: 150,
          },
          {
            field: "specialization",
            headerName: "specialization",
            width: 150,
          },
          {
            field: "salary",
            headerName: "Salary",
            type: Number,
            width: 150,
            renderCell: (values) => "$" + values.row.salary,
          },

          {
            field: "available",
            headerName: "Available",
            width: 150,
            renderCell: (params) => (
              <div>
                {params.row.editable && (
                  <Select
                    value={params.value ? "Available" : "Unavailable"}
                    onChange={(event) =>
                      handleAvailabilityChange(
                        params.row._id,
                        event.target.value
                      )
                    }
                    disabled={!params.row.editable}
                  >
                    <MenuItem value={"Available"} sx={{ color: "green" }}>
                      Available
                    </MenuItem>
                    <MenuItem value={"Unavailable"} sx={{ color: "red" }}>
                      Unavailable
                    </MenuItem>
                  </Select>
                )}
              </div>
            ),
            editCellClasses: "MuiDataGrid-cellEditCell",
          },

          // Add other columns here
        ];
        const handleAvailabilityChange = (jobId, newAvailability) => {
          dispatch(
            updateJobAvailability(jobId, newAvailability === "Available")
          );
        };
        // In your component
        const handleChangeApplicationStatus = (
          userId,
          jobHistoryId,
          newStatus
        ) => {
          console.log("UserID:", userId);
          console.log("JobHistoryID:", jobHistoryId);
          dispatch(
            updateUserApplicationStatusAction(userId, jobHistoryId, newStatus)
          );
        };

          const linkStyle = {
            color: "#000", // Set the desired color for visited links
            textDecoration: "none", // Remove underline
            // Add other styling properties if needed
          };
          const navigate = useNavigate();
             const { userInfo } = useSelector((state) => state.signIn);
             const logOutUser = () => {
               localStorage.removeItem("userInfo");
               dispatch(userLogoutAction()); // Dispatch your logout action if needed
               navigate("/login");
             };
             
             const jobTitleLookup = {};

             if (user && user.createdJobs && user.createdJobs.length > 0) {
               user.createdJobs.forEach((job) => {
                 jobTitleLookup[job._id] = job.title;
               });
             }
             

             const defaultLayoutPluginInstance = defaultLayoutPlugin();
             const [pdfFile, setPdfFile] = useState(null);

             const handlePdfFileChange = (e) => {
               const selectedFile = e.target.files[0];
               if (selectedFile) {
                 if (selectedFile.type === "application/pdf") {
                   let reader = new FileReader();
                   reader.readAsDataURL(selectedFile);
                   reader.onloadend = (e) => {
                     setPdfFile(e.target.result);
                   };
                 } else {
                   // Handle invalid file type
                   console.error(
                     "Invalid file type. Please select a PDF file."
                   );
                 }
               }
             };
              const [pdfFileName, setPdfFileName] = useState(""); // Store the PDF file name
              //const [pdfFile, setPdfFile] = useState(null); // Store the PDF file data URL

              // Function to load and display a PDF file by name
       const loadPdfFileByName = async (fileNameWithUploads) => {
         try {
           console.log("Loading PDF file:", fileNameWithUploads);

           // Extract the file name without the "uploads\" path
           const fileName = fileNameWithUploads.replace(/^uploads\\/, "");
           console.log("fileName after the cut", fileName);
           // Construct the correct path to the PDF files on the server
           const pdfPath = `/uploads/${fileName}`;
           const response = await fetch(pdfPath);
           if (!response.ok) {
             throw new Error(
               `Failed to fetch PDF file: ${response.statusText}`
             );
           }

           const pdfBlob = await response.blob();
           const pdfDataUrl = URL.createObjectURL(pdfBlob);

           console.log("PDF loaded successfully:", fileName);

           setPdfFileName(fileName);
           setPdfFile(pdfDataUrl);
         } catch (error) {
           console.error("Error loading PDF file:", fileNameWithUploads, error);
           setPdfFile(null);
         }
       };



        

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
                    <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
                      Jobs Created
                    </Typography>
                    <div className="dashboard-content1">
                      <Paper sx={{ bgcolor: "#f05151" }}>
                        <Box sx={{ height: 400, width: "100%" }}>
                          {gridData && (
                            <DataGrid
                              getRowId={(row) => row._id}
                              sx={{
                                "& .MuiTablePagination-displayedRows": {
                                  color: "white",
                                },
                                color: "white",

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
                          )}
                        </Box>
                      </Paper>
                      <div className="users-applied-grid">
                        {appliedUsersByJob ? (
                          <div>
                            {jobIds.map((jobId) => {
                              const usersForJob = appliedUsersByJob[jobId];

                              if (usersForJob && usersForJob.length > 0) {
                                return (
                                  <div key={jobId}>
                                    <h2>
                                      Users Applied for Job:{" "}
                                      {jobTitleLookup[jobId]}
                                    </h2>
                                    <Paper sx={{ bgcolor: "#3593b8" }}>
                                      <Box sx={{ height: 400, width: "100%" }}>
                                        <DataGrid
                                          getRowId={(row) => row._id}
                                          rows={usersForJob.map((user) => ({
                                            _id: user._id,
                                            firstName: user.firstName,
                                            lastName: user.lastName,
                                            email: user.email,
                                            title: user.jobHistory.find(
                                              (job) => job.job === jobId
                                            ).title,
                                            _id: user.jobHistory.find(
                                              (job) => job.job === jobId
                                            )._id,
                                            userid: user.jobHistory.find(
                                              (job) => job.job === jobId
                                            ).user,
                                            applicationStatus:
                                              user.jobHistory.find(
                                                (job) => job.job === jobId
                                              ).applicationStatus,
                                            cv: user.cv,
                                          }))}
                                          columns={[
                                            {
                                              field: "firstName",
                                              headerName: "First Name",
                                              width: 150,
                                            },
                                            {
                                              field: "lastName",
                                              headerName: "Last Name",
                                              width: 150,
                                            },
                                            {
                                              field: "email",
                                              headerName: "Email",
                                              width: 250,
                                            },
                                            {
                                              field: "title",
                                              headerName: "Job Title",
                                              width: 200,
                                            },
                                            // {
                                            //   field: "user",
                                            //   headerName: "user",
                                            //   width: 200,
                                            // },
                                            {
                                              field: "applicationStatus",
                                              headerName: "Application Status",
                                              width: 200,
                                              renderCell: (params) => (
                                                <div>
                                                  <Select
                                                    value={
                                                      params.row
                                                        .applicationStatus
                                                    }
                                                    onChange={(event) =>
                                                      handleChangeApplicationStatus(
                                                        params.row.userid, // User ID
                                                        params.row._id, // Job history entry ID
                                                        event.target.value
                                                      )
                                                    }
                                                  >
                                                    <MenuItem value={"pending"}>
                                                      Pending
                                                    </MenuItem>
                                                    <MenuItem
                                                      value={"accepted"}
                                                    >
                                                      Accepted
                                                    </MenuItem>
                                                    <MenuItem
                                                      value={"rejected"}
                                                    >
                                                      Rejected
                                                    </MenuItem>
                                                  </Select>
                                                </div>
                                              ),
                                            },
                                            {
                                              field: "cv",
                                              headerName: "cv",
                                              width: 250,
                                              renderCell: (params) => (
                                                <div>
                                                  <button
                                                    onClick={() =>
                                                      loadPdfFileByName(
                                                        params.value
                                                      )
                                                    }
                                                  >
                                                    View CV
                                                  </button>
                                                </div>
                                              ),
                                            },
                                          ]}
                                          pageSize={5}
                                          rowsPerPageOptions={[5]}
                                        />
                                      </Box>
                                    </Paper>
                                  </div>
                                );
                              } else {
                                return null; // Don't render anything for jobs with no applied users
                              }
                            })}
                          </div>
                        ) : (
                          <div>Loading users' data...</div>
                        )}
                      </div>
                    </div>
                    <div className="pdf-container">
                      <h4>View PDF</h4>
                      {pdfFileName && (
                        <button onClick={() => loadPdfFileByName(pdfFileName)}>
                          Load PDF
                        </button>
                      )}
                      {pdfFile && (
                        <div
                          className="pdf-viewer"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
                            <Viewer
                              fileUrl={pdfFile}
                              plugins={[defaultLayoutPluginInstance]}
                            />
                          </Worker>
                        </div>
                      )}
                      {!pdfFile && <div>No PDF file selected</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };

        export default JobOffers;
