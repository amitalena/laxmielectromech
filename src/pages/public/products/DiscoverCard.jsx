import { Box, Typography } from '@mui/material';
import React from 'react';

const DiscoverCard = ({
    icon,
    title = "",
    description = "",
}) => {
    return <>
        <Box
            sx={{
                border: '1px solid gray',
                borderRadius: '6px',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: 2,
            }}
        >
            {icon}
            <Typography
                variant='body1'
                component={'body1'}
                fontSize={18}
            >{title}</Typography>
            <Typography
                variant='p'
                component={'p'}

            >{description}</Typography>
        </Box>
    </>
}

export default DiscoverCard;