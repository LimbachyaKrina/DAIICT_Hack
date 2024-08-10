import { Box, Button, Typography, useTheme, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Header from "../../components/Header";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Plant 1"
              height="140"
              image="https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Plant 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica..
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Report</Button>
            </CardActions>
          </Card>
        </Box>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Plant 2"
              height="140"
              image="https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Plant 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Plant 2.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Report</Button>
            </CardActions>
          </Card>
        </Box>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Plant 3"
              height="140"
              image="https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Plant 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Plant 3.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Report</Button>
            </CardActions>
          </Card>
        </Box>
        <Box gridColumn="span 3">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Plant 4"
              height="140"
              image="https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Plant 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Plant 4.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Report</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
