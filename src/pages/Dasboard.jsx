import React from "react";
import {
  Navbar,
  Input,
  Card,
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  CalendarDaysIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";

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
              className="rotate-90 p-3 rounded-none text-xl text-black bg-white border-none shadow-none hover:shadow-none"
              onClick={openDrawer}>
              |||
            </Button>
            <Drawer open={open} onClose={closeDrawer}>
              <div className="mb-2 flex items-center justify-between p-4">
                <h1 className="text-xl text-black font-bold cursor-pointer">
                  Wise
                </h1>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  Analytics
                  <ListItemSuffix>
                    <Chip
                      value="5"
                      size="sm"
                      color="green"
                      className="rounded-full"
                    />
                  </ListItemSuffix>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  Sales
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  Profile
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ListItemPrefix>
                  Tables
                </ListItem>
              </List>
              <Button className="mt-3 ml-5" size="sm">
                Documentation
              </Button>
            </Drawer>

            <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button
                  type="button"
                  class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg
                    class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Home
                  </span>
                </button>
                <button
                  type="button"
                  class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg
                    class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                    <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Wallet
                  </span>
                </button>
                <button
                  type="button"
                  class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg
                    class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                    />
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Settings
                  </span>
                </button>
                <button
                  type="button"
                  class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg
                    class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Profile
                  </span>
                </button>
              </div>
            </div>
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
              <ListItem className="hover:bg-white">
                <ListItemPrefix>
                  <Squares2X2Icon className="h-5 w-5" />
                </ListItemPrefix>
                Overview
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
              <ListItem className="hover:bg-white mt-64">
                <ListItemPrefix>
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log out
              </ListItem>
            </List>
          </Card>
          <div className="w-full">
            <div className="Menu flex bg-white mt-8 h-[calc(95vh-2rem)] rounded-3xl shadow-2xl p-9">
              <div className="container max-w-[40rem]">
                <div className="header-menu">
                  <span className="text-4xl">Overview</span>
                  <p className="text-[#979CA5] text-sm mt-2">
                    Welcome back, Bella! Your progress is really good. Keep it
                    up
                  </p>
                </div>
                <div className="body-menu mt-5 gap-10 flex">
                  <img
                    src="../../public/assets/Menu1.png"
                    alt=""
                    className="h-56"
                  />
                  <img
                    src="../../public/assets/Menu2.png"
                    alt=""
                    className="h-56 shadow-md rounded-md"
                  />
                </div>
                <div className="low-menu mt-10 max-w-[39rem] pl-2">
                  <div className="low-1 flex justify-between">
                    <span className="text-xl font-bold">User</span>
                    <div className="back-next flex gap-5">
                      <span className="flex items-center text-lg text-[#FFD143]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#FFD143"
                          className="w-5 h-5 font-bold">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                        Back
                      </span>
                      <span className="flex items-center text-lg text-[#FFD143]">
                        Next{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#FFD143"
                          class="w-5 h-5">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-menu relative bottom-9 left-24">
                <div className="h-[46.29rem] rounded-r-3xl w-96 bg-[#F6F2DD]"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
