import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from '../redux/actions/jobAction';
import { Link, useParams } from "react-router-dom";
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction';


const Home = () => {
    const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [cat, setCat] = React.useState("");
    const { keyword, location } = useParams();
    const jobTypes = useSelector(state => state.jobTypes); // Access the job types from the redux store


    useEffect(() => {
          dispatch(jobLoadAction(page, keyword, cat, location));
      }, [page, keyword, cat, location]);

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);
     const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }

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
 const jobTypeMap = {};
  if (jobTypes) {
    jobTypes.forEach(jobType => {
      jobTypeMap[jobType._id] = jobType.jobTypeName;
    });
  }
  
    return (
      <div>
        {/* <!-- CSS here --> */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/price_rangs.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link
          rel="stylesheet"
          href="./JOBLISTING/assets/css/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="./JOBLISTING/assets/css/fontawesome-all.min.css"
        />
        <link
          rel="stylesheet"
          href="./JOBLISTING/assets/css/themify-icons.css"
        />
        <link rel="stylesheet" href="./JOBLISTING/assets/css/slick.css" />
        <link rel="stylesheet" href="./JOBLISTING/assets/css/nice-select.css" />
        {/* <link rel="stylesheet" href="assets/css/style.css"/> */}
        <link rel="stylesheet" href="./JOBLISTING/assets/css/style.css" />

        <div>
          <link href="./index.css" rel="stylesheet" />

          <div className="desktop7-container">
            <div className="desktop7-desktop7">
              <div className="desktop7-group337">
                <div className="desktop7-group334">
                  <span className="desktop7-text">
                    <span>Staffing</span>
                    <span>Solutions</span>
                  </span>
                  <img
                    src="/external/vector3926-qd.svg"
                    alt="Magnifying glass icon for search"
                    className="desktop7-vector39"
                  />
                </div>
                <div className="desktop7-frame337">
                  <span className="desktop7-text003">
                    <span>Home</span>
                  </span>
                  <span className="desktop7-text005">
                    <span>Find Jobs</span>
                  </span>
                  <span className="desktop7-text007">
                    <span>Find Candidates</span>
                  </span>
                  <span className="desktop7-text009">
                    <span>Articles</span>
                  </span>
                </div>
                <div className="desktop7-group336">
                  <span className="desktop7-text011">
                    <span>Log in</span>
                  </span>
                  <div className="desktop7-group335">
                    <span className="desktop7-text013">
                      <span>Register Now</span>
                    </span>
                  </div>
                </div>
              </div>
              <span className="desktop7-text015">
                <span className="desktop7-text016">Get The</span>
                <span className="desktop7-text017">
                  <span>Right Job</span>
                  <br />
                  <span></span>
                </span>
                <span>You Deserve</span>
              </span>
              <span className="desktop7-text022">
                <span>786 jobs &amp; 110 candidates are registeresd</span>
              </span>
              <img
                alt="Rectangle154219"
                src="/external/rectangle154219-v29r-200h.png"
                className="desktop7-rectangle154"
              />
              <img
                alt="Vector40220"
                src="/external/vector40220-gf6.svg"
                className="desktop7-vector40"
              />

              <div className="desktop7-group338">
                <span className="desktop7-text024">
                  <span>Search</span>
                </span>
              </div>
              <div className="desktop7-group">
                <img
                  alt="Vector225"
                  src="/external/vector225-fdgs.svg"
                  className="desktop7-vector"
                />
              </div>
              <span className="desktop7-text026">
                <span>Search Title or Keyword</span>
              </span>
              <span className="desktop7-text028">
                <span>Search Location</span>
              </span>
              <div className="desktop7-group01">
                <img
                  alt="Vector229"
                  src="/external/vector229-c91.svg"
                  className="desktop7-vector001"
                />

                <img
                  alt="Vector230"
                  src="/external/vector230-k2v.svg"
                  className="desktop7-vector002"
                />
              </div>
              <img
                alt="Rectangle156231"
                src="/external/rectangle156231-3gml-800h.png"
                className="desktop7-rectangle156"
              />
              <span className="desktop7-text030">
                <span className="desktop7-text031">
                  <span>One Platform</span>
                  <br />
                  <span>Many</span>
                </span>
                <span>Solutions</span>
              </span>
              <div className="desktop7-group341">
                <div className="desktop7-group340">
                  <div className="desktop7-group339">
                    <span className="desktop7-text036">
                      <span>237 Jobs Available</span>
                    </span>
                    <span className="desktop7-text038">
                      <span>
                        <span>Marketing &amp;</span>
                        <br />
                        <span>Communication</span>
                      </span>
                    </span>
                  </div>
                  <img
                    alt="Vector239"
                    src="external/vector239-xzu.svg"
                    className="desktop7-vector003"
                  />
                </div>
              </div>
              <div className="desktop7-group373">
                <div className="desktop7-group3401">
                  <div className="desktop7-group3391">
                    <span className="desktop7-text043">
                      <span>237 Jobs Available</span>
                    </span>
                    <span className="desktop7-text045">
                      <span>
                        <span>Government</span>
                        <br />
                        <span>Jobs</span>
                      </span>
                    </span>
                  </div>
                  <div className="desktop7-group02">
                    <img
                      alt="Vector247"
                      src="external/vector247-6aj8.svg"
                      className="desktop7-vector004"
                    />
                    <img
                      alt="Vector248"
                      src="external/vector248-o0w.svg"
                      className="desktop7-vector005"
                    />
                    <img
                      alt="Vector249"
                      src="external/vector249-lh2r.svg"
                      className="desktop7-vector006"
                    />
                    <img
                      alt="Vector250"
                      src="external/vector250-c2pn.svg"
                      className="desktop7-vector007"
                    />
                    <img
                      alt="Vector251"
                      src="external/vector251-3p7p.svg"
                      className="desktop7-vector008"
                    />
                    <img
                      alt="Vector252"
                      src="external/vector252-0nhun.svg"
                      className="desktop7-vector009"
                    />
                  </div>
                </div>
              </div>
              <div className="desktop7-group372">
                <div className="desktop7-group3402">
                  <div className="desktop7-group378">
                    <span className="desktop7-text050">
                      <span>237 Jobs Available</span>
                    </span>
                    <span className="desktop7-text052">
                      <span>
                        <span>Human Research &amp;</span>
                        <br />
                        <span>Development</span>
                      </span>
                    </span>
                    <div className="desktop7-group03">
                      <img
                        alt="Vector260"
                        src="external/vector260-en6o.svg"
                        className="desktop7-vector010"
                      />
                      <img
                        alt="Vector261"
                        src="external/vector261-4w8.svg"
                        className="desktop7-vector011"
                      />
                      <img
                        alt="Vector262"
                        src="external/vector262-uis.svg"
                        className="desktop7-vector012"
                      />
                      <img
                        alt="Vector263"
                        src="external/vector263-y2ek.svg"
                        className="desktop7-vector013"
                      />
                      <img
                        alt="Vector264"
                        src="external/vector264-0d8r.svg"
                        className="desktop7-vector014"
                      />
                      <img
                        alt="Vector265"
                        src="external/vector265-7id.svg"
                        className="desktop7-vector015"
                      />
                      <img
                        alt="Vector266"
                        src="external/vector266-2v8h.svg"
                        className="desktop7-vector016"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop7-group374">
                <div className="desktop7-group3403">
                  <div className="desktop7-group3781">
                    <span className="desktop7-text057">
                      <span>237 Jobs Available</span>
                    </span>
                    <span className="desktop7-text059">
                      <span>
                        <span>Customer</span>
                        <br />
                        <span>Support Care</span>
                      </span>
                    </span>
                    <img
                      alt="Vector273"
                      src="external/vector273-gu0w.svg"
                      className="desktop7-vector017"
                    />
                  </div>
                </div>
              </div>
              <div className="desktop7-group368">
                <div className="desktop7-group3404">
                  <div className="desktop7-group3392">
                    <div className="desktop7-group377">
                      <span className="desktop7-text064">
                        <span>237 Jobs Available</span>
                      </span>
                      <span className="desktop7-text066">
                        <span>
                          <span>Design &amp;</span>
                          <br />
                          <span>Development</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="desktop7-group04">
                    <img
                      alt="Vector282"
                      src="external/vector282-924o.svg"
                      className="desktop7-vector018"
                    />
                    <img
                      alt="Vector283"
                      src="external/vector283-r296.svg"
                      className="desktop7-vector019"
                    />
                    <img
                      alt="Vector284"
                      src="external/vector284-elal.svg"
                      className="desktop7-vector020"
                    />
                  </div>
                </div>
              </div>
              <div className="desktop7-group375">
                <div className="desktop7-group3405">
                  <div className="desktop7-group3393">
                    <div className="desktop7-group3771">
                      <span className="desktop7-text071">
                        <span>237 Jobs Available</span>
                      </span>
                      <span className="desktop7-text073">
                        <span>
                          <span>Business &amp;</span>
                          <br />
                          <span>Consulting</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="desktop7-group05">
                    <img
                      alt="Vector293"
                      src="external/vector293-zpws.svg"
                      className="desktop7-vector021"
                    />
                  </div>
                </div>
              </div>
              <div className="desktop7-group370">
                <div className="desktop7-group3406">
                  <div className="desktop7-group379">
                    <span className="desktop7-text078">
                      <span>237 Jobs Available</span>
                    </span>
                    <span className="desktop7-text080">
                      <span>
                        <span>Finance</span>
                        <br />
                        <span>Management</span>
                      </span>
                    </span>
                    <img
                      alt="Vector2100"
                      src="external/vector2100-c7vl.svg"
                      className="desktop7-vector022"
                    />
                  </div>
                </div>
              </div>
              <div className="desktop7-group376">
                <div className="desktop7-group3407">
                  <div className="desktop7-group3791">
                    <span className="desktop7-text085">
                      <span>237 Jobs Available</span>
                    </span>
                    <span className="desktop7-text087">
                      <span>Project Management</span>
                    </span>
                    <div className="desktop7-group380">
                      <img
                        alt="Vector2108"
                        src="external/vector2108-ei7a.svg"
                        className="desktop7-vector023"
                      />
                      <img
                        alt="Vector2109"
                        src="external/vector2109-95q7.svg"
                        className="desktop7-vector024"
                      />
                      <img
                        alt="Vector2110"
                        src="external/vector2110-lgww.svg"
                        className="desktop7-vector025"
                      />
                      <img
                        alt="Vector2111"
                        src="external/vector2111-niqi.svg"
                        className="desktop7-vector026"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className="desktop7-text089">
                <span>Featured Job Circulars</span>
              </span>
              {/* job cards */}
<div>
      {/* Your existing code here */}
      <div className="desktop7-group355">
        {jobs &&
          jobs.map((job, index) => (
            <div
              key={job._id}
              style={{
                top: `${Math.floor(index / 4) * 328}px`,
                left: `${(index % 4) * 294}px`,
                width: '268px',
                height: '308px',
                display: 'flex',
                position: 'absolute',
                alignItems: 'flex-start',
                flexShrink: 1,
              }}
              >
              <img alt="Rectangle1582114" src="external/rectangle1582114-kys.svg" className="desktop7-rectangle158" />
              <div className="desktop7-group354">
                <div className="desktop7-group353">
                  <img alt="Ellipse892117" src="external/ellipse892117-9tff-200h.png" className="desktop7-ellipse89" />
                  <div className="desktop7-group352" style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Use JavaScript to conditionally truncate or expand the title */}
                    <span
                      className="desktop7-text091"
                      style={{ marginRight: '8px', whiteSpace: 'nowrap', cursor: 'pointer' }}
                    >
                        {job.jobType ? jobTypeMap[job.jobType] : "No category"}               
                    </span>
                    <span className="desktop7-text093">Microsoft</span>
                  </div>
                </div>
                {/* ... Your other code ... */}
                <div className="desktop7-group350">
                  <span className="desktop7-text095">
                    <span>Location:{job.location}</span>
                  </span>
                  <span className="desktop7-text097" style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <span
                      style={{ marginRight: '8px', whiteSpace: 'nowrap', cursor: 'pointer' }}
                      onClick={() => toggleExpandedJobTitle(job._id)}
                    >
                      {expandedJobTitles[job._id] ? job.title : job.title.slice(0, 18) + '...'}
                      
                    </span>
                  </span>
                </div>
                <span
                  className="desktop7-text099"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleExpandedJobDescription(job._id)}
                >
                  <span>
                    {expandedJobDescriptions[job._id] ? job.description : job.description.slice(0, 181) + '...'}
                  </span>
                </span>
                <div className="desktop7-group35401">
                  <span className="desktop7-text101">
                    <span>{job.salary} DT</span>
                  </span>
                  <div className="desktop7-group394">
                    <div className="desktop7-group349">
                      <span className="desktop7-text103">
                        <span>See More</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>

              
              
              
              
              <div className="desktop7-group361">
                <span className="desktop7-text211">
                  <span>Find More Jobs</span>
                </span>
              </div>
              <img
                alt="Rectangle1622274"
                src="external/rectangle1622274-dm118-400h.png"
                className="desktop7-rectangle162"
              />
              <div className="desktop7-group367">
                <div className="desktop7-group366">
                  <span className="desktop7-text213">
                    <span className="desktop7-text214">
                      <span>Never Want to Miss</span>
                      <br />
                      <span>Any</span>
                    </span>
                    <span>Job News?</span>
                  </span>
                  <div className="desktop7-group365">
                    <div className="desktop7-group363">
                      <div className="desktop7-group364">
                        <span className="desktop7-text219">
                          <span>Subscribe</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop7-group388">
                <img
                  alt="Rectangle1592286"
                  src="external/rectangle1592286-0rzj-600h.png"
                  className="desktop7-rectangle159"
                />
                <div className="desktop7-group387">
                  <div className="desktop7-group386">
                    <span className="desktop7-text221">
                      <span>
                        <span>Get Matched The Most</span>
                        <br />
                        <span>Valuable Jobs, Just Drop</span>
                        <br />
                        <span>Your CV at Staffing Solutions</span>
                      </span>
                    </span>
                    <span className="desktop7-text228">
                      <span>
                        In the subject line of email, write your name, the
                        description of the position you want to apply
                      </span>
                    </span>
                    <div className="desktop7-group385">
                      <div className="desktop7-group362"></div>
                      <div className="desktop7-group384">
                        <span className="desktop7-text230">
                          <span>Upload Your CV</span>
                        </span>
                        <img
                          alt="Vector2296"
                          src="external/vector2296-t74c.svg"
                          className="desktop7-vector027"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="desktop7-profilingrafiki">
                    <div className="desktop7-backgroundcomplete">
                      <img
                        alt="Vector2299"
                        src="external/vector2299-m1t.svg"
                        className="desktop7-vector028"
                      />
                      <img
                        alt="Vector2300"
                        src="external/vector2300-aqv.svg"
                        className="desktop7-vector029"
                      />
                      <img
                        alt="Vector2301"
                        src="external/vector2301-4ihg.svg"
                        className="desktop7-vector030"
                      />
                      <img
                        alt="Vector2302"
                        src="external/vector2302-el1c.svg"
                        className="desktop7-vector031"
                      />
                      <img
                        alt="Vector2303"
                        src="external/vector2303-bs2.svg"
                        className="desktop7-vector032"
                      />
                      <img
                        alt="Vector2304"
                        src="external/vector2304-wsp7.svg"
                        className="desktop7-vector033"
                      />
                      <img
                        alt="Vector2305"
                        src="external/vector2305-i8x.svg"
                        className="desktop7-vector034"
                      />
                      <img
                        alt="Vector2306"
                        src="external/vector2306-nziwl.svg"
                        className="desktop7-vector035"
                      />
                      <img
                        alt="Vector2307"
                        src="external/vector2307-0sig.svg"
                        className="desktop7-vector036"
                      />
                      <img
                        alt="Vector2308"
                        src="external/vector2308-fc3r.svg"
                        className="desktop7-vector037"
                      />
                      <img
                        alt="Vector2309"
                        src="external/vector2309-du27.svg"
                        className="desktop7-vector038"
                      />
                      <img
                        alt="Vector2310"
                        src="external/vector2310-8pf.svg"
                        className="desktop7-vector039"
                      />
                      <img
                        alt="Vector2311"
                        src="external/vector2311-y6d.svg"
                        className="desktop7-vector040"
                      />
                      <img
                        alt="Vector2312"
                        src="external/vector2312-2aw.svg"
                        className="desktop7-vector041"
                      />
                      <img
                        alt="Vector2313"
                        src="external/vector2313-50kf.svg"
                        className="desktop7-vector042"
                      />
                      <img
                        alt="Vector2314"
                        src="external/vector2314-30sn.svg"
                        className="desktop7-vector043"
                      />
                      <img
                        alt="Vector2315"
                        src="external/vector2315-nuko.svg"
                        className="desktop7-vector044"
                      />
                      <img
                        alt="Vector2316"
                        src="external/vector2316-xom.svg"
                        className="desktop7-vector045"
                      />
                      <img
                        alt="Vector2317"
                        src="external/vector2317-hkmd.svg"
                        className="desktop7-vector046"
                      />
                      <img
                        alt="Vector2318"
                        src="external/vector2318-owej.svg"
                        className="desktop7-vector047"
                      />
                      <img
                        alt="Vector2319"
                        src="external/vector2319-pjc.svg"
                        className="desktop7-vector048"
                      />
                      <img
                        alt="Vector2320"
                        src="external/vector2320-meg.svg"
                        className="desktop7-vector049"
                      />
                      <img
                        alt="Vector2321"
                        src="external/vector2321-4.svg"
                        className="desktop7-vector050"
                      />
                      <img
                        alt="Vector2322"
                        src="external/vector2322-u8d6.svg"
                        className="desktop7-vector051"
                      />
                      <img
                        alt="Vector2323"
                        src="external/vector2323-6qf.svg"
                        className="desktop7-vector052"
                      />
                      <img
                        alt="Vector2324"
                        src="external/vector2324-tf3.svg"
                        className="desktop7-vector053"
                      />
                      <img
                        alt="Vector2325"
                        src="external/vector2325-k6we.svg"
                        className="desktop7-vector054"
                      />
                      <img
                        alt="Vector2326"
                        src="external/vector2326-gnb.svg"
                        className="desktop7-vector055"
                      />
                      <img
                        alt="Vector2327"
                        src="external/vector2327-mnia.svg"
                        className="desktop7-vector056"
                      />
                      <img
                        alt="Vector2328"
                        src="external/vector2328-5u2.svg"
                        className="desktop7-vector057"
                      />
                      <img
                        alt="Vector2329"
                        src="external/vector2329-2a5x.svg"
                        className="desktop7-vector058"
                      />
                      <img
                        alt="Vector2330"
                        src="external/vector2330-ndy.svg"
                        className="desktop7-vector059"
                      />
                      <img
                        alt="Vector2331"
                        src="external/vector2331-r4nu.svg"
                        className="desktop7-vector060"
                      />
                      <img
                        alt="Vector2332"
                        src="external/vector2332-rzmn.svg"
                        className="desktop7-vector061"
                      />
                      <img
                        alt="Vector2333"
                        src="external/vector2333-h1ii.svg"
                        className="desktop7-vector062"
                      />
                      <img
                        alt="Vector2334"
                        src="external/vector2334-p84i.svg"
                        className="desktop7-vector063"
                      />
                      <img
                        alt="Vector2335"
                        src="external/vector2335-y3ms.svg"
                        className="desktop7-vector064"
                      />
                      <img
                        alt="Vector2336"
                        src="external/vector2336-k8z.svg"
                        className="desktop7-vector065"
                      />
                      <img
                        alt="Vector2337"
                        src="external/vector2337-0d5t.svg"
                        className="desktop7-vector066"
                      />
                      <img
                        alt="Vector2338"
                        src="external/vector2338-39od.svg"
                        className="desktop7-vector067"
                      />
                      <img
                        alt="Vector2339"
                        src="external/vector2339-msvl.svg"
                        className="desktop7-vector068"
                      />
                      <img
                        alt="Vector2340"
                        src="external/vector2340-vblj.svg"
                        className="desktop7-vector069"
                      />
                      <img
                        alt="Vector2341"
                        src="external/vector2341-7m9w.svg"
                        className="desktop7-vector070"
                      />
                      <img
                        alt="Vector2342"
                        src="external/vector2342-drrc.svg"
                        className="desktop7-vector071"
                      />
                      <img
                        alt="Vector2343"
                        src="external/vector2343-khqd.svg"
                        className="desktop7-vector072"
                      />
                      <img
                        alt="Vector2344"
                        src="external/vector2344-1iub.svg"
                        className="desktop7-vector073"
                      />
                      <img
                        alt="Vector2345"
                        src="external/vector2345-8fda.svg"
                        className="desktop7-vector074"
                      />
                      <img
                        alt="Vector2346"
                        src="external/vector2346-z7zb.svg"
                        className="desktop7-vector075"
                      />
                      <img
                        alt="Vector2347"
                        src="external/vector2347-iebr.svg"
                        className="desktop7-vector076"
                      />
                      <img
                        alt="Vector2348"
                        src="external/vector2348-wu45.svg"
                        className="desktop7-vector077"
                      />
                      <img
                        alt="Vector2349"
                        src="external/vector2349-f4j.svg"
                        className="desktop7-vector078"
                      />
                      <img
                        alt="Vector2350"
                        src="external/vector2350-2gr.svg"
                        className="desktop7-vector079"
                      />
                      <img
                        alt="Vector2351"
                        src="external/vector2351-2mdp.svg"
                        className="desktop7-vector080"
                      />
                      <img
                        alt="Vector2352"
                        src="external/vector2352-1edf.svg"
                        className="desktop7-vector081"
                      />
                      <img
                        alt="Vector2353"
                        src="external/vector2353-7lea.svg"
                        className="desktop7-vector082"
                      />
                      <img
                        alt="Vector2354"
                        src="external/vector2354-iph5.svg"
                        className="desktop7-vector083"
                      />
                      <img
                        alt="Vector2355"
                        src="external/vector2355-xzyf.svg"
                        className="desktop7-vector084"
                      />
                      <img
                        alt="Vector2356"
                        src="external/vector2356-vefg.svg"
                        className="desktop7-vector085"
                      />
                      <img
                        alt="Vector2357"
                        src="external/vector2357-qq3p.svg"
                        className="desktop7-vector086"
                      />
                      <img
                        alt="Vector2358"
                        src="external/vector2358-lt.svg"
                        className="desktop7-vector087"
                      />
                      <img
                        alt="Vector2359"
                        src="external/vector2359-sds.svg"
                        className="desktop7-vector088"
                      />
                      <img
                        alt="Vector2360"
                        src="external/vector2360-wj4m.svg"
                        className="desktop7-vector089"
                      />
                      <img
                        alt="Vector2361"
                        src="external/vector2361-18h8.svg"
                        className="desktop7-vector090"
                      />
                      <img
                        alt="Vector2362"
                        src="external/vector2362-xh2.svg"
                        className="desktop7-vector091"
                      />
                      <img
                        alt="Vector2363"
                        src="external/vector2363-k85j.svg"
                        className="desktop7-vector092"
                      />
                      <img
                        alt="Vector2364"
                        src="external/vector2364-fsq.svg"
                        className="desktop7-vector093"
                      />
                      <img
                        alt="Vector2365"
                        src="external/vector2365-fftg.svg"
                        className="desktop7-vector094"
                      />
                      <img
                        alt="Vector2366"
                        src="external/vector2366-032n.svg"
                        className="desktop7-vector095"
                      />
                    </div>
                    <div className="desktop7-backgroundsimple">
                      <img
                        alt="Vector2368"
                        src=""
                        className="desktop7-vector096"
                      />
                      <img
                        alt="Vector2369"
                        src=""
                        className="desktop7-vector097"
                      />
                    </div>
                    <div className="desktop7-shadow">
                      <img
                        alt="path2371"
                        src="external/path2371-bsfx.svg"
                        className="desktop7-path"
                      />
                    </div>
                    <div className="desktop7-device">
                      <img
                        alt="Vector2373"
                        src=""
                        className="desktop7-vector098"
                      />
                      <img
                        alt="Vector2374"
                        src="external/vector2374-h11j.svg"
                        className="desktop7-vector099"
                      />
                      <img
                        alt="Vector2375"
                        src="external/vector2375-rkrg.svg"
                        className="desktop7-vector100"
                      />
                      <img
                        alt="Vector2376"
                        src="external/vector2376-6sam.svg"
                        className="desktop7-vector101"
                      />
                      <img
                        alt="Vector2377"
                        src="external/vector2377-s2wm.svg"
                        className="desktop7-vector102"
                      />
                      <img
                        alt="Vector2378"
                        src="external/vector2378-bgnk.svg"
                        className="desktop7-vector103"
                      />
                      <img
                        alt="Vector2379"
                        src="external/vector2379-ters.svg"
                        className="desktop7-vector104"
                      />
                      <img
                        alt="Vector2380"
                        src="external/vector2380-8znj.svg"
                        className="desktop7-vector105"
                      />
                      <img
                        alt="Vector2381"
                        src="external/vector2381-i3n.svg"
                        className="desktop7-vector106"
                      />
                      <div className="desktop7-group06">
                        <img
                          alt="Vector2383"
                          src="external/vector2383-o73k.svg"
                          className="desktop7-vector107"
                        />
                      </div>
                      <div className="desktop7-group07">
                        <img
                          alt="Vector2385"
                          src="external/vector2385-ll7o.svg"
                          className="desktop7-vector108"
                        />
                        <img
                          alt="Vector2386"
                          src="external/vector2386-og2.svg"
                          className="desktop7-vector109"
                        />
                      </div>
                      <img
                        alt="Vector2387"
                        src="external/vector2387-c2ow.svg"
                        className="desktop7-vector110"
                      />
                      <img
                        alt="Vector2388"
                        src="external/vector2388-y6y6b.svg"
                        className="desktop7-vector111"
                      />
                    </div>
                    <div className="desktop7-profile3">
                      <img
                        alt="Vector2390"
                        src="external/vector2390-z0v.svg"
                        className="desktop7-vector112"
                      />
                      <img
                        alt="Vector2391"
                        src="external/vector2391-ltq.svg"
                        className="desktop7-vector113"
                      />
                      <img
                        alt="Vector2392"
                        src="external/vector2392-68cu.svg"
                        className="desktop7-vector114"
                      />
                      <img
                        alt="Vector2393"
                        src="external/vector2393-60rqd.svg"
                        className="desktop7-vector115"
                      />
                      <img
                        alt="Vector2394"
                        src="external/vector2394-yp3d.svg"
                        className="desktop7-vector116"
                      />
                      <img
                        alt="Vector2395"
                        src="external/vector2395-eco.svg"
                        className="desktop7-vector117"
                      />
                      <img
                        alt="Vector2396"
                        src="external/vector2396-raa.svg"
                        className="desktop7-vector118"
                      />
                      <img
                        alt="Vector2397"
                        src="external/vector2397-tjlr.svg"
                        className="desktop7-vector119"
                      />
                      <img
                        alt="Vector2398"
                        src="external/vector2398-2f5n.svg"
                        className="desktop7-vector120"
                      />
                      <img
                        alt="Vector2399"
                        src="external/vector2399-saf.svg"
                        className="desktop7-vector121"
                      />
                      <img
                        alt="Vector2400"
                        src="external/vector2400-j9jd.svg"
                        className="desktop7-vector122"
                      />
                      <img
                        alt="Vector2401"
                        src="external/vector2401-vdm3.svg"
                        className="desktop7-vector123"
                      />
                      <img
                        alt="Vector2402"
                        src="external/vector2402-mkuo.svg"
                        className="desktop7-vector124"
                      />
                      <img
                        alt="Vector2403"
                        src="external/vector2403-xxth.svg"
                        className="desktop7-vector125"
                      />
                      <img
                        alt="Vector2404"
                        src="external/vector2404-1jgg.svg"
                        className="desktop7-vector126"
                      />
                      <img
                        alt="Vector2405"
                        src="external/vector2405-8749.svg"
                        className="desktop7-vector127"
                      />
                      <img
                        alt="Vector2406"
                        src="external/vector2406-4k9f.svg"
                        className="desktop7-vector128"
                      />
                      <img
                        alt="Vector2407"
                        src="external/vector2407-cawf.svg"
                        className="desktop7-vector129"
                      />
                      <img
                        alt="Vector2408"
                        src="external/vector2408-nmbm.svg"
                        className="desktop7-vector130"
                      />
                      <img
                        alt="Vector2409"
                        src="external/vector2409-mc9j.svg"
                        className="desktop7-vector131"
                      />
                      <img
                        alt="Vector2410"
                        src="external/vector2410-vxlg.svg"
                        className="desktop7-vector132"
                      />
                      <img
                        alt="Vector2411"
                        src="external/vector2411-p8ho.svg"
                        className="desktop7-vector133"
                      />
                      <img
                        alt="Vector2412"
                        src="external/vector2412-vdda.svg"
                        className="desktop7-vector134"
                      />
                      <img
                        alt="Vector2413"
                        src="external/vector2413-s3m.svg"
                        className="desktop7-vector135"
                      />
                      <img
                        alt="Vector2414"
                        src="external/vector2414-o31.svg"
                        className="desktop7-vector136"
                      />
                      <img
                        alt="Vector2415"
                        src="external/vector2415-kco.svg"
                        className="desktop7-vector137"
                      />
                      <img
                        alt="Vector2416"
                        src="external/vector2416-m2zj.svg"
                        className="desktop7-vector138"
                      />
                      <img
                        alt="Vector2417"
                        src="external/vector2417-bnw.svg"
                        className="desktop7-vector139"
                      />
                      <img
                        alt="Vector2418"
                        src="external/vector2418-eg4v.svg"
                        className="desktop7-vector140"
                      />
                      <img
                        alt="Vector2419"
                        src="external/vector2419-wd6q.svg"
                        className="desktop7-vector141"
                      />
                      <img
                        alt="Vector2420"
                        src="external/vector2420-0md.svg"
                        className="desktop7-vector142"
                      />
                      <img
                        alt="Vector2421"
                        src="external/vector2421-ffvi.svg"
                        className="desktop7-vector143"
                      />
                      <img
                        alt="Vector2422"
                        src="external/vector2422-t5ry.svg"
                        className="desktop7-vector144"
                      />
                      <img
                        alt="Vector2423"
                        src="external/vector2423-myxjg.svg"
                        className="desktop7-vector145"
                      />
                      <img
                        alt="Vector2424"
                        src="external/vector2424-na9.svg"
                        className="desktop7-vector146"
                      />
                      <img
                        alt="Vector2425"
                        src="external/vector2425-sccd.svg"
                        className="desktop7-vector147"
                      />
                      <img
                        alt="Vector2426"
                        src="external/vector2426-cs9.svg"
                        className="desktop7-vector148"
                      />
                      <img
                        alt="Vector2427"
                        src="external/vector2427-vfs.svg"
                        className="desktop7-vector149"
                      />
                      <img
                        alt="Vector2428"
                        src="external/vector2428-3w2.svg"
                        className="desktop7-vector150"
                      />
                      <img
                        alt="Vector2429"
                        src="external/vector2429-q7ve.svg"
                        className="desktop7-vector151"
                      />
                      <img
                        alt="Vector2430"
                        src="external/vector2430-8igo.svg"
                        className="desktop7-vector152"
                      />
                      <img
                        alt="Vector2431"
                        src="external/vector2431-6pll.svg"
                        className="desktop7-vector153"
                      />
                      <img
                        alt="Vector2432"
                        src="external/vector2432-fw1u.svg"
                        className="desktop7-vector154"
                      />
                      <img
                        alt="Vector2433"
                        src="external/vector2433-9go3.svg"
                        className="desktop7-vector155"
                      />
                      <img
                        alt="Vector2434"
                        src="external/vector2434-mlya.svg"
                        className="desktop7-vector156"
                      />
                      <img
                        alt="Vector2435"
                        src="external/vector2435-qaie.svg"
                        className="desktop7-vector157"
                      />
                      <img
                        alt="Vector2436"
                        src="external/vector2436-248d.svg"
                        className="desktop7-vector158"
                      />
                      <img
                        alt="Vector2437"
                        src="external/vector2437-fcw.svg"
                        className="desktop7-vector159"
                      />
                      <img
                        alt="Vector2438"
                        src="external/vector2438-jaug.svg"
                        className="desktop7-vector160"
                      />
                      <img
                        alt="Vector2439"
                        src="external/vector2439-y40s.svg"
                        className="desktop7-vector161"
                      />
                      <img
                        alt="Vector2440"
                        src="external/vector2440-k1t9.svg"
                        className="desktop7-vector162"
                      />
                      <img
                        alt="Vector2441"
                        src="external/vector2441-59x.svg"
                        className="desktop7-vector163"
                      />
                      <img
                        alt="Vector2442"
                        src="external/vector2442-1vki.svg"
                        className="desktop7-vector164"
                      />
                      <img
                        alt="Vector2443"
                        src="external/vector2443-li.svg"
                        className="desktop7-vector165"
                      />
                      <img
                        alt="Vector2444"
                        src="external/vector2444-pbl9.svg"
                        className="desktop7-vector166"
                      />
                      <img
                        alt="Vector2445"
                        src="external/vector2445-xp1j.svg"
                        className="desktop7-vector167"
                      />
                      <img
                        alt="Vector2446"
                        src="external/vector2446-vddf.svg"
                        className="desktop7-vector168"
                      />
                      <img
                        alt="Vector2447"
                        src="external/vector2447-qku8.svg"
                        className="desktop7-vector169"
                      />
                      <img
                        alt="Vector2448"
                        src="external/vector2448-ikht.svg"
                        className="desktop7-vector170"
                      />
                      <img
                        alt="Vector2449"
                        src="external/vector2449-pn9c.svg"
                        className="desktop7-vector171"
                      />
                      <img
                        alt="Vector2450"
                        src="external/vector2450-qfov.svg"
                        className="desktop7-vector172"
                      />
                      <img
                        alt="Vector2451"
                        src="external/vector2451-tiyd.svg"
                        className="desktop7-vector173"
                      />
                      <img
                        alt="Vector2452"
                        src="external/vector2452-3mrx.svg"
                        className="desktop7-vector174"
                      />
                    </div>
                    <div className="desktop7-profile2">
                      <img
                        alt="Vector2454"
                        src="external/vector2454-bvlx.svg"
                        className="desktop7-vector175"
                      />
                      <img
                        alt="Vector2455"
                        src="external/vector2455-e51.svg"
                        className="desktop7-vector176"
                      />
                      <img
                        alt="Vector2456"
                        src="external/vector2456-9wu.svg"
                        className="desktop7-vector177"
                      />
                      <img
                        alt="Vector2457"
                        src="external/vector2457-mkm.svg"
                        className="desktop7-vector178"
                      />
                      <img
                        alt="Vector2458"
                        src="external/vector2458-ygj.svg"
                        className="desktop7-vector179"
                      />
                      <img
                        alt="Vector2459"
                        src="external/vector2459-nmb.svg"
                        className="desktop7-vector180"
                      />
                      <img
                        alt="Vector2460"
                        src="external/vector2460-qry9.svg"
                        className="desktop7-vector181"
                      />
                      <img
                        alt="Vector2461"
                        src="external/vector2461-9th.svg"
                        className="desktop7-vector182"
                      />
                      <img
                        alt="Vector2462"
                        src="external/vector2462-h72o.svg"
                        className="desktop7-vector183"
                      />
                      <img
                        alt="Vector2463"
                        src="external/vector2463-ep4c.svg"
                        className="desktop7-vector184"
                      />
                      <img
                        alt="Vector2464"
                        src="external/vector2464-8eiw.svg"
                        className="desktop7-vector185"
                      />
                      <img
                        alt="Vector2465"
                        src="external/vector2465-4h9ip.svg"
                        className="desktop7-vector186"
                      />
                      <img
                        alt="Vector2466"
                        src="external/vector2466-tjya.svg"
                        className="desktop7-vector187"
                      />
                      <img
                        alt="Vector2467"
                        src="external/vector2467-6q6v.svg"
                        className="desktop7-vector188"
                      />
                      <img
                        alt="Vector2468"
                        src="external/vector2468-qa0m.svg"
                        className="desktop7-vector189"
                      />
                      <img
                        alt="Vector2469"
                        src="external/vector2469-qp2l.svg"
                        className="desktop7-vector190"
                      />
                      <img
                        alt="Vector2470"
                        src="external/vector2470-3kl.svg"
                        className="desktop7-vector191"
                      />
                      <img
                        alt="Vector2471"
                        src="external/vector2471-fti5.svg"
                        className="desktop7-vector192"
                      />
                      <img
                        alt="Vector2472"
                        src="external/vector2472-fqo5.svg"
                        className="desktop7-vector193"
                      />
                      <img
                        alt="Vector2473"
                        src="external/vector2473-3kzf.svg"
                        className="desktop7-vector194"
                      />
                      <img
                        alt="Vector2474"
                        src="external/vector2474-u9z2.svg"
                        className="desktop7-vector195"
                      />
                      <img
                        alt="Vector2475"
                        src="external/vector2475-9lgp.svg"
                        className="desktop7-vector196"
                      />
                      <img
                        alt="Vector2476"
                        src="external/vector2476-vtua.svg"
                        className="desktop7-vector197"
                      />
                      <img
                        alt="Vector2477"
                        src="external/vector2477-4jk.svg"
                        className="desktop7-vector198"
                      />
                      <img
                        alt="Vector2478"
                        src="external/vector2478-y2pd.svg"
                        className="desktop7-vector199"
                      />
                      <img
                        alt="Vector2479"
                        src="external/vector2479-bno.svg"
                        className="desktop7-vector200"
                      />
                      <img
                        alt="Vector2480"
                        src="external/vector2480-78os.svg"
                        className="desktop7-vector201"
                      />
                      <img
                        alt="Vector2481"
                        src="external/vector2481-lwb.svg"
                        className="desktop7-vector202"
                      />
                      <img
                        alt="Vector2482"
                        src="external/vector2482-5zil.svg"
                        className="desktop7-vector203"
                      />
                      <img
                        alt="Vector2483"
                        src="external/vector2483-7epn.svg"
                        className="desktop7-vector204"
                      />
                      <img
                        alt="Vector2484"
                        src="external/vector2484-ghtn.svg"
                        className="desktop7-vector205"
                      />
                      <img
                        alt="Vector2485"
                        src="external/vector2485-varw.svg"
                        className="desktop7-vector206"
                      />
                      <img
                        alt="Vector2486"
                        src="external/vector2486-qaif.svg"
                        className="desktop7-vector207"
                      />
                      <img
                        alt="Vector2487"
                        src="external/vector2487-3q88.svg"
                        className="desktop7-vector208"
                      />
                      <img
                        alt="Vector2488"
                        src="external/vector2488-t53d.svg"
                        className="desktop7-vector209"
                      />
                      <img
                        alt="Vector2489"
                        src="external/vector2489-x5a.svg"
                        className="desktop7-vector210"
                      />
                      <img
                        alt="Vector2490"
                        src="external/vector2490-vs6o.svg"
                        className="desktop7-vector211"
                      />
                      <img
                        alt="Vector2491"
                        src="external/vector2491-sa0j.svg"
                        className="desktop7-vector212"
                      />
                      <img
                        alt="Vector2492"
                        src="external/vector2492-q66.svg"
                        className="desktop7-vector213"
                      />
                      <img
                        alt="Vector2493"
                        src="external/vector2493-5w34.svg"
                        className="desktop7-vector214"
                      />
                      <img
                        alt="Vector2494"
                        src="external/vector2494-8gxs.svg"
                        className="desktop7-vector215"
                      />
                      <img
                        alt="Vector2495"
                        src="external/vector2495-pmee.svg"
                        className="desktop7-vector216"
                      />
                      <img
                        alt="Vector2496"
                        src="external/vector2496-lqza.svg"
                        className="desktop7-vector217"
                      />
                      <img
                        alt="Vector2497"
                        src="external/vector2497-ssfr.svg"
                        className="desktop7-vector218"
                      />
                      <img
                        alt="Vector2498"
                        src="external/vector2498-7lr.svg"
                        className="desktop7-vector219"
                      />
                      <img
                        alt="Vector2499"
                        src="external/vector2499-9gjl.svg"
                        className="desktop7-vector220"
                      />
                      <img
                        alt="Vector2500"
                        src="external/vector2500-rkxf.svg"
                        className="desktop7-vector221"
                      />
                      <img
                        alt="Vector2501"
                        src="external/vector2501-idyd.svg"
                        className="desktop7-vector222"
                      />
                      <img
                        alt="Vector2502"
                        src="external/vector2502-blzb.svg"
                        className="desktop7-vector223"
                      />
                      <img
                        alt="Vector2503"
                        src="external/vector2503-l8go.svg"
                        className="desktop7-vector224"
                      />
                      <img
                        alt="Vector2504"
                        src="external/vector2504-f5nh.svg"
                        className="desktop7-vector225"
                      />
                      <img
                        alt="Vector2505"
                        src="external/vector2505-8yr.svg"
                        className="desktop7-vector226"
                      />
                      <img
                        alt="Vector2506"
                        src="external/vector2506-wna8.svg"
                        className="desktop7-vector227"
                      />
                      <img
                        alt="Vector2507"
                        src="external/vector2507-x7v4.svg"
                        className="desktop7-vector228"
                      />
                      <img
                        alt="Vector2508"
                        src="external/vector2508-clp.svg"
                        className="desktop7-vector229"
                      />
                      <img
                        alt="Vector2509"
                        src="external/vector2509-mt7t.svg"
                        className="desktop7-vector230"
                      />
                      <img
                        alt="Vector2510"
                        src="external/vector2510-6ige.svg"
                        className="desktop7-vector231"
                      />
                      <img
                        alt="Vector2511"
                        src="external/vector2511-jbe.svg"
                        className="desktop7-vector232"
                      />
                    </div>
                    <div className="desktop7-profile1">
                      <img
                        alt="Vector2513"
                        src="external/vector2513-narn.svg"
                        className="desktop7-vector233"
                      />
                      <img
                        alt="Vector2514"
                        src="external/vector2514-c4db.svg"
                        className="desktop7-vector234"
                      />
                      <img
                        alt="Vector2515"
                        src="external/vector2515-ckb.svg"
                        className="desktop7-vector235"
                      />
                      <img
                        alt="Vector2516"
                        src="external/vector2516-jau8.svg"
                        className="desktop7-vector236"
                      />
                      <img
                        alt="Vector2517"
                        src="external/vector2517-wits.svg"
                        className="desktop7-vector237"
                      />
                      <img
                        alt="Vector2518"
                        src="external/vector2518-hvi.svg"
                        className="desktop7-vector238"
                      />
                      <img
                        alt="Vector2519"
                        src="external/vector2519-zf7.svg"
                        className="desktop7-vector239"
                      />
                      <img
                        alt="Vector2520"
                        src="external/vector2520-0f8y.svg"
                        className="desktop7-vector240"
                      />
                      <img
                        alt="Vector2521"
                        src="external/vector2521-870q.svg"
                        className="desktop7-vector241"
                      />
                      <img
                        alt="Vector2522"
                        src="external/vector2522-774.svg"
                        className="desktop7-vector242"
                      />
                      <img
                        alt="Vector2523"
                        src="external/vector2523-vxdr.svg"
                        className="desktop7-vector243"
                      />
                      <img
                        alt="Vector2524"
                        src="external/vector2524-igs.svg"
                        className="desktop7-vector244"
                      />
                      <img
                        alt="Vector2525"
                        src="external/vector2525-mrkk.svg"
                        className="desktop7-vector245"
                      />
                      <img
                        alt="Vector2526"
                        src="external/vector2526-ozko.svg"
                        className="desktop7-vector246"
                      />
                      <img
                        alt="Vector2527"
                        src="external/vector2527-dx58.svg"
                        className="desktop7-vector247"
                      />
                      <img
                        alt="Vector2528"
                        src="external/vector2528-l9zf.svg"
                        className="desktop7-vector248"
                      />
                      <img
                        alt="Vector2529"
                        src="external/vector2529-ot8a.svg"
                        className="desktop7-vector249"
                      />
                      <img
                        alt="Vector2530"
                        src="external/vector2530-1m18.svg"
                        className="desktop7-vector250"
                      />
                      <img
                        alt="Vector2531"
                        src="external/vector2531-afli.svg"
                        className="desktop7-vector251"
                      />
                      <img
                        alt="Vector2532"
                        src="external/vector2532-mrx9.svg"
                        className="desktop7-vector252"
                      />
                      <img
                        alt="Vector2533"
                        src="external/vector2533-ul9.svg"
                        className="desktop7-vector253"
                      />
                      <img
                        alt="Vector2534"
                        src="external/vector2534-0xxo.svg"
                        className="desktop7-vector254"
                      />
                      <img
                        alt="Vector2535"
                        src="external/vector2535-l8hm.svg"
                        className="desktop7-vector255"
                      />
                      <img
                        alt="Vector2536"
                        src="external/vector2536-eak.svg"
                        className="desktop7-vector256"
                      />
                      <img
                        alt="Vector2537"
                        src="external/vector2537-n4ad.svg"
                        className="desktop7-vector257"
                      />
                      <img
                        alt="Vector2538"
                        src="external/vector2538-lcw.svg"
                        className="desktop7-vector258"
                      />
                      <img
                        alt="Vector2539"
                        src="external/vector2539-d1tk.svg"
                        className="desktop7-vector259"
                      />
                      <img
                        alt="Vector2540"
                        src="external/vector2540-ly.svg"
                        className="desktop7-vector260"
                      />
                      <img
                        alt="Vector2541"
                        src="external/vector2541-bckp.svg"
                        className="desktop7-vector261"
                      />
                      <img
                        alt="Vector2542"
                        src="external/vector2542-frib.svg"
                        className="desktop7-vector262"
                      />
                      <img
                        alt="Vector2543"
                        src="external/vector2543-09rh.svg"
                        className="desktop7-vector263"
                      />
                      <img
                        alt="Vector2544"
                        src="external/vector2544-a7ok.svg"
                        className="desktop7-vector264"
                      />
                      <img
                        alt="Vector2545"
                        src="external/vector2545-smm.svg"
                        className="desktop7-vector265"
                      />
                      <img
                        alt="Vector2546"
                        src="external/vector2546-tqvi.svg"
                        className="desktop7-vector266"
                      />
                      <img
                        alt="Vector2547"
                        src="external/vector2547-k1ys.svg"
                        className="desktop7-vector267"
                      />
                      <img
                        alt="Vector2548"
                        src="external/vector2548-bj.svg"
                        className="desktop7-vector268"
                      />
                      <img
                        alt="Vector2549"
                        src="external/vector2549-bg3.svg"
                        className="desktop7-vector269"
                      />
                      <img
                        alt="Vector2550"
                        src="external/vector2550-hc9.svg"
                        className="desktop7-vector270"
                      />
                      <img
                        alt="Vector2551"
                        src="external/vector2551-wugg.svg"
                        className="desktop7-vector271"
                      />
                      <img
                        alt="Vector2552"
                        src="external/vector2552-rs17.svg"
                        className="desktop7-vector272"
                      />
                      <img
                        alt="Vector2553"
                        src="external/vector2553-h4a.svg"
                        className="desktop7-vector273"
                      />
                      <img
                        alt="Vector2554"
                        src="external/vector2554-5hd.svg"
                        className="desktop7-vector274"
                      />
                      <img
                        alt="Vector2555"
                        src="external/vector2555-hx58.svg"
                        className="desktop7-vector275"
                      />
                      <img
                        alt="Vector2556"
                        src="external/vector2556-6ju.svg"
                        className="desktop7-vector276"
                      />
                      <img
                        alt="Vector2557"
                        src="external/vector2557-kmh4.svg"
                        className="desktop7-vector277"
                      />
                      <img
                        alt="Vector2558"
                        src="external/vector2558-ntbr.svg"
                        className="desktop7-vector278"
                      />
                      <img
                        alt="Vector2559"
                        src="external/vector2559-rvew.svg"
                        className="desktop7-vector279"
                      />
                      <img
                        alt="Vector2560"
                        src="external/vector2560-hx5.svg"
                        className="desktop7-vector280"
                      />
                      <img
                        alt="Vector2561"
                        src="external/vector2561-upme.svg"
                        className="desktop7-vector281"
                      />
                      <img
                        alt="Vector2562"
                        src="external/vector2562-re0q.svg"
                        className="desktop7-vector282"
                      />
                      <img
                        alt="Vector2563"
                        src="external/vector2563-qs9o.svg"
                        className="desktop7-vector283"
                      />
                      <img
                        alt="Vector2564"
                        src="external/vector2564-stdd.svg"
                        className="desktop7-vector284"
                      />
                      <img
                        alt="Vector2565"
                        src="external/vector2565-wwlf.svg"
                        className="desktop7-vector285"
                      />
                      <img
                        alt="Vector2566"
                        src="external/vector2566-p8ai.svg"
                        className="desktop7-vector286"
                      />
                      <img
                        alt="Vector2567"
                        src="external/vector2567-iyam.svg"
                        className="desktop7-vector287"
                      />
                      <img
                        alt="Vector2568"
                        src="external/vector2568-jo5.svg"
                        className="desktop7-vector288"
                      />
                      <img
                        alt="Vector2569"
                        src="external/vector2569-lee.svg"
                        className="desktop7-vector289"
                      />
                      <img
                        alt="Vector2570"
                        src="external/vector2570-dgx4.svg"
                        className="desktop7-vector290"
                      />
                      <img
                        alt="Vector2571"
                        src="external/vector2571-jte8.svg"
                        className="desktop7-vector291"
                      />
                    </div>
                    <div className="desktop7-character">
                      <img
                        alt="Vector2573"
                        src="external/vector2573-9k8o.svg"
                        className="desktop7-vector292"
                      />
                      <div className="desktop7-group08">
                        <img
                          alt="Vector2575"
                          src="external/vector2575-07gd.svg"
                          className="desktop7-vector293"
                        />
                      </div>
                      <img
                        alt="Vector2576"
                        src="external/vector2576-sq6.svg"
                        className="desktop7-vector294"
                      />
                      <img
                        alt="Vector2577"
                        src="external/vector2577-bqcu.svg"
                        className="desktop7-vector295"
                      />
                      <div className="desktop7-group09">
                        <img
                          alt="Vector2579"
                          src="external/vector2579-36wk.svg"
                          className="desktop7-vector296"
                        />
                      </div>
                      <img
                        alt="Vector2580"
                        src="external/vector2580-at7k.svg"
                        className="desktop7-vector297"
                      />
                      <img
                        alt="Vector2581"
                        src="external/vector2581-5q4m.svg"
                        className="desktop7-vector298"
                      />
                      <img
                        alt="Vector2582"
                        src="external/vector2582-cxe.svg"
                        className="desktop7-vector299"
                      />
                      <img
                        alt="Vector2583"
                        src="external/vector2583-6sl.svg"
                        className="desktop7-vector300"
                      />
                      <img
                        alt="Vector2584"
                        src="external/vector2584-dpeb.svg"
                        className="desktop7-vector301"
                      />
                      <img
                        alt="Vector2585"
                        src="external/vector2585-c9lh.svg"
                        className="desktop7-vector302"
                      />
                      <img
                        alt="Vector2586"
                        src="external/vector2586-3wq.svg"
                        className="desktop7-vector303"
                      />
                      <img
                        alt="Vector2587"
                        src="external/vector2587-osnh.svg"
                        className="desktop7-vector304"
                      />
                      <img
                        alt="Vector2588"
                        src="external/vector2588-6dpe.svg"
                        className="desktop7-vector305"
                      />
                      <img
                        alt="Vector2589"
                        src="external/vector2589-7yla.svg"
                        className="desktop7-vector306"
                      />
                      <img
                        alt="Vector2590"
                        src="external/vector2590-fhak.svg"
                        className="desktop7-vector307"
                      />
                      <img
                        alt="Vector2591"
                        src="external/vector2591-oh8p.svg"
                        className="desktop7-vector308"
                      />
                      <img
                        alt="Vector2592"
                        src="external/vector2592-nkh.svg"
                        className="desktop7-vector309"
                      />
                      <img
                        alt="Vector2593"
                        src="external/vector2593-9izm.svg"
                        className="desktop7-vector310"
                      />
                      <img
                        alt="Vector2594"
                        src="external/vector2594-m4f.svg"
                        className="desktop7-vector311"
                      />
                      <img
                        alt="Vector2595"
                        src="external/vector2595-ur8u.svg"
                        className="desktop7-vector312"
                      />
                      <img
                        alt="Vector2596"
                        src="external/vector2596-ppaw.svg"
                        className="desktop7-vector313"
                      />
                      <img
                        alt="Vector2597"
                        src="external/vector2597-iwt.svg"
                        className="desktop7-vector314"
                      />
                      <img
                        alt="Vector2598"
                        src="external/vector2598-joos.svg"
                        className="desktop7-vector315"
                      />
                      <img
                        alt="Vector2599"
                        src="external/vector2599-1623.svg"
                        className="desktop7-vector316"
                      />
                      <img
                        alt="Vector2600"
                        src="external/vector2600-0lr.svg"
                        className="desktop7-vector317"
                      />
                      <img
                        alt="Vector2601"
                        src="external/vector2601-qkmv.svg"
                        className="desktop7-vector318"
                      />
                      <div className="desktop7-group10">
                        <img
                          alt="Vector2603"
                          src="external/vector2603-obqo.svg"
                          className="desktop7-vector319"
                        />
                      </div>
                      <img
                        alt="Vector2604"
                        src="external/vector2604-1c5gc.svg"
                        className="desktop7-vector320"
                      />
                      <img
                        alt="Vector2605"
                        src="external/vector2605-fgek.svg"
                        className="desktop7-vector321"
                      />
                      <img
                        alt="Vector2606"
                        src="external/vector2606-2jbg.svg"
                        className="desktop7-vector322"
                      />
                      <img
                        alt="Vector2607"
                        src="external/vector2607-2uth.svg"
                        className="desktop7-vector323"
                      />
                      <img
                        alt="Vector2608"
                        src="external/vector2608-3zjc.svg"
                        className="desktop7-vector324"
                      />
                      <img
                        alt="Vector2609"
                        src="external/vector2609-56vd.svg"
                        className="desktop7-vector325"
                      />
                      <img
                        alt="Vector2610"
                        src="external/vector2610-mprl.svg"
                        className="desktop7-vector326"
                      />
                      <img
                        alt="Vector2611"
                        src="external/vector2611-8p89.svg"
                        className="desktop7-vector327"
                      />
                      <img
                        alt="Vector2612"
                        src="external/vector2612-iss8.svg"
                        className="desktop7-vector328"
                      />
                      <div className="desktop7-group11">
                        <img
                          alt="Vector2614"
                          src="external/vector2614-r39p.svg"
                          className="desktop7-vector329"
                        />
                      </div>
                      <img
                        alt="Vector2615"
                        src="external/vector2615-0918.svg"
                        className="desktop7-vector330"
                      />
                      <img
                        alt="Vector2616"
                        src="external/vector2616-ed8m.svg"
                        className="desktop7-vector331"
                      />
                      <img
                        alt="Vector2617"
                        src="external/vector2617-24s5.svg"
                        className="desktop7-vector332"
                      />
                      <img
                        alt="Vector2618"
                        src="external/vector2618-xn3q.svg"
                        className="desktop7-vector333"
                      />
                      <div className="desktop7-group12">
                        <img
                          alt="Vector2620"
                          src="external/vector2620-8gy.svg"
                          className="desktop7-vector334"
                        />
                        <img
                          alt="Vector2621"
                          src="external/vector2621-ktfn.svg"
                          className="desktop7-vector335"
                        />
                        <img
                          alt="Vector2622"
                          src="external/vector2622-876o.svg"
                          className="desktop7-vector336"
                        />
                        <img
                          alt="Vector2623"
                          src="external/vector2623-nesc.svg"
                          className="desktop7-vector337"
                        />
                        <img
                          alt="Vector2624"
                          src="external/vector2624-5yvv.svg"
                          className="desktop7-vector338"
                        />
                        <div className="desktop7-group13">
                          <img
                            alt="Vector2626"
                            src="external/vector2626-ovwh.svg"
                            className="desktop7-vector339"
                          />
                        </div>
                        <img
                          alt="Vector2627"
                          src="external/vector2627-swc.svg"
                          className="desktop7-vector340"
                        />
                        <img
                          alt="Vector2628"
                          src="external/vector2628-uby9.svg"
                          className="desktop7-vector341"
                        />
                      </div>
                      <img
                        alt="Vector2629"
                        src="external/vector2629-lob.svg"
                        className="desktop7-vector342"
                      />
                      <img
                        alt="Vector2630"
                        src="external/vector2630-nd1d.svg"
                        className="desktop7-vector343"
                      />
                      <img
                        alt="Vector2631"
                        src="external/vector2631-vk9s.svg"
                        className="desktop7-vector344"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="desktop7-group390">
                <div className="desktop7-frame368">
                  <div className="desktop7-group3341">
                    <span className="desktop7-text232">
                      <span>Staffing</span>
                      <span>Solutions</span>
                    </span>
                    <img
                      alt="Vector392636"
                      src="external/vector392636-hhv.svg"
                      className="desktop7-vector391"
                    />
                  </div>
                  <span className="desktop7-text235">
                    <span>About</span>
                  </span>
                  <span className="desktop7-text237">
                    <span>Jobs</span>
                  </span>
                  <span className="desktop7-text239">
                    <span>Contact Us</span>
                  </span>
                  <span className="desktop7-text241">
                    <span>Terms</span>
                  </span>
                  <span className="desktop7-text243">
                    <span>Privacy Policy</span>
                  </span>
                </div>
                <div className="desktop7-group389">
                  <img
                    alt="Vector412643"
                    src="external/vector412643-klz5.svg"
                    className="desktop7-vector41"
                  />
                  <span className="desktop7-text245">
                    <span>@staffingSolutions All right reserved.</span>
                  </span>
                </div>
              </div>
              <span className="desktop7-text247">
                <span>Enter your email...</span>
              </span>
            </div>
            <footer className="desktop7-footer">
              <img
                alt="logo"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="desktop7-image"
              />
              <span className="desktop7-text249">
                © 2021 teleportHQ, All Rights Reserved.
              </span>
              <div className="desktop7-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="desktop7-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="desktop7-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="desktop7-icon4"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
    }

export default Home