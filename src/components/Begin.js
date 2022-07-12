import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function Begin() {
    return (
        <>
            <div className="Begin">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
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
                                Begin to qualify!
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
                                Fill out this brief pre-qualification form to
                                see if you qualify and get an estimate of your
                                potential Employee Retention Credit (ERC)
                                rebate.
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                label="Business name*"
                                variant="outlined"
                                fullWidth
                                color="success"
                                sx={{
                                    mb: 3,
                                }}
                            />
                            <Stack
                                direction={"row"}
                                spacing={2}
                                sx={{
                                    mb: 3,
                                }}
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="First name*"
                                    variant="outlined"
                                    fullWidth
                                    color="success"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Last name*"
                                    variant="outlined"
                                    fullWidth
                                    color="success"
                                />
                            </Stack>
                            <TextField
                                id="outlined-basic"
                                label="Job title*"
                                variant="outlined"
                                fullWidth
                                color="success"
                                sx={{
                                    mb: 3,
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Mobile phone*"
                                variant="outlined"
                                fullWidth
                                color="success"
                                sx={{
                                    mb: 3,
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email*"
                                variant="outlined"
                                fullWidth
                                color="success"
                                sx={{
                                    mb: 3,
                                }}
                            />
                            <h6>
                                I used a new type of input fields , So you if
                                you like it I will compelete this section
                            </h6>
                            <h6>
                                If you don't like I will make as it was in the
                                older project
                            </h6>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "#fff",
                                    textTransform: "unset",
                                    backgroundColor: "#03A63C !important",
                                    fontFamily: "Rubik",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    padding: "0.7rem 1.5rem",

                                    borderRadius: "0.5rem",
                                }}
                            >
                                See if I qualify!
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Begin;
