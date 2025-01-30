import React from "react";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import Divider from "@mui/material/Divider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Hero() {
    const [language, setLanguage] = React.useState("");
    const [experience, setExperience] = React.useState("");

    const handleLanguageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    const handleExperienceChange = (event: SelectChangeEvent) => {
        setExperience(event.target.value as string);
    };

    return (
        <div className="heroContainer">
            <div className="heroSection">
                <div className="blueSection">
                    <div className="blueSectionBg"></div>
                    <div className="blueTopSection">
                        <div className="blueTopSectionPhoneIcon">
                            <PhoneInTalkRoundedIcon
                                sx={{ fontSize: 35, color: "white" }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    marginBottom: "0.3rem",
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        md: "center",
                                        lg: "left",
                                    },
                                }}
                            >
                                Urgent consultation now !
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                    color: "#a4abb8",
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        md: "center",
                                        lg: "left",
                                        fontSize: "0.85rem",
                                    },
                                    marginRight: {
                                        xs: "0",
                                        sm: "0",
                                        md: "0",
                                        lg: "6rem",
                                    },
                                }}
                            >
                                book it in 5 minutes a lawyer will respond to
                                you in a few minutes
                            </Typography>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<PermPhoneMsgOutlinedIcon />}
                                sx={{
                                    color: "white",
                                    backgroundColor: "#c42424",
                                    borderRadius: "1rem",
                                    paddingX: {
                                        xs: "1.5rem",
                                        sm: "2rem",
                                        md: "3rem",
                                        lg: "4rem",
                                    },
                                    paddingY: "1.2rem",
                                }}
                            >
                                CONSULT NOW
                            </Button>
                        </div>
                    </div>
                    <Divider
                        sx={{
                            backgroundColor: "#5d7bad",
                            width: "85%",
                            margin: "0 auto",
                            opacity: "0.5",
                        }}
                    />
                    <div className="blueBottomSection">
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Choose & filter & schedule
                        </Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                color: "#a4abb8",
                                textAlign: "center",
                                fontWeight: "500",
                            }}
                        >
                            Easy access to your legal advice. Choose, sort, and
                            clearly define the
                            <br /> time that best fits your schedule.
                        </Typography>
                    </div>
                </div>
                <div className="bookingForm">
                    <div className="bookingFormContainer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker"]}
                                sx={{ paddingTop: "0.5rem" }}
                            >
                                <DatePicker
                                    label={"select date"}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiSvgIcon-root": {
                                            color: "secondary.main",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#6e7b8e",
                                        },
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["TimePicker"]}
                                sx={{ paddingTop: "0.5rem" }}
                            >
                                <TimePicker
                                    label="select time"
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiSvgIcon-root": {
                                            color: "secondary.main",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#6e7b8e",
                                        },
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <Box sx={{ minWidth: 246, marginTop: "0.5rem" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    select language
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={language}
                                    label="select language"
                                    onChange={handleLanguageChange}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiSvgIcon-root": {
                                            color: "secondary.main",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#6e7b8e",
                                        },
                                    }}
                                >
                                    <MenuItem>English</MenuItem>
                                    <MenuItem>Arabic</MenuItem>
                                    <MenuItem>Spanish</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 246, marginTop: "0.5rem" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    select experience
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={experience}
                                    label="select experience"
                                    onChange={handleExperienceChange}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiSvgIcon-root": {
                                            color: "secondary.main",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#6e7b8e",
                                        },
                                    }}
                                >
                                    <MenuItem>Less than 5 years</MenuItem>
                                    <MenuItem>More than 5 years</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div className="whiteSection"> stuff </div>
            </div>
        </div>
    );
}
