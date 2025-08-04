//asynchronous function
function func1(callback) {
  setTimeout(() => {
    console.log("Task1");
    callback();
  }, 2000);
}

//synchronous function
function func2() {
  console.log("task2");
  console.log("task3");
  console.log("task4");
}

func1(func2);

//promise- to avoid callback hell

function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const error=false;
        if(error) {
            reject("Error walking the dog");
        }
      else resolve("Dog walked");
    }, 2000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kitchen cleaned");
    }, 1000);
  });
}
 
//method chaining with promises
// walkdog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//await function
async function performTasks() {
  try {
    const dogWalkResult = await walkdog();
    console.log(dogWalkResult);
    
    const kitchenCleanResult = await cleanKitchen();
    console.log(kitchenCleanResult);
  } catch (error) {
    console.error(error);
  }
}

