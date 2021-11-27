 const Register = require("../models/register") ;

let created;
let registersList;

 const Controller = {
  //crea un regitro de un usuario
  createRegister: async (data) => {
    {
      const createData = {
        name: data.name,
        lastName: data.lastName,
        mobile: data.mobile,
        email: data.email,
        identificationNumber: data.identificationNumber,
        identificationType: data.identificationType,
        dateOfBirth: data.dateOfBirth,
        fileUrl:data.fileUrl
      };
      await new Register(createData).save();
      created = createData;
    }

    return created;
  },
  createdR: created,
  // get de los ususarios creados , permite filtrar por numero de identidficacion
  getRegisters: (filterRegst) => {
    
    return new Promise((resolve, reject) => {
      let filter = {};
      if (filterRegst) {
        filter = { identificationNumber: filterRegst };
      }
      const registers = Register.find(filter).catch((e) => {
        reject(e);
      });
      resolve(registers);
    });
  },
  getRegistersById: (filterRegst) => {
    return new Promise((resolve, reject) => {
      let filter = {};
      if (filterRegst) {
        filter = { _id: filterRegst };
      }
      const registers = Register.find(filter).catch((e) => {
        reject(e);
      });
      resolve(registers);
    });
  },
  registersLists: registersList,
  //put o patch para editar registro de usuarios dando como parametro el id
  updateRegister: async (id2, data) => {
    await Register.findOneAndUpdate(
      { _id: id2 },
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
    );
  
  },
  // eliminar registro por id
  deleteRegister: async (id) => {
    if (!id) {
      return false;
    }
    return await Register.deleteOne({
      _id: id,
    });

   
  },
};

module.exports = Controller
