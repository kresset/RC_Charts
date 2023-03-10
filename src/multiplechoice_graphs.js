import Chart from 'chart.js/auto'

(async function() {

  const color = "#22A58F";
  const color2 = '#EFA906';
  const color_bubble = '#D9D9D9';
  const color_notes = '#FFFFFF';

  const notes = [
    { day: 'Mo',  },
    { day: 'Di', },
    { day: 'Mi', count: 2},
    { day: 'Do', count: 0},
    { day: 'Fr', count: 2 },
    { day: 'Sa'},
    { day: 'So', count: 1 },
  ];

  const data_line1 = [
    { day: 'Mo', count: 3 },
    { day: 'Di',  },
    { day: 'Mi', count: 2 },
    { day: 'Do', count: 0 },
    { day: 'Fr', count: 2 },
    { day: 'Sa', count: 3 },
    { day: 'So', count: 1 },
  ];

  const data = [
    { day: 'Mo', point: { x:1, y:2}},
    { day: 'Di', point: { x:2, y:0+0.15 }},
    { day: 'Mi', point: { x:3, y:2 }, count: 2.15 },
    { day: 'Do', point: { x:4 }, count: 0},
    { day: 'Fr', point: { x:5, y:2 }, count: 2.15},
    { day: 'Sa', point: { x:6, y:3-0.15 }},
    { day: 'So', point: { x:7, y:3-0.15 }, count: 3 },
  ];


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  const data3 = [
    { day: '1', point: { x:1, y:3 }},
    { day: '2', point:{ x:2, y:0 }},
    { day: '3', point: { x:3, y:1 }},
    { day: '4', point: { x:4, y:2 }},
    { day: '5', point: { x:5, y:1 }},
    { day: '6', point: { x:6, y:3 }},
    { day: '7', point: { x:7, y:3 }},
    { day: '8', point: { x:8, y:1 }},
    { day: '9', point: { x:9, y:3 }},
    { day: '10', point: { x:10, y:3 }},
    { day: '11', point: { x:11, y:3 }},
    { day: '12', point: { x:12, y:0 }},
    { day: '13', point: { x:13, y:1 }},
    { day: '14', point: { x:14, y:2 }},
    { day: '15', point: { x:15, y:1 }},
    { day: '16', point: { x:16, y:3 }},
    { day: '17', point: { x:17, y:3 }},
    { day: '18', point: { x:18, y:3 }},
    { day: '19', point: { x:19, y:0 }},
    { day: '20', point: { x:20, y:1 }},
    { day: '21', point: { x:21, y:2 }},
    { day: '22', point: { x:22, y:1 }},
    { day: '23', point: { x:23, y:3 }},
    { day: '24', point: { x:24, y:3 }},
    { day: '25', point: { x:25, y:1 }},
    { day: '26', point: { x:26, y:3 }},
    { day: '27', point: { x:27, y:3 }},
    { day: '28', point: { x:28, y:3 }},
    { day: '29', point: { x:29, y:0 }},
    { day: '30', point: { x:30, y:1 }},
    { day: '31', point: { x:31, y:2 }},
  ];

  const data2 = [
    { day: 'J', count: getRandomInt(30) },
    { day: 'F', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'S', count: getRandomInt(30) },
    { day: 'O', count: getRandomInt(30) },
    { day: 'N', count: getRandomInt(30) },
    { day: 'D', count: getRandomInt(30) }
  ];

  const data4 = [
    { day: 'J', count: getRandomInt(30) },
    { day: 'F', count: getRandomInt(30)},
    { day: 'M', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'S', count: getRandomInt(30) },
    { day: 'O', count: getRandomInt(30) },
    { day: 'N', count: getRandomInt(30) },
    { day: 'D', count: getRandomInt(30) }
  ];

  const data7 = [
    { day: 'J', count: getRandomInt(30) },
    { day: 'F', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'S', count: getRandomInt(30) },
    { day: 'O', count: getRandomInt(30) },
    { day: 'N', count: getRandomInt(30) },
    { day: 'D', count: getRandomInt(30) }
  ];
  
  const data5 = [
    { day: 'J', count: getRandomInt(30) },
    { day: 'F', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'M', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'J', count: getRandomInt(30) },
    { day: 'A', count: getRandomInt(30) },
    { day: 'S', count: getRandomInt(30) },
    { day: 'O', count: getRandomInt(30) },
    { day: 'N', count: getRandomInt(30) },
    { day: 'D', count: getRandomInt(30) }
  ];

  const data6 = [
    { day: 'Mo', count: [-0.25,3.25] },
    { day: 'Di', count: [-0.25,3.25] },
    { day: 'Mi', count: [-0.25,3.25] },
    { day: 'Do', count: [-0.25,3.25] },
    { day: 'Fr', count: [-0.25,3.25] },
    { day: 'Sa', count: [-0.25,3.25] },
    { day: 'So', count: [-0.25,3.25] },
  ];

  const data8 = [
    { day: '1', y:2 , color:'#EFA906'},
    { day: '2', y:3 , color:'#22A58F'},
    { day: '3', y:3  , color:'#22A58F'},
    { day: '4', y:1 , color:'#EFA906'},
    { day: '5', y:1 , color:'#EFA906'},
    { day: '6', y:2 , color:'#EFA906'},
    { day: '7', y:3 , color:'#22A58F'},
    { day: '8', y:3 , color:'#22A58F'},
    { day: '9', y:3 , color:'#22A58F'},
    { day: '10', y:0 , color:'#EFA906'},
    { day: '11', y:0 , color:'#EFA906'},
    { day: '12', y:2  , color:'#EFA906'},
    { day: '13', y:3 , color:'#22A58F'},
    { day: '14', y:3 , color:'#22A58F'},
    { day: '15', y:1 , color:'#EFA906'},
    { day: '16', y:3  , color:'#22A58F'},
    { day: '17', y:2 , color:'#EFA906'},
    { day: '18', y:2 , color:'#EFA906'},
    { day: '19', y:2 , color:'#EFA906'},
    { day: '20', y:0 , color:'#EFA906'},
    { day: '21', y:3  , color:'#22A58F'},
    { day: '22', y:0 , color:'#EFA906'},
    { day: '23', y:1 , color:'#EFA906'},
    { day: '24', y:3 , color:'#22A58F'},
    { day: '25', y:1 , color:'#EFA906'},
    { day: '26', y:1 , color:'#EFA906'},
    { day: '27', y:1 , color:'#EFA906'},
    { day: '28', y:1 , color:'#EFA906'},
    { day: '29', y:3  , color:'#22A58F'},
    { day: '30', y:0 , color:'#EFA906'},
    { day: '31', y:0 , color:'#EFA906'}
  ];

  var l2 = new Array('No','Yoga', "Run", "Walk");
  var l1 = new Array('nein','manchmal', "häufig", "ständig",);

  new Chart(
    document.getElementById('weekly_multiplechoice'),
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
        aspectRatio: 1,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                  filter: function(item, chart) {
                      return (item.text !== 'hidden');
                  },
                  usePointStyle: true,
                  pointStyleWidth: 21,
                  font: {
                    family:'IGBM Plex Sans',
                    size: 14
                  },
                }
              },
            title: {
              display: false,
              text: 'Multiple Choice Weekly'
              },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              padding:8,
              font: {
                family:'IGBM Plex Sans',
                size: 14
              },
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            gridLines: {
              display: false                 
            },
            title: {
              display: false,
              // text: 'Days'
              text: 'Tage'
            },

          },
          y: {
            
            ticks: {

              maxRotation: 90,
              minRotation: 90,
              font: {
                family:'IGBM Plex Sans',
                size: 14
              },
              padding:8,
              maxTicksLimit:4,
              callback: function(value, index) {
                        return l2.at(index);
                        },
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false 
            },
            border: {
              display: false
            },
            title: {
              display: false,
              // text: 'Scoring [ 0 to 100 ]'
            },
          }
        },
      },
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            type: 'bar',
            label: 'hidden',
            data: [[0,3], [0,3], [0,3], {},[0,3],[0,3],[0,3]],
            // borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            backgroundColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 3
          },
          {
            type: "scatter",
            label: 'hidden',
            data: data.map(row => row.point),
            backgroundColor: color,
            borderColor: color,
            order: 2
          },
          {
            label: 'Notes',
            type: 'scatter',
            data: data.map(row => row.count),
            // borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            backgroundColor: color_notes,
            hoverBackgroundColor: color_notes,
            borderSkipped: false,
            order: 1,
            pointRadius: 5,
            pointHoverRadius: 5
          }
        ]
      }
    }
  );

  new Chart(
    document.getElementById('monthly_multiplechoice_normal'),
    {
      type: 'bar',
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

        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
                labels: {
                  filter: function(item, chart) {
                      return (item.text !== 'hidden');
                  },
                  usePointStyle: true,
                  pointStyleWidth: 21,
                  font: {
                    family:'IGBM Plex Sans',
                    size: 14
                  },
                }
              },
            title: {
              display: false,
              text: 'Multiple Choice Weekly'
              },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              padding:8,
              font: {
                family:'IGBM Plex Sans',
                size: 14
              },
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            gridLines: {
              display: false                 
            },
            title: {
              display: false,
              // text: 'Days'
              text: 'Tage'
            },

          },
          y: {
            ticks: {
              maxRotation: 90,
              minRotation: 90,
              font: {
                family:'IGBM Plex Sans',
                size: 14
              },
              padding:8,
              maxTicksLimit:4,
              callback: function(value, index) {
                        return l2.at(index);
                        },

            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false 
            },
            border: {
              display: false
            },
            title: {
              display: false,
              // text: 'Scoring [ 0 to 100 ]'
            },
          }
        },
      },
      data: {
        labels: data3.map(row => row.day),
        datasets: [
          {
            type: 'bar',
            label: 'hidden',
            data: [[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3]],
            // borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            backgroundColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 2
          },
          {
            type: "scatter",
            label: 'hidden',
            data: data3.map(row => row.point),
            backgroundColor: color,
            borderColor: color,
            order: 1
          }
        ]
      }
    }
  );

  new Chart(
    document.getElementById('weekly_multiplechoice_mengen'),
    {
      type: 'bar',
      options: {
       interaction: {
            events: [],
        },
        elements: {
          point: {
            pointRadius: 6,
            pointHoverRadius: 6
          }
        },

        aspectRatio: 1,
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
              text: 'MC Mengen Weekly'
              },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              padding: 10,
              font: {
                family:'IGBM Plex Sans',
                size: 14
              }
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            gridLines: {
              display: false                 
            },
            title: {
              display: false,
              // text: 'Days'
              text: 'Tage'
            },

          },
          y: {
            ticks: {
              padding: 10,
              maxRotation: 90,
              minRotation: 90,
              font: {
              family:'IGBM Plex Sans',
                size: 14
              },
              maxTicksLimit:4,
              callback: function(value, index) {
                        return l1.at(index);
                        },

            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false 
            },
            border: {
              display: false
            },
            title: {
              display: false,
              // text: 'Scoring [ 0 to 100 ]'
            },
          }
        },
      },
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            type: 'bar',
            label: 'hidden',
            data: [[0,3], {}, [0,3], [0,3],[0,3],[0,3],[0,3]],
            // borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            backgroundColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 3
          },
          {
            type: "bar",
            label: 'hidden',
            data: data_line1.map(row => row.count),
            backgroundColor: '',
            borderWidth: 1,
            backgroundColor: color,
            hoverBackgroundColor: 'color',
            borderRadius: 100,
            borderSkipped: false,
            order: 2
          },
          {
            label: 'Notes',
            type: 'scatter',
            data: notes.map(row => row.count),
            borderColor: 'rgba(0,0,0,0.2)',
            borderWidth: 1,
            backgroundColor: color_notes,
            hoverBackgroundColor: color_notes,
            borderSkipped: false,
            order: 1
          }
        ]
      }
    }
  );

  new Chart(
    document.getElementById('monthly_multiplechoice_mengen'),
    {
      type: 'bar',
      options: {
        // events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        // responsive: true,
        interaction: {
            events: []
        },
        elements: {
          point: {
            pointRadius: 6,
            pointHoverRadius: 6
          }
        },

        aspectRatio: 1,
        plugins: {
            legend: {
                display: true,
                
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
              text: 'MC Mengen Weekly'
              }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              padding: 15,
              font: {
                family:'IGBM Plex Sans',
                size: 14
              }
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            gridLines: {
              display: false                 
            },
            title: {
              display: false,
              // text: 'Days'
              text: 'Tage'
            },

          },
          y: {
            
            ticks: {
              padding: 10,
              maxRotation: 90,
              minRotation: 90,
              font: {
              family:'IGBM Plex Sans',
                size: 14
              },
              
              maxTicksLimit:4,
              callback: function(value, index) {
                        return l1.at(index);
                        },

            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false 
            },
            border: {
              display: false
            },
            title: {
              display: false,
              // text: 'Scoring [ 0 to 100 ]'
            },
          }
        },
      },
      data: {
        labels: data3.map(row => row.day),
        datasets: [
          {
            type: 'bar',
            label: 'hidden',
            data: [[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3], [0,3], [0,3], [0,3],[0,3],[0,3],[0,3],[0,3],{}, [0,3]],
            borderColor: color_bubble,
            borderWidth: 1,
            backgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 2
          },
          {
            type: "bar",
            label: 'hidden',
            data: data8.map(row => row.y),
            backgroundColor: color,
            borderWidth: 1,
            backgroundColor: color,
            hoverBackgroundColor: color,
            borderRadius: 100,
            borderSkipped: false,
            order: 1
          }
        ]
      }
    }
  );

  new Chart(
    document.getElementById('yearly_multiplechoice_mengen'),
    {
      type: 'bar',
      options: {
        interaction: {
            events: []
        },
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
                text: 'Multiple Choice Yearly'
              }
        },
        aspectRatio: 1,
        scales: {
          x: {
            stacked: false,
            title: {
              type: 'linear',
              display: false,
              // text: 'Months'
              text: 'Monate'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 12,
              }
          },
          y: {
            stacked: false,
            title: {
              display: false,
              // text: 'Number of Answers'
              text: 'Anzahl der Antworten'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 12,
              autoSkip: true,
              maxTicksLimit: 8,
              }
          }
        }
      },
      data: {
        labels: data4.map(row => row.day),
        datasets: [
          {
            label: l1.at(1),
            data: data2.map(row => row.count),
            backgroundColor: color,
            borderColor:  color,
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: l1.at(2),
            data: data4.map(row => row.count),
            backgroundColor: '#06AED5',
            borderColor:  '#06AED5',
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: l1.at(3),
            data: data7.map(row => row.count),
            backgroundColor: '#086788',
            borderColor:  '#086788',
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: l1.at(0),
            data: data5.map(row => row.count),
            backgroundColor: color_bubble,
            borderColor:  color_bubble,
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          }
        ]
      }
    }
  );

  new Chart(
    document.getElementById('yearly_multiplechoice'),
    {
      type: 'bar',
      options: {
        interaction: {
            events: []
        },
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
                text: 'Multiple Choice Yearly'
              }
        },
        aspectRatio: 1,
        scales: {
          x: {
            stacked: false,
            title: {
              type: 'linear',
              display: false,
              // text: 'Months'
              text: 'Monate'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 12,
              }
          },
          y: {
            stacked: false,
            title: {
              display: false,
              // text: 'Number of Answers'
              text: 'Anzahl der Antworten'
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              padding: 12,
              autoSkip: true,
              maxTicksLimit: 8,
              }
          }
        }
      },
      data: {
        labels: data4.map(row => row.day),
        datasets: [
          {
            label: l2.at(1),
            data: data2.map(row => row.count),
            backgroundColor: color,
            borderColor:  color,
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: l2.at(2),
            data: data4.map(row => row.count),
            backgroundColor: '#06AED5',
            borderColor:  '#06AED5',
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: l2.at(3),
            data: data7.map(row => row.count),
            backgroundColor: '#086788',
            borderColor:  '#086788',
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: l2.at(0),
            data: data5.map(row => row.count),
            backgroundColor: color_bubble,
            borderColor:  color_bubble,
            borderWidth: 1,
            borderRadius: 100,
            borderSkipped: false,
          }
        ]
      }
    }
  );

})();