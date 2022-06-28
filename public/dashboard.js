/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })

  let allStudentsBtn =document.getElementById("add-students")
  let homeBtn =document.getElementById("home")

  let addStudent_main =document.getElementById("addStudentMain")
  let dashboard_main =document.getElementById("dashboard_main")
  
  allStudentsBtn.addEventListener('click', ()=>{
    document.querySelectorAll(".nav-link").forEach(elem=>{
      elem.classList.remove('active')
    })
    document.querySelectorAll('main').forEach(elem=>{
      elem.hidden = true
    })
    allStudentsBtn.classList.add('active')

    addStudent_main.hidden = false
  })
  
  homeBtn.addEventListener('click', ()=>{
    document.querySelectorAll(".nav-link").forEach(elem=>{
      elem.classList.remove('active')
    })
    document.querySelectorAll('main').forEach(elem=>{
      elem.hidden = true
    })
    homeBtn.classList.add('active')

    dashboard_main.hidden = false
  })

  
})()
