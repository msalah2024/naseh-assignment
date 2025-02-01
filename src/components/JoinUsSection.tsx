import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Button } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export default function JoinUsSection() {
    return (
        <div className="join-us-section">
            <div>
                <img
                    src="https://img.freepik.com/free-photo/3d-flowing-particles-network-communications-design_1048-15848.jpg?t=st=1738403508~exp=1738407108~hmac=9a30195a784e99dc66709ab9ac466d3fe96d8ccf800c67ee7725f683b9f14cc8&w=996"
                    alt=""
                    className="join-us-section-image"
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                    }}
                />
            </div>
            <div>
                <Typography
                    variant="body2"
                    sx={{
                        color: "secondary.main",
                        fontWeight: "700",
                    }}
                >
                    Join As A Lawyer
                </Typography>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        color: "white",
                        fontWeight: "700",
                    }}
                >
                    Join As A Lawyer
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#a4abb8",
                    }}
                >
                    are you a licensed lawyer looking to expand your legal
                    services? join naseh, <br /> qatar's first legal platform,
                    and start providing legal consultation to clients <br />{" "}
                    across the country with ease and convenience.
                </Typography>
                <div className="join-us-section-cards-container">
                    <div className="join-us-section-card">
                        <CheckCircleRoundedIcon sx={{ color: "#01bc7c" }} />
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white",
                                fontWeight: "500",
                            }}
                        >
                            EXPAND YOUR CUSTOMER NETWORK
                        </Typography>
                    </div>
                    <div className="join-us-section-card">
                        <CheckCircleRoundedIcon sx={{ color: "#01bc7c" }} />
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white",
                                fontWeight: "500",
                            }}
                        >
                            EXPAND YOUR CUSTOMER NETWORK
                        </Typography>
                    </div>
                    <div className="join-us-section-card">
                        <CheckCircleRoundedIcon sx={{ color: "#01bc7c" }} />
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white",
                                fontWeight: "500",
                            }}
                        >
                            CONTROL YOUR SCHEDULE{" "}
                        </Typography>
                    </div>
                    <div className="join-us-section-card">
                        <CheckCircleRoundedIcon sx={{ color: "#01bc7c" }} />
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white",
                                fontWeight: "500",
                            }}
                        >
                            SECURE AND FAST PAYMENTS
                        </Typography>
                    </div>
                </div>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<AddCircleOutlineRoundedIcon />}
                    sx={{
                        color: "white",
                        backgroundColor: "secondary.main",
                        borderRadius: "1rem",
                        paddingX: {
                            xs: "2.5rem",
                            sm: "3rem",
                            md: "4rem",
                            lg: "5rem",
                        },
                        paddingY: "1.2rem",
                    }}
                >
                    join now
                </Button>
            </div>
        </div>
    );
}
