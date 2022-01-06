// Sleep Caluculator

const getSleepHours = day => {
    switch(day) {
      case 'Monday':
      return 8
      break;
      case 'Tuesday':
      return 8
      break;
      case 'Wednesday':
      return 8
      break;
      case 'Thursday':
      return 8
      break;
      case 'Friday':
      return 8
      break;
      case 'Saturday':
      return 8
      break;
      case 'Sunday':
      return 8
      break;
      default:
      return 'Error!'
    }
  };
   
  const getActualSleepHours = () => 
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  
  const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } 
  else if (actualSleepHours >= idealSleepHours) {
    console.log('You have overslept by ' + (actualSleepHours - idealSleepHours)+'!');
  }
  else if (actualSleepHours <= idealSleepHours) {
    console.log('You need more sleep you got ' + (idealSleepHours - actualSleepHours) + ' less sleep!');
  }
  else {
    console.log('Something went wrong');
  }
  };
  
  calculateSleepDept();
  