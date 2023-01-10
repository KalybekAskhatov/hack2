import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import '../HomePage/HomePage.css'
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const navigate = useNavigate()
  return (
    // sx={{ width: 1400, height: 600 }}
    <ImageList className='carousel-cards' >
      <ImageListItem key="Subheader" cols={2}>
        <Typography className='sales'>GENRES OF THE GAMES</Typography>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
          onClick={()=> navigate("/games")}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          onClick={()=> navigate("/games")}
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://wallpaperaccess.com/full/2141660.jpg',
    title: 'Puzzle',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.hdqwalls.com/wallpapers/ps5-games-4k-h0.jpg',
    title: 'Adventure',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://wallpapers.com/images/hd/destiny-the-taken-king-4k-gaming-y31a8hm3p7kpqjzt.jpg',
    title: 'Role-Playing    ',
    author: '@helloimnik',
  },
  {
    img: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/n/naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-switch/hero',
    title: 'Anime',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://www.99images.com/download-image/956773/3840x2160',
    title: 'Shooters',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://wallpaperaccess.com/full/917692.jpg',
    title: 'Simulation',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/e/ea-sports-fifa-23-nintendo-switch-legacy-edition-switch/hero',
    title: 'Sport',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.alphacoders.com/886/thumb-1920-886740.jpg',
    title: 'Fighting',
    author: '@katie_wasserman',
  },
  {
    img: 'https://asset.vg247.com/best-horror-games-vg247.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/best-horror-games-vg247.jpg',
    title: 'Horros',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://assets.rockpapershotgun.com/images/2020/02/Rust-Best-Survival-Games-2020.jpg',
    title: 'Survival',
    author: '@shelleypauls',
  },
  {
    img: 'https://media.wired.co.uk/photos/606dae60f19707fe1aef38f4/16:9/w_2560%2Cc_limit/CivilizationVI_screenshot_announce1.jpg',
    title: 'Strategy',
    author: '@peterlaster',
  },
  {
    img: 'https://digwallpapers.com/wallpapers/full/d/1/f/75145-3840x2160-video-game-wallpaper-image-desktop-4k.jpg',
    title: 'Casual',
    author: '@southside_customs',
    cols: 2,
  },
];