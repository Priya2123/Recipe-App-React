import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Divider
        style={{
          color: "white",
          backgroundColor: "white",
          height: "0.1vh",
          width: "100vw",
        }}
      />
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{
          backgroundColor: "#FFF1E6",
          color: "#000",
          padding: "3vh 0 8vh 0",
        }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container lg={12} md={12} sm={12} xs={12}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Grid container lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    LOCATION
                    <Typography
                      variant="body1"
                      style={{ padding: "1vh 0 4vh 0" }}
                    >
                      India
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Grid container lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    AROUND THE WEB
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      padding: "1vh 0 4vh 0",
                    }}
                  >
                    <FacebookIcon
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                    <WhatsAppIcon
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                    <InstagramIcon
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                    <YouTubeIcon
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                    <TwitterIcon
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Grid container lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    CONTACT US
                    <Typography
                      variant="body1"
                      style={{ padding: "1vh 0 4vh 0" }}
                    >
                      11111-11111 <br />
                      22222-22222
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
