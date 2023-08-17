    import React, { useEffect } from 'react'
    import { Helmet } from "react-helmet";
    import "./AdminDashboard.css";
    import GroupAddIcon from "@mui/icons-material/GroupAdd";
    import DashboardIcon from "@mui/icons-material/Dashboard";
    import WorkIcon from "@mui/icons-material/Work";
    import CategoryIcon from "@mui/icons-material/Category";
    import { Box, Button, Paper, Typography } from "@mui/material";
    import { DataGrid, gridClasses } from "@mui/x-data-grid";
    import { Link } from "react-router-dom";
    import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../../redux/actions/jobAction';

const AdminDashJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(jobLoadAction());
    }, []);

    const { jobs, loading } = useSelector((state) => state.loadJobs);
    let data = [];
    data = jobs !== undefined && jobs.length > 0 ? jobs : [];

    //delete job by Id
    const deleteJobById = (e, id) => {
      console.log(id);
    };

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
      {
        field: "user",
        headerName: "User",
        width: 150,
        valueGetter: (data) => data.row.user.firstName,
      },
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
            <Button variant="contained">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/admin/edit/job/${values.row._id}`}
              >
                Edit
              </Link>
            </Button>
            <Button
              onClick={(e) => deleteJobById(e, values.row._id)}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ];
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
                        <div className="dashboard-icon01">
                            <DashboardIcon />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item2">
                        <div className="dashboard-container03">
                        <div className="dashboard-icon02">
                            <GroupAddIcon />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item3">
                        <div className="dashboard-container04">
                        <div className="dashboard-icon03">
                            <WorkIcon />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item4">
                        <div className="dashboard-container05">
                        <div className="dashboard-icon04">
                            <CategoryIcon />
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
                        <Box >

            <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
                Jobs list
            </Typography>
            <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                <Button variant='contained' color="success" startIcon={<AddIcon />}> <Link style={{ color: "white", textDecoration: "none" }} to="/admin/job/create">Create Job</Link></Button>
            </Box>
            <Paper sx={{ bgcolor: "#807777" }} >

                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{

                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'white',
                            [`& .${gridClasses.row}`]: {
                                bgcolor: (theme) =>
                                    // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                    theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }

                        }}
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </Box>
            </Paper>

        </Box>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AdminDashJobs