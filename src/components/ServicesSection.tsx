import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import Link from "@mui/material/Link";
import ServicesCard from "./ServicesCard";
import calender from "../images/calendar.png";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import call from "../images/call.png";
import corporate from "../images/company.png";
import document from "../images/document.png";
import contract from "../images/contract.png";
import bag from "../images/briefcase.png";
export default function ServicesSection() {
    return (
        <div className="services-section">
            <Typography
                variant="body1"
                sx={{
                    color: "secondary.main",
                    fontWeight: "700",
                    paddingLeft: "1rem",
                }}
            >
                Services
            </Typography>
            <div className="services-section-header">
                <Typography variant="h4" sx={{ fontWeight: "700" }}>
                    A wide range of legal services
                </Typography>
                <div>
                    <Typography variant="body1" sx={{ fontWeight: "700" }}>
                        <Link
                            href="#"
                            underline="none"
                            sx={{ color: "secondary.main" }}
                        >
                            View All Services
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
            <div className="services-section-cards-container">
                <ServicesCard
                    title="Scheduled consultations"
                    description="Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through"
                    icon={calender}
                    buttonText="Book a consultation"
                    buttonIcon={<EditCalendarRoundedIcon />}
                    buttonState={false}
                />
                <ServicesCard
                    title="Urgent consultation"
                    description="Naseh Application Is An Integrated Solution For Providing Legal Services Remotely, Through"
                    icon={call}
                    buttonText="consult now"
                    buttonIcon={<QuestionAnswerRoundedIcon />}
                    buttonState={false}
                />
                <ServicesCard
                    title="Corporate Portal"
                    description="The corporate Portal Service Or An Open Monthly Subscription Can Be Offered With the .."
                    icon={corporate}
                    buttonText="soon"
                    buttonState={true}
                />
                <ServicesCard
                    title="Written Consultation"
                    description="The corporate Portal Service Or An Open Monthly Subscription Can Be Offered With the .."
                    icon={document}
                    buttonText="soon"
                    buttonState={true}
                />
                <ServicesCard
                    title="Contracts & Agreements"
                    description="The corporate Portal Service Or An Open Monthly Subscription Can Be Offered With the .."
                    icon={contract}
                    buttonText="soon"
                    buttonState={true}
                />
                <ServicesCard
                    title="Hire A Lawyer"
                    description="The corporate Portal Service Or An Open Monthly Subscription Can Be Offered With the .."
                    icon={bag}
                    buttonText="soon"
                    buttonState={true}
                />
            </div>
        </div>
    );
}
