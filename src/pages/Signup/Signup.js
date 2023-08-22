        import React from 'react'
        import { Helmet } from "react-helmet";
        import "./register.css";
        import * as yup from "yup";
    import { useFormik } from 'formik';
    import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignUpAction } from '../../redux/actions/userAction';

        const validationSchema = yup.object({
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
        

        

        const Signup = () => {
            const dispatch = useDispatch();
            const navigate = useNavigate();

            const formik = useFormik({
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
                console.log("Form Values:", values);
                dispatch(userSignUpAction(values));
              },
            });
            
        return (
          <div className="register-container">
            <Helmet>
              <title>exported project</title>
            </Helmet>
            <div className="register-register">
              <img
                src="/external6/ellipse15162-lqm-1300w.png"
                alt="Ellipse15162"
                className="register-ellipse1"
              />
              <span className="register-text">
                <span>Register Yourself</span>
              </span>
              <span className="register-text02">
                <span>Begin your journey with us today</span>
              </span>
              <span className="register-text12"></span>

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
                  className="register-text04"
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
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder="First Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
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
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
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
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
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
                        formik.touched.password && formik.errors.password
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
                        formik.setFieldValue("cv", event.target.files[0])
                      } // Set the value of the uploaded file
                      error={formik.touched.cv && Boolean(formik.errors.cv)}
                      helperText={formik.touched.cv && formik.errors.cv}
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
                      value={formik.values.year}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.year && Boolean(formik.errors.year)}
                      helperText={formik.touched.year && formik.errors.year}
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
                      sx={{ mb: 3 }}
                      fullWidth
                      id="specialization"
                      label="Specialization"
                      name="specialization"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formik.values.specialization}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.specialization &&
                        Boolean(formik.errors.specialization)
                      }
                      helperText={
                        formik.touched.specialization &&
                        formik.errors.specialization
                      }
                      disabled={
                        formik.values.year === "first" ||
                        formik.values.year === "second" ||
                        formik.values.year === "third"
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

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: "#ed1c24" }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Box>
              </Box>
              <div className="register-animation2">
                <div className="register-group">
                  <div className="register-group1">
                    <img
                      src="/external6/vectori553-ln6p.svg"
                      alt="VectorI553"
                      className="register-vector"
                    />
                    <img
                      src="/external6/vectori553-9xeb.svg"
                      alt="VectorI553"
                      className="register-vector01"
                    />
                  </div>
                  <img
                    src="/external6/vectori553-40b4.svg"
                    alt="VectorI553"
                    className="register-vector02"
                  />
                  <img
                    src="/external6/vectori553-etlr.svg"
                    alt="VectorI553"
                    className="register-vector03"
                  />
                </div>
                <div className="register-group2">
                  <div className="register-group3">
                    <img
                      src="/external6/vectori553-hkas.svg"
                      alt="VectorI553"
                      className="register-vector04"
                    />
                    <img
                      src="/external6/vectori553-8j.svg"
                      alt="VectorI553"
                      className="register-vector05"
                    />
                  </div>
                  <img
                    src="/external6/vectori553-f17c.svg"
                    alt="VectorI553"
                    className="register-vector06"
                  />
                  <img
                    src="/external6/vectori553-ns7s.svg"
                    alt="VectorI553"
                    className="register-vector07"
                  />
                  <div className="register-group4">
                    <img
                      src="/external6/vectori553-gvmd.svg"
                      alt="VectorI553"
                      className="register-vector08"
                    />
                    <img
                      src="/external6/vectori553-ne48.svg"
                      alt="VectorI553"
                      className="register-vector09"
                    />
                    <img
                      src="/external6/vectori553-zwu.svg"
                      alt="VectorI553"
                      className="register-vector10"
                    />
                    <img
                      src="/external6/vectori553-1rb.svg"
                      alt="VectorI553"
                      className="register-vector11"
                    />
                    <img
                      src="/external6/vectori553-k1g6l.svg"
                      alt="VectorI553"
                      className="register-vector12"
                    />
                    <img
                      src="/external6/vectori553-lk02.svg"
                      alt="VectorI553"
                      className="register-vector13"
                    />
                    <img
                      src="/external6/vectori553-jfhr.svg"
                      alt="VectorI553"
                      className="register-vector14"
                    />
                    <img
                      src="/external6/vectori553-an3p.svg"
                      alt="VectorI553"
                      className="register-vector15"
                    />
                    <img
                      src="/external6/vectori553-vyl.svg"
                      alt="VectorI553"
                      className="register-vector16"
                    />
                    <img
                      src="/external6/vectori553-4eg.svg"
                      alt="VectorI553"
                      className="register-vector17"
                    />
                    <img
                      src="/external6/vectori553-nw7n.svg"
                      alt="VectorI553"
                      className="register-vector18"
                    />
                    <img
                      src="/external6/vectori553-0bkr.svg"
                      alt="VectorI553"
                      className="register-vector19"
                    />
                  </div>
                  <img
                    src="/external6/vectori553-xdd2.svg"
                    alt="VectorI553"
                    className="register-vector20"
                  />
                  <div className="register-group5">
                    <img
                      src="/external6/vectori553-b0hi.svg"
                      alt="VectorI553"
                      className="register-vector21"
                    />
                    <img
                      src="/external6/vectori553-qfck.svg"
                      alt="VectorI553"
                      className="register-vector22"
                    />
                    <img
                      src="/external6/vectori553-6pza.svg"
                      alt="VectorI553"
                      className="register-vector23"
                    />
                  </div>
                </div>
                <div className="register-group6">
                  <img
                    src="/external6/vectori553-v8t8.svg"
                    alt="VectorI553"
                    className="register-vector24"
                  />
                  <img
                    src="/external6/vectori553-315u.svg"
                    alt="VectorI553"
                    className="register-vector25"
                  />
                  <img
                    src="/external6/vectori553-9wd.svg"
                    alt="VectorI553"
                    className="register-vector26"
                  />
                  <img
                    src="/external6/vectori553-4rq.svg"
                    alt="VectorI553"
                    className="register-vector27"
                  />
                  <img
                    src="/external6/vectori553-4is.svg"
                    alt="VectorI553"
                    className="register-vector28"
                  />
                  <img
                    src="/external6/vectori553-etef.svg"
                    alt="VectorI553"
                    className="register-vector29"
                  />
                  <img
                    src="/external6/vectori553-09h1.svg"
                    alt="VectorI553"
                    className="register-vector30"
                  />
                  <img
                    src="/external6/vectori553-gl2a.svg"
                    alt="VectorI553"
                    className="register-vector31"
                  />
                  <img
                    src="/external6/vectori553-ch9k.svg"
                    alt="VectorI553"
                    className="register-vector32"
                  />
                  <img
                    src="/external6/vectori553-7sd.svg"
                    alt="VectorI553"
                    className="register-vector33"
                  />
                  <img
                    src="/external6/vectori553-5awh.svg"
                    alt="VectorI553"
                    className="register-vector34"
                  />
                  <img
                    src="/external6/vectori553-cs1i.svg"
                    alt="VectorI553"
                    className="register-vector35"
                  />
                  <img
                    src="/external6/vectori553-3fje.svg"
                    alt="VectorI553"
                    className="register-vector36"
                  />
                  <img
                    src="/external6/vectori553-2f5.svg"
                    alt="VectorI553"
                    className="register-vector37"
                  />
                  <img
                    src="/external6/vectori553-r2qa.svg"
                    alt="VectorI553"
                    className="register-vector38"
                  />
                  <img
                    src="/external6/vectori553-1g2.svg"
                    alt="VectorI553"
                    className="register-vector39"
                  />
                  <img
                    src="/external6/vectori553-615.svg"
                    alt="VectorI553"
                    className="register-vector40"
                  />
                  <img
                    src="/external6/vectori553-v2xr.svg"
                    alt="VectorI553"
                    className="register-vector41"
                  />
                  <img
                    src="/external6/vectori553-v4ln.svg"
                    alt="VectorI553"
                    className="register-vector42"
                  />
                  <img
                    src="/external6/vectori553-w16p.svg"
                    alt="VectorI553"
                    className="register-vector43"
                  />
                  <img
                    src="/external6/vectori553-743.svg"
                    alt="VectorI553"
                    className="register-vector44"
                  />
                  <img
                    src="/external6/vectori553-drcs.svg"
                    alt="VectorI553"
                    className="register-vector45"
                  />
                  <img
                    src="/external6/vectori553-8ro.svg"
                    alt="VectorI553"
                    className="register-vector46"
                  />
                  <img
                    src="/external6/vectori553-cczk.svg"
                    alt="VectorI553"
                    className="register-vector47"
                  />
                  <img
                    src="/external6/vectori553-tz6m.svg"
                    alt="VectorI553"
                    className="register-vector48"
                  />
                  <img
                    src="/external6/vectori553-9jal.svg"
                    alt="VectorI553"
                    className="register-vector49"
                  />
                  <img
                    src="/external6/vectori553-qiya.svg"
                    alt="VectorI553"
                    className="register-vector50"
                  />
                  <img
                    src="/external6/vectori553-wn15.svg"
                    alt="VectorI553"
                    className="register-vector51"
                  />
                  <img
                    src="/external6/vectori553-swkm.svg"
                    alt="VectorI553"
                    className="register-vector52"
                  />
                  <img
                    src="/external6/vectori553-fs8r.svg"
                    alt="VectorI553"
                    className="register-vector53"
                  />
                  <img
                    src="/external6/vectori553-kj58.svg"
                    alt="VectorI553"
                    className="register-vector54"
                  />
                  <img
                    src="/external6/vectori553-gaws.svg"
                    alt="VectorI553"
                    className="register-vector55"
                  />
                  <img
                    src="/external6/vectori553-4t1q.svg"
                    alt="VectorI553"
                    className="register-vector56"
                  />
                  <img
                    src="/external6/vectori553-wnrl.svg"
                    alt="VectorI553"
                    className="register-vector57"
                  />
                  <img
                    src="/external6/vectori553-90ts.svg"
                    alt="VectorI553"
                    className="register-vector58"
                  />
                  <img
                    src="/external6/vectori553-n7m5.svg"
                    alt="VectorI553"
                    className="register-vector59"
                  />
                  <img
                    src="/external6/vectori553-8bz.svg"
                    alt="VectorI553"
                    className="register-vector60"
                  />
                  <img
                    src="/external6/vectori553-y6ro2.svg"
                    alt="VectorI553"
                    className="register-vector61"
                  />
                  <img
                    src="/external6/vectori553-ener.svg"
                    alt="VectorI553"
                    className="register-vector62"
                  />
                  <img
                    src="/external6/vectori553-awyi.svg"
                    alt="VectorI553"
                    className="register-vector63"
                  />
                  <img
                    src="/external6/vectori553-x9b.svg"
                    alt="VectorI553"
                    className="register-vector64"
                  />
                  <img
                    src="/external6/vectori553-lvo.svg"
                    alt="VectorI553"
                    className="register-vector65"
                  />
                  <img
                    src="/external6/vectori553-hd3.svg"
                    alt="VectorI553"
                    className="register-vector66"
                  />
                  <img
                    src="/external6/vectori553-y23b.svg"
                    alt="VectorI553"
                    className="register-vector67"
                  />
                  <img
                    src="/external6/vectori553-asfd.svg"
                    alt="VectorI553"
                    className="register-vector68"
                  />
                  <img
                    src="/external6/vectori553-9fj.svg"
                    alt="VectorI553"
                    className="register-vector69"
                  />
                  <img
                    src="/external6/vectori553-v5dv.svg"
                    alt="VectorI553"
                    className="register-vector70"
                  />
                  <img
                    src="/external6/vectori553-pk3m.svg"
                    alt="VectorI553"
                    className="register-vector71"
                  />
                  <img
                    src="/external6/vectori553-zvr.svg"
                    alt="VectorI553"
                    className="register-vector72"
                  />
                  <img
                    src="/external6/vectori553-g43.svg"
                    alt="VectorI553"
                    className="register-vector73"
                  />
                  <img
                    src="/external6/vectori553-wk0b.svg"
                    alt="VectorI553"
                    className="register-vector74"
                  />
                  <img
                    src="/external6/vectori553-nn8o.svg"
                    alt="VectorI553"
                    className="register-vector75"
                  />
                  <img
                    src="/external6/vectori553-fups.svg"
                    alt="VectorI553"
                    className="register-vector76"
                  />
                  <img
                    src="/external6/vectori553-cuc7.svg"
                    alt="VectorI553"
                    className="register-vector77"
                  />
                  <img
                    src="/external6/vectori553-w4jw.svg"
                    alt="VectorI553"
                    className="register-vector78"
                  />
                  <img
                    src="/external6/vectori553-6doe.svg"
                    alt="VectorI553"
                    className="register-vector79"
                  />
                  <img
                    src="/external6/vectori553-w35u.svg"
                    alt="VectorI553"
                    className="register-vector80"
                  />
                </div>
              </div>
              {/* <span className="register-text15">
                <span>Already signed up ?</span>
              </span>
              <span className="register-text17">
                <Link to="/login">
                  <span>Click Here</span>
                </Link>
              </span> */}
            </div>
          </div>
        );
        }

        export default Signup