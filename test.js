class hypixelWrapper {
    getInfo() {
        return {
            "id": "HypixelBazaarWrapper",
            "name": "HypixelBazaarWrapper",
            "blocks": [{
                "opcode": "jsonGetInfo",
                "blockType": "reporter",
                "text": "GetBazaarItem: [key] [product]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "put your key here"
                    },
                    "product": {
                        "type": "string",
                        "defaultValue": "put the product name here"
                    }
                }
            }],
        };
    }
    jsonGetInfo (key,product) {
    console.log(key.key);
    console.log(product);
    fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + key.key + "&productId=" + product)
    .then(response => response.json())
    .then(data => console.log(data));
    
    
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
