import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
  });

const CityCard = ({cityData, weatherData, setWeatherData}) => {
    
    const classes = useStyles();
    const {name, id,  sys : {country}, weather :[{main, description}], main : {temp_min, temp_max}, coord : {lon, lat} } = cityData;
    console.log({cityData});
    console.log({id});
    const handleDelete = () =>{
        console.log("delelete");
        const tempData = weatherData.filter(aCityData => aCityData.id !== id);
        setWeatherData(tempData)

    }
    return (
        <Card className={classes.root}>
            
            <Tooltip title="Delete">
                <IconButton  onClick={handleDelete} aria-label="delete">
                <DeleteIcon />
                </IconButton>
            </Tooltip>
            <CardContent>
                
                <Typography variant="h5" component="h2" >
                {name}, {country}
                </Typography>
                <Typography variant="h5" component="h2">
                {main}
                </Typography>

                <Typography variant="body2" component="p">
                {description}<br />
                Min Temp : {(temp_min - 273.15).toFixed(3)} &#x2103;<br />
                Max Temp : {(temp_max - 273.15).toFixed(3)} &#x2103;<br />
                Location :{lat}, {lon}
                <br />
                </Typography>
            </CardContent>
            
        </Card>
    )
}
 
export default CityCard;