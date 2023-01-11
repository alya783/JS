function formatDuration(seconds) {
    if (seconds === 0) return 'now';
   
}

console.log(formatDuration(0));

//years, days, hours, minutes and second

function getSec(n){
   const s = n % 60;
   return s === 1 ? `${s} second` : `${s} seconds`; 
} 

function getMin(n){
  const m = Math.trunc((n % 3600) / 60)
  return m === 1 ? `${m} minute` : `${m} minutes`;
}

function getHours(n){
  const hours = Math.trunc((n % 86400) / 3600);
  return hours === 1 ? `${hours} hour` : `${hours} hours`;
}

function getDays(n){
  const days = Math.trunc((n % 31536000) / 86400);
  return days === 1 ? `${days} day` : `${days} days`
}

function getYears(n){
   return Math.trunc(n / 31536000);
}