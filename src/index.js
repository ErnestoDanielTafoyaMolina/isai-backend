import app from "./app";
import {getConnection} from "./database/conection";
app.listen(app.get('port'));
console.log("Servidor en el puerto: ", app.get('port'));
getConnection();
