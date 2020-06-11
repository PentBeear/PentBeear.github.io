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
                        "defaultValue": "http://google.com"
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
    return data.productIds;
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
