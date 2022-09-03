import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SensorsList() {

    const [sensorsArray, setSensorsArray] = useState([]);

    const fetchNotes = async() =>{
        const { data } = await axios.get('http://localhost:5000/sensors/');
        setSensorsArray(data);
    }

    useEffect(()=>{
        fetchNotes();
    },[]);

    function createRaw(sensor) {
        return (
            <tr>
            <td>{sensor._id}</td>
            <td>{sensor.sensorName}</td>
            <td>{sensor.sensorTemperature}</td>
            <td>{sensor.sensorStatus}</td>
        </tr>
        );
      }
  
    return (
    <div>
     <h1>Sensors List</h1>
     <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Sensor Id</th>
                    <th>Sensor Name</th>
                    <th>Sensor Temperature</th>
                    <th>Sensor Status</th>
                    </tr>
                </thead>
                <tbody>
                {sensorsArray.map(createRaw)}
                </tbody>
            </table>
    </div>
    );

    
  
}
export default SensorsList;