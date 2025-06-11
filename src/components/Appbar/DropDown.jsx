/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { borderColor, styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { KeyboardArrowDown, KeyboardArrowRight, KeyboardArrowUpOutlined } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

// Styled Components
const Dropdown = styled("div")({
    position: "relative",
    display: "block",
    zIndex: 1100, // Higher than MUI's AppBar (1100)
});

const DropdownContent = styled("div")(({ theme }) => ({
    position: "absolute",
    backgroundColor: "#fff", // Adjust for better visibility
    color: "#fff",
    zIndex: 1301,
    minWidth: "200px",
    transition: "all 0.3s ease-in-out",
    overflow: "visible",
    top: "100%", // Positions the dropdown below the button
    left: 0,
    boxShadow: "0px 1px 3px 1px #e0e0e0",
}));

const StyledButton = styled(Button)(({ active }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // height: "40px", // Ensuring uniform height
    textTransform: "none",
    borderBottom: active ? "3px solid #1C85C6" : "none",
    color: active ? "#1C85C6" : "#000",
    borderRadius: "2px",
    "&:hover": { color: "#1C85C6" },
}));

const MainStyledButton = styled(Button)(({ active }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "30px", // Ensuring uniform height
    textTransform: "none",
    color: active ? "#FB923C !important" : "#000",
    background: active ? 'white !important': '#1C85C6',
    border: active ? '1px solid #FB923C' : '1px solid #1C85C6',
    transition: 'all 0.3s ease-in-out !important',
    borderRadius: "2px",
    "&:hover": {
        // color: "#1C85C6 !important", // text-orange-500
        background: active ? "white": "#FB923C !important", // text-orange-500
        // background: "white",
        borderColor: "#FB923C", // border-orange-500
    },
}));

const DropdownMenu = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [nestedIndex, setNestedIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return items?.map((item, index) => (
        <Dropdown
            key={index}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
        >
            <MainStyledButton
                sx={{
                    background: "#1C85C6",
                    color: "white",
                    "&:hover": { color: "white" },
                    py: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={() => item.route && navigate(item.route)}
                active={location.pathname === item.route}
            >
                <Typography variant="body2" sx={{ my: 0, py: 0 }}>{item.name}</Typography>
                {item.subMenu && (openIndex === index ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDown />)}
            </MainStyledButton>

            {openIndex === index && item.subMenu && (
                <DropdownContent data-aos="fade-up" data-aos-duration="300">
                    {item.subMenu.map((subItem, subIndex) => (
                        <Dropdown
                            key={subIndex}
                            onMouseEnter={() => setNestedIndex(subIndex)}
                            onMouseLeave={() => setNestedIndex(null)}
                        >
                            <StyledButton
                                onClick={() => subItem.route && navigate(subItem.route)}
                                active={location.pathname === subItem.route}
                            >
                                <Typography variant="body2" sx={{ textAlign: "start" }}>{subItem.name}</Typography>
                                {subItem.subMenu &&
                                    (nestedIndex === subIndex ? <KeyboardArrowDown /> : <KeyboardArrowRight />)}
                            </StyledButton>
                            {nestedIndex === subIndex && subItem.subMenu && (
                                <DropdownContent data-aos="fade-left" sx={{ left: "100%", top: 0 }}>
                                    {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                        <StyledButton
                                            key={nestedIndex}
                                            active={location.pathname === nestedItem.route}
                                            onClick={() => nestedItem.route && navigate(nestedItem.route)}
                                        >
                                            <Typography variant="body2">{nestedItem.name}</Typography>
                                        </StyledButton>
                                    ))}
                                </DropdownContent>
                            )}
                        </Dropdown>
                    ))}
                </DropdownContent>
            )}
        </Dropdown>
    ));
};

export default DropdownMenu;
