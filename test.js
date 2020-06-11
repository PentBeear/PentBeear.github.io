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
                        "defaultValue": "put ya key here"
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
    console.log(key);
    console.log(product);
    fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + key + "&productId=" + product)
    .then(response => response.json())
    .then(data => console.log(data));
    
    
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
