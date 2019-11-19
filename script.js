const LOG_MESSAGE = 'message log';
const WARN_MESSAGE = 'message warn';
const ERROR_MESSAGE = 'message error';
const DIR_MESSAGE = document.getElementById('example-dir');
const TIME_URL = 'https://jsonplaceholder.typicode.com/posts';
const NAME = 'Sara';
const AGE = 25;
const TABLE_OBJECT = 
    {
        name: 'Mike',
        age: 25,
        designation: 'VP Marketing'
    }

// Plain console message;
console.log(LOG_MESSAGE);

//Console message with CSS properties
console.log("%c" + LOG_MESSAGE, "color:green;font-size:40px");

//Console message with varaibles
console.log("%s is %d years old", NAME, AGE);

//Console Warn
console.warn(WARN_MESSAGE);

//Console Error
console.error(ERROR_MESSAGE);

//Console Assert
console.assert(AGE === 26);
console.assert(AGE === 25);

//Console Dir
console.dir(DIR_MESSAGE);
console.log(DIR_MESSAGE);

//Console Table
console.log(TABLE_OBJECT);
console.table(TABLE_OBJECT);

//Console Timer
console.time('fetch_name');
fetch(TIME_URL)
  .then(response => response.json())
  .then(console.timeEnd('fetch_name'));

// Console Clear
console.clear();

