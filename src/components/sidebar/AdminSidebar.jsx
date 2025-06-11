import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Custom styled components
const SidebarContainer = styled(Box)(({ open }) => ({
    width: open ? 260 : 80,
    height: '100vh',
    position: 'sticky',
    top: 0,
    backgroundColor: '#f0f0f0', // Light gray background
    transition: 'width 0.3s ease-in-out',
    overflowX: 'hidden',
    boxShadow: '3px 0 8px rgba(0, 0, 0, 0.15)',
}));

const Header = styled(Box)({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(135deg, #d6d6d6 0%, #b0b0b0 100%)', // Gray gradient header
    color: '#fff',
    minHeight: 64,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
    borderRadius: '8px',
    margin: open ? '10px 12px' : '10px 0', // Slightly increased margin
    padding: '14px', // Increased padding for larger content
    backgroundColor: selected ? '#1976d2' : '#fafafa', // Simple blue for selected, light gray otherwise
    color: '#000',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const AdminSidebar = () => {
    const [open, setOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState('/admin/dashboard');

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: '32px' }} />, path: '/admin/dashboard' },
        { text: 'Products', icon: <InventoryIcon sx={{ fontSize: '32px' }} />, path: '/admin/products' },
        { text: 'Blogs', icon: <ArticleIcon sx={{ fontSize: '32px' }} />, path: '/admin/blogs' },
        { text: 'Settings', icon: <SettingsIcon sx={{ fontSize: '32px' }} />, path: '/admin/settings' },
    ];

    const handleItemClick = (path) => {
        setSelectedItem(path);
    };

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <SidebarContainer open={open} component="nav">
            <Drawer
                variant="permanent"
                sx={{
                    width: open ? 260 : 80,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? 260 : 80,
                        boxSizing: 'border-box',
                        position: 'sticky',
                        height: '100vh',
                        backgroundColor: 'inherit',
                        border: 'none',
                        transition: 'width 0.3s ease-in-out',
                    },
                }}
            >
                {/* Sidebar Header */}
                <Header sx={{ py: 0 }}>
                    {open && (
                        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, color: '#000', my: 0, py: 0 }}>
                            Admin Panel
                        </Typography>
                    )}
                    <IconButton onClick={toggleSidebar} sx={{ color: '#000' }}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </Header>
                <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.08)' }} />

                {/* Menu List */}
                <List sx={{ paddingTop: 1, paddingBottom: 1 }}>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <StyledListItemButton
                                component="a"
                                href={item.path}
                                selected={selectedItem === item.path}
                                onClick={() => handleItemClick(item.path)}
                                sx={{
                                    justifyContent: open ? 'initial' : 'center', // Center icons when collapsed
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: open ? 48 : 0,
                                        justifyContent: 'center',
                                        fontSize: '32px', // Apply size here
                                        '& svg': { fontSize: '20px' }, // Explicitly target the icon
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>

                                {open && (
                                    <ListItemText
                                        primary={item.text}
                                        primaryTypographyProps={{ fontWeight: 600, fontSize: '18px' }} // Increased text size
                                    />
                                )}
                            </StyledListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </SidebarContainer>
    );
};

export default AdminSidebar;