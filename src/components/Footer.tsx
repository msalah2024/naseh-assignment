import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import logo from "../images/logo.png";
import Box from "@mui/material/Box";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import googlePay from "../images/google-pay.png";
import applePay from "../images/apple-pay.png";
import visa from "../images/visa.png";
import masterCard from "../images/mastercard.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-element">
                    <div className="footer-top-icon">
                        <MailOutlinedIcon sx={{ color: "secondary.main" }} />
                    </div>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Get in touch
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: "500" }}>
                            XXXXXXXX
                        </Typography>
                    </div>
                </div>
                <div className="footer-top-element">
                    <div className="footer-top-icon">
                        <WifiCalling3OutlinedIcon
                            sx={{ color: "secondary.main" }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Let's Talk
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: "500" }}>
                            XXXXXXXX
                        </Typography>
                    </div>
                </div>
                <div className="footer-top-element">
                    <div className="footer-top-icon">
                        <ClassOutlinedIcon sx={{ color: "secondary.main" }} />
                    </div>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            CR Number
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: "500" }}>
                            XXXXXXXX
                        </Typography>
                    </div>
                </div>
                <div className="footer-top-element">
                    <div className="footer-top-icon">
                        <FmdGoodOutlinedIcon sx={{ color: "secondary.main" }} />
                    </div>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Location
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: "500" }}>
                            XXXXXXXX
                        </Typography>
                    </div>
                </div>
            </div>
            <Divider
                sx={{
                    width: "100%",
                    my: "2rem",
                    borderColor: "#efefef",
                    borderWidth: 1,
                }}
            />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <div className="footer-bottom-logo">
                        <Box component="img" src={logo} width={40} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                fontWeight: 800,
                                color: "secondary.main",
                                textDecoration: "none",
                                fontSize: "2rem",
                            }}
                        >
                            coca
                        </Typography>
                    </div>
                    <Typography
                        variant="body2"
                        sx={{ color: "#6e7b8e", fontWeight: "500" }}
                    >
                        Stay Up To Date With The Latest Legal Developments{" "}
                        <br /> And Practical Advice From Qatar's Leading Lawyers
                        By <br />
                        Subscribing To The Newsletter.
                    </Typography>
                    <div className="footer-social-media">
                        <img src={twitter} alt="" width={20} />
                        <img src={linkedin} alt="" width={20} />
                        <img src={instagram} alt="" width={20} />
                        <img src={youtube} alt="" width={20} />
                    </div>
                </div>

                <div className="footer-bottom-right">
                    <div>
                        <Typography
                            variant="h5"
                            sx={{ color: "primary.main", fontWeight: "700" }}
                        >
                            About
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Blog
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Lawyers
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Services
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Community
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            variant="h5"
                            sx={{ color: "primary.main", fontWeight: "700" }}
                        >
                            Support
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Online Chat
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Whatsapp
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            variant="h5"
                            sx={{ color: "primary.main", fontWeight: "700" }}
                        >
                            Legal Links
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Privacy Policy
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Terms and Conditions
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6e7b8e", fontWeight: "500" }}
                        >
                            Cooke policy
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bottom">
                <Box
                    sx={{
                        width: "248px",
                        display: { xs: "none", lg: "block" },
                    }}
                ></Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: "#6e7b8e",
                        fontWeight: "500",
                    }}
                >
                    All Rights Reserved @ XXXXXXXX 2022
                </Typography>
                <div className="footer-bottom-payment">
                    <img src={googlePay} alt="" width={50} />
                    <img src={applePay} alt="" width={50} />
                    <img src={visa} alt="" width={50} />
                    <img src={masterCard} alt="" width={50} height={30} />
                </div>
            </div>
        </div>
    );
}
