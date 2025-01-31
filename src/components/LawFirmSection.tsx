import React from "react";
import Carousel from "./Carousel";
import { Typography } from "@mui/material";
export default function LawFirmSection() {
    return (
        <div className="law-firm-section">
            <Typography
                variant="body1"
                sx={{
                    color: "secondary.main",
                    fontWeight: "700",
                    textAlign: "center",
                }}
            >
                LawFirm
            </Typography>
            <Typography
                variant="h4"
                sx={{
                    color: "primary.main",
                    fontWeight: "700",
                    textAlign: "center",
                }}
            >
                Specialized lawyers around the clock
            </Typography>
            <Carousel />
        </div>
    );
}
