// URL base común
const base = "http://192.168.1.232:8080"

const baseURL = `${base}/api`;


//Boletos
export const boleto = `${baseURL}/boletos`;
export const boletoxruta = `${boleto}/xempresaAndRuta/`

//Conteo de Boletos
export const conteob = `${baseURL}/conteoB`;
export const conteobxbus = `${conteob}/conteoPorBusYFechaActual/`
export const conteoxaumentar = `${conteob}/aumentar`

//Registro ruta
export const registroruta = `${baseURL}/registroRuta`
export const registrorutaxbus = `${registroruta}/registrosPorBusYFechaActual/`
