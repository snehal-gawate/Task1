import React from "react";
import {Grid,Card,CardContent,ListItemButton ,Typography,AccordionDetails} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import WindowIcon from '@mui/icons-material/Window';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import {Accordion} from "@mui/material";

export const Sidebar=()=>{
    return(
        <div>
            <Card style={{zIndex:1,marginBottom:5+'vh',position:'sticky'}}>       
            <CardContent> <Accordion sx={{width:35+'vh'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        
        >
         <WindowIcon/> <Typography sx={{marginLeft:2+'vh'}}>Home</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion sx={{width:35+'vh'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
         <ScatterPlotIcon/> <Typography sx={{marginLeft:2+'vh'}}>Application</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion sx={{width:35+'vh'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
         
        >
         <LibraryBooksIcon /> <Typography sx={{marginLeft:2+'vh'}}>Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
          <ListItemButton sx={{color:"red"}} >AUTH PAGE</ListItemButton>
          <ListItemButton > Login</ListItemButton>
          <ListItemButton > Login ver.2</ListItemButton>
          <ListItemButton > Login ver.3</ListItemButton>
          <ListItemButton >Register</ListItemButton>
          <ListItemButton >Register ver.2</ListItemButton>
          <ListItemButton >Register ver.3</ListItemButton>
          <ListItemButton >Reset password</ListItemButton>
          <ListItemButton >Lock screen</ListItemButton>
          <ListItemButton sx={{color:"red"}}>GENRAL</ListItemButton>
          <ListItemButton > User profile</ListItemButton>
          <ListItemButton > blank page</ListItemButton>
          <ListItemButton >Pricing page</ListItemButton>
          <ListItemButton >Register</ListItemButton>
          <ListItemButton >Photo Gallery</ListItemButton>
          <ListItemButton >Setting</ListItemButton>
          <ListItemButton >Help and support</ListItemButton>
          <ListItemButton >Meintence</ListItemButton>
          </Typography>
        
        </AccordionDetails>
        {/* <AccordionDetails>
          <Typography variant="body2">
     
          </Typography>
        
        </AccordionDetails> */}
      </Accordion>
      </CardContent>
           </Card>
        </div>
    )
}