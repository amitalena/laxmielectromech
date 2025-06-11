import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";

const PrevArrow = ({ onClick }) => {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                backgroundColor: '#ffffff',
                color: '#000',
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                border: '1px solid #e0e0e0 !important',
                zIndex: 10,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2) !important", // Adds shadow effect
                borderRadius: "50%", // Makes it a perfect circle
                "&:hover": {
                    backgroundColor: "#f0f0f0",
                },
            }}
        >
            <IoIosArrowBack size={18} />
        </IconButton>
    );
};

export default PrevArrow;
