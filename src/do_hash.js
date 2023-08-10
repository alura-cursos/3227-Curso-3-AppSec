import fs from 'fs';
import crypto from 'crypto';

const logFile = process.argv[2];
const secret = process.argv[3];

const data = fs.readFileSync(logFile);
const hmac = crypto.createHmac('sha256', secret)
    .update(data)
    .digest('hex');

console.log(hmac);
fs.writeFileSync(logFile + '.hash', hmac);
