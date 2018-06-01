const yaml = require('js-yaml');
const axios = require('axios');
const fs = require('fs');

// const url = 'http://159.65.189.248/journals/';
const url = 'http://localhost:3030/journals/';

for (let i = 1000 ; i < 2000 ; i++) {
  let str = `https://raw.githubusercontent.com/transpose-publishing/policies-database/master/policies/policies/romeo_${i}.yml`;
  axios.get(str).then((response) => {
    if (response.status >= 400) {
      return;
    }
    try {
        const json = yaml.safeLoad(response.data);
        json._id = json['policy-id'];
        axios.post(url, json).then((response) => {
          console.log('Posted successfully!');
        })
    } catch (e) {
        console.log(e);
    }
  });
}
