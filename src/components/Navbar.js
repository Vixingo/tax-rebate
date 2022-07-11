import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="container px-2 ">
                    {" "}
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid ">
                            <Link className="navbar-brand m-md-0 m-auto" to="/">
                                <img src="/img/logo.svg" alt="" />
                            </Link>
                            <Button
                                variant="contained"
                                className="d-md-block d-none"
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
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
