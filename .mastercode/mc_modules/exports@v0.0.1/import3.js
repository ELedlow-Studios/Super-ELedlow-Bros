// Define the needed variables
// -- Resolver
var resolved = false;
var timeTookToResolve = 0;
var getRequestSpeed = "Good";
// -- Exports
let sus;

(async () => {
    const result = await get("export2.js");
    sus = result.sus;
    resolved = true;
})();

// Wait until resolved
(async () => {
    await waitForResolved(import2finished);
    // Then put your code here
    console.log("Sus:", sus);
    getRequestSpeed = checkInternetSpeed(timeTookToResolve);
    console.log("Time taken to resolve:", timeTookToResolve, "Get request speed:", getRequestSpeed);
})();