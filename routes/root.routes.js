const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({ message: 'Ping successfully' })
})

module.exports = router
