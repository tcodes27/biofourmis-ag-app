import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="FAQ"
        subtitle="Need help? Review our internal resource center"
      />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary[200]} variant="h5">
            Human Resources Department
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>888-645-2444</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary[200]} variant="h5">
            Another Department
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>887-655-1000</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary[200]} variant="h5">
            Training
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>training.com</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary[200]} variant="h5">
            Meetings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            https://www.microsoft.com/en-us/microsoft-teams/group-chat-software
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.secondary[200]} variant="h5">
            E-Mail
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>email@email.com</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
