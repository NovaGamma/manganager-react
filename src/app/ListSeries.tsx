import React, { useEffect, useState } from 'react';
import { ListItem, Button } from '@mui/material';
import DisplaySerie from './DisplaySerie';
import Serie from './models/Serie';

const ListSeries = () => {
    const [series, setSeries] = useState<Serie[]>([])

    let params = {'finished':false, 'sort': "date"}
    let add: string = ''
    let input: string = ''

    useEffect(() => {
        const getChapterList = () => {
            fetch(`http://127.0.0.1:4444/API/get_read_list?finished=${params.finished}&sort=${params.sort}`)
                .then(response => response.json())
                .then(data => {
                    setSeries(data)
                    // Faites quelque chose avec les données reçues (par exemple, mettez à jour le state)
                    // series = data; // Vous pouvez remplacer cette ligne par une mise à jour du state si nécessaire
                })
                .catch(error => {
                    // Gérez les erreurs ici
                    console.error("Erreur lors de la récupération des données :", error);
                });
        };
    
        getChapterList();
    }, [])

    return (
        series.map((serie) => <DisplaySerie key={serie.title} serie={serie} />)
    );
}

export default ListSeries;