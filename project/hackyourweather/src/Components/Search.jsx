import React, {useState, useEffect} from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { uuid } from 'uuidv4';

const useStyles = makeStyles((theme) => ({
    formInput: {
        marginBottom: theme.spacing(3)
    },
    inputText: {
        width: '25ch',
    },
    inputButtion: {
      marginLeft: theme.spacing(3),
      maringTop: theme.spacing(5),
      width: '10ch',
    }
  }));


const Search = ({weatherData, setWeatherData}) => {
    const classes = useStyles();
    const [cityName, setcityName] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState({show:false, text:''});

    const fetchWeatherData = (cityName) => {
        setError({show:false});
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            if(data.cod === 200){
                console.log(data);
                const cityWeatherData = {...data, id: uuid()}
                setWeatherData([cityWeatherData, ...weatherData]); 
            }
            else{
                console.log(data);
                setError({show:true, text: data.message})
            }
            setLoading(false);
        }).catch((err) => {
            setError({show:true, text: err.message});
            
        });
        setLoading(false);
    };

    const handleChange = (event) => {
        setcityName(event.target.value);        
    };
    
    const handleSubmit = (event) => {
        fetchWeatherData(cityName);
        setcityName('');
        event.preventDefault();
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setError({show: false})
        }, 4000);
        return () => clearTimeout(timer)
    }, [error.show])

    return (
        <>
            <form className={classes.formInput} autoComplete="off" onSubmit={handleSubmit}>
                <TextField className={classes.inputText} type="text" value={cityName} id="standard-basic" label="City eg. Amsterdam" onChange={handleChange} required/>
                <Button className={classes.inputButtion} type="submit"  variant="outlined" color="primary">
                    Submit
                </Button>
                <div className="loading">
                    {isLoading && <p>loading</p>}
                </div>
                {error.show && <Alert severity="error">{error.text}</Alert>}
            </form>
        </> 
    );
      
}

export default Search;