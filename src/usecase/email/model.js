import nodemailer from 'nodemailer'

export default class EmailModel {

    createTransport() {
        const transport = nodemailer
            .createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: process.env.EMAIL_SECURE,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            })
        return transport
    }

    async sendEmail(params) {
        try {
            const transport = this.createTransport()
            const hasTransport = await transport.verify()
            if (hasTransport) {
                const result = await transport.sendMail({
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER,
                    subject: `${params.name} entrou em contato`,
                    html: `
                        <h2>E-mail de contato - ${params.name}</h2>
                        <h3>Dados do cliente</h3>
                        <p>
                            <b>Nome: </b>${params.name} <br>
                            <b>E-mail: </b>${params.email} <br>
                            <b>Telefone: </b>${params.telephone}
                        </p>
                        <h3>Mensagem</h3>
                        <p>${params.message}</p>
                    `
                })
                return result
            } else {
                throw 'it was not possible to send the email'
            }
        } catch (error) {
            throw `${error}`
        }
    }
}