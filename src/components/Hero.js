import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function Hero() {
    return (
        <>
            <div className="Hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "3.5rem",
                                    fontWeight: "700",
                                    fontFamily: "Rubik",
                                    color: "#414141",
                                    marginBottom: "24px",
                                }}
                            >
                                COVID-relief tax rebates for most business
                                owners
                            </Typography>
                            <Typography
                                variant="h6"
                                SX={{
                                    color: "#414141",
                                    fontFamily: "Rubik",
                                }}
                            >
                                The{" "}
                                <span style={{ fontWeight: "700" }}>
                                    Employee Retention Tax Credit (ERC){" "}
                                </span>{" "}
                                includes funds to help business owners who kept
                                W-2 employees on their payroll during 2020
                                (Q2–Q4) and 2021 (Q1–Q3).
                            </Typography>
                            <ul>
                                <li>Up to $26,000 per W-2 employee</li>
                                <li>
                                    ERC is a refundable tax credit (it is not a
                                    loan like PPP)
                                </li>
                                <li>No restrictions on use</li>
                                <li>No limit on funding</li>
                                <li>
                                    Qualify with full/partial closure, supply
                                    chain disruption, or reduced revenue
                                </li>
                                <li>Qualification approval within 2–3 weeks</li>
                                <li>
                                    IRS distributes your funds within 4–6 months
                                </li>
                            </ul>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "#fff",
                                    textTransform: "unset",
                                    backgroundColor: "#03A63C !important",
                                    fontFamily: "Rubik",
                                    fontSize: "2.5rem",
                                    fontWeight: "400",
                                    padding: "1rem 2.5rem",
                                    borderRadius: "0.5rem",
                                    margin: "24px 0",
                                }}
                            >
                                Begin qualifying
                            </Button>
                            <Typography
                                sx={{
                                    fontSize: "0.75rem",
                                    color: "#414141",
                                    fontFamily: "Rubik",
                                    fontWeight: "300",
                                }}
                            >
                                It only takes two minutes to start the process!
                            </Typography>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img
                                    src="/img/hero.jpg"
                                    alt=""
                                    width={"100%"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
