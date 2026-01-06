try {
    const express = require('express')
    const cors = require('cors')
    const app = express()
    const crudRoutes = require('./routes/crud')
    app.use(cors())

    app.use(express.json())
    app.use(crudRoutes)

    app.set('view engine', 'ejs')

    app.get('/', (req, res) => {
        res.render('profile');
    });

    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })

}
catch (e) {
    console.log(e.message);
}
