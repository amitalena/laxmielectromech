import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductSubCategoryCard = ({
    // subcategory,
    image,
    title,
    description,
}) => {
    return <>
        <Link
            to="/product-category/harmony-XB5N-XB7N"
        >
            <Box
                sx={{
                    width: '100%',
                    cursor: 'pointer'
                }}
            >
                <div className="w-full flex justify-center items-center">
                    <img src={image || ''} alt="image" style={{ width: '200px', height: '200px' }} />
                </div>
                <Typography variant="h6" sx={{ color: '#1C85C6' }}>{title}</Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>{description}</Typography>
            </Box>
        </Link>
    </>
}

export default ProductSubCategoryCard;