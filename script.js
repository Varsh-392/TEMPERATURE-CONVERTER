const caltemp = () => {
  const inputtemp = document.getElementById('temp').value;
  const tempsel = document.getElementById('temp_diff');
  const valtemp = temp_diff.options[tempsel.selectedIndex].value;

  const cel_to_fah = (cel) => {
    let fah = ((cel * (9 / 5) + 32)).toFixed(2);
    return fah;
  }
  const fah_to_cel = (fah) => {
    let cel = ((fah - 32) * 5 / 9).toFixed(2);
    return cel;
  }

  if (valtemp == 'cel') {
    document.getElementById("result").innerHTML = cel_to_fah(inputtemp) + " Fahrenheit";
  }
  else if (valtemp == 'fah') {
    document.getElementById("result").innerHTML = fah_to_cel(inputtemp) + " Celsius";
  }
}