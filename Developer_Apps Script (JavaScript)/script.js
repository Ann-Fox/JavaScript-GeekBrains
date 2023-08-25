// Задание 3. Чернышева Анна Ивановна
let array1 = [
    {
      name: "Ivan P",
      count: 250,
    },
    {
      name: "Nik L",
      count: 150,
    },
  ];
  
  let array2 = [
    {
      name: "Ivan P",
      count: 200,
    },
    {
      name: "Nik L",
      count: 100,
    },
    {
      name: "Ray",
      count: 50,
    },
  ];
  
  array2.forEach((item) => {

    const indexArray2 = findIndex(array1, item.name)
  
    if (indexArray2 !== null) {
      array1[indexArray2].count += item.count
    } else {
      array1.push(item)
    }
  });
  
  function findIndex(array1, name) {
    let itemIndexReturn = null;
  
    array1.forEach((itemArray1, indexArr1) => {
      if (itemArray1.name === name) {
        itemIndexReturn = indexArr1;
      }
    });
  
    return itemIndexReturn;
  }
  
  console.log(array1);