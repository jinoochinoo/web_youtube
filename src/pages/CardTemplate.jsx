import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Main from '../components/section/Main'

import food_1 from '../assets/img/cardTemplate/food_1.png';
import food_2 from '../assets/img/cardTemplate/food_2.png';
import food_3 from '../assets/img/cardTemplate/food_3.png';
import food_4 from '../assets/img/cardTemplate/food_4.png';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const styleObj = {
    div: {
        'justify-content': 'space-around'
    }
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
];

export default function ActionAreaCard() {

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const tableTemplatePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            
            <section id='developerPage' className={tableTemplatePageClass}>
                <h2>🥰 material-ui 함 써봐쓰</h2>
                    <div className="developer__inner" style={styleObj.div}>
                        
                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_4}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        
                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 345, margin: '20px' }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={food_4}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>

                        <div style={{'margin-top': '50px'}}>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>

                    </div>
                    
            </section>
        </Main>



    );
  }