import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { autocompleteClasses } from "@mui/material";

export default function CommunityCard({
    img,
    date,
    section,
    title,
    description,
}: {
    img: string;
    date: string;
    title: string;
    section: string;
    description: string;
}) {
    return (
        <Box className="community-section-card">
            <Box
                component="img"
                src={img}
                alt=""
                sx={{
                    width: "100%",
                    height: { sm: "auto", md: "235px" },
                    maxWidth: "490px",
                    borderRadius: "1rem",
                    border: "2.5px solid #f9f9fb",
                    objectFit: "cover",
                    alignSelf: "center",
                }}
            />
            <Box className="community-card-post-info">
                <Typography
                    variant="body2"
                    sx={{ color: "secondary.main", fontWeight: "500" }}
                >
                    {date}
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography
                    variant="body2"
                    sx={{ color: "secondary.main", fontWeight: "500" }}
                >
                    {section}
                </Typography>
            </Box>
            <Box className="community-card-post-content">
                <Link href="#" underline="none">
                    <Typography variant="h5" sx={{ fontWeight: "700" }}>
                        {title}
                    </Typography>
                </Link>
                <Link href="#" underline="none">
                    <Typography
                        variant="body2"
                        sx={{ fontWeight: "500", color: "#6e7b8e" }}
                    >
                        {description}
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
}
