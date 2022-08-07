console.log('hello');
console.log(activityList);
const labels = [];
const times = [];

for(let i = 0; i < activityList.length; i++){
    if(activityList[i]['date'] !== '230'){
        const secperkm = (activityList[i]['hour'] * 60 * 60 + activityList[i]['min'] * 60 + activityList[i]['sec'] * 1)/ activityList[i]['dist'];
        const min = Math.floor(secperkm / 60);
        const sec = Math.floor(secperkm % 60);
        const data = min + 0.01 * sec;
        labels.push(`${activityList[i]['month']}/${activityList[i]['date']}`);
        times.push(data);
    // times.push((activityList[i]['hour'] * 60 * 60 + activityList[i]['min'] * 60 + activityList[i]['sec'])/activityList[i]['dist']);
    }
}
times.push(null);
labels.push('7/19');
times.push(5.1);
labels.push('7/20');
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
            showLine: false,
            borderWidth: 1
        }],
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