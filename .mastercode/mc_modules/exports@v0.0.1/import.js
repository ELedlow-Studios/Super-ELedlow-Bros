function get(scriptPath) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.onload = () => resolve(window.moduleExports);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
window.get = get;

// Usage:
let resolved = false;
let imports;
let etc;

(async () => {
    const result = await get("export.js");
    imports = result.imports;
    etc = result.etc;
    resolved = true;
})();

const intervalId = setInterval(() => {
    if (resolved) {
        clearInterval(intervalId);
        console.log("Imports:", imports);
        console.log("Etc:", etc);
    }
}, 10);  // Check every 1000 milliseconds (1 second)


/*
// Use setTimeout or another method to wait for the Promise to resolve
setTimeout(() => {
    console.log("Imports:", imports);
    console.log("Etc:", etc);
}, 1000);  // Adjust the delay as needed
*/

/*
(async () => {
    const {imports, etc} = await get("export.js");
    console.log("Imports:", imports,);
    console.log("Etc:", etc);
})();
*/

/*
get('export.js').then(({imports, etc}) => {
    console.log("Imports:", imports,);
    console.log("Etc:", etc);
});
*/