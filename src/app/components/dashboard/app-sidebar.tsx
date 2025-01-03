"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  Building,
  Flame,
  SquareKanban,
  Pickaxe,
  Star,
  Sparkles,
  Clapperboard,
} from "lucide-react";

import { NavMain } from "@/app/components/dashboard/nav-main";
// import { NavProjects } from "@/app/components/dashboard/nav-projects";
// import { NavUser } from "@/app/components/dashboard/nav-user";
// import { TeamSwitcher } from "@/app/components/dashboard/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Andy Frith",
    email: "afrith.denver.usa@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Superstar",
      url: "/superstar",
      icon: Star,
      isActive: true,
      items: [
        {
          title: "View the real superstar.",
          url: "/superstar",
        },
        {
          title: "Update the superstar.",
          url: "/superstar/1/edit",
        },
        {
          title: "Create a superstar.",
          url: "/superstar/create",
        },
        {
          title: "List all superstars.",
          url: "/superstar/list",
        },
      ],
    },
    {
      title: "Accolades",
      url: "#",
      icon: Flame,
      items: [
        {
          title: "View the accolades.",
          url: "#",
        },
        {
          title: "Create an accolade.",
          url: "#",
        },
        {
          title: "Update an accolade.",
          url: "#",
        },
        {
          title: "Remove an accolade.",
          url: "#",
        },
      ],
    },
  ],
  experience: [
    {
      title: "Roles",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Companies",
      url: "#",
      icon: Building,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: SquareKanban,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Actions",
      url: "#",
      icon: Clapperboard,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Skils",
      url: "#",
      icon: Pickaxe,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Results",
      url: "#",
      icon: Sparkles,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <div className="flex flex-row gap-2 p-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-green-500 text-sidebar-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Andy Frith</span>
            <span className="truncate text-xs">Portfolio Admin</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain title="Profile" items={data.navMain} />
        <NavMain title="Experience" items={data.experience} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
