import React from "react";
import { Link } from "react-router-dom";
import "animate.css"
import {
  Card,
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import {
  CalendarDaysIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

export default function Navigation() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="navigation">
      {isMobile ? (
        //Mobile
        <div className="md:hidden">
          <React.Fragment>
            <Button
              className="rotate-90 relative z-10 left-7 top-4 p-3 rounded-none text-xl text-black bg-white border-none shadow-none hover:shadow-none"
              onClick={openDrawer}>
              |||
            </Button>
            <Drawer open={open} onClose={closeDrawer}>
              <div className="mb-2 flex items-center justify-between p-4">
                <img
                  src="../../public/assets/Logo.png"
                  alt=""
                  className="h-10 mt-2"
                />

                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </IconButton>
              </div>
              <List className="gap-5 ml-3">
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <Squares2X2Icon className="h-5 w-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <CalendarDaysIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Schedule
                </ListItem>
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <FolderIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Courses
                </ListItem>
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <ChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Statistic
                </ListItem>
                <ListItem className="hover:bg-white">
                  <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Settings
                </ListItem>
                <ListItem className="hover:bg-white mt-36 ml-1">
                  <ListItemPrefix>
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log out
                </ListItem>
              </List>
            </Drawer>
          </React.Fragment>
        </div>
      ) : (
        // Desktop
        <div className="hidden md:flex w-full animate__animated animate__fadeInLeft">
          <Card className="h-[calc(104vh-2rem)] bg-transparent max-w-[20rem] p-4 shadow-none">
            <div className="mb-10 p-4">
              <img src="../../public/assets/Logo.png" alt="" />
            </div>
            <List className="gap-5 ml-3">
              <ListItem className="hover:bg-white focus:bg-white">
                <ListItemPrefix>
                  <Squares2X2Icon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
              <ListItem className="hover:bg-white focus:bg-white">
                <ListItemPrefix>
                  <CalendarDaysIcon className="h-5 w-5" />
                </ListItemPrefix>
                Schedule
              </ListItem>
              <ListItem className="hover:bg-white focus:bg-white">
                <ListItemPrefix>
                  <FolderIcon className="h-5 w-5" />
                </ListItemPrefix>
                Courses
              </ListItem>
              <ListItem className="hover:bg-white focus:bg-white">
                <ListItemPrefix>
                  <ChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Statistic
              </ListItem>
              <ListItem className="hover:bg-white focus:bg-white">
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem className="hover:bg-white focus:bg-white mt-64">
                <ListItemPrefix>
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log out
              </ListItem>
            </List>
          </Card>
        </div>
      )}
    </div>
  );
}
