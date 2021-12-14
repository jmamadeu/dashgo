import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiUserLine
} from "react-icons/ri";
import { v4 } from "uuid";
import { NavSection, NavSectionProps } from "./nav-section";

const sidebarItens: NavSectionProps[] = [
  {
    title: "General",
    navLinks: [
      {
        icon: RiDashboardLine,
        name: "Dashboard",
        path: "/dashboard"
      },
      {
        name: "Users",
        icon: RiUserLine,
        path: "/users"
      }
    ]
  },
  {
    title: "Automation",
    navLinks: [
      {
        icon: RiInputMethodLine,
        name: "Forms",
        path: "/forms"
      },
      {
        name: "Automation",
        icon: RiGitMergeLine,
        path: "/automation"
      }
    ]
  }
];

export const SidebarNav = () => (
  <Stack spacing="12" align="flex-start">
    {sidebarItens.map((item) => (
      <NavSection key={v4()} {...item} />
    ))}
  </Stack>
);
