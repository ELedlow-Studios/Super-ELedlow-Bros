// Define get
window.get = function(scriptPath) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.onload = () => resolve(window.moduleExports[scriptPath]);
        script.onerror = reject;
        document.head.appendChild(script);
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

// Function to wait for the promise to resolve
window.waitForResolved = function(module) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            if (module.resolved) {
                clearInterval(intervalId);
                resolve();
            }
            module.timeTookToResolve += 0.001
        }, 1);  // Check every 1 milliseconds (0.001 seconds)
    });
}

// Self-executing function
(function() {
    // Define a new object for this module
    var module1 = {
        resolved: false,
        timeTookToResolve: 0,
        import1: null,
        import2: null,
        // Change: Define localwaitForResolved as a function that calls window.waitForResolved with this module as an argument
        localwaitForResolved: function() { return window.waitForResolved(this); }
    };

    (async () => {
        result = {}
        result.e1 = await window.get("export.js");
        result.e2 = await window.get("export2.js");
        module1.import1 = result.e1.import;
        module1.import2 = result.e2.import;
        module1.resolved = true;
    })();

    // Wait until resolved
    (async () => {
        // Change: Call localwaitForResolved without any arguments
        await module1.localwaitForResolved();
        // Then put your code here
        console.log("Imports:", module1.import1);
        console.log("Imports2:", module1.import2);
        getRequestSpeed = window.checkInternetSpeed(module1.timeTookToResolve);
        console.log("Time taken to resolve:", module1.timeTookToResolve, "Get request speed:", getRequestSpeed);
    })();
})();
