var Building_start_index = StudentInfoTableRepeat.itemAdded ? StudentInfoTableRepeat.itemIndex: 0;
var Building_end_index = StudentInfoTableRepeat.itemAdded ? Building_start_index + 1 : Building.value.length;

var event = form.load;

var options = [];

for (let i = Building_start_index; i < Building_end_index; i++){
  switch(Building[i].value){
    case 'BV': options = ['T2k', 'PK', 'K', '1', '2', '3', '4', '5', '6']; break;
      case 'CO': options = ['K', '1', '2', '3', '4', '5', '6']; break;
      case 'FG': options = ['K', '1', '2', '3', '4', '5', '6']; break;
      case 'HW': options = ['PK', 'K', '1', '2', '3', '4', '5', '6']; break;
      case 'PLV': options = ['K', '1', '2', '3', '4', '5', '6']; break;
      case 'RH': options = ['K', '1', '2', '3', '4', '5', '6']; break;
      case 'JH': options = ['7', '8']; break;
      case 'HS': options = ['9', '10', '11', '12']; break;
      case 'Edison': options = ['9', '10', '11', '12']; break;
    case '': options = []; break;
  }
  Grade[i].options = options;
  Grade[i].value = options[0];
  
} 
