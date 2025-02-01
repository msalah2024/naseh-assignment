import { Typography } from "@mui/material";
import checkmark from "../images/checkmark.png";
export default function HeroCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="hero-card">
            <div className="checkmark">
                <img src={checkmark} alt="" width={25} />
            </div>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: "500",
                    color: "#6e7b8e",
                    width: "20rem",
                    textAlign: "center",
                }}
            >
                {description}
            </Typography>
        </div>
    );
}
