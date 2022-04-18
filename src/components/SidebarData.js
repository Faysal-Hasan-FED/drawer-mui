import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import { DashboardRounded } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import CallIcon from '@mui/icons-material/Call';

export const SidebarData = [
    {
        title:'Home',
        icon:<HomeIcon/>,
        link:'/home',
        id:'5'
    },
    {
        title:'DashBoard',
        icon:<DashboardRounded/>,
        link:'/dashboard',
        id:'7'
    },
    {
        title:'Message',
        icon:<MailIcon/>,
        link:'/message',
        id:'6'
    },
    {
        title:'Friends',
        icon:<GroupIcon/>,
        link:'/friends',
        id:'8'
    },
    {
        title:'Contact',
        icon:<CallIcon/>,
        link:'/contact',
        id:'9'
    }
] 
 