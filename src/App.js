import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import TextField from '@material-ui/core/TextField';

 const useStyles = makeStyles(theme => ({
   root: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-around',
     overflow: 'hidden',
     backgroundColor: theme.palette.background.paper   
   },
   gridList: {
     width: 650,
     height: 500,
   },
 }));
  
function App() {
const classes = useStyles();
    return (
  <React.Fragment>
    <container>
        <div style={{background:'black',color:'white' }}>
            <img style={{ display: 'flex',margin:'auto', paddingTop:'10px', paddingBottom:'5px'}} src='title.png'>
            </img>
        </div>
    </container>
    <container>
        <div style={{display: 'flex',}}>
            <form style={{display: 'flex',margin:'auto', paddingTop:'10px', paddingBottom:'20px'}}> 
              <TextField              
                type="text"
                placeholder="Buscar"
                style={{width: 600}}
               />
          </form>
     </div>  
    </container>

    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  </React.Fragment>
  );
}

export default App;
