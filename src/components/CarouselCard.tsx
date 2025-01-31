import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import Button from "@mui/material/Button";

export default function CarouselCard({ img }: { img: string }) {
    return (
        <div className="carousel-card">
            <div className="carousel-card-image">
                <img src={img} alt="lawyer1" width={50} />
            </div>
            <Typography
                variant="h6"
                sx={{ color: "primary.main", fontWeight: "700" }}
            >
                Saleh For Law
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "#6e7b8e",
                    fontWeight: "500",
                    textAlign: "center",
                }}
            >
                I provide Specialized Legal Consultations <br /> In The Field Of
                Companies ..
            </Typography>
            <Divider
                sx={{
                    width: "100%",
                    my: 1,
                    borderColor: "#efefef",
                    borderWidth: 1,
                }}
            />
            <div className="carousel-card-bottom">
                <div className="carousel-card-bottom-sides">
                    <div>
                        <TranslateRoundedIcon
                            sx={{ color: "secondary.main" }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#6e7b8e",
                                fontWeight: "500",
                            }}
                        >
                            Spoken Language
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>
                            Arabic & English
                        </Typography>
                    </div>{" "}
                </div>
                <div className="carousel-card-bottom-sides">
                    <div>
                        <WorkspacePremiumRoundedIcon
                            sx={{ color: "secondary.main" }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#6e7b8e",
                                fontWeight: "500",
                            }}
                        >
                            Years Of Experience
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "700" }}>
                            10-15
                        </Typography>
                    </div>
                </div>
            </div>
            <Button
                variant="contained"
                sx={{
                    paddingX: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "3rem",
                        lg: "4rem",
                    },
                    paddingY: "1.2rem",
                    borderRadius: "1rem",
                    marginTop: "0.5rem",
                    width: "100%",
                }}
            >
                View Profile
            </Button>
        </div>
    );
}
