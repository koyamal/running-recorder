console.log('hello');
console.log(activityList);
const labels = [];
const times = [];
const beats = [];

for(let i = 0; i < activityList.length; i++){
    if(activityList[i]['date'] !== '230'){
        const secperkm = (activityList[i]['hour'] * 60 * 60 + activityList[i]['min'] * 60 + activityList[i]['sec'] * 1)/ activityList[i]['dist'];
        const min = Math.floor(secperkm / 60);
        const sec = Math.floor(secperkm % 60);
        const data = min + 0.01 * sec;
        labels.push(`${activityList[i]['month']}/${activityList[i]['date']}`);
        times.push(data);
        beats.push(activityList[i]['hb_ave']);
    // times.push((activityList[i]['hour'] * 60 * 60 + activityList[i]['min'] * 60 + activityList[i]['sec'])/activityList[i]['dist']);
    }
}
times.push(null);
labels.push('7/19');
times.push(5.1);
beats.push(0.2);
labels.push('7/20');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'タイム',
                data: times,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                showLine: false,
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 1
            },
            {
                label: '心拍数',
                data: beats,
                backgroundColor: [
                    'rgb(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgb(54, 162, 235, 1)',
                ],
                showLine: false,
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 1
            }
        ],
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