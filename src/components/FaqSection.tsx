import React from "react";
import Typography from "@mui/material/Typography";
import FaqAccordion from "./FaqAccordion";
export default function FaqSection() {
    return (
        <div className="faq-section">
            <div>
                <Typography
                    variant="body1"
                    sx={{
                        color: "secondary.main",
                        fontWeight: "700",
                        textAlign: "center",
                    }}
                >
                    FAQ
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        color: "primary.main",
                        fontWeight: "700",
                        textAlign: "center",
                    }}
                >
                    Frequently Asked Questions
                </Typography>
            </div>
            <div className="faq-accordion-container">
                <FaqAccordion
                    question="What services do we offer?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="How can I find a lawyer using Naseh ?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="Is there a fee to use the services?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="How can I schedule a consultation with a lawyer?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="an I track the progress of my legal case through ?
                    "
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="Is Naseh available 24/7?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="What types of legal issues can help with?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="How secure is my information on ?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="Can I upload and manage legal documents on ?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <FaqAccordion
                    question="How do I contact customer support if I have issues with the app?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
            </div>
        </div>
    );
}
