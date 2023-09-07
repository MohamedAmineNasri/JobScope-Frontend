import React, { useEffect, useState } from 'react'
import styles from "./jobofferplatform.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { jobLoadAction } from '../../redux/actions/jobAction';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import {
  Card,
Pagination,
Box,
ListItemIcon,
MenuItem, MenuList,
 Stack, Typography,
} from "@mui/material";
// import MenuItem from "@mui/material/MenuItem";
import SelectComponent from '../../components/SelectComponent';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchInputEl from '../../components/SearchInputEl';
import { userLogoutAction } from '../../redux/actions/userAction';
import { USER_SIGNIN_SUCCESS } from '../../redux/constants/userConstant';
import moment from 'moment';


const  JobList = ({props}) => {
    const { jobs, setUniqueLocation, pages, loading } = useSelector(
      (state) => state.loadJobs
    );
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState("");
    const { keyword, location } = useParams();
    //const jobTypes = useSelector((state) => state.jobTypes); // Access the job types from the redux store
    const { jobType } = useSelector((state) => state.jobTypeAll);
  const { userInfo } = useSelector((state) => state.signIn);

    useEffect(() => {
      dispatch(jobLoadAction(page, keyword, cat, location));
    }, [page, keyword, cat, location]);

      useEffect(() => {
        dispatch(jobTypeLoadAction());
      }, []);
    const handleChangeCategory = (e) => {
      setCat(e.target.value);
    };

    // State to track expanded job titles
    const [expandedJobTitles, setExpandedJobTitles] = useState({});
    const [expandedJobDescriptions, setExpandedJobDescriptions] = useState({});

    // Function to toggle the expanded state of a job title
    const toggleExpandedJobTitle = (jobId) => {
      setExpandedJobTitles((prevExpanded) => ({
        ...prevExpanded,
        [jobId]: !prevExpanded[jobId],
      }));
    };

    // Function to toggle the expanded state of a job description
    const toggleExpandedJobDescription = (jobId) => {
      setExpandedJobDescriptions((prevExpanded) => ({
        ...prevExpanded,
        [jobId]: !prevExpanded[jobId],
      }));
    };
  
  const linkStyle = {
    textDecoration: "none", // Hide the underline
  };
     // log out user
    // const logOutUser = () => {
    //     dispatch(userLogoutAction());
    //     window.location.reload(true);
    //     setTimeout(() => {
    //         Navigate('/');
    //     }, 500)
    // }
const navigate = useNavigate();

const logOutUser = () => {
  localStorage.removeItem("userInfo");
  navigate("/login");
};


    return (
      <div className={styles["container"]}>
        <div className={styles["jobofferplatform"]}>
          <div className={styles["content"]}>
            <div className={styles["frame15"]}>
              <div className={styles["filter"]}>
                <div className={styles["frame36"]}>
                  <span className={styles["text"]}>
                    <span>Filters</span>
                  </span>
                  <div className={styles["frame35"]}>
                    <span className={styles["text002"]}>
                      <span>Filter job by category</span>
                    </span>

                    <div className={styles["frame34"]}>
                      <SelectComponent
                        handleChangeCategory={handleChangeCategory}
                        cat={cat}
                      />
                    </div>
                  </div>
                  <div className={styles["frame37"]}>
                    <span className={styles["text016"]}>
                      {/* jobs by location */}
                      <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                        <Box sx={{ pb: 2 }}>
                          {/* <h4>Filter by category</h4> */}
                          <Typography
                            component="h4"
                            sx={{
                              // color: palette.secondary.main,
                              fontWeight: 600,
                            }}
                          >
                            Filter job by location
                          </Typography>
                          <MenuList>
                            {setUniqueLocation &&
                              setUniqueLocation.map((location, i) => (
                                <MenuItem key={i}>
                                  <ListItemIcon>
                                    <LocationOnIcon
                                      sx={{
                                        // color: palette.secondary.main,
                                        fontSize: 18,
                                      }}
                                    />
                                  </ListItemIcon>
                                  <Link to={`/search/location/${location}`}>
                                    {location}
                                  </Link>
                                </MenuItem>
                              ))}
                          </MenuList>
                        </Box>
                      </Card>
                    </span>
                    <div className={styles["frame43"]}>
                      <div className={styles["frame40"]}>
                        <span className={styles["text018"]}>
                          <span>Hourly</span>
                        </span>
                      </div>
                      <div className={styles["frame41"]}>
                        <span className={styles["text020"]}>
                          <span>Monthly</span>
                        </span>
                      </div>
                      <div className={styles["frame42"]}>
                        <span className={styles["text022"]}>
                          <span>Yearly</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles["frame342"]}>
                      <div className={styles["frame311"]}>
                        <div className={styles["group11"]}>
                          <img
                            src="/external2/ellipse6144-90o-200h.png"
                            alt="Ellipse6144"
                            className={styles["ellipse61"]}
                          />
                          <img
                            src="/external2/ellipse7145-1d3j-200h.png"
                            alt="Ellipse7145"
                            className={styles["ellipse71"]}
                          />
                        </div>
                        <span className={styles["text024"]}>
                          <span>Any</span>
                        </span>
                      </div>
                      <div className={styles["frame321"]}>
                        <img
                          src="/external2/ellipse5148-e5h5-200h.png"
                          alt="Ellipse5148"
                          className={styles["ellipse505"]}
                        />
                        <span className={styles["text026"]}>
                          <span>&gt; 30000k</span>
                        </span>
                      </div>
                      <div className={styles["frame331"]}>
                        <img
                          src="/external2/ellipse5151-gbdl-200h.png"
                          alt="Ellipse5151"
                          className={styles["ellipse506"]}
                        />
                        <span className={styles["text028"]}>
                          <span>&gt; 50000k</span>
                        </span>
                      </div>
                      <div className={styles["frame343"]}>
                        <img
                          src="/external2/ellipse5154-60uj-200h.png"
                          alt="Ellipse5154"
                          className={styles["ellipse507"]}
                        />
                        <span className={styles["text030"]}>
                          <span>&gt; 80000k</span>
                        </span>
                      </div>
                      <div className={styles["frame352"]}>
                        <img
                          src="/external2/ellipse5157-l116-200h.png"
                          alt="Ellipse5157"
                          className={styles["ellipse508"]}
                        />
                        <span className={styles["text032"]}>
                          <span>&gt; 100000k</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["frame362"]}>
                    <span className={styles["text034"]}>
                      <span>Date of posting</span>
                    </span>
                    <div className={styles["frame344"]}>
                      <div className={styles["frame312"]}>
                        <div className={styles["group12"]}>
                          <img
                            src="/external2/ellipse6164-nc-200h.png"
                            alt="Ellipse6164"
                            className={styles["ellipse62"]}
                          />
                          <img
                            src="/external2/ellipse7165-em8c-200h.png"
                            alt="Ellipse7165"
                            className={styles["ellipse72"]}
                          />
                        </div>
                        <span className={styles["text036"]}>
                          <span>All time</span>
                        </span>
                      </div>
                      <div className={styles["frame322"]}>
                        <img
                          src="/external2/ellipse5168-eg5-200h.png"
                          alt="Ellipse5168"
                          className={styles["ellipse509"]}
                        />
                        <span className={styles["text038"]}>
                          <span>Last 24 hours</span>
                        </span>
                      </div>
                      <div className={styles["frame332"]}>
                        <img
                          src="/external2/ellipse5171-h7s4-200h.png"
                          alt="Ellipse5171"
                          className={styles["ellipse510"]}
                        />
                        <span className={styles["text040"]}>
                          <span>Last 3 days</span>
                        </span>
                      </div>
                      <div className={styles["frame345"]}>
                        <img
                          src="/external2/ellipse5174-n2xf-200h.png"
                          alt="Ellipse5174"
                          className={styles["ellipse511"]}
                        />
                        <span className={styles["text042"]}>
                          <span>Last 7 days</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["frame38"]}>
                    <span className={styles["text044"]}>
                      <span>Work experience</span>
                    </span>
                    <div className={styles["frame346"]}>
                      <div className={styles["frame313"]}>
                        <div className={styles["group13"]}>
                          <img
                            src="/external2/ellipse6181-fz6e-200h.png"
                            alt="Ellipse6181"
                            className={styles["ellipse63"]}
                          />
                          <img
                            src="/external2/ellipse7182-3co-200h.png"
                            alt="Ellipse7182"
                            className={styles["ellipse73"]}
                          />
                        </div>
                        <span className={styles["text046"]}>
                          <span>Any experience</span>
                        </span>
                      </div>
                      <div className={styles["frame323"]}>
                        <img
                          src="/external2/ellipse5185-5mim-200h.png"
                          alt="Ellipse5185"
                          className={styles["ellipse512"]}
                        />
                        <span className={styles["text048"]}>
                          <span>Intership</span>
                        </span>
                      </div>
                      <div className={styles["frame333"]}>
                        <img
                          src="/external2/ellipse5188-kwjf-200h.png"
                          alt="Ellipse5188"
                          className={styles["ellipse513"]}
                        />
                        <span className={styles["text050"]}>
                          <span>Work remotely</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["frame39"]}>
                    <span className={styles["text052"]}>
                      <span>Type of employment</span>
                    </span>
                    <div className={styles["frame347"]}>
                      <div className={styles["frame314"]}>
                        <div className={styles["group4"]}>
                          <img
                            src="/external2/rectangle2195-vzoh-200w.png"
                            alt="Rectangle2195"
                            className={styles["rectangle2"]}
                          />
                          <img
                            src="/external2/check196-6z4h.svg"
                            alt="Check196"
                            className={styles["check"]}
                          />
                        </div>
                        <span className={styles["text054"]}>
                          <span>Full-time</span>
                        </span>
                      </div>
                      <div className={styles["frame324"]}>
                        <img
                          src="/external2/rectangle21100-bmuo-200h.png"
                          alt="Rectangle21100"
                          className={styles["rectangle21"]}
                        />
                        <span className={styles["text056"]}>
                          <span>Temporary</span>
                        </span>
                      </div>
                      <div className={styles["frame334"]}>
                        <img
                          src="/external2/rectangle31103-nxph-200h.png"
                          alt="Rectangle31103"
                          className={styles["rectangle3"]}
                        />
                        <span className={styles["text058"]}>
                          <span>Part-time</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["cards"]}>
                <div className={styles["frame71"]}>
                  <div className={styles["frame46"]}>
                    <span className={styles["text060"]}>
                      <span>3177 Jobs</span>
                    </span>
                    <div className={styles["frame14"]}>
                      <div className={styles["frame45"]}>
                        <img
                          src="/external2/funnelsimple1111-wcgte.svg"
                          alt="FunnelSimple1111"
                          className={styles["funnel-simple"]}
                        />
                        <span className={styles["text062"]}>
                          <span>Filter by</span>
                        </span>
                      </div>
                      <img
                        src="/external2/caretdown1116-mc4q.svg"
                        alt="CaretDown1116"
                        className={styles["caret-down"]}
                      />
                    </div>
                  </div>

                  {/* card */}
                  {/* <div>
                    <div className={styles["frame26"]}>
                      <div>
                        <div className={styles["frame17"]}></div>
                        <div className={styles["frame23"]}>
                          <div className={styles["frame28"]}>
                            <div className={styles["frame29"]}>
                              <div className={styles["frame27"]}>
                                <span className={styles["text064"]}>
                                  <span>Linear company</span>
                                </span>
                              </div>
                              <div className={styles["frame30"]}>
                                <span className={styles["text066"]}>
                                  <span>Software Engineer</span>
                                </span>
                                <div className={styles["frame25"]}>
                                  <span className={styles["text068"]}>
                                    <span>New post</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={styles["frame3001"]}>
                              <div className={styles["frame18"]}>
                                <img
                                  src="/external2/mappinline1131-vkfk.svg"
                                  alt="MapPinLine1131"
                                  className={styles["map-pin-line"]}
                                />
                                <span className={styles["text070"]}>
                                  <span>Brussels</span>
                                </span>
                              </div>
                              <img
                                src="/external2/ellipse31136-fwn-200h.png"
                                alt="Ellipse31136"
                                className={styles["ellipse3"]}
                              />
                              <div className={styles["frame20"]}>
                                <img
                                  src="/external2/clock1138-m03.svg"
                                  alt="Clock1138"
                                  className={styles["clock"]}
                                />
                                <span className={styles["text072"]}>
                                  <span>Full time</span>
                                </span>
                              </div>
                              <img
                                src="/external2/ellipse21142-tqzb-200h.png"
                                alt="Ellipse21142"
                                className={styles["ellipse2"]}
                              />
                              <div className={styles["frame21"]}>
                                <img
                                  src="/external2/currencydollar1144-8xg.svg"
                                  alt="CurrencyDollar1144"
                                  className={styles["currency-dollar"]}
                                />
                                <span className={styles["text074"]}>
                                  <span>50-55k</span>
                                </span>
                              </div>
                              <img
                                src="/external2/ellipse11148-r50a-200h.png"
                                alt="Ellipse11148"
                                className={styles["ellipse1"]}
                              />
                              <div className={styles["frame22"]}>
                                <img
                                  src="/external2/calendarblank1150-16u9.svg"
                                  alt="CalendarBlank1150"
                                  className={styles["calendar-blank"]}
                                />
                                <span className={styles["text076"]}>
                                  <span>29 min ago</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className={styles["text078"]}>
                            <span>
                              Mollit in laborum tempor Lorem incididunt irure.
                              Aute eu ex ad sunt. Pariatur sint culpa do
                              incididunt eiusmod eiusmod culpa. laborum tempor
                              Lorem incididunt.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div>
                    {jobs &&
                      jobs.map((job, index) => (
                        <div
                          key={job._id}
                          className={styles["frame26"]} // Apply your CSS class here
                        >
                          <div className={styles["frame17"]}>
                            {jobType &&
                              jobType.map((jt) => (
                                <div key={jt._id} value={jt._id}></div>
                              ))}
                            {console.log(
                              "Job Name:",
                              jobType?.map((jt) => jt.jobTypeName)
                            )}
                          </div>
                          <div className={styles["frame23"]}>
                            <div className={styles["frame28"]}>
                              <div className={styles["frame29"]}>
                                <div className={styles["frame27"]}>
                                  <span className={styles["text064"]}>
                                    <span>Linear company</span>
                                  </span>
                                </div>
                                <div className={styles["frame30"]}>
                                  <span className={styles["text066"]}>
                                    <span>{job.title}</span>
                                  </span>
                                  {/* <div className={styles["frame25"]}>
                                    <span className={styles["text068"]}>
                                      <span>New post</span>
                                    </span>
                                  </div> */}
                                </div>
                              </div>
                              <div className={styles["frame3001"]}>
                                <div className={styles["frame18"]}>
                                  <img
                                    src="/external2/mappinline1131-vkfk.svg"
                                    alt="MapPinLine1131"
                                    className={styles["map-pin-line"]}
                                  />
                                  <span className={styles["text070"]}>
                                    <span>{job.location}</span>
                                  </span>
                                </div>
                                <img
                                  src="/external2/ellipse31136-fwn-200h.png"
                                  alt="Ellipse31136"
                                  className={styles["ellipse3"]}
                                />
                                <div className={styles["frame20"]}>
                                  <img
                                    src="/external2/clock1138-m03.svg"
                                    alt="Clock1138"
                                    className={styles["clock"]}
                                  />
                                  <span className={styles["text072"]}>
                                    <span>
                                      {(jobType &&
                                        jobType.find(
                                          (jt) => jt._id === job.JobType
                                        )?.jobTypeName) ||
                                        "Unknown"}
                                    </span>
                                  </span>
                                </div>
                                <img
                                  src="/external2/ellipse21142-tqzb-200h.png"
                                  alt="Ellipse21142"
                                  className={styles["ellipse2"]}
                                />
                                <div className={styles["frame21"]}>
                                  <img
                                    src="/external2/currencydollar1144-8xg.svg"
                                    alt="CurrencyDollar1144"
                                    className={styles["currency-dollar"]}
                                  />
                                  <span className={styles["text074"]}>
                                    <span>{job.salary} DT</span>
                                  </span>
                                </div>
                                <img
                                  src="/external2/ellipse11148-r50a-200h.png"
                                  alt="Ellipse11148"
                                  className={styles["ellipse1"]}
                                />
                                <div className={styles["frame22"]}>
                                  <img
                                    src="/external2/calendarblank1150-16u9.svg"
                                    alt="CalendarBlank1150"
                                    className={styles["calendar-blank"]}
                                  />
                                  <span className={styles["text076"]}>
                                    <span>
                                      {moment(job.updatedAt).format(
                                        "YYYY / MM / DD"
                                      )}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span className={styles["text078"]}>
                              <span>{job.description}</span>
                            </span>
                            <span>
                              <button
                                className={styles["button07"]}
                                style={{ cursor: "pointer" }}
                              >
                                <span className={styles["text161"]}>
                                  <Link
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                      boxShadow: 0,
                                    }}
                                    to={`/jobdetails/${job._id}`}
                                  >
                                    <span>More </span>
                                  </Link>
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className={styles["pagination"]}>
                  <Pagination
                    page={page}
                    count={pages === 0 ? 1 : pages}
                    onChange={(event, value) => setPage(value)}
                  />
                </div>
              </div>
              <div className={styles["moreoption"]}>
                <div className={styles["frame16"]}>
                  <div className={styles["frame363"]}>
                    <span className={styles["text155"]}>
                      <span>📨 Email me for jobs</span>
                    </span>
                  </div>
                  <div className={styles["frame371"]}>
                    <span className={styles["text157"]}>
                      <span>
                        Ut esse eiusmod aute. Sit enim labore dolore. Aute ea
                        fugiat commodo ea foes.
                      </span>
                    </span>
                  </div>
                  <div className={styles["frame72"]}>
                    <div className={styles["frame141"]}>
                      <span className={styles["text159"]}>
                        <span>name@mail.com</span>
                      </span>
                    </div>
                    <button className={styles["button07"]}>
                      <span className={styles["text161"]}>
                        <span>Subcribe</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className={styles["frame186"]}>
                  <div className={styles["frame364"]}>
                    <span className={styles["text163"]}>
                      <span>🚀 Get noticed faster</span>
                    </span>
                  </div>
                  <div className={styles["frame372"]}>
                    <span className={styles["text165"]}>
                      <span>
                        Quis eiusmod deserunt cillum laboris magna cupidatat
                        esse labore irure quis cupidatat in.
                      </span>
                    </span>
                  </div>
                  <button className={styles["button08"]}>
                    <span className={styles["text167"]}>
                      <span>Upload your resume</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["search"]}>
            <div className={styles["group2"]}>
              <div className={styles["group"]}>
                <div className={styles["frame2"]}>
                  <div className={styles["frame60"]}>
                    <div className={styles["frame4801"]}></div>
                    <div className={styles["frame49"]}></div>
                    <div className={styles["frame50"]}></div>
                    <div className={styles["frame51"]}></div>
                    <div className={styles["frame52"]}></div>
                    <div className={styles["frame53"]}></div>
                    <div className={styles["frame54"]}></div>
                    <div className={styles["frame55"]}></div>
                    <div className={styles["frame56"]}></div>
                    <div className={styles["frame57"]}></div>
                    <div className={styles["frame58"]}></div>
                    <div className={styles["frame59"]}></div>
                  </div>
                  <div className={styles["frame61"]}>
                    <div className={styles["frame4802"]}></div>
                    <div className={styles["frame4901"]}></div>
                    <div className={styles["frame5001"]}></div>
                    <div className={styles["frame5101"]}></div>
                    <div className={styles["frame5201"]}></div>
                    <div className={styles["frame5301"]}></div>
                    <div className={styles["frame5401"]}></div>
                    <div className={styles["frame5501"]}></div>
                    <div className={styles["frame5601"]}></div>
                    <div className={styles["frame5701"]}></div>
                    <div className={styles["frame5801"]}></div>
                    <div className={styles["frame5901"]}></div>
                  </div>
                  <div className={styles["frame62"]}>
                    <div className={styles["frame4803"]}></div>
                    <div className={styles["frame4902"]}></div>
                    <div className={styles["frame5002"]}></div>
                    <div className={styles["frame5102"]}></div>
                    <div className={styles["frame5202"]}></div>
                    <div className={styles["frame5302"]}></div>
                    <div className={styles["frame5402"]}></div>
                    <div className={styles["frame5502"]}></div>
                    <div className={styles["frame5602"]}></div>
                    <div className={styles["frame5702"]}></div>
                    <div className={styles["frame5802"]}></div>
                    <div className={styles["frame5902"]}></div>
                  </div>
                  <div className={styles["frame63"]}>
                    <div className={styles["frame4804"]}></div>
                    <div className={styles["frame4903"]}></div>
                    <div className={styles["frame5003"]}></div>
                    <div className={styles["frame5103"]}></div>
                    <div className={styles["frame5203"]}></div>
                    <div className={styles["frame5303"]}></div>
                    <div className={styles["frame5403"]}></div>
                    <div className={styles["frame5503"]}></div>
                    <div className={styles["frame5603"]}></div>
                    <div className={styles["frame5703"]}></div>
                    <div className={styles["frame5803"]}></div>
                    <div className={styles["frame5903"]}></div>
                  </div>
                  <div className={styles["frame64"]}>
                    <div className={styles["frame4805"]}></div>
                    <div className={styles["frame4904"]}></div>
                    <div className={styles["frame5004"]}></div>
                    <div className={styles["frame5104"]}></div>
                    <div className={styles["frame5204"]}></div>
                    <div className={styles["frame5304"]}></div>
                    <div className={styles["frame5404"]}></div>
                    <div className={styles["frame5504"]}></div>
                    <div className={styles["frame5604"]}></div>
                    <div className={styles["frame5704"]}></div>
                    <div className={styles["frame5804"]}></div>
                    <div className={styles["frame5904"]}></div>
                  </div>
                  <div className={styles["frame65"]}>
                    <div className={styles["frame4806"]}></div>
                    <div className={styles["frame4905"]}></div>
                    <div className={styles["frame5005"]}></div>
                    <div className={styles["frame5105"]}></div>
                    <div className={styles["frame5205"]}></div>
                    <div className={styles["frame5305"]}></div>
                    <div className={styles["frame5405"]}></div>
                    <div className={styles["frame5505"]}></div>
                    <div className={styles["frame5605"]}></div>
                    <div className={styles["frame5705"]}></div>
                    <div className={styles["frame5805"]}></div>
                    <div className={styles["frame5905"]}></div>
                  </div>
                  <div className={styles["frame66"]}>
                    <div className={styles["frame4807"]}></div>
                    <div className={styles["frame4906"]}></div>
                    <div className={styles["frame5006"]}></div>
                    <div className={styles["frame5106"]}></div>
                    <div className={styles["frame5206"]}></div>
                    <div className={styles["frame5306"]}></div>
                    <div className={styles["frame5406"]}></div>
                    <div className={styles["frame5506"]}></div>
                    <div className={styles["frame5606"]}></div>
                    <div className={styles["frame5706"]}></div>
                    <div className={styles["frame5806"]}></div>
                    <div className={styles["frame5906"]}></div>
                  </div>
                  <div className={styles["frame67"]}>
                    <div className={styles["frame4808"]}></div>
                    <div className={styles["frame4907"]}></div>
                    <div className={styles["frame5007"]}></div>
                    <div className={styles["frame5107"]}></div>
                    <div className={styles["frame5207"]}></div>
                    <div className={styles["frame5307"]}></div>
                    <div className={styles["frame5407"]}></div>
                    <div className={styles["frame5507"]}></div>
                    <div className={styles["frame5607"]}></div>
                    <div className={styles["frame5707"]}></div>
                    <div className={styles["frame5807"]}></div>
                    <div className={styles["frame5907"]}></div>
                  </div>
                  <div className={styles["frame68"]}>
                    <div className={styles["frame4809"]}></div>
                    <div className={styles["frame4908"]}></div>
                    <div className={styles["frame5008"]}></div>
                    <div className={styles["frame5108"]}></div>
                    <div className={styles["frame5208"]}></div>
                    <div className={styles["frame5308"]}></div>
                    <div className={styles["frame5408"]}></div>
                    <div className={styles["frame5508"]}></div>
                    <div className={styles["frame5608"]}></div>
                    <div className={styles["frame5708"]}></div>
                    <div className={styles["frame5808"]}></div>
                    <div className={styles["frame5908"]}></div>
                  </div>
                  <div className={styles["frame69"]}>
                    <div className={styles["frame4810"]}></div>
                    <div className={styles["frame4909"]}></div>
                    <div className={styles["frame5009"]}></div>
                    <div className={styles["frame5109"]}></div>
                    <div className={styles["frame5209"]}></div>
                    <div className={styles["frame5309"]}></div>
                    <div className={styles["frame5409"]}></div>
                    <div className={styles["frame5509"]}></div>
                    <div className={styles["frame5609"]}></div>
                    <div className={styles["frame5709"]}></div>
                    <div className={styles["frame5809"]}></div>
                    <div className={styles["frame5909"]}></div>
                  </div>
                </div>
              </div>
              <img
                src="/external2/rectangle11511-9y2t-1200h.png"
                alt="Rectangle11511"
                className={styles["rectangle1"]}
              />
            </div>
            <div className={styles["frame12"]}>
              <div className={styles["frame11"]}>
                <span className={styles["text169"]}>
                  <span className={styles["text170"]}>
                    Find your
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span className={styles["text171"]}>new job</span>
                  <span> today</span>
                </span>
                <span className={styles["text173"]}>
                  <span>
                    Thousands of jobs in the computer, engineering and
                    technology sectors are waiting for you.
                  </span>
                </span>
              </div>
              <div className={styles["frame10"]}>
                <div className={styles["frame9"]}>
                  <img
                    src="/external2/magnifyingglass1518-b15.svg"
                    alt="MagnifyingGlass1518"
                    className={styles["magnifying-glass"]}
                  />
                  <span className={styles["text175"]}>
                    {/* <span>What position are you looking for ?</span> */}
                    {/* <input/> */}
                    <SearchInputEl />
                  </span>
                </div>
                {/* <div className={styles["frame142"]}>
                  <img
                    src="/external2/mappinline1523-t71j.svg"
                    alt="MapPinLine1523"
                    className={styles["map-pin-line6"]}
                  />
                  <span className={styles["text177"]}>
                    <span>Location</span>
                  </span>
                </div> */}
                {/* <button className={styles["button09"]}>
                  <span className={styles["text179"]}>
                    <span>Search job</span>
                  </span>
                </button> */}
              </div>
            </div>
          </div>
          <div className={styles["navbar"]}>
            <div className={styles["container1"]}>
              <div className={styles["frame471"]}>
                <div className={styles["group3"]}>
                  {/* <img
                    src="/external2/ellipse81534-p1-200h.png"
                    alt="Ellipse81534"
                    className={styles["ellipse8"]}
                  /> */}
                  <img
                    src="/external2/espritlogo.jpg"
                    alt="Ellipse91535"
                    className={styles["ellipse9"]}
                  />
                </div>
                <span className={styles["text181"]}>
                  {/* <span>namless</span> */}
                </span>
              </div>
              <div className={styles["column"]}>
                <span className={styles["text183"]}>
                  <span>Start a search</span>
                </span>
                <span className={styles["text185"]}>
                  <Link to="/joblist" className={styles["text185"]}>
                    Jobs list
                  </Link>
                </span>
                <span className={styles["text187"]}>
                  <Link to="/joblist" className={styles["text185"]}>
                    Home
                  </Link>
                </span>
                <span className={styles["text189"]}>
                  <span>Pricing</span>
                </span>
              </div>
              <div className={styles["column1"]}>
                {/* <button className={styles["button10"]}>
                  <span className={styles["text191"]}>
                    <Link to="/login" style={linkStyle}>
                      Log in
                    </Link>
                  </span>
                </button> */}
                <div className={styles["button10"]}>
                  <span className={styles["text191"]}>
                    {userInfo ? (
                      <button
                        onClick={logOutUser}
                        className={styles["button09"]}
                        style={{ cursor: "pointer" }}
                      >
                        Log Out
                      </button>
                    ) : (
                      <Link to="/login" style={linkStyle}>
                        Log In
                      </Link>
                    )}
                  </span>
                </div>
                {!userInfo && (
                  <button className={styles["button11"]}>
                    <span className={styles["text193"]}>
                      <span>Sign up</span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default JobList