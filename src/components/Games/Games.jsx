import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Games/Games.css'

export default function MediaCard() {
  return (
    <div className='library'>
      <h1 className='h1'>Get more information about the games here</h1>
    <div id='games'>
        
    <Card className='library-cards' sx={{ maxWidth: 1700 }}>
      <img width="100%" height="700px" src="https://cdna.artstation.com/p/assets/images/images/026/878/440/large/dmitry-slivin-.jpg?1589980281" alt="" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          GachiBoys
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='library-btn' size="small">Share</Button>
        <Button className='library-btn' size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='library-cards' sx={{ maxWidth: 1700 }}>
      <img width="100%" height="700px" src="https://cdn.akamai.steamstatic.com/steam/apps/221100/ss_7892d0526421d31a3d1eebb6cf919118fcfb2ca5.1920x1080.jpg?t=1667310902" alt="" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
         DayZ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='library-btn' size="small">Share</Button>
        <Button className='library-btn' size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='library-cards' sx={{ maxWidth: 1700 }}>
      <img width="100%" height="700px" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/naruto-shippuden-ultimate-ninja-storm-4/2/2f/Pljs74006tgs2015s03jpg-9b29b4.jpg?width=1280" alt="" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Naruto UNS4
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='library-btn' size="small">Share</Button>
        <Button className='library-btn' size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}