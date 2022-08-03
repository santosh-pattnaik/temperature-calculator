const calculateTemp = () => {
  //first we will see what user add value and what is user select
  const numberTemp = document.getElementById('temp-data').value
  // console.log(numberTemp);

  const tempSelected = document.getElementById('temp_diff')
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value
  // console.log(valueTemp);

  const celToFarh = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32)
    return fahrenheit
  }
  const farhToCel = (farh) => {
    let celsius = Math.round(((farh - 32) * 5) / 9)
    return celsius
  }

  let result

  if (valueTemp == 'cel') {
    result = celToFarh(numberTemp)
    document.getElementById(
      'resultContainer'
    ).innerHTML = `= ${result}Fahrenheit`
  } else {
    result = farhToCel(numberTemp)
    document.getElementById('resultContainer').innerHTML = `= ${result}Celsius`
  }
}
