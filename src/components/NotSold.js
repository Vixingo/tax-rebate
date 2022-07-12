import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
function NotSold() {
    return (
        <>
            <div className="NotSold">
                <div className="container">
                    <Typography
                        sx={{
                            fontFamily: "Rubik",
                            fontSize: "3rem",
                            color: "#ffffff",
                            fontWeight: "700",
                            marginBottom: "24px",
                        }}
                    >
                        Still not sold?
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Rubik",
                            fontSize: "1.125rem",
                            color: "#ffffff",
                            marginBottom: "80px",
                        }}
                    >
                        Check out these happy business owner reviews!
                    </Typography>
                    <div className="row">
                        <div className="col-md-4">
                            <Stack direction={"row"}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Stack>
                            <Typography
                                sx={{
                                    fontSize: "1.25rem",
                                    lineHeight: "1.4",
                                    fontWeight: "700",
                                    margin: "32px 0",
                                    fontFamily: "Rubik",
                                    color: "#fff",
                                }}
                            >
                                "My accountant told me we didn't qualify, but
                                Tax Rebate Solutions helped our company get the
                                ERC refund for 8 of our 10 employees."
                            </Typography>
                            <div style={{ margin: "16px 0" }}>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                    }}
                                >
                                    Mitchell W.
                                </Typography>
                                <Typography
                                    sx={{
                                        marginBottom: "1rem",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                    }}
                                >
                                    Staten Island
                                </Typography>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Stack direction={"row"}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Stack>
                            <Typography
                                sx={{
                                    fontSize: "1.25rem",
                                    lineHeight: "1.4",
                                    fontWeight: "700",
                                    margin: "32px 0",
                                    fontFamily: "Rubik",
                                    color: "#fff",
                                }}
                            >
                                "Our business received over $100,000 in Employee
                                Retention Credit! Tax Rebate Solutions made the
                                process simple for me."
                            </Typography>
                            <div style={{ margin: "16px 0" }}>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                    }}
                                >
                                    William F.
                                </Typography>
                                <Typography
                                    sx={{
                                        marginBottom: "1rem",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                    }}
                                >
                                    Brooklyn
                                </Typography>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Stack direction={"row"}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Stack>
                            <Typography
                                sx={{
                                    fontSize: "1.25rem",
                                    lineHeight: "1.4",
                                    fontWeight: "700",
                                    margin: "32px 0",
                                    fontFamily: "Rubik",
                                    color: "#fff",
                                }}
                            >
                                "TRS knows how to simplify the process and
                                review applications so businesses get the
                                maximum funds possible. We received $627,500 in
                                ERC!"
                            </Typography>
                            <div style={{ margin: "16px 0" }}>
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                    }}
                                >
                                    Mary T.
                                </Typography>
                                <Typography
                                    sx={{
                                        marginBottom: "1rem",
                                        fontFamily: "Rubik",
                                        color: "#fff",
                                    }}
                                >
                                    Philadelphia
                                </Typography>
                            </div>
                        </div>
                    </div>
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
                            marginTop: "2rem",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Begin qualifying
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NotSold;
