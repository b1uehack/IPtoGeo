function getGeolocation() {
    const ipAddress = document.getElementById('ip-address').value.trim();
    if (!ipAddress) {
      displayError('Please enter an IP address.');
      return;
    }
    const apiKey = 'c8af03556d19cc';
    const url = `https://ipinfo.io/${ipAddress}/json?token=${apiKey}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid IP address or API key.');
        }
        return response.json();
      })
      .then(data => {
        const geolocation = document.getElementById('geolocation');
        geolocation.innerHTML = `
          <p><strong>IP Address:</strong> ${data.ip}</p>
          <p><strong>Location:</strong> ${data.city}, ${data.region}, ${data.country}</p>
          <p><strong>Geolocation:</strong> ${data.loc}</p>
          <p><strong>Timezone:</strong> ${data.timezone}</p>
        `;
        clearError();
      })
      .catch(error => {
        console.error(error);
        displayError(error.message);
      });
  }
  
  function displayError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
  }
  
  function clearError() {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';
  }
  