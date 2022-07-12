import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function FAQ() {
    return (
        <>
            <div className="FAQ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {" "}
                            <Typography
                                sx={{
                                    fontFamily: "Rubik",
                                    fontSize: "3rem",
                                    color: "#414141",
                                    fontWeight: "700",
                                    marginBottom: "24px",
                                    lineHeight: "1.2",
                                }}
                            >
                                Have questions?
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.125rem",
                                    marginBottom: "24px",
                                    color: "#414141",
                                    fontWeight: "300",
                                    fontFamily: "Rubik",
                                }}
                            >
                                Try some of these frequently asked questions.
                            </Typography>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{ marginTop: "24px" }}
                            >
                                {" "}
                                <Button
                                    variant="contained"
                                    sx={{
                                        color: "#fff",
                                        textTransform: "unset",
                                        backgroundColor: "#03A63C !important",
                                        fontFamily: "Rubik",
                                        fontSize: "1rem",
                                        fontWeight: "400",
                                        padding: "0.7rem 1.5rem",

                                        borderRadius: "0.5rem",
                                    }}
                                >
                                    Begin qualifying
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#000",
                                        textTransform: "unset",
                                        borderColor: "#000",
                                        // backgroundColor: "#03A63C !important",
                                        fontFamily: "Rubik",
                                        fontSize: "1rem",
                                        fontWeight: "400",
                                        padding: "0.7rem 1.5rem",

                                        borderRadius: "0.5rem",
                                        "&:hover": {
                                            borderColor: "#000",
                                        },
                                    }}
                                >
                                    Have questions?{" "}
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;
