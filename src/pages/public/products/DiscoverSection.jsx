import React from 'react';
import { Box, Typography } from "@mui/material";
import DiscoverCard from './DiscoverCard';

// icons
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ConstructionIcon from '@mui/icons-material/Construction';
import CustomTypography from './CustomTypography';

const DiscoverSection = () => {
    const discoverCards = [
        {
            icon: <AutoStoriesIcon style={{
                color: 'green',
                fontSize: 30,
            }} />,
            title: 'Dedicated resources and tools',
            description: 'Access a digital experience and enhance your efficiency with tools and configurators.'
        },
        {
            icon: <AutoAwesomeIcon style={{
                color: 'green',
                fontSize: 30,
            }} />,
            title: 'Dedicated resources and tools',
            description: 'Access a digital experience and enhance your efficiency with tools and configurators.'
        },
        {
            icon: <ConstructionIcon style={{
                color: 'green',
                fontSize: 30,
            }} />,
            title: 'Dedicated resources and tools',
            description: 'Access a digital experience and enhance your efficiency with tools and configurators.'
        },
    ]

    return <>
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box sx={{ fontWeight: 700, fontSize: 28 }}>
                <h2 variant='h4'>
                    Discover Control Panel Builder Program benefits
                </h2>
            </Box>
            <Typography
                sx={{
                    fontSize: 18,
                    fontWeight: 400, // Normal text weight
                    color: "#000000",
                    lineHeight: 1.6, // Spacing between lines
                    marginTop: 1,
                    marginBottom: 1,
                }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quasi. Fugit sapiente autem commodi officia, architecto deleniti magni rerum consequuntur.</Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                {
                    discoverCards.map((items, index) => (
                        <DiscoverCard
                            key={index}
                            {...items}
                        />
                    ))
                }
            </Box>
        </Box>
    </>
}

export default DiscoverSection;