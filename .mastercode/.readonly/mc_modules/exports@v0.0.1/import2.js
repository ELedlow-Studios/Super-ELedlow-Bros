// Define get
window.get = function(scriptPath) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.onload = () => resolve(window.moduleExports);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Function to wait for the promise to resolve
window.waitForResolved = function() {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            if (resolved && fileres) {
                clearInterval(intervalId);
                resolve();
            }
            timeTookToResolve += 0.001
        }, 1);  // Check every 1 milliseconds (0.001 seconds)
    });
}
// Function to check internet speed
window.checkInternetSpeed = function(time) {
    if (time > 10) {
        speed = "Really Bad";
    } else if (time > 3) {
        speed = "Bad";
    } else {
        speed = "Good";
    }
    return speed;
}

// Define the needed variables
// -- Resolver
let import2finished = false;
var resolved = false;
var timeTookToResolve = 0;
var getRequestSpeed = "Good";
// -- Exports
let imports;
let etc;

(async () => {
    const result = await get("export.js");
    imports = result.imports;
    etc = result.etc;
    resolved = true;
    import2finished = true;
})();

// Wait until resolved
(async () => {
    await waitForResolved();
    // Then put your code here
    console.log("Imports:", imports);
    console.log("Etc:", etc);
    getRequestSpeed = checkInternetSpeed(timeTookToResolve);
    console.log("Time taken to resolve:", timeTookToResolve, "Get request speed:", getRequestSpeed);
})();