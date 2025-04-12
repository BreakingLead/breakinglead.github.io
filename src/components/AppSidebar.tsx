
import { Calendar, Home, Inbox, Library, Palette, Search, Settings, Tag, X } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./ModeToggle"
import { DropdownMenuDemo } from "./Test"
import { Label } from "./ui/label"

// Menu items.
const items: {
  title: string,
  url: string,
  icon: any,
}[] = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Posts",
      url: "/posts",
      icon: Library,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: Palette
    },

    {
      title: "Tags",
      url: "/tags",
      icon: Tag
    },

  ]
const contacts = [
  {
    title: "Twitter",
    url: "https://twitter.com/Breaking_Lead_G",
    desc: "@Breaking_Lead_G"
  },
  {
    title: "QQ",
    url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=TZYeUZgPQEnfk9R7gtiAQaqegTykN-D_&authKey=ywbKz7fLmWpoBQHqcpAFotcWgDZ%2FXIb9j%2BaBEYzBFNJc7grUehP4%2FFyugXTbzja%2F&noverify=0&group_code=613637913",
    desc: "613637913"
  },
  {
    title: "Github",
    url: "https://github.com/BreakingLead",
    desc: "BreakingLead"
  }

]

export function AppSidebar() {
  return (

    <SidebarProvider>
      <SidebarTrigger></SidebarTrigger>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Shattered Memories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Contact Me</SidebarGroupLabel>

            <ul className="m-5 text-sm">
              {
                contacts.map((item) => (
                  <li>
                    <a href={item.url} className="text-accent-foreground hover:bg-blue-200" target="_blank" rel="noopener noreferrer">
                      {item.title}
                      &nbsp;&nbsp;
                      {item.desc}
                    </a>

                  </li>
                ))
              }
            </ul>

          </SidebarGroup>

        </SidebarContent>
        <SidebarFooter>
          <ModeToggle />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider >
  )
}
