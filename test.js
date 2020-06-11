class hypixelWrapper {
    getInfo() {
        return {
            "id": "HypixelBazaarWrapper",
            "name": "HypixelBazaarWrapper",
            "blocks": [{
                "opcode": "jsonGetInfo",
                "blockType": "reporter",
                "text": "GetBazaarItem: key: [key] product name: [product]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "#"
                    },
                    "product": {
                        "type": "string",
                        "defaultValue": "INK_SACK:3"
                    }
                }
            }],
        };
    }
    jsonGetInfo ({key, product}) {
    console.log(key.key);
    console.log(product);
    fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + key.key + "&productId=" + product)
    .then(response => response.json())
    .then(data => console.log(data));
    
    
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
