// This function loads pokemon data from the Pokemon API
function fetchchuck_norrisJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const chuck_norrisId = 1;
    const url = ` https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(chuck_norris) {
        console.log('data decoded from JSON:', chuck_norris);
  
        // Build a block of HTML
        const chuck_norrisHtml = `
          <p><strong>${chuck_norris.value}</strong></p>
          <img src="${chuck_norris.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = chuck_norrisHtml;
      });
  }
  
  fetchchuck_norrisJSON();
