import { brain } from 'brain.js'
const data = require('./data.json')

const network = new brain.recurrent.LSTM()

const trainingData = data.map((item) => ({
  input: item.signal,
  output: item.sign,
}))

network.train(trainingData, {
  iterations: 2000,
})

const output = network.run('nose elbow mouth')

console.log('Signal: ' + output)
