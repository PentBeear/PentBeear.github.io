class jsonGrabber {
    getInfo() {
        return {
            "id": "jsonGrabber",
            "name": "jsonGrabber",
            "blocks": [{
                "opcode": "jsonGet",
                "blockType": "reporter",
                "text": "gets json from a url: [myURL]",
                "arguments": {
                    "myURL": {
                        "type": "string",
                        "defaultValue": "http://google.com"
                    }
                }
            }],
        };
    }
    jsonGet (myURL) {
    fetch(myURL)
    .then(response => response.json())
    .then(data => console.log(data));
        
        
    };
}
Scratch.extensions.register(new jsonGrabber());
