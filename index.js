//importing json server
const JSONserver=require('json-server')
//create a server
const Mp_server= JSONserver.create()
//setting route to resourses
const route=JSONserver.router('db.json')
//define middleware
const middleware=JSONserver.defaults()
//define port number
const PORT=3000 | process.env.PORT
//implementing middleware
Mp_server.use(middleware) 
//implementing route to resourses
Mp_server.use(route)
//run the server
Mp_server.listen(PORT,()=>{
    console.log(`The server is running a:${PORT}`);
})