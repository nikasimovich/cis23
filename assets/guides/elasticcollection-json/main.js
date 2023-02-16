  let url = "https://www.nikafisher.com/education/assets/imgs/api.json";
  let container = document.querySelector(".wrapper");

// gets data from the url and then uses a callback to display the data in a different format
    let getData = (url, cb) => {
      fetch(url)
        .then(response => response.json())
        .then(result => cb(result))
        .catch(function(error) {
          setError(error);
        });
    }

// log data in console
    let logData = (data) => {
      console.log(data);
    }

// clear out content from html
    let clearContainer = () => {
      container.innerHTML = "";
    }

// append data to body function
    let appendDataToBody = (data) => {
      data.forEach(element => {
        // console.log(element);
        let nameNode = document.createElement("div");
        nameNode.innerHTML = element.name;
        container.appendChild(nameNode);
        let amountNode = document.createElement("div");
        amountNode.innerHTML = element.amount;
        container.appendChild(amountNode);
      });
    }

    getData(url, (data) => {
      // Your code goes here, in a callback function that runs after the API has been fetched.
      // We can split each part of our code up into a series of smaller functions to make organizing and understanding it easier.
      logData(data);
      clearContainer();
      appendDataToBody(data);
    });