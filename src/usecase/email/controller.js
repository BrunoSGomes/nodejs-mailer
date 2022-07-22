import validateEmail from './middleware.js'
import EmailModel from './model.js'

export default class EmailController {
    constructor() {
        this.emailModel = new EmailModel()
    }

    send(req, res) {
        try {
            const params = req.body
            validateEmail(params)
            this.emailModel.sendEmail(params)
            res.status(200).json({ status: 200, message: 'email successfully sent' })
        } catch (error) {
            res.status(400).json({ status: 400, message: error })
        }
    }
}