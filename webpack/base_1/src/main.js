import "@babel/polyfill"

import img from './assets/abc.jpg'
import './index.css'
import './avatar.scss'
import './test.js'

const oImg = document.createElement('img')
oImg.src = img
oImg.className = 'avatar'
document.body.appendChild(oImg)

const aFn = () => {}
