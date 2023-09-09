const http = require("http"); //Módulo de http
const { callbackify } = require("util");

const host = 'localhost'; //Anfitrión
const port = 9812; //Puerto
//Crear el servidor

/*
req = solicitudes
res = respuestas
*/

const user = [{
      id: "1",
      name: "Juan",
    },
    {
      id: "2",
      name: "Esteban",
    },
    {
      id: "3",
      name: "Andres",
    },
  ];

const servidor = http.createServer((req, res)=>{
const ruta = new URL(req.url, `http://${host}:${port}`);

if(ruta.pathname === "/persona"){
    const nombre = ruta.searchParams.get("nombre")
    console.log(nombre)
    res.writeHead(200);
    res.write(JSON.stringify({nombre: nombre}));
} else if (ruta.pathname === "/api/v3/user"){
    res.writeHead(200);
    res.write(JSON.stringify(user)); 
}


  res.end();
});

//Host es indistinto
servidor.listen(port, host, ()=>{ 
    console.log(`http://${host}:${port}`);
});