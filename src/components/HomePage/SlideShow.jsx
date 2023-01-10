import React, { useEffect, useState } from "react";
import '../HomePage/SlideShow.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const delay = 2500;


function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const navigate = useNavigate()
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {itemData.map((item,) => (
        <div>
        <Card className='slide-cards'  > 
            <CardActionArea className="slide">
                <CardMedia
                className="homepage-img"
                 component="img"
                 height="250"
                src={item.img}
                 alt="green iguana"
                 onClick={()=> navigate("/list")}/>
                 <Typography id="slides-cards-title">{item.title}</Typography>
            </CardActionArea>
        </Card>
        </div>
      ))}
      </div>

    </div>
  );
}
const itemData = [

    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
  
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
  
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
  
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
  
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
  
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
    {
      img: 'https://wallpaperaccess.com/full/2141660.jpg',
      title: 'Puzzle',
      
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
  
]

export default SlideShow;