import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import CommunityCard from "./CommunityCard";
export default function CommunitySection() {
    return (
        <div className="community-section">
            <Typography
                variant="body1"
                sx={{
                    color: "secondary.main",
                    fontWeight: "700",
                    paddingLeft: "1rem",
                }}
            >
                Community
            </Typography>
            <div className="services-section-header">
                <Typography variant="h4" sx={{ fontWeight: "700" }}>
                    Naseh Legal Blog
                </Typography>
                <div>
                    <Typography variant="body1" sx={{ fontWeight: "700" }}>
                        <Link
                            href="#"
                            underline="none"
                            sx={{ color: "secondary.main" }}
                        >
                            View All Blogs
                        </Link>
                    </Typography>
                    <IconButton
                        aria-label="View all services"
                        sx={{
                            color: "secondary.main",
                            backgroundColor: "#f3f2eb",
                        }}
                    >
                        <ArrowRightAltRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="community-card-container">
                <CommunityCard
                    img="https://img.freepik.com/free-photo/drawing-about-legal-profession_23-2151190675.jpg?t=st=1738410458~exp=1738414058~hmac=00cda4f1d98dae0f173166b367d62f57ff896001d70c833e134d45a2d993632f&w=1380"
                    date="June 23, 2024"
                    section="Legal Consultation"
                    title="Avoiding Trouble: Common Legal
                        Mistakes to Keep Away"
                    description="In Qatar, As In Any Country, It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems."
                />
                <CommunityCard
                    img="https://img.freepik.com/free-photo/old-wooden-gavel-hitting-rusty-steel-wrench-table-generated-by-artificial-intelligence_188544-93687.jpg?t=st=1738413524~exp=1738417124~hmac=3a95a406e57f57bc3690952382a713cec7f3b5290944991ecdfa3a154ace08e2&w=1380"
                    date="June 23, 2024"
                    section="Legal Consultation"
                    title="Avoiding Trouble: Common Legal
                        Mistakes to Keep Away"
                    description="In Qatar, As In Any Country, It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems."
                />
                <CommunityCard
                    img="https://img.freepik.com/free-photo/comic-book-style-large-courtroom-illustration_1409-7215.jpg?t=st=1738413616~exp=1738417216~hmac=ee1ca077c7e89f93f391470056fc7ebb577fb29408dc18fa8d3281325db250e6&w=1480"
                    date="June 23, 2024"
                    section="Legal Consultation"
                    title="Avoiding Trouble: Common Legal
                        Mistakes to Keep Away"
                    description="In Qatar, As In Any Country, It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems."
                />
            </div>
        </div>
    );
}
