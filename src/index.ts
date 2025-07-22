import express from 'express';
import http from 'http'
import foodspotRoute  from './modules/foodspot/routes/foodspot.routes'
import userRoute from './modules/user/routes/user.route'
import reviewRoute from './modules/review/routes/review.routes'
import foodItem from './modules/fooditem/routes/fooditem.routes'
import liveAvilability from './modules/liveAvailability/routes/liveAvailability.route'
import foodSpotImage from './modules/uploadImage/routes/foodImage.route'
import search from './modules/search/routes/search.route'
import { initSocket } from './socket';


const app = express()
app.use(express.json())

const server= http.createServer(app)
initSocket(server)

app.use('/api/foodspots',foodspotRoute)
app.use('/api/users',userRoute)
app.use('/api/reviews',reviewRoute)
app.use('/api/fooditem',foodItem)
app.use('/api/liveavilability',liveAvilability)
app.use('/api/upload',foodSpotImage)
app.use('/api/search',search)



const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`🚀Running on PORT: ${PORT}`)
})
