import React from "react";
import { Button } from "@mui/material";
import { MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";

const QuoteButton = () => {
  return (
    <Link to={"/contact-us"}>
      <Button
        className="animate-rotateLR hover:animate-none"
        sx={{
          padding: "4px 10px",
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "inherit",
          position: "relative",
          borderRadius: "4px",
          overflow: "hidden",
          display: {
            xs: "none", // Hidden at 0px and up
            sm: "flex", // Visible at 600px and up
          },
          alignItems: "center",
          borderEndStartRadius: "12px",
          borderTopRightRadius: "12px",
          gap: "6px",
          background: "linear-gradient(45deg, #1976d2, #42a5f5)",
          // background: "linear-gradient(45deg, #f97316, #fb923c)",
          color: "white",
          "&:hover": {
            background: "linear-gradient(45deg, #1565c0, #2196f3)",
          },
        }}
      >
        <MessageCircleMore size={16} />
        Get a Quote
      </Button>
    </Link>
  );
};

export default QuoteButton;