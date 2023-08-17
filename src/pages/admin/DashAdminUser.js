    import React, { useEffect } from 'react'
    import { Helmet } from "react-helmet";
    import "./AdminDashboard.css";
    import GroupAddIcon from "@mui/icons-material/GroupAdd";
    import DashboardIcon from "@mui/icons-material/Dashboard";
    import WorkIcon from "@mui/icons-material/Work";
    import CategoryIcon from "@mui/icons-material/Category";
import moment from 'moment';
import { Box, Button, Paper, Typography, gridClasses  } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allUserAction } from '../../redux/actions/userAction';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";



    const DashAdminUser = () => {
            const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUserAction());
    }, []);


    const { users, loading } = useSelector(state => state.allUsers);
    let data = [];
    data = (users !== undefined && users.length > 0) ? users : []

    const deleteUserById = (e, id) => {
        console.log(id);
    }

    const columns = [

        {
            field: '_id',
            headerName: 'User ID',
            width: 150,
            editable: true,
        },

        {
            field: 'email',
            headerName: 'E_mail',
            width: 150,
        },

        {
            field: 'role',
            headerName: 'User status',
            width: 150,
            renderCell: (params) => (
                params.row.role === "admin" ? "Admin" : "Regular user"
            )
        },

        {
            field: 'createdAt',
            headerName: 'Creation date',
            width: 150,
            renderCell: (params) => (
                moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
            )
        },

        {
            field: "Actions",
            width: 200,
            renderCell: (values) => (
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                    <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link></ Button>
                    < Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
                </Box>
            )
        }
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
                    All users
                </Typography>
                <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                    <Button variant='contained' color="success" startIcon={<GroupAddIcon />}> Create user</Button>
                </Box>
                <Paper sx={{ bgcolor: "#807777" }} >

                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            sx={{

                                '& .MuiTablePagination-displayedRows': {
                                    color: 'black',
                                },
                                color: 'black',
                                [`& .${gridClasses.row}`]: {
                                    bgcolor: (theme) =>
                                        // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                        theme.palette.secondary.main
                                },
                                button: {
                                    color: '#ffffff'
                                }

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