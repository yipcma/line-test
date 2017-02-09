'use strict'

import botBuilder from 'claudia-bot-builder'

const app = botBuilder((request, originalApiRequest) => {
  console.log('request=>', request)
  return request.text
}, {platforms: ['line']})

module.exports = app
