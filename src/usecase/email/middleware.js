import Ajv from 'ajv'

const ajv = new Ajv()

const emailSchema = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        name: { type: 'string' },
        telephone: { type: 'string' },
        message: { type: 'string' }
    },
    required: ['email', 'name', 'telephone', 'message']
}

export default function validateEmail(req) {
    const valid = ajv.validate(emailSchema, req)
    if (!valid) throw ajv.errors[0].message
    return
}