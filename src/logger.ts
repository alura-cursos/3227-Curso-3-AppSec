import pino from 'pino';

const transport = pino.transport({
    targets: [
        {
            target: 'pino-pretty',
            level: 'debug',
            options: { }
        },
        {
            target: 'pino/file',
            level: 'debug',
            options: { destination: 'logs/app.log' }
        }
    ]
})

export const logger = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
    redact: ['senha', 'token', 'req.headers.authorization']
}, transport)

const transportSecurity = pino.transport({
    targets: [
        {
            target: 'pino-pretty',
            level: 'debug',
            options: { }
        },
        {
            target: 'pino/file',
            level: 'debug',
            options: { destination: 'logs/security.log' }
        }
    ]
})

export const loggerSecurity = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
    redact: ['senha', 'token', 'req.headers.authorization']
}, transportSecurity)
