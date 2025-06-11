import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import categoryProducts from "../../../data/categoryProducts";

const ProductDetails = () => {
    const { pathname  } = useLocation();
    const id = useMemo(() => {
        return pathname.split('/')[2];
    }, []);

    const productData = useMemo(() => categoryProducts.filter((item) => item.id === id)[0], [id]);
    
    return <>
        <Box
            sx={{
                width: '100%',
                px: 4,
                py: 2,
                gap: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start'
            }}
        >
            <Box
                sx={{
                    width: '35%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    left: 0
                }}
            >
                <img
                    src={productData?.image || ''}
                    alt="image"
                    style={{
                        width: '80%'
                    }}
                />
            </Box>
            <Box
                sx={{
                    width: '65%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    gap: 1,
                }}
            >
                <Typography variant="h5">{productData?.title || ''}</Typography>
                <Typography variant="body1" sx={{ color: '#505050' }}>{productData?.id || ''}</Typography>
                <Typography variant="body1">{productData?.description || ''}</Typography>
                {/* <Button
                    sx={{
                        border: '1px solid #707070',
                        px: { lg: 10, xl: 10 },
                        borderRadius: '4px',
                        color: '#000'
                    }}
                >Buy Now</Button> */}
            </Box>
        </Box>
    </>
}

export default ProductDetails;