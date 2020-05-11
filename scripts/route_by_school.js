if(YourRole.value === 'Secretary'){

  if(YourRole.value === 'Secretary'){
    switch(Building.Value) {
      case 'BV': SendToLibrary.value = 'bvLibrarian'; break;
      case 'CO': SendToLibrary.value = 'coLibrarian'; break;
      case 'FG': SendToLibrary.value = 'fgLibrarian'; break;
      case 'HW': SendToLibrary.value = 'hwLibrarian'; break;
      case 'PLV': SendToLibrary.value = 'plvLibrarian'; break;
      case 'RH': SendToLibrary.value = 'rhLibrarian'; break;
      case 'HS': SendToLibrary.value = 'hsLibrarian'; break;
      case 'JH': SendToLibrary.value = 'jhLibrarian'; break;
    }
  }
  else {
  switch(Building.Value) {
    case 'BV': SendToSecretary.value = 'bvSecretary'; break;
    case 'CO': SendToSecretary.value = 'bvSecretary'; break;
    case 'FG': SendToSecretary.value = 'bvSecretary'; break;
    case 'HW': SendToSecretary.value = 'bvSecretary'; break;
    case 'PLV': SendToSecretary.value = 'bvSecretary'; break;
    case 'RH': SendToSecretary.value = 'rhSecretary'; break;
    case 'HS': SendToSecretary.value = 'bvSecretary'; break;
    case 'JH': SendToSecretary.value = 'bvSecretary'; break;
    }
  }
}