import React, { useEffect } from 'react';
import { ListItem, Button, Card, LinearProgress, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Serie from './models/Serie';


interface DisplaySerieProps {
    serie: Serie
}

const DisplaySerie: React.FC<DisplaySerieProps> = ({serie}) => {

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"http://127.0.0.1:4444/API/get_preview/"+serie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {serie.title}
            </Typography>
            
            <LinearProgress variant="determinate" value={Math.floor((serie.last_chapter_read / serie.last_chapter)*100)}/>
            {serie.last_chapter_read} / {serie.last_chapter}
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default DisplaySerie;