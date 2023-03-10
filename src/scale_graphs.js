import Chart from 'chart.js/auto'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

(async function() {
  
  const color = "#22A58F"; 
  const color2 = '#EFA906';
  const color_bubble = '#D9D9D9';
  const color_notes = '#FFFFFF';

  const data = [
    { day: 'Mo', count: getRandomInt(100) },
    { day: 'Di', count: 0 },
    { day: 'Mi', count: getRandomInt(100) },
    { day: 'Do', count: getRandomInt(100) },
    { day: 'Fr', count: getRandomInt(100) },
    { day: 'Sa', },
    { day: 'So', count: getRandomInt(100) },
  ];

  const notes = [
    { day: 'Mo',  },
    { day: 'Di', },
    { day: 'Mi', count: data[2].count},
    { day: 'Do', count: data[3].count},
    { day: 'Fr', count: data[4].count },
    { day: 'Sa'},
    { day: 'So', count: data[6].count },
  ];

  const data2 = [
    { day: '1', count: getRandomInt(100) },
    { day: '2', count: getRandomInt(100) },
    { day: '3', count: getRandomInt(100) },
    { day: '4', count: getRandomInt(100) },
    { day: '5', count: getRandomInt(100) },
    { day: '6', count: getRandomInt(100) },
    { day: '7', count: getRandomInt(100) },
    { day: '8', count: getRandomInt(100) },
    { day: '9', count: getRandomInt(100) },
    { day: '10', count: getRandomInt(100) },
    { day: '11', count: getRandomInt(100) },
    { day: '12', count: getRandomInt(100) },
    { day: '13', count: getRandomInt(100) },
    { day: '14', count: getRandomInt(100) },
    { day: '15',  },
    { day: '16', count: getRandomInt(100) },
    { day: '17', count: getRandomInt(100) },
    { day: '18', count: getRandomInt(100) },
    { day: '19', count: getRandomInt(100) },
    { day: '20', count: getRandomInt(100) },
    { day: '21', count: getRandomInt(100) },
    { day: '22', count: getRandomInt(100) },
    { day: '23', count: getRandomInt(100) },
    { day: '24', count: getRandomInt(100) },
    { day: '25', count: getRandomInt(100) },
    { day: '26', count: getRandomInt(100) },
    { day: '27', count: getRandomInt(100) },
    { day: '28', count: getRandomInt(100) },
    { day: '29', count: getRandomInt(100) },
    { day: '30', count: getRandomInt(100) },
    { day: '31', count: getRandomInt(100) }
  ];

  const data3 = [
      { day: '1', count: 100 },
      { day: '2', count: 100 },
      { day: '3', count: 100 },
      { day: '4', count: 100 },
      { day: '5', count: 100 },
      { day: '6', count: 100 },
      { day: '7', count: 100 },
      { day: '8', count: 100 },
      { day: '9', count: 100 },
      { day: '10', count: 100 },
      { day: '11', count: 100 },
      { day: '12', count: 100 },
      { day: '13', count: 100 },
      { day: '14', count: 100 },
      { day: '15', },
      { day: '16', count: 100 },
      { day: '17', count: 100 },
      { day: '18', count: 100 },
      { day: '19', count: 100 },
      { day: '20', count: 100 },
      { day: '21', count: 100 },
      { day: '22', count: 100 },
      { day: '23', count: 100 },
      { day: '24', count: 100 },
      { day: '25', count: 100 },
      { day: '26', count: 100 },
      { day: '27', count: 100 },
      { day: '28', count: 100 },
      { day: '29', count: 100 },
      { day: '30', count: 100 },
      { day: '31', count: 100 }
    ];

  const data4 = [
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'F', count: getRandomInt(100) },
    { day: 'm', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'M', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count:getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'J', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'A', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'S', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'O', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count:getRandomInt(100) },
    { day: 'N', count:getRandomInt(100) },
    { day: 'N', count:getRandomInt(100) },
    { day: 'N', count:getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'N', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) },
    { day: 'D', count: getRandomInt(100) }
  ];

  new Chart(
    document.getElementById('weekly_scale'),
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
              text: 'Scale Weekly'
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
              padding:8,
              font: {
                  family:'IGBM Plex Sans',
                  size: 14
              },
              callback: function(val, index) {
              return index % 2 === 0 ? this.getLabelForValue(val) : '';
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
              text:'punkten [ 0 zu 100 ]'
            },
          }
        },
      },
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: 'hidden',
            data: data.map(row => row.count),
            borderColor: color,
            backgroundColor: color,
            hoverBackgroundColor: color,
            borderWidth: 2,
            borderRadius: 100,
            borderSkipped: false,
            order: 2,

          },
          {
            label: 'hidden',
            type: 'bar',
            data: [[0,100], [0,100], [0,100], [0,100],[0,100],{},[0,100]],
            borderColor: color_bubble,
            borderWidth: 1,
            backgroundColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 3,
            pointHitRadius: 0,
            pointRadius: 0,
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
    document.getElementById('monthly_scale'),
    {
      type: 'bar',
      options: {
        tooltips:{
          enabled:false
        },
        aspectRatio: 1,
        interaction: {
            events: [],
        },
        plugins: {
            legend: {
                display: false
              },
              title: {
                display: false,
                text: 'Scale Monthly'
              }
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: false,
              // text: 'Days of the Month'
              text: 'Tage des Monats'
            },
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
            }
          },
          y: {
            title: {
              display: false,
              // text: 'Scoring [ 0 to 100 ]',
              text:'punkten [ 0 zu 100 ]'
            },
            ticks: {
              padding:8,
              callback: function(val, index) {
              return index % 2 === 0 ? this.getLabelForValue(val) : '';
              },
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            }
          }
        }
      },
      data: {
        labels: data2.map(row => row.day),
        datasets: [
          {
            label: 'Scale [0 to 100]',
            data: data2.map(row => row.count),
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            borderRadius: 100,
            borderSkipped: false,
          },
          {
            label: 'hidden',
            type: 'bar',
            data: data3.map(row => row.count),
            borderColor: color_bubble,
            borderWidth: 1,
            backgroundColor: color_bubble,
            hoverBackgroundColor: color_bubble,
            borderRadius: 100,
            borderSkipped: false,
            order: 2,
            pointHitRadius: 0,
            pointRadius: 0,
          },
        ]
      }
    }
  );

  new Chart(
    document.getElementById('yearly_scale'),
    {
      type: 'bar',
      options: {
        aspectRatio: 1,
        interaction: {
            events: [],
        },
        plugins: {
            legend: {
                display: false
              },
              title: {
                display: false,
                text: 'Scale Monthly'
              }        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: false,
              // text: 'Days of the Month'
              text: 'Tage des Monats'
            },
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
            }
          },
          y: {
            title: {
              display: false,
              // text: 'Scoring [ 0 to 100 ]',
              text:'punkten [ 0 zu 100 ]'
            },
            ticks: {
              padding:8,
              callback: function(val, index) {
              return index % 2 === 0 ? this.getLabelForValue(val) : '';
              },
            },
            grid: {
              drawOnChartArea:false,
              drawTicks: false
            },
            border: {
              display: false
            }
          }
        }
      },
      data: {
        labels: data4.map(row => row.day),
        datasets: [
          {
            label: 'Scale [0 to 100]',
            data: data4.map(row => row.count),
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            borderRadius: 100,
            borderSkipped: false,
          }
        ]
      }
    }
  );

})();
 
