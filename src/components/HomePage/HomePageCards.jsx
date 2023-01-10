import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import '../HomePage/HomePage.css'

export default function HomePageCards() {

  const navigate = useNavigate()
  return (
    <div className='card-div'>
         <h2 className='sales'>THE CHEAPEST PRICES ARE HERE FOR YOU</h2>
    <div className='homepage-cards'>  
    <Card className='home-cards'  sx={{maxWidth: 345,}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://upload.wikimedia.org/wikipedia/ru/thumb/c/c9/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg/640px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B8%D0%B3%D1%80%D1%8B_PlayerUnknown%27s_Battlegrounds.jpg'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent className='homepage-cards-title'>
          <Typography  gutterBottom variant="h5" component="div">
            PUBG
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> navigate('/list')} size="medium" color="primary">
          16$
        </Button>
      </CardActions>
    </Card>
    <Card  className='home-cards'  sx={{ maxWidth: 345}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://cdn.pocket-lint.com/r/s/970x/assets/images/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valorant
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> navigate('/list')}  size="small" color="primary">
          22$
        </Button>
      </CardActions>
    </Card>
    <Card className='home-cards' sx={{ maxWidth: 345}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://image.api.playstation.com/vulcan/ap/rnd/202211/1717/6Of7qTgej2FBAKH0xZ1ZFEi7.png'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WARZONE
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> navigate('/list')} size="small" color="secondary">
          11$
        </Button>
      </CardActions>
    </Card>
    <Card className='home-cards' sx={{ maxWidth: 345,}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://image.api.playstation.com/vulcan/ap/rnd/202010/1512/8ThoZrE519SBuOMpYKFunYS0.png'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apex Legends
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button onClick={()=> navigate('/list')} size="medium" color="secondary">
          16$ 
        </Button>
      </CardActions>
    </Card>
    <Card className='home-cards' sx={{ maxWidth: 345,}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://upload.wikimedia.org/wikipedia/en/a/a8/Day_Z_cover.jpg'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Day-Z
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button onClick={()=> navigate('/list')} size="medium" color="secondary">
          16$ 
        </Button>
      </CardActions>
    </Card>
    <Card className='home-cards' sx={{ maxWidth: 345,}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            FORTNITE
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button onClick={()=> navigate('/list')} size="medium" color="secondary">
          16$ 
        </Button>
      </CardActions>
    </Card>
    <Card className='home-cards' sx={{ maxWidth: 345,}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         src='https://cdn-prod.scalefast.com/public/assets/user/122595/image/07d46eb2c3db8e017d4466d855b6a1a7.jpg'
          alt="green iguana"
          onClick={()=> navigate("/list")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Naruto SUNS4
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button onClick={()=> navigate('/list')} size="medium" color="secondary">
          16$ 
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}