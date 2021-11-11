import express from 'express'
import { logger } from './config.js'

export const testRouter = express.Router()

const physicians = [
    {
    name: 'SpencerNegri',
    appointments: [
      {
      name: "sterling archer", 
      time: "8:00AM", 
      kind: "New Patient"
      },
      {
      name: "Another Doctor", 
      time: "9:00AM", 
      kind: "Check Up"
      }
    ]
    },
    {
      name: 'JackBrown',
      appointments: [
        {
          name: "Anonymous", 
          time: "1:00PM", 
          kind: "Check In"
          },
          {
          name: "Joe Risbon", 
          time: "4:00PM", 
          kind: "Training"
          },
          {
          name: "Spencer Negri", 
          time: "6:00PM", 
          kind: "Evening Check In"
          }
      ]
      },
    {
    name: 'JohnDoe',
    appointments: [
      {
      name: "Jane Doe", 
      time: "12:00PM", 
      kind: "New Patient"
      },
      {
      name: "Another Doctor", 
      time: "10:00AM", 
      kind: "Check Up"
      }
    ]
    },
    {
      name: 'CyrilFergeson',
      appointments: [
        {
        name: "Spencer Negri", 
        time: "12:00PM", 
        kind: "New Patient"
        },
        {
        name: "Another Doctor", 
        time: "10:00AM", 
        kind: "Check Up"
        },
        {
          name: "Spencer Negri", 
          time: "12:00PM", 
          kind: "New Patient"
          },
          {
          name: "Another Doctor", 
          time: "10:00AM", 
          kind: "Check Up"
          },
          {
            name: "Spencer Negri", 
            time: "12:00PM", 
            kind: "New Patient"
            },
            {
            name: "Another Doctor", 
            time: "10:00AM", 
            kind: "Check Up"
            }
      ]
      },
  ]

testRouter.get('/:name', (req, res) => {
  let l = physicians.length
  let result = {}
  for (let i = 0; i < physicians.length; i++){
    console.log(physicians[i]);
    
    if (physicians[i].name === req.params.name) {
      result = physicians[i]
    }
  }
  res.send(result)
})
