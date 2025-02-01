import Typography from "@mui/material/Typography";
import GooglePlayIcon from "../images/google-play.png";
import AppStoreIcon from "../images/app-store.png";
import IphoneMockup from "../images/iPhoneMockUp.jpg";
import IphoneMockup2 from "../images/IphoneMockup2.jpg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
export default function WhyChooseUsSection() {
    return (
        <div className="why-choose-us-section">
            <div className="why-choose-us-top">
                <div>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            color: "white",
                            fontWeight: "700",
                        }}
                    >
                        Why Choose Us ?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#a4abb8",
                        }}
                    >
                        naseh application is the ideal solution for your legal
                        consultation in qatar, as <br /> we provide innovative
                        legal services to meet your needs in a flexible and{" "}
                        <br /> reliable manner.
                    </Typography>
                </div>
                <div className="why-choose-us-store-icons">
                    <div className="available-on-store">
                        <img
                            src={GooglePlayIcon}
                            alt="Available on Google Play"
                            width={35}
                            height={35}
                        />
                        <div className="available-on-store-text">
                            <Typography
                                variant="body2"
                                sx={{ color: "#6e7b8e" }}
                            >
                                Available on
                            </Typography>
                            <Typography variant="body1" sx={{ color: "white" }}>
                                Google Play
                            </Typography>
                        </div>
                    </div>
                    <div className="available-on-store">
                        <img
                            src={AppStoreIcon}
                            alt="Available on App Store"
                            width={35}
                            height={35}
                        />
                        <div className="available-on-store-text">
                            <Typography
                                variant="body2"
                                sx={{ color: "#6e7b8e" }}
                            >
                                Available on
                            </Typography>
                            <Typography variant="body1" sx={{ color: "white" }}>
                                App Store
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="why-choose-us-bottom"
                style={{ position: "relative" }}
            >
                <div className="why-choose-us-cards-container">
                    <div className="why-choose-us-card">
                        <div className="why-choose-us-card-text">
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{ fontWeight: "700" }}
                            >
                                Here is the title of the feature or <br />{" "}
                                service in the app
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "#6e7b8e", fontWeight: "500" }}
                            >
                                Pioneering The First Qatari Online Legal
                                Consultation <br />
                                Platform With The Largest Network Of <br />{" "}
                                Verified Lawyers Tailored To Your Every Needs.
                            </Typography>
                        </div>

                        <img src={IphoneMockup} alt="App Preview" width={350} />
                    </div>
                    <div className="why-choose-us-card">
                        <img
                            src={IphoneMockup2}
                            alt="App Preview"
                            width={350}
                        />
                        <div className="why-choose-us-card-text">
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{ fontWeight: "700" }}
                            >
                                Here is the title of the feature or <br />{" "}
                                service in the app
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "#6e7b8e", fontWeight: "500" }}
                            >
                                Pioneering The First Qatari Online Legal
                                Consultation <br />
                                Platform With The Largest Network Of <br />{" "}
                                Verified Lawyers Tailored To Your Every Needs.
                            </Typography>
                        </div>
                    </div>
                    <div className="why-choose-us-card">
                        <div className="why-choose-us-card-text">
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{ fontWeight: "700" }}
                            >
                                Here is the title of the feature or <br />{" "}
                                service in the app
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "#6e7b8e", fontWeight: "500" }}
                            >
                                Pioneering The First Qatari Online Legal
                                Consultation <br />
                                Platform With The Largest Network Of <br />{" "}
                                Verified Lawyers Tailored To Your Every Needs.
                            </Typography>
                        </div>

                        <img src={IphoneMockup} alt="App Preview" width={350} />
                    </div>
                </div>

                <div className="why-choose-us-newsletter">
                    <div>
                        <Typography variant="h5" sx={{ fontWeight: "700" }}>
                            Newsletter
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Stay up to date with the latest legal developments
                            and practical advice <br /> from Qatar’s leading
                            lawyers by subscribing to the newsletter.
                        </Typography>
                    </div>
                    <div>
                        <Paper
                            component="form"
                            sx={{
                                p: "4px 16px",
                                paddingRight: "0.3rem",
                                display: "flex",
                                alignItems: "center",
                                maxWidth: 400,
                                borderRadius: "2rem",
                                boxShadow: "none",
                                border: "1px solid #efefef",
                            }}
                        >
                            <MailOutlinedIcon sx={{ color: "#9aa2ae" }} />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter your email"
                                inputProps={{
                                    "aria-label": "Enter your email",
                                }}
                            />
                            {/* <IconButton
                                type="button"
                                sx={{ p: "10px" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton> */}
                            <Button
                                variant="contained"
                                sx={{ borderRadius: "1rem" }}
                            >
                                Submit
                            </Button>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
}
