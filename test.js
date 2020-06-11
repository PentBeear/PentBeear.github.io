class hypixelWrapper {
    getInfo() {
        return {
            "id": "HypixelBazaarWrapper",
            "name": "HypixelBazaarWrapper",
            "blocks": [{
                "opcode": "jsonGetInfo",
                "blockType": "reporter",
                "text": "GetBazaarItem: key: [key] product name: [product] select value: [oper]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "put ya key here"
                    },
                    "product": {
                        "type": "string",
                        "defaultValue": "INK_SACK:3"
                    },
                    "oper": {
                        "type": "string",
                        "menu": "selectValue",
                        "defaultValue": ""
                    },
                }
            }],
            "menus": {
                selectValue: this._formatMenu(['BuyVolume', 'SellVolume', 'BuyPrice', 'SellPrice', 'BuyOrders', 'SellOrders']),
            }
        };
    }
    jsonGetInfo ({key, product, oper}) {
    console.log(key);
    console.log(product);
    fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + key + "&productId=" + product)
    .then(response => response.json())
    .then(data => console.log(data));
    if (oper === 'BuyVolume') {
        return data.product_info.quick_status.buyVolume
    }
    if (oper === 'SellVolume') {
        return data.product_info.quick_status.sellVolume
    }
    if (oper === 'BuyPrice') {
        return data.product_info.quick_status.buyPrice
    }
    if (oper === 'SellPrice') {
        return data.product_info.quick_status.sellPrice
    }
    if (oper === 'BuyOrders') {
        return data.product_info.quick_status.buyOrders
    }
    if (oper === 'SellOrders') {
        return data.product_info.quick_status.sellOrders
    }
    
    
        
        
    };
}
Scratch.extensions.register(new hypixelWrapper());
