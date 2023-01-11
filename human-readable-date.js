const min = 60;
const hour = min * 60; // 3600
const day = hour * 24; // 86400
const year = day * 365; // 31536000

//const someDate = 46 * year + 8 * hour + 9;
//console.log(someDate);

function formatDuration(seconds) {
    return `${getYears(seconds)},${getDays(seconds)},${getHours(seconds)},${getMin(seconds)},${getSec(seconds)}`;

    // if (seconds === 0) return 'now';
    // return getHours(seconds);
}

console.log(formatDuration(564859)); 

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