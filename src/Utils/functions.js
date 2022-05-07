/**
 * function to separate total seconds into minutes and seconds
 * @param {*} totalSeconds 
 * @returns minutes:seconds
 */
export const formatTimer = totalSeconds => {
    const seconds = totalSeconds % 60;
    const minutes = (totalSeconds - seconds) /60;
    return formatSingleDigitNumber(minutes) + ':' + formatSingleDigitNumber(seconds)
}
/**
 * function to display single digit number as second digit num. by adding zero
 * @param {} num 
 * @returns 9 => 09
 */
const formatSingleDigitNumber = num => {
    if (num >=0 && num <=9) return '0'+ num;
    else return num;
}