console.log('hello');
// console.log(res[0]['id'], 'dsklfjhasdlkfjsa');

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["6/24", "6/25", "6/26"],
        datasets: [{
            label: 'タイム',
            data: [25, 26, 27],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});