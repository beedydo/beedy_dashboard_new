/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import Switch from "@mui/material/Switch";

// Images
import logoPlant from "assets/images/small-logos/logo-plant.svg";
import team2 from "assets/images/team-2.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );
  const [lights1, setLights1] = useState(true);
  const [lights2, setLights2] = useState(true);
  const [lights3, setLights3] = useState(true);
  return {
    columns: [
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "members", accessor: "members", width: "10%", align: "left" },
      { Header: "temperature", accessor: "temperature", align: "center" },
      { Header: "lights", accessor: "lights", align: "center" },
      { Header: "hydration", accessor: "hydration", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoPlant} name="Plant 1" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        temperature: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            24.5
          </MDTypography>
        ),
        lights: (
          <MDBox width="8rem" textAlign="center">
            <Switch checked={lights1} onChange={() => setLights1(!lights1)} color="success" />
          </MDBox>
        ),
        hydration: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            100%
          </MDTypography>
        ),
      },
      {
        companies: <Company image={logoPlant} name="Plant 2" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        temperature: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            24.5
          </MDTypography>
        ),
        lights: (
          <MDBox width="8rem" textAlign="center">
            <Switch checked={lights2} onChange={() => setLights2(!lights2)} color="success" />
          </MDBox>
        ),
        hydration: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            100%
          </MDTypography>
        ),
      },
      {
        companies: <Company image={logoPlant} name="Plant 3" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        temperature: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            24.5
          </MDTypography>
        ),
        lights: (
          <MDBox width="8rem" textAlign="center">
            <Switch checked={lights3} onChange={() => setLights3(!lights3)} color="success" />
          </MDBox>
        ),
        hydration: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            100%
          </MDTypography>
        ),
      },
    ],
  };
}
