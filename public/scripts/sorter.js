var sorter = function(){
  var list = document.getElementById("newItem").value;
  var newArray = list.split(",");
  var index = 0;

  for(index; index < newArray.length; index++){
    newArray[index] = parseInt(newArray[index])
  }

  var wichSort = document.getElementsByName("radio1");
  var radioIndex = 0;
  for(radioIndex; radioIndex < wichSort.length ; radioIndex++){
    if(wichSort[0].checked){
      bubleSort(newArray);
      printToPage ("Numbers sorted " + newArray);
    }
    if(wichSort[1].checked){
      quickSort(newArray);
      printToPage ("Numbers sorted " + newArray);
    }
  }
  function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		document.getElementById("sort_Section").innerHTML=message;
	}
};
 function bubleSort(items)
{
   var arrayOfNumbers = items;
  //this empty object will help terminate the loop once done by seting a bull
  //must be empty to alow the function to run
  var sorted;

  //the do while loop will alow me to keep it going until sort changes
  do{
    //starting the bull at false this will later change if still soritng or
    //stay false if done
    sorted = false;

    //im using a for loop to alow me to go through all the numbers in the array
    //inside will be a function that will alow the numbers to swap places after checking them
    //seting the length to -1 will alow me to stop it from checking the last number more then once
    for (var j = 0; j < arrayOfNumbers.length-1; j++){

      //this if function will check the items at index i and i+1
      if (arrayOfNumbers[j] > arrayOfNumbers[j+1]){
        //this will serve as a place holder for when the switch happends for item at index j
        var waiting = arrayOfNumbers[j];
        //the switch happends here
        arrayOfNumbers[j] = arrayOfNumbers[j+1];
        arrayOfNumbers[j+1] = waiting;
        //this bull alows the loop to continu
        sorted = true;
      }
    }


  } while(sorted);
}


function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

// first call
var result = quickSort(items);
