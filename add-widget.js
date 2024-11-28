document
  .getElementById("databraid-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const carrierId = document.getElementById("carrier-id").value;
    const policyId = document.getElementById("policy-id").value;
    const awsArn = document.getElementById("aws-arn").value;

    // Enable the "Launch DataBraid" button
    const launchButton = document.getElementById("launch-databraid");
    if (launchButton) {
      launchButton.removeAttribute("disabled");
    }

    // Add the script
    let script = document.querySelector(
      'script[data-button-id="launch-databraid"]'
    );
    if (script) {
      script.remove();
    }
    script = document.createElement("script");
    script.src = "https://widget.databraid.io/embed.js";
    script.dataset.buttonId = "launch-databraid";
    script.async = true;
    script.dataset.policyId = policyId;
    script.dataset.carrierId = carrierId;
    script.dataset.awsArn = awsArn;
    document.body.appendChild(script);

    // Remove the form
    const form = document.getElementById("databraid-form");
    if (form) {
      form.remove();
    }
  });
