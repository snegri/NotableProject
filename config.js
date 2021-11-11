import winston from 'winston'

export const data = {
  PORT: 3005
}

export const logger = winston.createLogger()
logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}))
