import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <Box
                        sx={{
                            paddingBottom: "64px",
                            borderBottom: "1px solid #fff",
                        }}
                    >
                        <Box
                            sx={{ maxWidth: "400px", margin: "0 auto", mb: 4 }}
                        >
                            <img src="/img/TRS.svg" alt="" />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                lineHeight: "1.4",
                                fontWeight: "700",
                                color: "#fff",
                                textAlign: "center",
                                fontFamily: "Rubik",
                                maxWidth: "560px",
                                margin: "0 auto",
                            }}
                        >
                            We help business owners get their restriction-free,
                            COVID-relief rebates.
                        </Typography>
                    </Box>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        mt={4}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.875rem",
                                fontFamily: "Rubik",
                                color: "#fff",
                                fontWeight: "300",
                            }}
                        >
                            Copyright ©2022 Tax Rebate Specialists, LLC. All
                            right reserved.
                        </Typography>
                        <Stack direction={"row"} spacing={2}>
                            <Link to={"/"}>
                                <Typography
                                    sx={{
                                        fontSize: "0.875rem",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                        fontWeight: "300",
                                        "&:hover": {
                                            color: "#03a63c",
                                        },
                                    }}
                                >
                                    Privacy Policy
                                </Typography>
                            </Link>
                            <Link to={"/"}>
                                <Typography
                                    sx={{
                                        fontSize: "0.875rem",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                        fontWeight: "300",
                                        "&:hover": {
                                            color: "#03a63c",
                                        },
                                    }}
                                >
                                    Terms of Service
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default Footer;
