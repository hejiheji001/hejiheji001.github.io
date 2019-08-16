window.onload = init;

// Universal Util
function setDataForDom(dom, val) {
    dom.innerText = smoothing(val);
    dom.setAttribute("data", val);
}

// Feature 1:
function init() {
    var alpha = document.getElementById("alpha");
    var beta = document.getElementById("beta");
    var gamma = document.getElementById("gamma");

    window.addEventListener('deviceorientation', function(event) {
        // Also For Part of Feature 4
        setDataForDom(alpha, event.alpha);
        setDataForDom(beta, event.beta);
        setDataForDom(gamma, event.gamma);
    });

    var x = document.getElementById("x_axis");
    var y = document.getElementById("y_axis");
    var z = document.getElementById("z_axis");
    var w = document.getElementById("w_axis");

    var deviceAbsolute = new AbsoluteOrientationSensor({ frequency: 10 });
    deviceAbsolute.addEventListener('reading', function() {
        setDataForDom(x, deviceAbsolute.quaternion[0]);
        setDataForDom(y, deviceAbsolute.quaternion[1]);
        setDataForDom(z, deviceAbsolute.quaternion[2]);
        setDataForDom(w, deviceAbsolute.quaternion[3]);
    });
    deviceAbsolute.addEventListener('error', function(error) {
        if (event.error.name == 'NotReadableError') {
            console.log("Sensor is not available.");
        }
    });
    deviceAbsolute.start();
}

// Feature 2:
function smoothing(num) {
    return (typeof num === "string" ? Number(num) : (num || 0)).toFixed(2);
}

// Feature 3:
function setCameraHeight() {
    var height = prompt("Please enter the height of camera");
    var heightDom = document.getElementById("heightOfCamera");
    if (!isNaN(Number(height))) {
        // Also For Part of Feature 4
        setDataForDom(heightDom, height);
    } else {
        alert("Please enter a valid value for camera's height");
        setCameraHeight();
    }
}
