class hypixelWrapper {
    getInfo() {
        return {
            "id": "HypixelBazaarWrapper",
            "name": "HypixelBazaarWrapper",
            "blocks": [{
                "opcode": "jsonGet",
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
    jsonGet (key) {
    console.log(key.key);
    fetch("https://api.hypixel.net/skyblock/bazaar/products?key=" + key.key)
    .then(response => response.json())
    .then(data => console.log(data));
    console.log(JSON.stringify(data));
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
