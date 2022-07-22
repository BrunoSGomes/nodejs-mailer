import { Router } from 'express'
import EmailController from './controller.js'

const emailController = new EmailController()

const routes = Router({
    mergeParams: true
})

routes.post('/send', (req, res) => {
    emailController.send(req, res)
})

export { routes as emailRoutes }