import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Drawer,
  Button,
  Typography,
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

import Sidebar from "../../components/Left-Menu";

const Navigation = () => {
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
    <div className="flex">
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
        <div className="hidden md:flex w-full">
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

      <div className="Menu bottom-3 flex right-5 rounded-md md:rounded-3xl relative md:static md:right-[30rem] bg-white mt-8 shadow-2xl p-9 md:h-[calc(96vh-2rem)] w-full md:w-[300rem]">
        <Sidebar />
        <div className="right-menu hidden md:block bottom-[2.25rem] relative left-[35rem]">
          <div className="h-[calc(96vh-2rem)] w-80 bg-[#F6F2DD] rounded-r-3xl pt-16 px-5">
            <div className="flex flex-col justify-center items-center text-center border-b-[1px] border-black pb-10">
              <img src="../../public/assets/Avatar.png" alt="" />
              <span className="text-3xl mb-3">Eve Holt</span>
              <span className="text-xl text-[#979CA5]">Admin</span>
            </div>

            <div className="flex justify-between mt-5 px-2">
              <span className="text-xl">Reminder</span>
              <button className="rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>
            <div className="list-menu justify-center flex mt-5">
              <div className="flex flex-col gap-5">
                <Button className="bg-white hover:bg-white w-64 flex justify-between items-center shadow-none hover:shadow-none">
                  <a className="p-2 bg-[#f9e4d1] flex rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FF993A"
                      className="w-6 h-6">
                      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </a>
                  <div className="text flex flex-col">
                    <span className="text-sm font-medium">Homework</span>
                    <span className="text-[10px] text-[#979CA5]">
                      8.00 AM - 12.00 PM
                    </span>
                  </div>
                  <span className="text-lg text-[#979CA5] rotate-90">
                    . . .
                  </span>
                </Button>
                <Button className="bg-white hover:bg-white w-64 flex justify-between items-center shadow-none hover:shadow-none">
                  <a className="p-2 bg-[#f9e4d1] flex rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FF993A"
                      className="w-6 h-6">
                      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </a>
                  <div className="text flex flex-col">
                    <span className="text-sm font-medium">Assignment</span>
                    <span className="text-[10px] text-[#979CA5]">
                      8.00 AM - 12.00 PM
                    </span>
                  </div>
                  <span className="text-lg text-[#979CA5] rotate-90">
                    . . .
                  </span>
                </Button>
                <Button className="bg-white hover:bg-white w-64 flex justify-between items-center shadow-none hover:shadow-none">
                  <a className="p-2 bg-[#f9e4d1] flex rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FF993A"
                      className="w-6 h-6">
                      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </a>
                  <div className="text flex flex-col">
                    <span className="text-sm font-medium">Exercise</span>
                    <span className="text-[10px] text-[#979CA5]">
                      8.00 AM - 12.00 PM
                    </span>
                  </div>
                  <span className="text-lg text-[#979CA5] rotate-90">
                    . . .
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
