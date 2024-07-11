//come 'storare' un informazione nel mio progetto per condividere la stessa informazione in diverse pagine, e questa dev'essere reattiva

import { reactive } from "vue";

//facciamo l'export del file direttamente quando lo dichiariamo

export const store = reactive({
  //inseriamo l'oggetto da condividere come reattivo
  count: 0,
  saluto: 'ciao, sono store',
});