const fetchSimulation = (dataBase, time) => {
  return new Promise ((resolve, rejact) => {
    setTimeout(() => {
      resolve(dataBase);
      rejact(new Error("Algo salio mal"))
    }, time)
  }) 
   
}

export default fetchSimulation;


