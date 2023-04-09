import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#5600ff"}}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
          >
          Boss Ultimate
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginLeft:25+'px' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{marginLeft:850+'px'}}>
          <Stack direction="row">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
        
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          < FullscreenIcon sx={{marginLeft:20+'px'}}/>
          <InvertColorsIcon sx={{marginLeft:20+'px'}}/>
          <Badge badgeContent={4} color="error">
          <NotificationsIcon sx={{marginLeft:20+'px'}} />
          </Badge>
          <Avatar sx={{marginLeft:20+'px'}} alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.2gB38A33ZjZPW3hvcmbenAHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
          </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}