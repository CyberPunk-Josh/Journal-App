import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, List, Grid, ListItemText } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: {sm : 0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block '},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div' >
                    Joshue Neyra
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( texto => (
                        <ListItem key={ texto } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ texto }/>
                                    <ListItemText secondary={ 'Lorem nfwenfowiefnlskfo fknwoefniwoeif jdsjfndf cjdow nodw'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
