const { getSec, getMin, getHours, getDays, getYears} = require('./human-readable-date');
const {expect, test} = require('@jest/globals');

test('get seconds', () => {
    // values before 60 sec (1min) 
    expect(getSec(0)).toBe('');
    expect(getSec(1)).toBe('1 second');
    expect(getSec(2)).toBe('2 seconds');

    // 0y,0d,0h,0m,59s border before 0
    expect(getSec(59)).toBe('59 seconds');
    //1 minute border 
    expect(getSec(60)).toBe(''); 
    // 1 minute,1 second border after 1 min
    expect(getSec(61)).toBe('1 second'); 
    // 1 minute,2 seconds border after 1 min + ending -s
    expect(getSec(62)).toBe('2 seconds');  
    // 1 minute,15 seconds random 
    expect(getSec(75)).toBe('15 seconds');  
    // 1 hour,1 minute without sec 
    expect(getSec(3660)).toBe('');
    // 1 hour,1 minute,1 second border after 0 sec
    expect(getSec(3661)).toBe('1 second');
    // 1 hour,1 minute,2 seconds ending -s
    expect(getSec(3662)).toBe('2 seconds');
    // 4 years,68 days,3 hours,4 minutes without sec
    expect(getSec(132030240)).toBe('');
    // 6 days,12 hours,54 minutes,19 seconds random 
    expect(getSec(564859)).toBe('19 seconds');
    // 1060 years,204 days,23 hours,21 minutes,48 seconds random 
    expect(getSec(33445869708)).toBe('48 seconds');
    // 16 hours,1 minute,34 seconds random
    expect(getSec(57694)).toBe('34 seconds');
    // 2 years,308 days,6 hours,23 minutes,24 seconds random
    expect(getSec(89706204)).toBe('24 seconds');
    // 281858 years,308 days,21 hours,2 minutes,18 seconds random 
    expect(getSec(8888700574938)).toBe('18 seconds');
    // 46 days,14 hours,,41 seconds random
    expect(getSec(4024841)).toBe('41 seconds');
});

test('get minutes', () => {
    // 46 days,14 hours,,41 seconds without min 
    expect(getMin(4024841)).toBe('');
    // 4 years,68 days,3 hours,4 minutes random
    expect(getMin(132030240)).toBe('4 minutes');
    // 49 days,3 hours,58 minutes border before hour 
    expect(getMin(4247880)).toBe('58 minutes');
    //59 minutes border before hour
    expect(getMin(3540)).toBe('59 minutes');
    // 1 minute border 
    expect(getMin(60)).toBe('1 minute');
    // 1 minute 1 second border near 1 min
    expect(getMin(61)).toBe('1 minute');
    // 2 minutes border and ending -s
    expect(getMin(120)).toBe('2 minutes');
    // 1 hour,1 minute,1 second border near 1 min
    expect(getMin(3661)).toBe('1 minute');
    // 1 hour,1 minute,2 seconds border near 1 min and ending -s
    expect(getMin(3662)).toBe('1 minute');
    // ,50 days,8 hours,26 minutes random 
    expect(getMin(4350360)).toBe('26 minutes');
    // ,6 days,12 hours,54 minutes,19 seconds random
    expect(getMin(564859)).toBe('54 minutes');
    // 1060 years,204 days,23 hours,21 minutes,48 seconds random
    expect(getMin(33445869708)).toBe('21 minutes');
    // ,,16 hours,1 minute,34 seconds random
    expect(getMin(57694)).toBe('1 minute');
    // 2 years,308 days,6 hours,23 minutes,24 seconds
    expect(getMin(89706204)).toBe('23 minutes');
    // 281858 years,308 days,21 hours,2 minutes,18 seconds random 
    expect(getMin(8888700574938)).toBe('2 minutes');
});

