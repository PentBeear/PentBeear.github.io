class jsonGrabber {
    //Converted from https://raw.githubusercontent.com/NitroCipher/NitroBlock/master/MainScript.js to Scratch 3.0 using Ext2to3!
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
            "menus": {
                supermath: this._formatMenu(['+', '-', '/', '*', '^', 'sqrt']),
            }
        };
    }
    ncheck({
        check
    }) {
        return true
    }
    jQuGet({
        myURL
    }) {

        $.ajaxSetup({
            async: false
        });
        $.getJSON(myURL, function(data) {
            jsonObject = data;
        });
        return jsonObject;
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new jsonGrabber());