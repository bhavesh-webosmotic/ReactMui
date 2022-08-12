import React from "react";

import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemText,
  Tooltip,
  Box,
  styled,
  ListItemIcon,
  Drawer as MuiDrawer,
  Button,
  Typography,
} from "@mui/material";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderWidth: "0px",
});
const MenuTypo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => {
  return {
    color: theme.palette.primary.light,
  };
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "86px",
  borderWidth: "0px",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  };
});

export default function SideBar({ dispatch, isSideBarOpen, sideBarItem }) {
  const [selectedIndex, setSelectedIndex] = React.useState(
    "/organization/subscription"
  );

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const navigateToPage = (url) => {
    console.log("navigating to ", url);
    handleListItemClick(url);
  };

  const toggle = (url) => {
    dispatch({ type: "toggleSideBar", payload: !isSideBarOpen });
  };
  return (
    <>
      <Drawer variant="permanent" open={isSideBarOpen}>
        <Box
          sx={{
            display: "flex",
            py: 4,
            px: 3,
            alignItems: "center",
          }}
        >
          <Button
            disableElevation
            size="small"
            variant="contained"
            sx={{ p: 1, minWidth: 35, mr: 2 }}
            onClick={toggle}
          >
            <ArrowBackIcon fontSize={"medium"} />
          </Button>
          {isSideBarOpen && (
            <Typography variant="h4" component="h4">
              Settings
            </Typography>
          )}
        </Box>
        {sideBarItem?.map((menuItem, index) => (
          <React.Fragment key={menuItem.key}>
            <Box
              sx={{
                pb: 1,
                px: 1.5,
              }}
            >
              {isSideBarOpen && (
                <MenuTypo
                  variant="h6"
                  component="h6"
                  sx={{
                    px: 1.5,
                    my: 2,
                  }}
                >
                  {menuItem.title}
                </MenuTypo>
              )}
              {(menuItem.attr.open || !isSideBarOpen) &&
                menuItem.items.map((item, index) => (
                  <ListItemButton
                    key={item.attr.primary}
                    sx={{
                      minHeight: 45,
                      justifyContent: isSideBarOpen ? "initial" : "center",
                      py: 1.5,
                      px: isSideBarOpen ? 1.5 : 2,
                      borderRadius: 2,
                    }}
                    selected={item.link === selectedIndex}
                    onClick={() => navigateToPage(item.link)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isSideBarOpen ? 2 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Tooltip
                        arrow={true}
                        title={!isSideBarOpen ? item.attr.primary : ""}
                        placement="right"
                      >
                        {React.cloneElement(item.icon, {
                          sx: { fontSize: 28 },
                        })}
                      </Tooltip>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.attr.primary}
                      style={{ opacity: isSideBarOpen ? 1 : 0 }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </React.Fragment>
        ))}
      </Drawer>
    </>
  );
}
