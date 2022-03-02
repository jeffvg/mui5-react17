import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/CustomizedAccordions';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const navigate = useNavigate();
  return (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      BLUI in Vegas <button onClick={() => navigate(-1)}>Go Back</button>
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://brightlayer-ui.github.io/static/media/design-system.354189a0.jpg"
        alt=""
        height={320}
      />
      <ImageCollage />
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
      What Happens In Vegas, Stays In Vegas
    </Typography>
    </Box>
    <Box marginBottom={10}>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
      Frequently Asked Questions
    </Typography>
    <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
        <BasicModal />
        </BottomNavigation>
      </Paper>
  </Container>
);
};

export default Tour;
