const yaml = require('js-yaml');
const axios = require('axios');
const fs = require('fs');


for (let i = 1000 ; i < 2000 ; i++) {
  let str = `https://raw.githubusercontent.com/transpose-publishing/policies-database/master/policies/policies/romeo_${i}.yml`;
  axios.get(str).then((response) => {
    if (response.status >= 400) {
      return;
    }
    // console.log(response.data);
    try {
        const json = yaml.safeLoad(response.data);
        json._id = json['policy-id'];
        axios.post('http://localhost:3030/journals', json).then((response) => {
          console.log('Posted successfully!');
          // console.log(response);
        })
        // const indentedJson = JSON.stringify(config, null, 4);
        // console.log(indentedJson);
    } catch (e) {
        console.log(e);
    }
  });
}
