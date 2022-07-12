import { Button, Typography, Stack, Box } from "@mui/material";
import React from "react";

function ActNow() {
    return (
        <>
            <div className="ActNow">
                <div className="container">
                    <Box sx={{ maxWidth: "560px" }}>
                        {" "}
                        <Typography
                            sx={{
                                fontFamily: "Rubik",
                                fontSize: "3rem",
                                color: "#fff",
                                fontWeight: "700",
                                marginBottom: "24px",
                                lineHeight: "1.2",
                            }}
                        >
                            Act now! These funds won't last forever.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.125rem",
                                marginBottom: "24px",
                                color: "#fff",
                                fontWeight: "300",
                                fontFamily: "Rubik",
                            }}
                        >
                            Take advantage of the Employee Retention Credit
                            (ERC) before it runs out of money. Let's go after
                            your ERC rebate today.
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
                                    color: "#fff",
                                    textTransform: "unset",
                                    borderColor: "#fff",
                                    // backgroundColor: "#03A63C !important",
                                    fontFamily: "Rubik",
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                    padding: "0.7rem 1.5rem",

                                    borderRadius: "0.5rem",
                                    "&:hover": {
                                        borderColor: "#fff",
                                    },
                                }}
                            >
                                Watch Video{" "}
                            </Button>
                        </Stack>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default ActNow;
