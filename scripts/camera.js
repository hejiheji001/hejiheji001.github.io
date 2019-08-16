/*
 *
 * Assignment 1 web app
 *
 * Copyright (c) 2016  Monash University
 *
 * Written by Michael Wybrow and Arvind Kaur
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
*/

// to check the status of the camera
let cameraStaus = false;

function cameraErrorCallback(error)
{
  console.log("Camera error: ", error);
}

// stopCamera is a function used to stop the camera.
// if the camera is not running, the code in this function will not run.
function stopCamera()
{
    if(cameraStaus)
    {
        let videoElem = document.getElementById("cameraVideo");
        let stream = videoElem.srcObject;
        let tracks = stream.getTracks();

        tracks.forEach(function(track) {
          track.stop();
        });

      videoElem.srcObject = null;
    }
}

// initialiseCamera is a function used to start the camera.
// if the camera is already running, it will not run the code again
function initialiseCamera()
{
    if(!cameraStaus)
    {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
        {
            cameraErrorCallback("enumerateDevices() not supported.");
            return;
        }

        // Support different browsers
        navigator.getUserMedia = navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia;

        var videoDevices = [];
        navigator.mediaDevices.enumerateDevices().then(function(devices) {
            devices.forEach(function (device) {

                if (device.kind == "videoinput") {
                    videoDevices.push(device);
                }
            });
        }).then(function() {
            var deviceId = videoDevices[videoDevices.length - 1].deviceId;

            var constraints = {
                audio:false,
                video: {
                    deviceId: deviceId
                },
            };

            navigator.mediaDevices.getUserMedia(constraints)
                .then(function(mediaStream) {
                    var videoElement = document.querySelector("video");
                    videoElement.srcObject = mediaStream;
                    videoElement.onloadedmetadata = function(e) {
                        videoElement.play();
                    };
                    // displayElementsWithClass("cameraError", false);
                })
                .catch(function(err) {
                    cameraErrorCallback(err);
                });
        });
        cameraStaus = true;
      }
}
