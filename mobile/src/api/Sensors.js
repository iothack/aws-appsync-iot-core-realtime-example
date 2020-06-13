import { API, graphqlOperation } from 'aws-amplify';
import { getSensor } from '../graphql/queries';

export const GetSensor = async (sensorId) => {

    try {

        const response = await API.graphql(graphqlOperation(getSensor, { sensorId: sensorId}));

        if (response.data && response.data.getSensor) {
            
            return response.data.getSensor;

        }
        else {

            return null;
        }

    } catch (error) {
        throw error;
    }
}

export const GetSensorStatusColor = (status) => {
    
    let r = "";

    if (status === 1) {
        r = "green"
    } else if (status === 2) {
        r = "yellow"
    } else if (status === 3) {
        r = "red"
    } else {
      r = "white"
    }

    return r;
}
