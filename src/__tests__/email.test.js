import request from 'supertest'
import app from '../config/config.js'

jest.mock('nodemailer', () => ({
    createTransport: jest.fn().mockReturnValue({
        sendMail: jest.fn().mockReturnValue(() => { }),
        verify: jest.fn().mockReturnValue(() => true)
    })
}))

describe('email', () => {
    test('should return a message that the email was sent', async () => {
        const response = await request(app)
            .post('/email/send')
            .send({
                email: 'test@mail.com',
                name: 'test',
                telephone: '(11) 11111-1111',
                message: 'hello world'
            })
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200)
        expect(response.body).toEqual({ status: 200, message: 'email successfully sent' })
    })

    test('should return an error message that some parameter is missing', async () => {
        const response = await request(app)
            .post('/email/send')
            .send({
                email: 'test@mail.com',
                name: 'test',
                telephone: '(11) 11111-1111'
            })
            .set('Accept', 'application/json')
        expect(response.status).toEqual(400)
        expect(response.body).toEqual({ status: 400, message: 'must have required property \'message\'' })
    })
})