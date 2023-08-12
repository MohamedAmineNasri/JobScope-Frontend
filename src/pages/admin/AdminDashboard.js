    import React from 'react'
    import { Helmet } from "react-helmet";
    import "./AdminDashboard.css";

    const AdminDashboard = () => {
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
                            <img
                            src="/external4/mailoutline1174-lrr9.svg"
                            alt="MailOutline1174"
                            className="dashboard-mail-outline"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item2">
                        <div className="dashboard-container03">
                        <div className="dashboard-icon02">
                            <img
                            src="/external4/calendartoday1174-t3aa.svg"
                            alt="CalendarToday1174"
                            className="dashboard-calendar-today"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item3">
                        <div className="dashboard-container04">
                        <div className="dashboard-icon03">
                            <img
                            src="/external4/personoutline1174-82b9.svg"
                            alt="PersonOutline1174"
                            className="dashboard-person-outline"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item4">
                        <div className="dashboard-container05">
                        <div className="dashboard-icon04">
                            <img
                            src="/external4/contentpaste1174-afkm.svg"
                            alt="ContentPaste1174"
                            className="dashboard-content-paste"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item5">
                        <div className="dashboard-container06">
                        <div className="dashboard-icon05">
                            <img
                            src="/external4/gridon1174-jkme.svg"
                            alt="GridOn1174"
                            className="dashboard-grid-on"
                            />
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
                    <div className="dashboard-list-item6">
                    <div className="dashboard-container07">
                        <div className="dashboard-icon06">
                        <img
                            src="/external4/chatbubbleoutline1174-kczo.svg"
                            alt="ChatBubbleOutline1174"
                            className="dashboard-chat-bubble-outline"
                        />
                        </div>
                    </div>
                    </div>
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
                    <div className="dashboard-content1"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default AdminDashboard