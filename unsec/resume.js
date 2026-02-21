import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pdfPath = path.resolve(__dirname, 'resume.pdf')
const base64 = fs.readFileSync(pdfPath).toString('base64')

export default base64