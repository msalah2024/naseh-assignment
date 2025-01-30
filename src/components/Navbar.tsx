import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import logo from "../images/logo.png";
import qatar from "../images/qatar.png";

const pages = [
    "Home",
    "About Us",
    "Law Frim",
    "Services",
    "Community",
    "Contact Us",
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                boxShadow: "none",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: "6rem" }}>
                    <Box
                        component="img"
                        src={logo}
                        width={40}
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            mb: 0.5,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 800,
                            color: "secondary.main",
                            textDecoration: "none",
                            fontSize: "2rem",
                        }}
                    >
                        coca
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuRoundedIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                "& .MuiPaper-root": {
                                    boxShadow: "none",
                                    borderRadius: "1rem",
                                    border: "1px solid #e8eaed",
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        component="img"
                        src={logo}
                        width={40}
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            mb: 0.5,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 800,
                            fontSize: "2rem",
                            color: "secondary.main",
                            textDecoration: "none",
                        }}
                    >
                        coca
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "primary",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: "flex", gap: 1 }}>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderRadius: "1rem",
                                paddingY: { xs: "1rem", md: "1rem" },
                                paddingX: { xs: "1rem", md: "1.5rem" },
                                borderColor: "#e8eaed",
                            }}
                        >
                            <LoginRoundedIcon />
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderRadius: "1rem",
                                paddingY: "1rem",
                                paddingX: "1.5rem",
                                borderColor: "#e8eaed",
                                display: { xs: "none", md: "flex" },
                                gap: 1,
                            }}
                        >
                            <img src={qatar} alt="qatar" width={26} />
                            AR
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
