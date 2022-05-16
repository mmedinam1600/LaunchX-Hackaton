
import axios from 'axios';

const getBasura = async () => {
  try {

    const request = await axios.get(
      'http://localhost:8080/trash',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return request.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error on axios request: \nMessage: ' + error.message + "\nURL: "+ error.config.method + " " + error.config.url);
      throw new Error ('Error on axios request: \nMessage: ' + error.message + "\nURL: "+ error.config.method + " " + error.config.url);
    } else {
      console.log('Unexpected error on getInfoIP: ', error);
      throw new Error ('Unexpected error on getInfoIP: ' + error);
    }
  }
}

export default getBasura;