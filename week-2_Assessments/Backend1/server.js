// create http server
import exp from 'express'

const app = exp()

import { userApp } from './APIS/userAPI.js'
import { productApp } from './APIS/productAPI.js'

// use body parser middleware
app.use(exp.json()) // extracts request body and converts to JS object
/*function middleware1(req,res,next){
res.json({mesasge:"user not found"})
}
app.use(middleware1)*/
// forward request to userAPI
app.use('/user-api', userApp)

// forward request to productAPI
app.use('/product-api', productApp)

// set port number
const port = 3000

// assign port number to http server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})