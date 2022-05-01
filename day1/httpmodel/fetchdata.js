let http=require('http')
const data=[  
    {  
        "name":"Cheesecake Factory",
        "cuisine":"American",
        "id":1
    },
    {  
        "name":"Shokolaat",
        "cuisine":"American",
        "id":2
    },
    {  
        "name":"Gordon Biersch",
        "cuisine":"American",
        "id":3
    },
    {  
        "name":"Crepevine",
        "cuisine":"American",
        "id":4
    },
    {  
        "name":"Creamery",
        "cuisine":"American",
        "id":5
    },
    {  
        "name":"Old Pro",
        "cuisine":"American",
        "id":6
    },
    {  
        "name":"Nola\"s",
        "cuisine":"Cajun",
        "id":7
    },
    {  
        "name":"House of Bagels",
        "cuisine":"Bagels",
        "id":8
    },
    {  
        "name":"The Prolific Oven",
        "cuisine":"Sandwiches",
        "id":9
    },
    {  
        "name":"La Strada",
        "cuisine":"Italian",
        "id":10
    },
    {  
        "name":"Buca di Beppo",
        "cuisine":"Italian",
        "id":11
    },
    {  
        "name":"Pasta?",
        "cuisine":"Italian",
        "id":12
    },
    {  
        "name":"Madame Tam",
        "cuisine":"Asian",
        "id":13
    },
    {  
        "name":"Sprout Cafe",
        "cuisine":"Salad",
        "id":14
    },
    {  
        "name":"Pluto\"s",
        "cuisine":"Salad",
        "id":15
    },
    {  
        "name":"Junoon",
        "cuisine":"Indian",
        "id":16
    },
    {  
        "name":"Bistro Maxine",
        "cuisine":"French",
        "id":17
    },
    {  
        "name":"Three Seasons",
        "cuisine":"Vietnamese",
        "id":18
    },
    {  
        "name":"Sancho\"s Taquira",
        "cuisine":"Mexican",
        "id":19
    },
    {  
        "name":"Reposado",
        "cuisine":"Mexican",
        "id":20
    },
    {  
        "name":"Siam Royal",
        "cuisine":"Thai",
        "id":21
    },
    {  
        "name":"Krung Siam",
        "cuisine":"Thai",
        "id":22
    },
    {  
        "name":"Thaiphoon",
        "cuisine":"Thai",
        "id":23
    },
    {  
        "name":"Tamarine",
        "cuisine":"Vietnamese",
        "id":24
    },
    {  
        "name":"Joya",
        "cuisine":"Tapas",
        "id":25
    },
    {  
        "name":"Jing Jing",
        "cuisine":"Chinese",
        "id":26
    },
    {  
        "name":"Patxi\"s Pizza",
        "cuisine":"Pizza",
        "id":27
    },
    {  
        "name":"Evvia Estiatorio",
        "cuisine":"Mediterranean",
        "id":28
    },
    {  
        "name":"Cafe 220",
        "cuisine":"Mediterranean",
        "id":29
    },
    {  
        "name":"Cafe Renaissance",
        "cuisine":"Mediterranean",
        "id":30
    },
    {  
        "name":"Kan Zeman",
        "cuisine":"Mediterranean",
        "id":31
    },
    {  
        "name":"Gyros-Gyros",
        "cuisine":"Mediterranean",
        "id":32
    }
]
http.createServer((req,res)=>{
    if(req.url=="/menu" && req.method=="GET")
    {
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write(JSON.stringify(data))
        res.end();
    }
}).listen(3001)