import { StyleSheet } from "react-native";
import { BotonColorOscuro, ColorTexto, ColorTextoBoton, ColotTexto } from "./PaletaDeColores";

export const general = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: ColorTexto,
    textAlign: "center",
  },
  botonesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Coloca los botones en la parte inferior
    justifyContent: 'space-between', // Espaciado uniforme entre los botones
    height: '10%',
    //marginTop: "97%"
  },
  boton: {
    flex: 1, // Ocupa todo el espacio horizontal disponible
    backgroundColor: 'green',
    height: "100%",
    textAlign: "center",
    justifyContent:"center",  
    alignItems: 'center', 
  },

  //PantallaCambiante
  pantallaCambianteContainer: {
    flex: 1,
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },

  panel:{
    width: '100%',
    height: "90%",
    borderWidth: 2,
    borderColor: 'green',
  },
  //Boletos
  boletosContainer: {
    flex: 1,
    width: "50%",

    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,

  },
});
