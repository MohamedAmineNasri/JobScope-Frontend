        import React, { useEffect } from 'react'
        import { Helmet } from 'react-helmet'
        import './sign-in.css'
        import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
        import TextField from "@mui/material/TextField";
        import Button from "@mui/material/Button";
        import { useFormik } from "formik";
        import * as yup from "yup";
    import { useDispatch, useSelector } from 'react-redux';
    import { Link, useNavigate } from "react-router-dom";
    import { userSignInAction } from '../../redux/actions/userAction';
    import { Avatar, Box } from '@mui/material';
    import { USER_SIGNIN_SUCCESS } from '../../redux/constants/userConstant';


    const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    });

    const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.signIn);

        useEffect(() => {
        if (isAuthenticated) {
            const user = JSON.parse(localStorage.getItem("userInfo"));
            if (user && user.role === "admin") {
            navigate("/AdminDash");
            } else if (user && user.role === "company") {
            navigate("/CompanyHomeDash");
            } else {
            navigate("/UserHomeDash");
            }
        }
        }, [isAuthenticated, navigate]);


    const handleSubmit = async (values, actions) => {
        const result = await dispatch(userSignInAction(values));
        if (result.success) {
        localStorage.setItem(USER_SIGNIN_SUCCESS, JSON.stringify(result.user));
        }
        actions.resetForm();
    };

    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
        //  alert(JSON.stringify(values, null, 2));
        dispatch(userSignInAction(values));
        actions.resetForm();
        },
    });

    return (
        <div className="sign-in-container">
        <Helmet>
            <title>exported project</title>
        </Helmet>
        <div className="sign-in-sign-in">
            <img
            src="/external3/ellipse113-3og-1300w.png"
            alt="Ellipse113"
            className="sign-in-ellipse1"
            />
            <span className="sign-in-text">
            <span>Welcome Back</span>
            </span>
            <span className="sign-in-text02">
            <span>Sign in to continue your progress</span>
            </span>
            {/* <span className="sign-in-text04">Email </span>
                <span className="sign-in-text05">
                <span>Password</span>
                </span> */}
            <Box
            sx={{
                height: "81vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <Box
                onSubmit={formik.handleSubmit}
                component="form"
                className="sign-in-text04"
            >
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "300%",
                }}
                >
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
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <br />
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
                    formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={formik.touched.password && formik.errors.password}
                />
                <br />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{ backgroundColor: "#ed1c24" }}
                >
                    Log In
                </Button>
                </Box>
            </Box>
            </Box>
            {/* <span className="sign-in-text07">
                <span>Remember me</span>
                </span> */}
            <span className="sign-in-text07">
            <span>Don’t have an account?</span>
            </span>
            {/* <span className="sign-in-text11">Register Here As A Company</span> */}
            <Link to="/signupcompany" className="sign-in-text11">
                Register Here As A Company
            </Link>
            {/* <span className="sign-in-text12">
                <span>Forget password?</span>
                </span> */}
            {/* <img
                src="/external3/rectangle51171-adru-200h.png"
                alt="Rectangle51171"
                className="sign-in-rectangle5"
                />
                <img
                src="/external3/rectangle61173-yslc-200h.png"
                alt="Rectangle61173"
                className="sign-in-rectangle6"
                /> */}
            {/* <img
                src="/external3/rectangle71174-eqnc-200h.png"
                alt="Rectangle71174"
                className="sign-in-rectangle7"
                /> */}
            <div className="sign-in-animation">
            <div className="sign-in-group">
                <img src alt="VectorI114" className="sign-in-vector" />
                <img src alt="VectorI114" className="sign-in-vector001" />
            </div>
            <div className="sign-in-group01">
                <div className="sign-in-group02">
                <img
                    src="/external3/vectori114-heca.svg"
                    alt="VectorI114"
                    className="sign-in-vector002"
                />
                <div className="sign-in-group03">
                    <img
                    src="/external3/vectori114-gyrm.svg"
                    alt="VectorI114"
                    className="sign-in-vector003"
                    />
                    <div className="sign-in-group04">
                    <img
                        src="/external3/vectori114-rjan.svg"
                        alt="VectorI114"
                        className="sign-in-vector004"
                    />
                    <img
                        src="/external3/vectori114-oind.svg"
                        alt="VectorI114"
                        className="sign-in-vector005"
                    />
                    </div>
                </div>
                </div>
            </div>
            <div className="sign-in-group05">
                <img
                src="/external3/vectori114-qz5dn.svg"
                alt="VectorI114"
                className="sign-in-vector006"
                />
                <div className="sign-in-group06">
                <img
                    src="/external3/vectori114-845m.svg"
                    alt="VectorI114"
                    className="sign-in-vector007"
                />
                <img
                    src="/external3/vectori114-vdal.svg"
                    alt="VectorI114"
                    className="sign-in-vector008"
                />
                </div>
            </div>
            <div className="sign-in-group07">
                <div className="sign-in-group08">
                <img
                    src="/external3/vectori114-dk5.svg"
                    alt="VectorI114"
                    className="sign-in-vector009"
                />
                </div>
                <div className="sign-in-group09">
                <div className="sign-in-group10">
                    <img
                    src="/external3/vectori114-7lzs.svg"
                    alt="VectorI114"
                    className="sign-in-vector010"
                    />
                    <img
                    src="/external3/vectori114-zpwr.svg"
                    alt="VectorI114"
                    className="sign-in-vector011"
                    />
                    <img
                    src="/external3/vectori114-o4y.svg"
                    alt="VectorI114"
                    className="sign-in-vector012"
                    />
                    <img
                    src="/external3/vectori114-ss2v.svg"
                    alt="VectorI114"
                    className="sign-in-vector013"
                    />
                    <img
                    src="/external3/vectori114-pqc.svg"
                    alt="VectorI114"
                    className="sign-in-vector014"
                    />
                    <img
                    src="/external3/vectori114-pe8u.svg"
                    alt="VectorI114"
                    className="sign-in-vector015"
                    />
                </div>
                <div className="sign-in-group11">
                    <div className="sign-in-group12">
                    <img
                        src="/external3/vectori114-5n6.svg"
                        alt="VectorI114"
                        className="sign-in-vector016"
                    />
                    <img
                        src="/external3/vectori114-kpj1t.svg"
                        alt="VectorI114"
                        className="sign-in-vector017"
                    />
                    <img
                        src="/external3/vectori114-o2he.svg"
                        alt="VectorI114"
                        className="sign-in-vector018"
                    />
                    </div>
                    <div className="sign-in-group13">
                    <img
                        src="/external3/vectori114-5vuo.svg"
                        alt="VectorI114"
                        className="sign-in-vector019"
                    />
                    <img
                        src="/external3/vectori114-yzq7.svg"
                        alt="VectorI114"
                        className="sign-in-vector020"
                    />
                    <img
                        src="/external3/vectori114-yk74.svg"
                        alt="VectorI114"
                        className="sign-in-vector021"
                    />
                    <img
                        src="/external3/vectori114-b7eg.svg"
                        alt="VectorI114"
                        className="sign-in-vector022"
                    />
                    </div>
                    <div className="sign-in-group14">
                    <div className="sign-in-group15">
                        <img
                        src="/external3/vectori114-ri7d.svg"
                        alt="VectorI114"
                        className="sign-in-vector023"
                        />
                        <img
                        src="/external3/vectori114-mb9.svg"
                        alt="VectorI114"
                        className="sign-in-vector024"
                        />
                        <img
                        src="/external3/vectori114-9ynb.svg"
                        alt="VectorI114"
                        className="sign-in-vector025"
                        />
                        <img
                        src="/external3/vectori114-249m.svg"
                        alt="VectorI114"
                        className="sign-in-vector026"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-inuk.svg"
                        alt="VectorI114"
                        className="sign-in-vector027"
                    />
                    <img
                        src="/external3/vectori114-zol4.svg"
                        alt="VectorI114"
                        className="sign-in-vector028"
                    />
                    <img
                        src="/external3/vectori114-0e7.svg"
                        alt="VectorI114"
                        className="sign-in-vector029"
                    />
                    </div>
                    <div className="sign-in-group16">
                    <div className="sign-in-group17">
                        <img
                        src="/external3/vectori114-qa12.svg"
                        alt="VectorI114"
                        className="sign-in-vector030"
                        />
                        <img
                        src="/external3/vectori114-8ko4.svg"
                        alt="VectorI114"
                        className="sign-in-vector031"
                        />
                        <img
                        src="/external3/vectori114-i9a.svg"
                        alt="VectorI114"
                        className="sign-in-vector032"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-ejj4.svg"
                        alt="VectorI114"
                        className="sign-in-vector033"
                    />
                    <div className="sign-in-group18">
                        <img
                        src="/external3/vectori114-r11.svg"
                        alt="VectorI114"
                        className="sign-in-vector034"
                        />
                        <img
                        src="/external3/vectori114-rwwf.svg"
                        alt="VectorI114"
                        className="sign-in-vector035"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-hoyw.svg"
                        alt="VectorI114"
                        className="sign-in-vector036"
                    />
                    </div>
                    <div className="sign-in-group19">
                    <div className="sign-in-group20">
                        <div className="sign-in-group21">
                        <img
                            src="/external3/vectori114-1tc5.svg"
                            alt="VectorI114"
                            className="sign-in-vector037"
                        />
                        <img
                            src="/external3/vectori114-0n7r.svg"
                            alt="VectorI114"
                            className="sign-in-vector038"
                        />
                        <img
                            src="/external3/vectori114-tiu.svg"
                            alt="VectorI114"
                            className="sign-in-vector039"
                        />
                        <img
                            src="/external3/vectori114-r4zk.svg"
                            alt="VectorI114"
                            className="sign-in-vector040"
                        />
                        <img
                            src="/external3/vectori114-ljeh.svg"
                            alt="VectorI114"
                            className="sign-in-vector041"
                        />
                        <img
                            src="/external3/vectori114-c7i.svg"
                            alt="VectorI114"
                            className="sign-in-vector042"
                        />
                        <img
                            src="/external3/vectori114-jyzi.svg"
                            alt="VectorI114"
                            className="sign-in-vector043"
                        />
                        <img
                            src="/external3/vectori114-8fql.svg"
                            alt="VectorI114"
                            className="sign-in-vector044"
                        />
                        <img
                            src="/external3/vectori114-cp6i.svg"
                            alt="VectorI114"
                            className="sign-in-vector045"
                        />
                        <img
                            src="/external3/vectori114-zf6o.svg"
                            alt="VectorI114"
                            className="sign-in-vector046"
                        />
                        </div>
                        <img
                        src="/external3/vectori114-xrub.svg"
                        alt="VectorI114"
                        className="sign-in-vector047"
                        />
                    </div>
                    <div className="sign-in-group22">
                        <div className="sign-in-group23">
                        <img
                            src="/external3/vectori114-az1.svg"
                            alt="VectorI114"
                            className="sign-in-vector048"
                        />
                        <img
                            src="/external3/vectori114-cio.svg"
                            alt="VectorI114"
                            className="sign-in-vector049"
                        />
                        <div className="sign-in-group24">
                            <img
                            src="/external3/vectori114-902d.svg"
                            alt="VectorI114"
                            className="sign-in-vector050"
                            />
                            <img
                            src="/external3/vectori114-ural.svg"
                            alt="VectorI114"
                            className="sign-in-vector051"
                            />
                        </div>
                        <img
                            src="/external3/vectori114-5glh.svg"
                            alt="VectorI114"
                            className="sign-in-vector052"
                        />
                        <img
                            src="/external3/vectori114-d7zf.svg"
                            alt="VectorI114"
                            className="sign-in-vector053"
                        />
                        <img
                            src="/external3/vectori114-indo.svg"
                            alt="VectorI114"
                            className="sign-in-vector054"
                        />
                        <img
                            src="/external3/vectori114-1fl.svg"
                            alt="VectorI114"
                            className="sign-in-vector055"
                        />
                        <img
                            src="/external3/vectori114-iu5.svg"
                            alt="VectorI114"
                            className="sign-in-vector056"
                        />
                        <img
                            src="/external3/vectori114-tcp9.svg"
                            alt="VectorI114"
                            className="sign-in-vector057"
                        />
                        <img
                            src="/external3/vectori114-888.svg"
                            alt="VectorI114"
                            className="sign-in-vector058"
                        />
                        <img
                            src="/external3/vectori114-t7pw.svg"
                            alt="VectorI114"
                            className="sign-in-vector059"
                        />
                        <img
                            src="/external3/vectori114-graj.svg"
                            alt="VectorI114"
                            className="sign-in-vector060"
                        />
                        <img
                            src="/external3/vectori114-z8td.svg"
                            alt="VectorI114"
                            className="sign-in-vector061"
                        />
                        <img
                            src="/external3/vectori114-6hka.svg"
                            alt="VectorI114"
                            className="sign-in-vector062"
                        />
                        <img
                            src="/external3/vectori114-cpys.svg"
                            alt="VectorI114"
                            className="sign-in-vector063"
                        />
                        <img
                            src="/external3/vectori114-zkri.svg"
                            alt="VectorI114"
                            className="sign-in-vector064"
                        />
                        <img
                            src="/external3/vectori114-l63w.svg"
                            alt="VectorI114"
                            className="sign-in-vector065"
                        />
                        <img
                            src="/external3/vectori114-n7f3.svg"
                            alt="VectorI114"
                            className="sign-in-vector066"
                        />
                        </div>
                        <div className="sign-in-group25">
                        <div className="sign-in-group26">
                            <div className="sign-in-group27">
                            <img
                                src="/external3/vectori114-yyhe.svg"
                                alt="VectorI114"
                                className="sign-in-vector067"
                            />
                            </div>
                            <div className="sign-in-group28">
                            <img
                                src="/external3/vectori114-5toe.svg"
                                alt="VectorI114"
                                className="sign-in-vector068"
                            />
                            </div>
                            <img
                            src="/external3/vectori114-webw.svg"
                            alt="VectorI114"
                            className="sign-in-vector069"
                            />
                        </div>
                        <img
                            src="/external3/vectori114-jyj6.svg"
                            alt="VectorI114"
                            className="sign-in-vector070"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="sign-in-group29">
                    <img
                        src="/external3/vectori114-rdsx.svg"
                        alt="VectorI114"
                        className="sign-in-vector071"
                    />
                    <img
                        src="/external3/vectori114-vt1m.svg"
                        alt="VectorI114"
                        className="sign-in-vector072"
                    />
                    <img
                        src="/external3/vectori114-fbkg.svg"
                        alt="VectorI114"
                        className="sign-in-vector073"
                    />
                    </div>
                    <div className="sign-in-group30">
                    <img
                        src="/external3/vectori114-39mo.svg"
                        alt="VectorI114"
                        className="sign-in-vector074"
                    />
                    <img
                        src="/external3/vectori114-cmx8.svg"
                        alt="VectorI114"
                        className="sign-in-vector075"
                    />
                    <img
                        src="/external3/vectori114-92x.svg"
                        alt="VectorI114"
                        className="sign-in-vector076"
                    />
                    <div className="sign-in-group31">
                        <img
                        src="/external3/vectori114-ttqn.svg"
                        alt="VectorI114"
                        className="sign-in-vector077"
                        />
                        <div className="sign-in-group32">
                        <img
                            src="/external3/vectori114-bragl.svg"
                            alt="VectorI114"
                            className="sign-in-vector078"
                        />
                        <img
                            src="/external3/vectori114-cle8.svg"
                            alt="VectorI114"
                            className="sign-in-vector079"
                        />
                        </div>
                        <img
                        src="/external3/vectori114-pg34.svg"
                        alt="VectorI114"
                        className="sign-in-vector080"
                        />
                    </div>
                    <div className="sign-in-group33">
                        <img
                        src="/external3/vectori114-nxy.svg"
                        alt="VectorI114"
                        className="sign-in-vector081"
                        />
                        <img
                        src="/external3/vectori114-gt44.svg"
                        alt="VectorI114"
                        className="sign-in-vector082"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-rz6.svg"
                        alt="VectorI114"
                        className="sign-in-vector083"
                    />
                    </div>
                    <img
                    src="/external3/vectori114-bhjd.svg"
                    alt="VectorI114"
                    className="sign-in-vector084"
                    />
                    <img
                    src="/external3/vectori114-a1nc.svg"
                    alt="VectorI114"
                    className="sign-in-vector085"
                    />
                    <img
                    src="/external3/vectori114-6l0n.svg"
                    alt="VectorI114"
                    className="sign-in-vector086"
                    />
                    <div className="sign-in-group34">
                    <div className="sign-in-group35">
                        <img
                        src="/external3/vectori114-955e.svg"
                        alt="VectorI114"
                        className="sign-in-vector087"
                        />
                        <img
                        src="/external3/vectori114-05is.svg"
                        alt="VectorI114"
                        className="sign-in-vector088"
                        />
                        <img
                        src="/external3/vectori114-4s5.svg"
                        alt="VectorI114"
                        className="sign-in-vector089"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-jzte.svg"
                        alt="VectorI114"
                        className="sign-in-vector090"
                    />
                    <div className="sign-in-group36">
                        <img
                        src="/external3/vectori114-msy.svg"
                        alt="VectorI114"
                        className="sign-in-vector091"
                        />
                        <img
                        src="/external3/vectori114-lgp2.svg"
                        alt="VectorI114"
                        className="sign-in-vector092"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-tcr.svg"
                        alt="VectorI114"
                        className="sign-in-vector093"
                    />
                    </div>
                </div>
                </div>
                <div className="sign-in-group37">
                <div className="sign-in-group38">
                    <img
                    src="/external3/vectori114-61tm.svg"
                    alt="VectorI114"
                    className="sign-in-vector094"
                    />
                    <img
                    src="/external3/vectori114-sp7.svg"
                    alt="VectorI114"
                    className="sign-in-vector095"
                    />
                    <img
                    src="/external3/vectori114-hf2.svg"
                    alt="VectorI114"
                    className="sign-in-vector096"
                    />
                </div>
                <div className="sign-in-group39">
                    <img
                    src="/external3/vectori114-5dvh.svg"
                    alt="VectorI114"
                    className="sign-in-vector097"
                    />
                    <img
                    src="/external3/vectori114-46dr.svg"
                    alt="VectorI114"
                    className="sign-in-vector098"
                    />
                    <img
                    src="/external3/vectori114-24p9.svg"
                    alt="VectorI114"
                    className="sign-in-vector099"
                    />
                    <div className="sign-in-group40">
                    <div className="sign-in-group41">
                        <img
                        src="/external3/vectori114-3jwl.svg"
                        alt="VectorI114"
                        className="sign-in-vector100"
                        />
                        <img
                        src="/external3/vectori114-7efe.svg"
                        alt="VectorI114"
                        className="sign-in-vector101"
                        />
                    </div>
                    <div className="sign-in-group42">
                        <img
                        src="/external3/vectori114-ld2m.svg"
                        alt="VectorI114"
                        className="sign-in-vector102"
                        />
                        <img
                        src="/external3/vectori114-shhlh.svg"
                        alt="VectorI114"
                        className="sign-in-vector103"
                        />
                    </div>
                    <img
                        src="/external3/vectori114-aa4.svg"
                        alt="VectorI114"
                        className="sign-in-vector104"
                    />
                    </div>
                    <img
                    src="/external3/vectori114-s9v7.svg"
                    alt="VectorI114"
                    className="sign-in-vector105"
                    />
                    <img
                    src="/external3/vectori114-o5cl.svg"
                    alt="VectorI114"
                    className="sign-in-vector106"
                    />
                    <img
                    src="/external3/vectori114-xylu.svg"
                    alt="VectorI114"
                    className="sign-in-vector107"
                    />
                    <img
                    src="/external3/vectori114-eau.svg"
                    alt="VectorI114"
                    className="sign-in-vector108"
                    />
                    <img
                    src="/external3/vectori114-x1jr.svg"
                    alt="VectorI114"
                    className="sign-in-vector109"
                    />
                    <img
                    src="/external3/vectori114-bf8s.svg"
                    alt="VectorI114"
                    className="sign-in-vector110"
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="sign-in-signin1">
            {/* <img
                    src="/external3/rectangle12i534-816r-200h.png"
                    alt="Rectangle12I534"
                    className="sign-in-rectangle12"
                /> */}
            {/* <span className="sign-in-text14">
                    <span>sign in</span>
                </span> */}
            </div>
                        <Link to="/signup" className="sign-in-text16">
                    Register As A Job Seeker
                        </Link>
        </div>
        </div>
    );
    };

        export default Login;
