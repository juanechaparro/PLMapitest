# PLMapitest
REST API  node.js. , con los siguientes endpoints:  GET, POST, PUT, DELETE de users, La API debe quedar documentada para que otro desarrollador pueda consumirla sin mayor problema.

Para probar la app en modo desarrollo se debe correr el comando node server.js

utilizar formato json para peticiones , requerimientos y  consultas 
para hacer un post 
utilizar la ruta en postman y enviar un json con la estructura 
http://localhost:3000/register/create

 {
        name: data.name,
        lastName: data.lastName,
        mobile: data.mobile,
        email: data.email,
        identificationNumber: data.identificationNumber,
        identificationType: data.identificationType,
        dateOfBirth: data.dateOfBirth,
        fileUrl:data.fileUrl
      }
    Para un  get 
    http://localhost:3000/register/get
    se puede especificar el id para tomar el registro especifico al igual que el numero de identificacion
    Asi igualmente para 
    patch o put
    '/patch/:id'
    
    para delete 
    '/:id'
    
