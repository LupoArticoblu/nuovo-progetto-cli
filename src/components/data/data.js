const nomi = [
  'pippo',
  'pluto',
  'paperino',
  'topolino',
  'mario',
  'luigi',
];

const code = 'fewegfrghghjukilie5rty';

const getRandomNumber = (min , max) => Math.floor(Math.random() * (max - min) + min);

//una serie di variabili, funzioni e altri dati nel mio progetto, vediamo come si esportano in un file .js utilizzando export

export { nomi, code, getRandomNumber };