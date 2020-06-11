class hypixelWrapper {
    getInfo() {
        return {
            "id": "HypixelBazaarWrapper",
            "name": "HypixelBazaarWrapper",
            "blocks": [{
                "opcode": "jsonGetList",
                "blockType": "reporter",
                "text": "GetBazaarList: [key]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "put your key here"
                    }
                }
            }],
        };
    }
    jsonGetList (key) {
    let jsonString;
    console.log(key.key);
    fetch("https://api.hypixel.net/skyblock/bazaar/products?key=" + key.key)
    .then(response => response.json())
    .then(data => console.log(data),jsonString = data,console.log("Got Data!"));
    
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
