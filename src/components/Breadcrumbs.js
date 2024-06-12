import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[900];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function TheBreadcrumbs() {
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component={motion.a}
            href="#"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
            whileHover={{ scale: 1.1 }}
          />
          <StyledBreadcrumb
            component={motion.a}
            whileHover={{ scale: 1.1 }}
            href="#"
            label="Catalog"
          />
          <StyledBreadcrumb
            component={motion.a}
            label="Accessories"
            deleteIcon={<ExpandMoreIcon />}
            onDelete={handleClick}
            whileHover={{ scale: 1.1 }}
          />
        </Breadcrumbs>
      </div>
      {/* <div>
        <SearchIcon />
      </div> */}
    </>
  );
}
