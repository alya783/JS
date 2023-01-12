const min = 60;
const hour = min * 60; // 3600
const day = hour * 24; // 86400
const year = day * 365; // 31536000

function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    let date = `${getYears(seconds)},${getDays(seconds)},${getHours(seconds)},${getMin(seconds)},${getSec(seconds)}`;
    let arrDate =  date.split(',').filter(el => el !== '');
    if(arrDate.length === 1){
        return arrDate[0];
    } else if(arrDate.length === 2){
        return arrDate.join(' and ');
    } else{
        const last = arrDate.slice(-2).join(' and ');
        const first = arrDate.slice(0, arrDate.length - 2).join(', ');
        return `${first}, ${last}`;
    }
}

console.log(formatDuration(0)); 

//years, days, hours, minutes and second

function getSec(n) {
    const s = n % 60;
    if(s===0) return '';
    return s === 1 ? `${s} second` : `${s} seconds`; 
}

function getMin(n){
    const m = Math.trunc((n % hour) / min);
    if(m===0) return '';
    return m === 1 ? `${m} minute` : `${m} minutes`;
}

function getHours(n){
    const hours = Math.trunc((n % day) / hour);
    if(hours===0) return '';
    return hours === 1 ? `${hours} hour` : `${hours} hours`;
}

function getDays(n){
    const days = Math.trunc((n % year) / day);
    if(days===0) return '';
    return days === 1 ? `${days} day` : `${days} days`;
}

function getYears(n){
    const years =  Math.trunc(n / year);
    if(years===0) return '';
    return years === 1 ? `${years} year` : `${years} years`;
}

module.exports = {
    getSec, 
    getMin,
    getHours,
    getDays,
    getYears
};