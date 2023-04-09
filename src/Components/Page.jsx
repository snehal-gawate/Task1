import React from "react";
import Appbar from "./Appbar";
import { purple } from "@mui/material/colors";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsIcon from '@mui/icons-material/Collections';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import WindowIcon from '@mui/icons-material/Window';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import ShareIcon from '@mui/icons-material/Share';
import LinearProgress from '@mui/material/LinearProgress';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { Avatar, Stack, Typography,Card,BottomNavigationAction,BottomNavigation,
    Box, CardContent,Accordion,AccordionDetails,ListItemButton,ListItemText 
    ,IconButton,CardMedia,Button,Grid,Tab,Tabs, Container, Slider} from "@mui/material";
import { Sidebar } from "./Sidebar";
export const Page=()=>{


  
  
    return(
      <>
        
           <Appbar/> 
           
           <div style={{height:14+'vh',backgroundColor:"#7c00ff"}}>
            <Stack direction="row">
            
             <Avatar sx={{ width: 56, height: 56 }} src="https://th.bing.com/th/id/OIP.2gB38A33ZjZPW3hvcmbenAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
             <Card sx={{height:15+'vh',width:150+'px',backgroundColor:"#7c00ff",textAlign:"left",marginLeft:1+'vh'}}><Typography variant="subtitle1">John Doe</Typography>
             <Typography variant="body2">Administrator</Typography><Typography variant="subtitle1">online
             </Typography></Card>
               <Card sx={{height:9+'vh',marginLeft:45+'px',width:175+'vh'}}>
             
<Stack direction="row">
<Box sx={{width:40+'vh'}}>
< AccountBoxIcon  />
<Typography variant="body2">About</Typography></Box>

<Box sx={{width:40+'vh'}}>
<PeopleIcon  />
<Typography  variant="body2">20 connections</Typography></Box>

<Box sx={{width:40+'vh'}}>
<FavoriteIcon />  
<Typography  variant="body2">18 FAVORITES</Typography></Box>
<Box sx={{width:40+'vh'}}>
<CollectionsIcon />
<Typography variant="body2">4 ALBUMS</Typography></Box>

</Stack>


               </Card>
              </Stack> 
              
           </div>
           
           <Stack direction="row"><Sidebar/>

<Box sx={{marginBottom:150+'vh'}}>
<Stack direction="row">
           

           <Grid><Stack direction="column">
          <Card sx={{height:70+'vh',width:90+'vh',zIndex:1,marginLeft:6+'vh'}}><CardContent>
           <Stack direction="row">
          <Avatar src="https://th.bing.com/th/id/OIP.2gB38A33ZjZPW3hvcmbenAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
          <Box sx={{textAlign:"left",marginLeft:1+'vh'}}>
             <Typography variant="subtitle1" >John Doe</Typography>
             <Typography variant="body2">separtember,12,2018</Typography></Box>
             <IconButton sx={{marginLeft:50+'vh'}}><MoreVertIcon  /></IconButton>
             </Stack>
             <CardMedia
        sx={{ height: 300,marginTop:2+'vh' }}
        image="https://i.pinimg.com/originals/d9/b3/21/d9b321c40296f6e15e2c4a5496c6d8e7.jpg"
      /><br/>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis unde repudiandae!
  <br/>
  <Box sx={{marginRight:30+'vh'}} >
  <BottomNavigationAction label="Recents"  sx={{color:"red"}} icon={<FavoriteIcon  />}/>
        <BottomNavigationAction label="Favorites" icon={< ShareIcon />} />
        <BottomNavigationAction label="Nearby" icon={<InsertCommentIcon />}/>
          </Box>  </CardContent></Card>
          
          <Stack direction="row">
         <Card sx={{height:17+'vh',width:90+'vh',zIndex:1,marginLeft:6+'vh',marginBottom:50+'vh',marginTop:4+'vh'}}><CardContent>
         <Stack direction="row">
          <Avatar  src="https://th.bing.com/th/id/OIP.2gB38A33ZjZPW3hvcmbenAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
          <Box sx={{textAlign:"left",marginLeft:1+'vh'}}>
             <Typography variant="subtitle1" >John Doe</Typography>
             <Typography variant="body2">separtember,12,2018</Typography></Box>
             <IconButton sx={{marginLeft:50+'vh'}}><MoreVertIcon  /></IconButton>
             </Stack><Typography variant="body2" sx={{marginTop:2+'vh'}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae sequi, tempore quaerat minima nisi expedita impedit, nobis esse doloribus earum, ullam possimus harum!
             </Typography> </CardContent></Card>

         </Stack>
          </Stack>
          </Grid>
          
          <Stack direction="column"><Card sx={{height:15+'vh',width:75+'vh',bgcolor:" #d94d8f",marginLeft:5+'vh'}}><CardContent>
            <Typography variant="h5" color="white">Profile Strenth intermediat</Typography>
            <Button sx={{color:"red",bgcolor:"white",borderRadius:15+'%',height:3+'vh'}} >60% progress</Button>
            <Box height={1+'vh'}/>
            <Box sx={{ width: '60%' }}>
              <Slider sx={{color:"white"}}/>
      <LinearProgress />
    </Box>
            </CardContent></Card>

          <Card sx={{height:38+'vh',width:75+'vh',marginTop:4+'vh',marginLeft:5+'vh'}}><CardContent>
          <Stack direction="row">
          <IconButton aria-label="delete">
           <AccountBoxIcon /></IconButton>
           <Box sx={{ borderBottom: 3, borderColor: 'purple' }}>
        <Tabs  aria-label="basic tabs example">
          <Tab label="Item One"  />
        </Tabs>
      </Box></Stack>
      <Typography variant="body2">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat excepturi laboriosam doloremque molestiae nesciunt iste.    
</Typography> 
<Box height={4+'vh'}/>
<Box>


<Stack direction="row">
<IconButton sx={{bgcolor:"gray",color:"white"}}>
          <DateRangeIcon /> </IconButton>
          <Box sx={{textAlign:"left",marginLeft:1+'vh'}}>
             <Typography variant="body2" >Born</Typography>
             <Typography variant="body2">jan 9,1994</Typography></Box>
             </Stack>
             <Stack direction="row">
             <IconButton sx={{bgcolor:"gray",color:"white"}}>
          <PhoneIcon  /> </IconButton>
          <Box sx={{textAlign:"left",marginLeft:1+'vh'}}>
             <Typography variant="body2" >phone</Typography>
             <Typography variant="body2">(+62)8765432190</Typography></Box>
             </Stack>
             <Stack direction="row">
              <IconButton sx={{bgcolor:"gray",color:"white"}}>
          <DateRangeIcon variant="outlined" />
          </IconButton>
          <Box sx={{textAlign:"left",marginLeft:1+'vh'}}>
             <Typography variant="body2" >Address</Typography>
             <Typography variant="body2">jan 9,1994</Typography></Box>
             </Stack>

  </Box>
  
 </CardContent></Card>
 
 <Card sx={{height:30+'vh',width:75+'vh',zIndex:1,marginLeft:5+'vh',marginTop:3+'vh',textAlign:'left'}}><CardContent>
 <Stack direction="row"><CollectionsIcon /><Typography variant="h5" sx={{marginLeft:3+'vh'}}>My Albums (6)</Typography></Stack>
    <Stack direction="row">
  <CardMedia  sx={{height:160+'px',width:30+'vh',marginLeft:3+'vh'}} image="https://trulydestiny.com/wp-content/uploads/2017/08/Truly_Destiny_Gingham_Sweater-683x1024.jpg"/>
  <CardMedia sx={{height:160+'px',width:30+'vh',marginLeft:2+'vh'}} image="https://www.onlinepharmacy.qa/img/Categories/1144/shutterstock-308139848%20-%20Copy240x240.png"/>
  </Stack></CardContent></Card>
 </Stack>

          </Stack>
         </Box></Stack>
         </>
    )
}