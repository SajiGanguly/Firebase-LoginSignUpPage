import React from "react";
import { useEffect } from "react";
import TheBreadcrumb from "../Breadcrumbs";
import TheAppBar from "../Appbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Skeleton } from "@mui/material";

const footerStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "space-around",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "#152238",
  color: "white",
  textAlign: "center",
  padding: "10px",
};

const headerStyle = {
  backgroundColor: "#152238",
  color: "white",
  padding: "10px 20px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const navStyle = {
  backgroundColor: "#8babe0",
  padding: "10px 10px",
  borderBottom: "1px solid #ccc",
  display: "flex",
  justifyContent: "center",
};

const mainbodyStyle = {
  backgroundColor: "white",
  padding: "20px",
  border: "2px solid #ccc",
  borderRadius: "6px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  minHeight: "400px",
};

function MainPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header style={headerStyle}>
        {" "}
        <TheAppBar />
      </header>

      <nav style={navStyle}>
        <TheBreadcrumb />
      </nav>

      <main
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <div style={mainbodyStyle}>
          {isLoading ? (
            <Skeleton variant="rect" height={200} animation="wave" />
          ) : (
            <div>HELLO</div>
          )}
        </div>
      </main>

      <footer style={footerStyle}>
        {" "}
        &copy; {new Date().getFullYear()} Demo Company
        <div>
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <EmailIcon />
        </div>
      </footer>
    </>
  );
}

export default MainPage;
