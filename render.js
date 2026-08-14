const { exec } = require("child_process");

const button = document.getElementById("scan");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    result.textContent = "Scanning...";

    exec(
        `powershell "Get-Volume | Where-Object {$_.DriveType -eq 'Removable'} | ConvertTo-Json"`,
        (error, stdout) => {

            if (error) {
                result.textContent = error.message;
                return;
            }

            if (!stdout) {
                result.textContent = "No USB found";
                return;
            }

            const usb = JSON.parse(stdout);

            const sizeGB = (usb.Size / 1024 / 1024 / 1024).toFixed(2);
            const freeGB = (usb.SizeRemaining / 1024 / 1024 / 1024).toFixed(2);
            const usedGB = (sizeGB - freeGB).toFixed(2);

            result.innerHTML = `
                🔌 USB Found

                Drive: ${usb.DriveLetter}:

                File System: ${usb.FileSystem}

                Health: ${usb.HealthStatus}

                Total: ${sizeGB} GB

                Used: ${usedGB} GB

                Free: ${freeGB} GB
            `;
        }
    );

});