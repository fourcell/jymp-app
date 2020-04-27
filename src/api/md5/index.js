import crypto from 'crypto'

const md5 = (pass) => {
    const md5 = crypto.createHash('md5')
    md5.update(pass)
    return md5.digest('hex')
}

export default md5