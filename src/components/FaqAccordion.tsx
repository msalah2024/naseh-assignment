import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function FaqAccordion({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    return (
        <Accordion
            sx={{
                boxShadow: "none",
                border: "1px solid #efefef",
                padding: "1rem",
                "&.MuiAccordion-root": {
                    borderRadius: "1.5rem",
                    overflow: "hidden", // Ensures rounded corners clip child content
                    width: "36rem",
                    height: "fit-content",
                },
            }} 
        >
            <AccordionSummary
                expandIcon={
                    <ArrowDownwardIcon sx={{ color: "secondary.main" }} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span" sx={{ fontWeight: "700" }}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
    );
}
