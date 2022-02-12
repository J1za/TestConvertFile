
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calcBarWidth(firstBarVal, secondBarVal, maxPercentage) {
  if (firstBarVal === 0 && secondBarVal === 0) return [0, 0]

  let firstBarPercent = 0;
  let secondBarPercent = 0;

  const maxPercent = maxPercentage ? maxPercentage : 100;

  if (firstBarVal > secondBarVal) {
    firstBarPercent = maxPercent;
    secondBarPercent = (secondBarVal / firstBarVal) * maxPercent;
  } else {
    firstBarPercent = (firstBarVal / secondBarVal) * maxPercent;
    secondBarPercent = maxPercent;
  }

  return [firstBarPercent, secondBarPercent]
}

export function kFormatter(num){
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(/\.0$/, '') + 'K';
  }
  return num;
}