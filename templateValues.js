module.exports = {
    "key": "YOUR_KEY",
    "template_name": "daily-email",
    "template_content": [],
    "message": {
        "to": [
            {
                "email": "email@example.com"
            }
        ],
        "auto_text": true,
        "inline_css": true,
        "merge": true,
        "merge_language": "handlebars",
        "global_merge_vars": [
            {
                "name": "companyName",
                "content": "2Nesting Doll Emporium"
            },
            {
                "name": "subject",
                "content": "Thank you for your order."
            }
        ],
        "merge_vars": [
            {
                "rcpt": "rajaraodv100@gmail.com",
                "vars": [
                    {
                        "name": "ordNumber",
                        "content": "478366238"
                    },
                    {
                        "name": "products",
                        "content": [
                            {
                                "img": "http://kbcdn.mandrill.com/nesting-penguin.png",
                                "qty": 2,
                                "sku": "PENG001",
                                "name": "Penguin",
                                "description": "Solid wood, hand-painted penguin nesting doll with 5 different sizes included. Limited Edition.",
                                "price": "12.99",
                                "ordPrice": "25.98"
                            },
                            {
                                "img": "http://kbcdn.mandrill.com/nesting-bear.png",
                                "qty": 3,
                                "sku": "BBEAR001",
                                "name": "Brown bear",
                                "description": "Solid wood, hand-painted brown bear nesting doll. Coordinates with our entire Bear collection. Includes 6 nested sizes.",
                                "price": "12.99",
                                "ordPrice": "38.97"
                            },
                            {
                                "img": "http://kbcdn.mandrill.com/nesting-tiger.png",
                                "qty": 1,
                                "sku": "TIGER030",
                                "name": "Tiger",
                                "description": "Orange striped tiger from our jungle collection.",
                                "price": "37.99",
                                "ordPrice": "37.99"
                            }
                        ]
                    },
                    {
                        "name": "subtotal",
                        "content": "102.94"
                    },
                    {
                        "name": "shipping",
                        "content": "4.95"
                    },
                    {
                        "name": "ordTotal",
                        "content": "107.89"
                    },
                    {
                        "name": "customerName",
                        "content": [
                            {
                                "firstName": "Monty",
                                "lastName": "Python"
                            }
                        ]
                    },
                    {
                        "name": "coupon",
                        "content": [
                            {
                                "code": "THANKS",
                                "description": "15% off"
                            }
                        ]
                    },
                    {
                        "name": "billingAddress",
                        "content": [
                            {
                                "streetNum": "1234",
                                "address1": "BoulevArd Lane",
                                "city": "ATLANTA",
                                "state": "ga",
                                "zip": 30030
                            }
                        ]
                    },
                    {
                        "name": "shippingAddress",
                        "content": [
                            {
                                "streetNum": 5678,
                                "address1": "BoulevArd Lane",
                                "city": "atlanta",
                                "state": "ga",
                                "zip": 30328
                            }
                        ]
                    },
                    {
                        "name": "member",
                        "content": true
                    }
                ]
            }
        ]
    }
};