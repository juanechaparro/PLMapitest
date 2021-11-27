const Controller = require('../controllers/controller') 
// import Register from '../models/register'



const RegisterRoutes = (app) => {
app.post('/register/create', async (req, res) => {
   // const bearerHeader = req.headers['authorization']
    
    Controller.createRegister(req.body)
        res.status(200).json(Controller.createdR)
    
      
    
    
  })

app.get('/register/get', (req, res) => {
    // const bearerHeader = req.headers['authorization']
    const filterCustomer = req.query.identificationNumber ||null;
     Controller.getRegisters(filterCustomer).then((registers)=>{
        res.status(200).json(registers)
    })

            
   
   })
   
   app.get('/register/getById', (req, res) => {
    // const bearerHeader = req.headers['authorization']
    const filterCustomer = req.query._id ||null;
     Controller.getRegistersById(filterCustomer).then((registers)=>{
        res.status(200).json(registers)
    })
   
   })
   app.patch('/patch/:id',(req, res) => {
    Controller.updateRegister(
        req.params.id,
        req.body)
    res.status(200).json({})
       
   }
   )
   app.delete('/:id', (req, res)=>{
    Controller.deleteRegister(req.params.id)
        res.status(200).send(`Registro ${req.params.id} eliminado`) 
    
   })
    
   

}

module.exports= RegisterRoutes