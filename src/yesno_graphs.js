import Chart from 'chart.js/auto'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


(async function() {

  const data = [
    { day: 'Mo', point: { x:1, y:1 }},
    { day: 'Di', point: { x:2, y:1 }},
    { day: 'Mi', point: { x:3} },
    { day: 'Do', point: { x:4, y:1 }},
    { day: 'Fr', point: { x:5 }},
    { day: 'Sa', point: { x:6, }},
    { day: 'So', point: { x:7, y:1 }},
  ];
  const data9 = [
    { day: 'Mo', point: { x:1 }},
    { day: 'Di', point: { x:2 }},
    { day: 'Mi', point: { x:3,  y:1} },
    { day: 'Do', point: { x:4 }},
    { day: 'Fr', point: { x:5,  y:1 }},
    { day: 'Sa', point: { x:6, }},
    { day: 'So', point: { x:7 }},
  ];


  const color = "#22A58F";
  const color2 = '#EFA906';
  const color_bubble = '#D9D9D9';
  const color_notes = '#FFFFFF';

  const data5 = [
    { day: 'Mo', count: 0 },
    { day: 'Di', count: 0 },
    { day: 'Mi', count: 0 },
    { day: 'Do', count: [-1,0] },
    { day: 'Fr', count: [-1,0] },
    { day: 'Sa', count: 0 },
    { day: 'So', count: 0 },
  ];

  const data2 = [
    { day: 'J', count: 10 },
    { day: 'F', count: 28 },
    { day: 'M', count: 12 },
    { day: 'A', count: 2 },
    { day: 'M', count: 4 },
    { day: 'J', count: 21 },
    { day: 'J', count: 23 },
    { day: 'A', count: 30 },
    { day: 'S', count: 16 },
    { day: 'O', count: 19 },
    { day: 'N', count: 9 },
    { day: 'D', count: 20 }
  ];

  const data4 = [
    { day: 'J', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'F', count_yes: getRandomInt(30), count_np: getRandomInt(30)},
    { day: 'M', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'A', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'M', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'J', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'J', count_yes: getRandomInt(30), count_np: getRandomInt(30)},
    { day: 'A', count_yes: getRandomInt(30), count_np: getRandomInt(30)},
    { day: 'S', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'O', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'N', count_yes: getRandomInt(30), count_np: getRandomInt(30) },
    { day: 'D', count_yes: getRandomInt(30), count_np: getRandomInt(30)}
  ];

  const data3 = [
    { day: '1', point: { x:1, y:0.05 }, value: { x:1, y:0.05 }},
    { day: '2', point: { x:2, y:0.05 }, value: { x:2, y:0.05 }},
    { day: '3', point: { x:3, y:0.05 }, value: { x:3, y:0.05 }},
    { day: '4', point: { x:4, y:0.05 }, value: { x:4, y:0.05 }},
    { day: '5', point: { x:5, y:0.05 }, value: { x:5, y:0.05 }},
    { day: '6', point: { x:6, y:0.05 }, value: { x:6, y:0.05 }},
    { day: '7', point: { x:7, y:0.05 }, value: { x:7, y:0.05 }},
    { day: '8', point: { x:8, y:0.05 }, value: { x:8, y:0.05 }},
    { day: '9', point: { x:9, y:0.05 }, value: { x:9, y:0.05 }},
    { day: '10', point: { x:10, y:0.05 }, value: { }},
    { day: '11', point: { x:11, y:0.05 }, value: { x:11, y:0.05 }},
    { day: '12', point: { x:12, y:0.05 }, value: { x:12, y:0.05 }},
    { day: '13', point: { x:13, y:0.05 }, value: { x:13, y:0.05 }},
    { day: '14', point: { x:14, y:0.05 }, value: { x:14, y:0.05 }},
    { day: '15', point: { x:15, y:0.05 }, value: { x:15, y:0.05 }},
    { day: '16', point: { x:16, y:0.05 }, value: { x:16, y:0.05 }},
    { day: '17', point: { x:17, y:0.05 }, value: { x:17, y:0.05 }},
    { day: '18', point: { x:18, y:0.05 }, value: { x:18, y:0.05 }},
    { day: '19', point: { x:19, y:0.05 }, value: { x:19, y:0.05 }},
    { day: '20', point: { x:20, y:0.05 }, value: { }},
    { day: '21', point: { x:21, y:0.05 }, value: { x:21, y:0.05 }},
    { day: '22', point: { x:22, y:0.05 }, value: { }},
    { day: '23', point: { x:23, y:0.05 }, value: { x:23, y:0.05 }},
    { day: '24', point: { x:24, y:0.05 }, value: { }},
    { day: '25', point: { x:25, y:0.05 }, value: { }},
    { day: '27', point: { x:27, y:0.05 }, value: {  }},
    { day: '28', point: { x:28, y:0.05 }, value: { }},
    { day: '29', point: { x:29, y:0.05 }, value: { }},
    { day: '30', point: { x:30, y:0.05 }, value: { x:20, y:0.05 }},
    { day: '31', point: { x:31, y:0.05 }, value: { x:31, y:0.05 }}
  ];

  const notes = [
    { day: 'Mo', point: { x:1 } },
    { day: 'Di', point: { x:2, }},
    { day: 'Mi', point: { x:3, y:1.9 } },
    { day: 'Do', point: { x:4, y:1.9 } },
    { day: 'Fr', point: { x:5, y:1.9  } },
    { day: 'Sa', point: { x:6, } },
    { day: 'So', point: { x:7, y:1.9 } },
  ];

  var l1 = new Array('nein', "ja");
  var l2 = new Array('nein','Null', "ja");

new Chart(
    document.getElementById('weekly_yesno'),
    {
      type: 'bar',
      options: {
        interaction: {
            events: [],
        },
        elements: {
          point: {
            pointRadius: 10,
            pointHoverRadius: 10
          }
        },
        aspectRatio: 3,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                  filter: function(item, chart) {
                      return (item.text !== 'hidden');
                  },
                usePointStyle: true,
                pointStyleWidth: 20,
                font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
                padding: 10
              }
            },
            title: {
                display: false,
                text: 'Yes No Weekly'
              }
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: false,
              // text: 'Days'
              text: 'Tage'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 8,
              font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
              }
          },
          y: {
            title: {
              display: false,
              // display: false,
              // text: 'Answer'
              text: 'Antworten'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              display: false,
              font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
              padding: 8,
              autoSkip: true,
              maxTicksLimit: 2,
              callback: function(value, index, ticks) {
                        return l1.at(index);
                        },
            }
          }
        }
      },
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: 'Yes',
            // label: 'hidden',
            type: 'scatter',
            data: data.map(row => row.point),
            backgroundColor: color,
            hoverBackgroundColor: color,
            borderColor: color,
            order:2
          },
          {
            // label: 'Yes',
            label: 'Notes',
            type: 'scatter',
            data: notes.map(row => row.point),
            backgroundColor: color_notes,
            hoverBackgroundColor: color_notes,
            borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
            order:1,
            pointRadius: 5,
            fill: false,
            pointHoverRadius: 5
          },

          {
            type: 'scatter',
            label: 'hidden',
            data: data9.map(row => row.point),
            // borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            backgroundColor:  color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 3,
            }
        ]
      }
    }
  );


