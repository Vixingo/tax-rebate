import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};
function ERC() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="ERC">
                <div className="container">
                    {" "}
                    <div className="row">
                        <div className="col-md-8">
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
                                What is the Employee Retention Credit (ERC)?
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
                                Watch this short video by ERCS (our processing
                                partner) to learn more.
                            </Typography>
                        </div>
                    </div>
                    <Box sx={{ position: "relative" }} onClick={handleOpen}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <PlayCircleIcon
                                sx={{ color: "#fff", fontSize: "100px" }}
                            />
                        </Box>
                        <div>
                            <img
                                src="/img/video_cover.jpg"
                                alt=""
                                width={"100%"}
                            />
                        </div>
                    </Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <iframe
                                width="1196"
                                height="650"
                                src="https://www.youtube-nocookie.com/embed/tbbveDpUZv4"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </Box>
                    </Modal>
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
        </>
    );
}

export default ERC;
