import React from "react";
import {
  Home,
  Group,
  CreditCard,
  BarChart,
  AccountCircle,
  MarkChatUnread,
  Extension,
} from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import SideBar from "./SideBar";

function reducer(state, action) {
  switch (action.type) {
    case "toggleSideBar":
      state.isSideBarOpen = action.payload;
      return { ...state };
    case "openMenu":
      state.sideBarItem[action.payload.index].attr.open =
        !state.sideBarItem[action.payload.index].attr.open;
      return { ...state };
    default:
      return { ...state };
  }
}
const initialState = {
  isSideBarOpen: true,
  sideBarItem: [
    {
      key: "dashboard",
      title: "ORGANIZATION",
      attr: {
        open: true,
      },
      items: [
        {
          attr: { primary: "Accounts" },
          icon: <Home />,
          link: "/organization/accounts",
        },
        {
          attr: { primary: "Users" },
          icon: <Group />,
          link: "/organization/users",
        },
        {
          attr: { primary: "Subscription" },
          icon: <CreditCard />,
          link: "/organization/subscription",
        },
        {
          attr: { primary: "Usage Report" },
          icon: <BarChart />,
          link: "/organization/usage-report",
        },
      ],
    },
    {
      key: "accountSettings",
      title: "ACCOUNT SETTINGS",
      attr: {
        open: true,
      },
      items: [
        {
          attr: { primary: "Notifications" },
          icon: <MarkChatUnread />,
          link: "/account-settings/notifications",
        },
        {
          attr: { primary: "Integration" },
          icon: <Extension />,
          link: "/account-settings/integration",
        },
      ],
    },
    {
      key: "userSettings",
      title: "USER SETTINGS",
      attr: {
        open: true,
      },
      items: [
        {
          attr: { primary: "Profile" },
          icon: <AccountCircle />,
          link: "/user-settings/profile",
        },
      ],
    },
  ],
};
function Layout(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { isSideBarOpen, sideBarItem } = state;
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <SideBar
        dispatch={dispatch}
        isSideBarOpen={isSideBarOpen}
        sideBarItem={sideBarItem}
      />
      <Container
        maxWidth="false"
        style={{
          padding: "0",
          transition: "max-width  225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          maxWidth: `calc(100% - ${isSideBarOpen ? "240px" : "86px"})`,
        }}
      >
        {props.children}
      </Container>
    </Box>
  );
}
export default Layout;
