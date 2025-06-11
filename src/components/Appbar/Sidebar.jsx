import { Drawer, MenuItem } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import AccordionMenu from "./AccordionMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = ({ isOpen, setIsOpen, menuData }) => {
    return (
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
            <div
                style={{
                    padding: "1rem",
                    height: "100%",
                    width: 250,
                    overflowY: "auto",
                }}
                data-aos="fade-left"
                data-aos-duration="700"
            >
                <AccordionMenu menuData={menuData} onClose={() => setIsOpen(false)} />
            </div>
            <MenuItem onClick={() => setIsOpen(false)}>
                <LogoutOutlined sx={{ fontSize: 18, color: "#717DA4", mr: 1 }} /> Admin
            </MenuItem>
        </Drawer>
    );
};

export default Sidebar;
