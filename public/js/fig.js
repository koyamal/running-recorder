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

const labels02 = [];
const times02 = [];
for(let i = 1; i < 31; i++){
    labels02.push(`6/${i}`);
    for(let j = 0; j < activityList.length; j++){
        if(i.toString() === activityList[j]['date']){
            const secperkm = (activityList[j]['hour'] * 60 * 60 + activityList[j]['min'] * 60 + activityList[j]['sec'] * 1)/ activityList[j]['dist'];
            const min = Math.floor(secperkm / 60);
            const sec = Math.floor(secperkm % 60);
            const data = min + 0.01 * sec;
            times02.push(data);
            break;
        }
    }
    times02.push(null);
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
        labels: labels02,
        // labels: labels,
        datasets: [
            {
                label: 'タイム',
                data: times02,
                // data: times,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                showLine: false,
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 1,
                yAxisID: "y-axis-1",
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
                borderWidth: 1,
                yAxisID: "y-axis-2",
            }
        ],
    },
    options: {
        responsive: true,
        scales: {
            'y-axis-1':{
                type: 'linear',
                display: true,
                suggestedMin: 5,
                suggestedMax: 6,
                beginAtZero: false,
                ticks: {
                  stepSize: 1,
                },
                position: 'left'
            },
            'y-axis-2':{
                type: 'linear',
                display: true,
                suggestedMin: 0,
                suggestedMax: 1,
                beginAtZero: false,
                ticks: {
                  stepSize: 0.2,
                },
                position: 'right'
            },
            // yAxes: [
            //     {
            //         id: 'y-axis-1',
            //         display: true,
            //         suggestedMin: 5,
            //         suggestedMax: 6,
            //         beginAtZero: false,
            //         ticks: {
            //           stepSize: 1,
            //         }
            //     },
            //     {
            //         id: 'y-axis-2',
            //         display: true,
            //         suggestedMin: 0,
            //         suggestedMax: 1,
            //         beginAtZero: false,
            //         ticks: {
            //           stepSize: 0.2,
            //         }
            //     },
                // {
                //     id: "y-axis-1",
                //     type: "linear",
                //     position: "left",
                //     ticks: {
                //         max: 6,
                //         min: 5,
                //         stepSize: 0.2
                //     }
                // },
                // {
                //     id: "y-axis-2",
                //     type: "linear",
                //     position: "right",
                //     ticks: {
                //         max: 1,
                //         min: 0,
                //         stepSize: 0.2
                //     }
                // }
            // ]
        }
    }
});