class jsonGrabber {

    getInfo() {
        return {
            "id": "jsonGrabber",
            "name": "jsonGrabber",
            "blocks": [{
                "opcode": "ncheck",
                "blockType": "Boolean",
                "text": "Grabs json from an api",
                "arguments": {}
            }, {
                "opcode": "color",
                "blockType": "reporter",
                "text": "color [color]",
                "arguments": {
                    "color": {
                        "type": "color",
                        "defaultValue": 0
                    }
                }
            }, {
            }, {
                "opcode": "jQuGet",
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
    jQuGet({
        myURL
    }) {
        $.ajaxSetup({
            async: false
        });
        $.getJSON(myURL, function(data) {
            jsonObject = data;
            console.log(data);
        });
        return jsonObject;
    }
}
Scratch.extensions.register(new jsonGrabber());