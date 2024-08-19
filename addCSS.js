// <link rel="stylesheet" type="text/css" href="../css/index.css">
const link = document.createElement('link');

link.rel = 'stylesheet';

link.type = 'text/css';

const date = new Date();

const year = date.getFullYear();

const time = year + '-' + date.getMilliseconds();


link.href = '../css/index.css' + '?update=' + time;

document.head.appendChild(link);