const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('test_file.txt', "Content here means command worked!", 'utf8', (err) => {
    if (err) throw err;

    console.log('File created!');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./test-directory', (err) => {
    if (err) throw err;

    console.log('Directory created!');
  });
};
