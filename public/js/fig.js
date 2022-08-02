console.log('hello');
console.log(activityList);
const labels = [];
const times = [];

for(let i = 0; i < activityList.length; i++){
    labels.push(`${activityList[i]['month']}/${activityList[i]['date']}`);
    times.push((activityList[i]['hour'] * 60 * 60 + activityList[i]['min'] * 60 + activityList[i]['sec'])/activityList[i]['dist']);
}

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'タイム',
            data: times,
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
                    beginAtZero: true
                }
            }]
        }
    }
});