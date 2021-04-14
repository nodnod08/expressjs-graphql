import React from "react"
import { Notifications, AccountCircle, Settings, Favorite, ExitToApp } from "@material-ui/icons"
import { BarChart, Receipt, AttachMoney, Store, MailOutline, Description, Group, LocalMall, CastConnected, PlaylistAddCheck } from "@material-ui/icons"

export const INFO_HEADER = [
    {
        name: "MY ACCOUNT",
        url: "#",
        icon: <AccountCircle fontSize="small" />,
        tag: "header-my-account"
    },
    {
        name: "NOTIFICATIONS",
        url: "#",
        icon: <Notifications fontSize="small" />,
        tag: "header-notifications"
    },
    {
        name: "ADMIN SETTINGS",
        url: "#",
        icon: <Settings fontSize="small" />,
        tag: "header-admin-settings"
    },
    {
        name: "FAVORITES",
        url: "#",
        icon: <Favorite fontSize="small" />,
        tag: "header-favorites"
    },
    {
        name: "LOGOUT",
        url: "#",
        icon: <ExitToApp fontSize="small" />,
        tag: "header-logout"
    }
]

const main_navigations = [
    {
        name: "Dashboard",
        icon: <BarChart fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-dashboard",
        isIcon: true
    },
    {
        name: "Purchasing",
        icon: <Receipt fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-purchasing",
        isIcon: true
    },
    {
        name: "Sales",
        icon: <AttachMoney fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-sales",
        isIcon: true
    },
    {
        name: "Stocks",
        icon: <Store fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-stocks",
        isIcon: true
    },
    {
        name: "Warranty",
        icon: <PlaylistAddCheck fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-warranty",
        isIcon: true
    }
]

const support_navigations = [
    {
        name: "Email Templates",
        icon: <MailOutline fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-email-templates",
        isIcon: true
    },
    {
        name: "Files",
        icon: <Description fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-files",
        isIcon: true
    }
]

const platform_navigations = [
    {
        name: "Customers",
        icon: <Group fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-customers",
        isIcon: true
    },
    {
        name: "Orders",
        icon: <LocalMall fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-orders",
        isIcon: true
    },
    {
        name: "Connections",
        icon: <CastConnected fontSize="small" />,
        url: "#",
        tag: "sidebar-menu-connections",
        isIcon: true
    }
]

export const sidebars = [
    {
        group_name: "Main",
        groups: main_navigations
    },
    {
        group_name: "Support",
        groups: support_navigations
    },
    {
        group_name: "Platform",
        groups: platform_navigations
    }
]
