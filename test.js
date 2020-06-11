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
        $.ajax({
            dataType: "json",
            url: myURL,
            data: data,
            success: success
          });
          console.log(data);
        return data;
    }
}
Scratch.extensions.register(new jsonGrabber());
