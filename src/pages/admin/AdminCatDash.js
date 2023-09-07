    import React, { useEffect, useState } from "react";
    import { Helmet } from "react-helmet";
    import "./AdminDashboard.css";
    import GroupAddIcon from "@mui/icons-material/GroupAdd";
    import DashboardIcon from "@mui/icons-material/Dashboard";
    import WorkIcon from "@mui/icons-material/Work";
    import CategoryIcon from "@mui/icons-material/Category";
    import { useDispatch, useSelector } from "react-redux";
    import {
    createJobTypeAction,
    deleteJobTypeAction,
    jobTypeLoadAction,
    updateJobTypeAction,
    } from "../../redux/actions/jobTypeAction";
    import { Box, Button, Paper, TextField, Typography } from "@mui/material";
    import { DataGrid, gridClasses } from "@mui/x-data-grid";
    import { Link, useNavigate } from "react-router-dom";
    import AddIcon from "@mui/icons-material/Add";
    import Dialog from "@mui/material/Dialog";
    import DialogTitle from "@mui/material/DialogTitle";
    import DialogContent from "@mui/material/DialogContent";
    import DialogActions from "@mui/material/DialogActions";
    import LogoutIcon from "@mui/icons-material/Logout";
import { userLogoutAction } from "../../redux/actions/userAction";

    const AdminCatDash = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

    const { jobType } = useSelector((state) => state.jobTypeAll);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDialogOpenCreate, setisDialogOpenCreate] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleOpenDialog = (categoryId) => {
        setIsDialogOpen(true);
        setSelectedCategoryId(categoryId);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedCategoryId(null);
        setCategoryName("");
    };
    const handleOpenDialogCreate = (categoryId) => {
    setisDialogOpenCreate(true);
    setSelectedCategoryId(categoryId);
    };

    const handleCloseDialogCreate = () => {
    setisDialogOpenCreate(false);
    setSelectedCategoryId(null);
    setCategoryName("");
    };
    const handleCreateCategory = () => {
        dispatch(createJobTypeAction(categoryName));
        handleCloseDialogCreate();
    };

    let data = [];
    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        if (jobType) {
        setGridData(jobType);
        }
    }, [jobType]);

    const deleteJobCatById = (e, id) => {
        console.log(id);
    };

    const handleUpdateCategory = () => {
        if (selectedCategoryId) {
        dispatch(updateJobTypeAction(selectedCategoryId, categoryName)); // Dispatch your update action
        handleCloseDialog();
        }
    };

    const handleDeleteCategory = (categoryId) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
        dispatch(deleteJobTypeAction(categoryId));
        console.log(categoryId);
        }
    };

    const columns = [
        {
        field: "_id",
        headerName: "Category ID",
        width: 150,
        editable: true,
        },
        {
        field: "jobTypeName",
        headerName: "Category name",
        width: 150,
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
                onClick={() => handleDeleteCategory(values.row._id)}
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
      const linkStyle = {
        color: "#000", // Set the desired color for visited links
        textDecoration: "none", // Remove underline
        // Add other styling properties if needed
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
                <div className="dashboard-table">
                  <div className="dashboard-content1">
                    <Box>
                      <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
                        Job Types
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
                          startIcon={<AddIcon />}
                          onClick={handleOpenDialogCreate}
                        >
                          Create Category
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
                        </Box>
                      </Paper>
                      <Dialog
                        open={isDialogOpenCreate}
                        onClose={handleCloseDialogCreate}
                      >
                        <DialogTitle>Create Category</DialogTitle>
                        <DialogContent>
                          {/* Add your form or content for creating a category */}
                          {/* For example, you can add text fields, dropdowns, etc. */}
                          <TextField
                            label="Category Name"
                            variant="outlined"
                            fullWidth
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseDialog} color="primary">
                            Cancel
                          </Button>
                          <Button
                            onClick={handleCreateCategory}
                            color="primary"
                          >
                            Create
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                        <DialogTitle>Edit Category</DialogTitle>
                        <DialogContent>
                          <TextField
                            label="Category Name"
                            variant="outlined"
                            fullWidth
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseDialog} color="primary">
                            Cancel
                          </Button>
                          <Button
                            onClick={handleUpdateCategory}
                            color="primary"
                          >
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

    export default AdminCatDash;
