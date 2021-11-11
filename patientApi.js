import express from 'express'
import csv from 'csv-parser'
import fs from 'fs'

export const patientRouter = express.Router()

patientRouter.get('/schedule/:name', (req, res) => {
  const data = {
    physicians: [
      {
      name: 'Spencer Negri',
      appointments: [
        {
        name: "Sterling Archer", 
        time: "8:00AM", 
        kind: "New Patient"
        },
        {
        name: "Max Berger", 
        time: "9:00AM", 
        kind: "Check Up"
        }
      ]
      },
      {
      name: 'John Doe',
      appointments: [
        {
        name: "Jane Doe", 
        time: "12:00PM", 
        kind: "New Patient"
        },
        {
        name: "Nikola Jokic", 
        time: "10:00AM", 
        kind: "Check Up"
        }
      ]
      },
      {
      name: 'Jack Brown',
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
    ]
  }
  const results = []
  const name = req.params.name

  for (const item in data.physicians) {
    console.log(item);
    
  }

  res.send()
})

patientRouter.get('/names', (req, res) => {
  const results = []
  console.log('Received a patient API request')
  // fs.createReadStream('schedules.csv')
  // .pipe(csv())
  // .on('data', (data) => {
  //   console.log(JSON.parse(data.appointments));
    
  //   results.push(data)
  // })
  // .on('end', () => {
  //   res.send(results)
  // })

  const physicians = ['Spencer Negri', 'John Doe', 'Cyril Fergeson', 'Jack Brown', 'Bob Jones']
  
  res.send(physicians)
})