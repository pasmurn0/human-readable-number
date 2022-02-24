module.exports = function toReadable (number) {
  let finalString = '';
  let stringNumber = String(number);
  let unit;
  let dozen;
  let hundred;


  function oneDigitToReadable(number) {
  	switch (number) {
  	  case 0: return 'zero';
  	  case 1: return 'one';
  	  case 2: return 'two';
  	  case 3: return 'three';
  	  case 4: return 'four';
  	  case 5: return 'five';
  	  case 6: return 'six';
  	  case 7: return 'seven';
  	  case 8: return 'eight';
  	  case 9: return 'nine';
  	}
	}

  function nineTwentyToReadable(number) {
    switch (number) {
      case 0: return 'ten';
      case 1: return 'eleven';
      case 2: return 'twelve';
      case 3: return 'thirteen';
      case 4: return 'fourteen';
      case 5: return 'fifteen';
      case 6: return 'sixteen';
      case 7: return 'seventeen';
      case 8: return 'eighteen';
      case 9: return 'nineteen';
    }
  }

  function dozensToReadable(number) {
    switch (number) {
      case 2: return 'twenty';
      case 3: return 'thirty';
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6: return 'sixty';
      case 7: return 'seventy';
      case 8: return 'eighty';
      case 9: return 'ninety';
    }
  }


  function twoDigitsToReadable(dozen, unit) {
    if (dozen === 1) {
      return nineTwentyToReadable(unit);
    }
    if (unit === 0) {
      return dozensToReadable(dozen);
    }
    return dozensToReadable(dozen) + ' ' + oneDigitToReadable(unit);
  }


  function threeDigitsToReadable(hundred, dozen, unit) {
    if (dozen === 0 && unit === 0) {
      return oneDigitToReadable(hundred) + ' ' + 'hundred';
    }
    if (dozen === 0 && unit !== 0) {
      return oneDigitToReadable(hundred) + ' ' + 'hundred' + ' ' + oneDigitToReadable(unit);
    }
    return oneDigitToReadable(hundred) + ' ' + 'hundred' + ' ' + twoDigitsToReadable(dozen, unit);
  }



  if (stringNumber.length === 1) {
    unit = Number(stringNumber[0]);

    finalString = oneDigitToReadable(unit);
  }

  if (stringNumber.length === 2) {
    unit = Number(stringNumber[1]);
    dozen = Number(stringNumber[0]);

    finalString = twoDigitsToReadable(dozen, unit);
  }

  if (stringNumber.length === 3) {
    unit = Number(stringNumber[2]);
    dozen = Number(stringNumber[1]);
    hundred = Number(stringNumber[0]);
    
    finalString = threeDigitsToReadable(hundred, dozen, unit);
  }


  return finalString;
}