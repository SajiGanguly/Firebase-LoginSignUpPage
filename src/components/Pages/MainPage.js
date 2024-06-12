import React from "react";
import TheBreadcrumb from "../Breadcrumbs";
import TheAppBar from "../Appbar";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const footerStyle = {
  position: "fixed",
  display:'flex',
  justifyContent:'space-around',
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "#352ff7",
  color: "white",
  textAlign: "center",
  padding: "20px",
};

function MainPage() {
  return (
    <>
      <TheAppBar />
      <div style={{ display: "flex", justifyContent: "center", padding:'2%',boxShadow: "0 4px 8px rgba(0,0,0,0.1)",backgroundColor:"ButtonHighlight"}}>
        <TheBreadcrumb />
      </div>

    <div>
    
    </div>


      <footer style={footerStyle}>
        {" "}
        &copy; {new Date().getFullYear()} Demo Company    
         <div><InstagramIcon/> <FacebookIcon/> <EmailIcon/></div>
         </footer>
    </>
  );
}

export default MainPage;
