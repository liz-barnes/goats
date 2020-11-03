import axios from 'axios';

const getGoats = () => new Promise((resolve, reject) => {
  axios
    .get(`https://fir-cows-958ae.firebaseio.com/react-goats.json`)
    .then((response) => {
        const allGoats = response.data;
        const goats = [];
        if (allGoats) {
          Object.keys(allGoats).forEach((goatId) => {
            goats.push(allGoats[goatId]);
          });
        } 
        console.warn(goats);
        resolve(goats);
      })
      .catch((error) => reject(error));
});

export default getGoats
