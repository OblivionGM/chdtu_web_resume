let links = document.querySelectorAll('.skills__item');
let header = document.querySelector('.header');
   
links.forEach( (el, i) => {
    let ico = el.querySelector('path');

    el.addEventListener('mouseenter', function() {
        if (el.getAttribute('data-color') == "0") ico.setAttribute('fill', '#FC490B');
        else if (el.getAttribute('data-color') == "1") ico.setAttribute('fill', '#FFDF00');
        else if (el.getAttribute('data-color') == "2") ico.setAttribute('fill', '#2196F4');
        else if (el.getAttribute('data-color') == "3") ico.setAttribute('fill', '#F25234');
        else if (el.getAttribute('data-color') == "4") ico.setAttribute('fill', '#CA669B');
   })

    el.addEventListener('mouseleave', function() {
        ico.removeAttribute('fill');
   })
   
 });

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Skill', '%', { role: 'style', titleTextStyle: 'color: #fffff'} ],
        ['HTML5', 90, 'color: #FC490B;'],
        ['CSS3', 87, 'color: #FFDF00;'],
        ['JavaScript', 35, 'color: #2196F4;'],
        ['SCSS', 67, 'color: #F25234;'],
        ['Git', 10, 'color: #CA669B;'],
    ]);


      var options = {
        title: 'Skills histogram',
        backgroundColor: 'transparent',
        height: 500,
        titleTextStyle: {
            color: '#FF8303',
            fontSize: 28,
            italic: false,
        },

        hAxis: {
          title: 'Skill',

          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          },

          titleTextStyle: {
            color: '#f0e3ca',
            fontSize: 36,
            fontFamily: 'Arial, Helvetica, sans-serif',
            italic: false,
        }
        },

        vAxis: {
          title: 'Knowledge level',
          gridlines: {
            color: '#2e2e2e'
        },

          titleTextStyle: {
            color: '#f0e3ca',
            fontSize: 28,
            fontFamily: 'Arial, Helvetica, sans-serif',
            italic: false,
        },
        }

      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('skills__histogram'));

      chart.draw(data, options);
    }