test('get hours', () => {
    // ,46 days,14 hours,,41 seconds random
    expect(getHours(4024841)).toBe('14 hours');
    // 4 years,68 days,3 hours,4 minutes, random 
    expect(getHours(132030240)).toBe('3 hours');
    // ,,1 hour,, border 1 hour
    expect(getHours(3600)).toBe('1 hour');
    // 5 years,2 days,,1 minute,47 seconds without hours
    expect(getHours(157852907)).toBe('');
    // ,2 days,2 hours,1 minute,47 seconds random
    expect(getHours(180107)).toBe('2 hours');
    // ,2 days,9 hours,,50 seconds random
    expect(getHours(205250)).toBe('9 hours');
    // ,5 days,23 hours,2 minutes,32 seconds border before 24h 
    expect(getHours(514952)).toBe('23 hours');
    // ,1 day,,, bound after or eaqual 24h
    expect(getHours(86400)).toBe('');
    // ,,23 hours,59 minutes,59 seconds border before 24h
    expect(getHours(86399)).toBe('23 hours');
    // 2 years,5 days,20 hours,5 minutes, random
    expect(getHours(63576300)).toBe('20 hours');
    // 2 years,7 days,,5 minutes, without hours
    expect(getHours(63677100)).toBe('');
    // ,5 days,10 hours,3 minutes,6 seconds random
    expect(getHours(468186)).toBe('10 hours');
    // ,9 days,1 hour,4 minutes,30 seconds random
    expect(getHours(781470)).toBe('1 hour');
    // ,,6 hours,9 minutes,35 seconds random
    expect(getHours(22175)).toBe('6 hours');   
});

test('get days', () => {
    // ,1 day,,, boundary 1 day
    expect(getDays(86400)).toBe('1 day');
    // ,2 days,3 hours,4 minutes,5 seconds random + ending -s
    expect(getDays(183845)).toBe('2 days');
    // ,7 days,,8 minutes,7 seconds random
    expect(getDays(605287)).toBe('7 days');
    // 3 years,,6 hours,8 minutes,7 seconds without days
    expect(getDays(94630087)).toBe('');
    // 8 years,5 days,10 hours,5 minutes,7 seconds random 
    expect(getDays(252756307)).toBe('5 days');
    // ,364 days,23 hours,5 minutes,7 seconds border before 1 year
    expect(getDays(31532707)).toBe('364 days');
    // ,250 days,12 hours,6 minutes,20 seconds random
    expect(getDays(21643580)).toBe('250 days');
    // 1 year,,,, border 1 year 
    expect(getDays(31536000)).toBe('');
    // ,2 days,12 hours,6 minutes,20 seconds random 
    expect(getDays(216380)).toBe('2 days');
    // 15 days,22 hours,7 minutes,1 second random 
    expect(getDays(1375621)).toBe('15 days');
    // ,200 days,5 hours,8 minutes, random 
    expect(getDays(17298480)).toBe('200 days');
    // ,111 days,6 hours,,7 seconds random
    expect(getDays(9612007)).toBe('111 days');
    // 9 years,53 days,7 hours,2 minutes, random
    expect(getDays(288428520)).toBe('53 days');
    // 9 years,3 days,7 hours,2 minutes,8 seconds random
    expect(getDays(284108528)).toBe('3 days');   
});

test('get years', () => {
    // 1 year,,,, border 1 year 
    expect(getYears(31536000)).toBe('1 year'); 
    // 2 years,,,, border 2 years + ending -s
    expect(getYears(63072000)).toBe('2 years');
    // 3 years,45 days,,, random
    expect(getYears(98496000)).toBe('3 years');
    // 30 years,45 days,4 hours,5 minutes, random
    expect(getYears(949982700)).toBe('30 years');
    // ,364 days,23 hours,5 minutes,7 seconds without year
    expect(getYears(31532707)).toBe('');
    // 557 years,5 days,15 hours,5 minutes,7 seconds random
    expect(getYears(17566038307)).toBe('557 years');
    // 23 years,,15 hours,5 minutes,6 seconds random
    expect(getYears(725382306)).toBe('23 years');
    // 4 years,,5 hours,8 minutes,6 seconds random 
    expect(getYears(126162486)).toBe('4 years');
    // ,15 days,22 hours,7 minutes,1 second without years
    expect(getYears(1375621)).toBe('');
    // 46 years,,8 hours,,9 seconds random
    expect(getYears(1450684809)).toBe('46 years');
    // ,,23 hours,59 minutes,59 seconds without years
    expect(getYears(86399)).toBe('');
    // ,6 days,12 hours,54 minutes,19 seconds without years
    expect(getYears(564859)).toBe('');
});
