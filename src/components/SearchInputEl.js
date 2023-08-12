import React from "react";
import { Box, Button, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

    const validationSchema = yup.object().shape({
    search: yup.string().required("Search field is required"),
    });

    const SearchInputEl = () => {
    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const { search } = values;
        if (search.trim()) {
        navigate(`/search/${search}`);
        } else {
        navigate("/");
        }
        actions.resetForm();
    };

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
        search: "",
        },

        validationSchema: validationSchema, // Here you can use it since it's defined above
        onSubmit,
    });

    return (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box sx={{ width: "450%", display: "flex", justifyContent: "center" }}>
            <InputBase
                sx={{ bgcolor: "white", padding: "10px" }}
                fullWidth={true}
                id="search"
                name="search"
                label="search"
                placeholder="ex: developer, front end"
                value={values.search}
                onChange={handleChange}
                error={touched.search && Boolean(errors.search)}
            />

            <Button
                sx={{ backgroundColor: "#ed1c24" }}
                variant="contained"
                type="submit"
                disabled={isSubmitting}
            >
                Search
            </Button>
            </Box>
            <Box component="span" sx={{ color: "orange" }}>
            {touched.search && errors.search}
            </Box>
        </form>
    );
    };

export default SearchInputEl;