new Chart(
    document.getElementById('monthly_yesno'),
    {
      type: 'scatter',
      options: {
        interaction: {
            events: [],
        },
        elements: {
          point: {
            pointRadius: 3,
            pointHoverRadius: 3
          }
        },
        aspectRatio: 3,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                  filter: function(item, chart) {
                      return (item.text !== 'hidden');
                  },
                usePointStyle: true,
                pointStyleWidth: 20,
                font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
              }
            },
            title: {
                display: false,
                text: 'Yes No Weekly'
              }
        },
        scales: {
          x: {
            // stacked: false,
            title: {
              display: false,
              // text: 'Days'
              text: 'Tage'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 8,
              font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
              }
          },
          y: {
            title: {
              display: false,
              // display: false,
              // text: 'Answer'
              text: 'Antworten'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              display: false,
              padding: 8,
              callback: (value, index, values) => data3[index].day,
                    stepSize: 1,
              },
              font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
          }
        }
      },
      data: {
        labels: data3.map(row => row.day),
        datasets: [
          {
            label: 'Yes',
            type: 'scatter',
            data: data3.map(row => row.value),
            backgroundColor: color,
            borderColor: color,
            borderWidth: 2,
            borderRadius: 100,
            borderSkipped: false,
            order:1
          },
          {
            label: 'no',
            data: data3.map(row => row.point),
            borderColor: color_bubble,
            borderWidth: 2,
            backgroundColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 2
            }
        ]
      }
    }
  );

    
new Chart(
    document.getElementById('yearly_yesno'),
    {

      type: 'bar',
      options: {
        interaction: {
            events: [],
        },
        aspectRatio: 1,
        responsive: true,
        plugins: {
          title: {
                display: false,
                text: 'Yes No Yearly'
              },
          legend: {
                display: true,
                position: 'bottom',
                labels: {
                  filter: function(item, chart) {
                      return (item.text !== 'hidden');
                  },
                usePointStyle: true,
                pointStyleWidth: 20,
                font: {
                  family:'IGBM Plex Sans',
                  size: 14
                },
              }
            },
        },
        scales: {
          x: {
            title: {
              display: false,
              // text: 'Months',
              text: 'Monate'
            },
            stacked: false,
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 8,
              }
          },
          y: {
            title: {
              display: false,
              // text: 'Number of Answers',
              text: 'Anzahl der Antworten'
            },
            stacked: false,
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 8,
              callback: function(value, index, ticks) {
                        return Math.abs(value);
                        },
              }
          }
        }
      },

      data: {
        labels: data4.map(row => row.day),
        datasets: [
                {
            // label: 'Yes',
            label:'ja',
            data: data4.map(row => row.count_yes),
            backgroundColor: color,
            borderColor: color,
            hoverBackgroundColor: color,
            borderWidth: 2,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            // z label: 'No',
            label:'nein',
            data: data4.map(row => row.count_np),
            backgroundColor: color_bubble,
            borderColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderWidth: 2,
            borderRadius: 100,
            borderSkipped: false,
          }
        ]
      }
    }
  );

})();
 
