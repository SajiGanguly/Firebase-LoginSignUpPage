const fs = require('fs');

fs.access('.env', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('.env file does not exist');
  } else {
    console.log('.env file exists');
  }
});
