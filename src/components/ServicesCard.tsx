import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function ServicesCard({
    icon,
    title,
    description,
    buttonText,
    buttonIcon,
    buttonState,
}: {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    buttonIcon?: React.ReactElement;
    buttonState: boolean;
}) {
    return (
        <div className="services-card">
            <div className="services-card-top">
                <div className="services-card-icon">
                    <img src={icon} alt="icon" width={26} />
                </div>

                <div>
                    <Typography variant="h6" sx={{ fontWeight: "700" }}>
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6e7b8e",
                            fontWeight: "500",
                        }}
                    >
                        {description}
                    </Typography>
                </div>
            </div>
            <Button
                variant="contained"
                startIcon={buttonIcon}
                disabled={buttonState}
                sx={{
                    paddingX: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "3rem",
                        lg: "4rem",
                    },
                    paddingY: "1.2rem",
                    borderRadius: "1rem",
                    width: "100%",
                }}
            >
                {buttonText}
            </Button>
        </div>
    );
}
