const config =  {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  }
const apiRootUrl =  ""
  
/**
 * create an http request to fetch data
 * @param {string} endpoint  
 * @param {function} dataProcess
 * @returns {any} 
 */
export const fetchData = (endpoint , dataProcess) => {
  //load message frome api
    fetch(`${apiRootUrl}${endpoint}`, config)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        const result = dataProcess(data);
        console.log(result);
        return result
      });
  }

  /**
   *create config to send Data  
   * @param {object} data 
   * @param {string} method 
   */
  export const sendingApiConfing = (data, method) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return {
      method: `${method}`,
      mode: "cors",
      cache: "no-cache",
      // Add header in option
      headers: myHeaders,
      // Add data, json encoding in request body
      body: JSON.stringify(data),
    };
  }

  /**
   * for testing sendData()
   * @param {Response} response 
   */
  const defaultMessage = response => { 
        if (response.status == 201) {
            console.log(response)
          alert("ajout effectué");
        } else {
          alert("L'ajout a échoué");
        }
    }

    /**
     * create http request to send data to DB
     * @param {string} endpoint 
     * @param {object} configToSend 
     * @param {function} messageToDisplay 
     * @param {function} functionToExecute 
     */
  export const sendData = (endpoint, configToSend, functionToExecute = defaultMessage ) => {
    fetch(`${apiRootUrl}${endpoint}`, configToSend).then(
      (response) => {
            console.log(response)
            functionToExecute(response)
        }
    );
  }