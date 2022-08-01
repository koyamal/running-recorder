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
        //labels: ["6/24", "6/25", "6/26"],
        datasets: [{
            label: 'タイム',
            data: times,
            // data: [25, 26, 27],
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