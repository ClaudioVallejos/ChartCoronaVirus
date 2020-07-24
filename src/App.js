import React from 'react';

//importando componentes de index.js en la carpeta components
import {Cards, Charts, CountryPicker} from './components';
//import css
import styles from './App.modules.css';

//importando los datos desde la api
import { fecthData } from './api'

//importando imagen 
import topImage from './images/images.png'

class App extends React.Component{

    //creando el estado para manipular la info que viene desde la api
    state = {
        data: {},
        country: ''
    }

    //montando la data que viene desde la api
    async componentDidMount(){
        const fetchedData = await fecthData();
        this.setState({data: fetchedData});

    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fecthData(country);
        this.setState({data: fetchedData, country: country})
        console.log(fetchedData)
    }

    render() { 

        const {data, country} = this.state;

        return (
 
            <div className= {styles.container} >
                <img src={topImage} className={styles.image} alt="Covid-19"/>
                {/* pasando los datos al componente */}
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Charts data = {data} country= {country}/>
            </div>
        )
    }
}

export default App;