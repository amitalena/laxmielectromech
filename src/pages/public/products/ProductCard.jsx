import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({
    href = ""
}) => {
    return <>
        <Link
            to={href}
            style={{
                width: 'auto'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    border: '1px solid gray',
                    overflow: 'hidden',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    p: 2,
                    '&:hover': {
                        boxShadow: '0px 0px 3px 4px #e0e0e0',
                        transition: 'all 0.4 ease-in-out',
                    }
                }}
            >
                <img src="https://download.schneider-electric.com/files?p_Doc_Ref=1508_main&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png" alt="image" style={{ width: '150px' }} />
                <Typography variant='h2' component={'h2'} sx={{ fontSize: 18, color: '#000' }}>Contactors and protection relays</Typography>
            </Box>
        </Link>
    </>
}

export default ProductCard;