/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import DisasterInfoManagement from "views/examples/DisasterInfoManagement";
import DisasterReliefManagement from "views/examples/DisasterReliefManagement";
import RegisterasNGO from "views/examples/RegisterasNGO.js";
import Tables from "views/examples/Tables.js";
import Home from "views/frontpages/Home.js";
import Messages from "views/examples/Messages.js";
import Donation from "views/examples/DonationAdmin.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/DisasterInfoManagement",
    name: "Disaster Information Management",
    icon: "ni ni-tv-2 text-primary",
    component: DisasterInfoManagement,
    layout: "/admin"
  },
  {
    path: "/DisasterReliefManagement",
    name: "Disaster Relief  Management",
    icon: "ni ni-tv-2 text-primary",
    component: DisasterReliefManagement,
    layout: "/admin"
  },
  // {
  //   path: "/RegisterasNGO",
  //   name: "Register as NGO",
  //   icon: "ni ni-tv-2 text-primary",
  //   component:RegisterasNGO ,
  //   layout: "/admin"
  // },
  {
    path:"/Messages",
    name:"Messages",
    // icon: "ni ni-tv-2 text-primary",
    icon: "ni ni-email-83 text-pink",
    component: Messages,
    layout: "/admin"
  },
  {
    path:"/Donations",
    name:"Donations",
    // icon: "ni ni-tv-2 text-primary",
    icon: "ni ni-tv-2 text-primary",
    component: Donation ,
    layout: "/admin"
  },
  {
    path:"/",
    name:"Go to Website",
    // icon: "ni ni-tv-2 text-primary",
    icon: "ni ni-planet text-primary",
    component: Donation,
    //  layout: "/auth"
  }
];
export default routes;
