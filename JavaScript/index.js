let exit = document.getElementById("exit-log")
let divAcc = document.getElementById("account")
let signup = document.getElementById("signup")
let btnsignup = document.getElementById("btn-signup")
let btnlogin = document.getElementById("btn-login")
let mailorphone = document.getElementById("mailorphone")
let passwd = document.getElementById("passwd")
let btnlogout = document.getElementById("log-out")
let btnback = '<div id="back"><img style="height: 15px; transform: rotate(180deg);" src="Image/btn-next-prev.png" alt=""><div>quay lại</div></div>'
let showtype = document.getElementById("show-type")
let showprice = document.getElementById("show-price")
let showsale = document.getElementById("show-sale")
let data = JSON.parse(localStorage.getItem("data"))
let btnprodw = document.getElementById("choose-product-women")
let prod = document.getElementById("product")
let btnprodm = document.getElementById("choose-product-men")
let prodm = document.getElementById("men-product")
let btnuser = document.getElementById("user")
let showuser = document.getElementById("show-user")
let btnshowfilter = document.getElementById("show-filter")
let filterbar = document.getElementById("filter-bar")
let poster = document.getElementById("poster")
let uname = document.getElementById("name")
let btncart = document.getElementById("cart")
let account = document.getElementById("account")
let signin = document.getElementById("signin")
let listtype = document.getElementById("list-type")
let listprice = document.getElementById("list-price")
let listsale = document.getElementById("list-sale")
let in4 = document.getElementById("in4")
let showcart = document.getElementById("show-cart")
let updateinf = document.getElementById("update-in4")
let inStock = new Array()
let arrImg = ["poster.png", "img_banner_watch_women.jpeg", "img_banner_watch_men.jpeg", "balo-img.png", "sale-0.jpeg"]
let x = 1
let y = 2
let btnPrevious = document.getElementById("btn-previous")
let btnNext = document.getElementById("btn-next")
let isClicked = false
let interv = setInterval(function() {
    inter()
}, 5000)
let pathImage = new Array()
let arrProduct = new Array()
let currentPage = 1
let checkInCart = false

let arr = {
    "product": [{
            "id": "PKBT0000",
            "name": "Balo Rivacase",
            "made_in": "Đức",
            "description": "",
            "price": "799000",
            "images": ["balo-rivacase-7560-m-grey-969-01594277351.jpeg",
                "rivacase-7560-m-grey-2.jpeg",
                "rivacase-7560-m-grey.jpeg",
                "rivacase-7560-m-grey-4.jpeg",
                "rivacase-7560-m-grey-7.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0001",
            "name": "Balo Kmore The Abel Backpack",
            "made_in": "Việt Nam",
            "description": "",
            "price": "500000",
            "images": ["balo-kmore-the-abel-backpack-km-tabp003-m-dark-tan-13540-51663296227.jpeg",
                "balo-kmore-the-abel-backpack-km-tabp003-m-dark-tan-13540-41663296227.jpeg",
                "balo-kmore-the-abel-backpack-km-tabp003-m-dark-tan-13540-31663296227.jpeg",
                "balo-kmore-the-abel-backpack-km-tabp003-m-dark-tan-13540-01663296226.jpeg",
                "balo-kmore-the-abel-backpack-km-tabp003-m-dark-tan-13540-11663296226.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0002",
            "name": "Balo Seliux F4 Phantom II Backpack",
            "made_in": "Việt Nam",
            "description": "",
            "price": "750000",
            "images": ["seliux-f4-phantom-ii-backpack-m-black-red-2.jpeg",
                "seliux-f4-phantom-ii-backpack-m-black-red.jpeg",
                "seliux-f4-phantom-ii-backpack-m-black-red-3.jpeg",
                "seliux-f4-phantom-ii-backpack-m-black-red-4.jpeg",
                "seliux-f4-phantom-ii-backpack-m-black-red-5.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0003",
            "name": "Balo Rivacase 8365",
            "made_in": "Đức",
            "description": "",
            "price": "1950000",
            "images": ["balo-rivacase-8365-m-blue-7632-01653894040.jpeg",
                "rivacase-8365-m-blue.jpeg",
                "rivacase-8365-m-blue-3.jpeg",
                "rivacase-8365-m-blue-4.jpeg",
                "rivacase-8365-m-blue-5.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0004",
            "name": "Balo Herschel Heritage Standard",
            "made_in": "Canada",
            "description": "",
            "price": "2299000",
            "images": ["balo-herschel-heritage-standard-15-backpack-m-navy-1-12931-21638264487.jpeg",
                "balo-herschel-heritage-standard-15-backpack-m-navy-1-12931-01638264486.jpeg",
                "balo-herschel-heritage-standard-15-backpack-m-navy-1-12931-31638264487.jpeg",
                "balo-herschel-heritage-standard-15-backpack-m-navy-1-12931-11638264486.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0005",
            "name": "Balo AGVA Stella",
            "made_in": "Singapore",
            "description": "",
            "price": "1050000",
            "images": ["agva-stella-13-3-ltb351denimblue-m-blue.jpeg",
                "agva-stella-13-3-ltb351denimblue-m-blue-2.jpeg",
                "agva-stella-13-3-ltb351denimblue-m-blue-3.jpeg",
                "agva-stella-13-3-ltb351denimblue-m-blue-4.jpeg",
                "agva-stella-13-3-ltb351denimblue-m-blue-5.jpeg",
                "agva-stella-13-3-ltb351denimblue-m-blue-6.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0006",
            "name": "Balo Parkland Edison",
            "made_in": "Việt Nam",
            "description": "",
            "price": "1099000",
            "images": ["balo-parkland-edison-20020-00364-os-s-peachy-12645-01640748905.jpeg",
                "balo-parkland-edison-20020-00364-os-s-peachy-12645-01640748910.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0007",
            "name": "Balo Tomtoc",
            "made_in": "Mỹ",
            "description": "",
            "price": "1079000",
            "images": ["tomtoc-a71-d01x10-s-black-purple.jpeg",
                "tomtoc-a71-d01x10-s-black-purple-2.jpeg",
                "tomtoc-a71-d01x10-s-black-purple-3.jpeg",
                "tomtoc-a71-d01x10-s-black-purple-4.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0008",
            "name": "Balo Reeyee RY103B",
            "made_in": "Trung Quốc",
            "description": "",
            "price": "1320000",
            "images": ["reeyee-ry1020-17-m-black.jpeg",
                "reeyee-ry1020-17-m-black-4.jpeg",
                "reeyee-ry1020-17-m-black-2.jpeg",
                "reeyee-ry1020-17-m-black-3.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0009",
            "name": "Balo Solo Re:cover",
            "made_in": "Mỹ",
            "description": "",
            "price": "1550000",
            "images": ["balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-01655281810.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-21655281810.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-01655283881.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-41655281811.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-51655281811.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-71655281811.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-81655281811.jpeg",
                "balo-solo-recover-15-6-ubn761-10-backpack-m-grey-13270-91655281811.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0010",
            "name": "Balo Mikkor The Edwin Backpack",
            "made_in": "Việt Nam",
            "description": "",
            "price": "649000",
            "images": ["mikkor-the-edwin-backpack-m-black.jpeg",
                "mikkor-the-edwin-backpack-m-black-2.jpeg",
                "mikkor-the-edwin-backpack-m-black-3.jpeg",
                "mikkor-the-edwin-backpack-m-black-4.jpeg",
                "mikkor-the-edwin-backpack-m-black-5.jpeg",
                "mikkor-the-edwin-backpack-m-black-6.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0011",
            "name": "Balo Beam Backpack Solar Power Backpack K9386W",
            "made_in": "Trung Quốc",
            "description": "",
            "price": "3718000",
            "images": ["beam-backpack-solar-power-backpack-k9386w-m-black-7.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-8.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-5.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-10.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-4.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-3.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-2.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-6.jpeg",
                "beam-backpack-solar-power-backpack-k9386w-m-black-9.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0012",
            "name": "Balo Simplecarry E-City 2",
            "made_in": "Việt Nam",
            "description": "",
            "price": "690000",
            "images": ["balo-simplecarry-e-city-2-m-flower-11966-11608085313.jpeg",
                "balo-simplecarry-e-city-2-m-flower-11966-01608085312.jpeg",
                "balo-simplecarry-e-city-2-m-flower-11966-21608085313.jpeg",
                "balo-simplecarry-e-city-2-m-flower-11966-31608085313.jpeg",
                "balo-simplecarry-e-city-2-m-flower-11966-41608085313.jpeg"
            ],
            "clasify": ["phụ kiện", "balo"],
            "status": "1"
        }, {
            "id": "PKBT0013",
            "name": "Túi đeo chéo YUUMY YN98D",
            "made_in": "Việt Nam",
            "description": "",
            "price": "570000",
            "images": ["tui-deo-cheo-khoa-nhan-yuumy-yn98-FADODA-Quan-12-Nguyen-anh-thu-5-897x897.jpeg",
                "tui-deo-cheo-khoa-nhan-yuumy-yn98-FADODA-Quan-12-Nguyen-anh-thu-6-1-897x897.jpeg",
                "tui-deo-cheo-khoa-nhan-yuumy-yn98-FADODA-Quan-12-Nguyen-anh-thu-8-1-897x897.jpeg",
                "z3258710857339_3161b6dcad7d3b0508f525d035acda4b-1-897x897.jpeg"
            ],
            "clasify": ["phụ kiện", "Túi xách"],
            "status": "1"
        }, {
            "id": "PKDH0000",
            "name": "Đồng Hồ Thông Minh Fossil FTW6036",
            "made_in": "Mỹ",
            "description": "",
            "price": "7970000",
            "images": ["FTW6036_Desktop_1.jpeg",
                "FTW6036_Desktop_2.jpeg",
                "FTW6036_Desktop_3.jpeg"
            ],
            "clasify": ["phụ kiện", "Đồng hồ"],
            "status": "1"
        }, {
            "id": "PKDH0001",
            "name": "PAGINI PA002218",
            "made_in": "Việt Nam",
            "description": "",
            "price": "692000",
            "images": ["545b27db56729b14f4f0b02506075461.jpeg",
                "d8bf4f6eac84fb7bad9c2f1f91237e08.jpeg",
                "fa7ead3b6720d6d1d368efc2e7670185.jpeg",
                "481a5d4d5a205d330f6781a03282a4ff.jpeg",
                "86d4b167fbfe62d3de53905264e14913.jpeg",
                "abd2a43695ce8c876253f7f5f4235c2f.jpeg"
            ],
            "clasify": ["phụ kiện", "Đồng hồ"],
            "status": "1"
        },
        {
            "id": "AOCTNU00",
            "name": "DSS CROPTOP WASH",
            "made_in": "Việt Nam",
            "description": "",
            "price": "692000",
            "images": ["ao-croptop-local-brand-davies-nu.jpeg",
                "ao-croptop-local-brand-davies-dep.jpeg",
                "ao-croptop-nu-sign.jpeg",
                "ao-croptop-local-brand-nu-dep.jpeg"
            ],
            "clasify": ["Áo", "Croptop"],
            "status": "1"
        },
        {
            "id": "AOCTNU01",
            "name": "DSS CROPTOP SIGN",
            "made_in": "Việt Nam",
            "description": "",
            "price": "210000",
            "images": ["o-nu-wash-croptop-local-brand-dep-7.jpeg",
                "o-nu-wash-croptop-local-brand-dep-5.jpeg",
                "o-nu-wash-croptop-local-brand-dep-1.jpeg",
                "o-nu-wash-croptop-local-brand-dep-2.jpeg",
                "o-nu-wash-croptop-local-brand-dep-3.jpeg"
            ],
            "clasify": ["Áo", "Croptop"],
            "status": "1"
        },
        {
            "id": "QUQTNA00",
            "name": "Quần Tây Slim-fit ICON DENIM",
            "made_in": "Việt Nam",
            "description": "",
            "price": "400000",
            "images": ["c0d0aac7c1bf69e6ec647881f3616e36.jpeg",
                "fe4988db9c85a7dc761c5912b7bc01c9.jpeg",
                "d5f280cdae449338d846d4633ddb36b3.jpeg",
                "9d347f0826f26b34a9c4f5b99ef8a652.jpeg",
                "ebf2f138a0326c16f921e6f9b8f460f0.jpeg"
            ],
            "clasify": ["Quần", "Quần tây"],
            "status": "1"
        }, {
            "id": "QUQTNA01",
            "name": "Quần Âu Nam Phối Cạp Chun",
            "made_in": "Việt Nam",
            "description": "",
            "price": "260000",
            "images": ["a2d2154b263d7ad0112b70473995a86c.jpeg",
                "948559836b645ec7a72d292e7277499c_tn.jpeg"
            ],
            "clasify": ["Quần", "Quần tây"],
            "status": "1"
        }, {
            "id": "AOATNU00",
            "name": "DSS TEE TRAVELHOLIC",
            "made_in": "Việt Nam",
            "description": "",
            "price": "250000",
            "images": ["ao-thun-nu-local-brand-dep-davies.jpeg",
                "56c5a6f-d65e-4f50-9539-174296458b1d.jpeg",
                "6dfca21-8c81-4749-a8a3-66d4a2b33fd1.jpeg",
                "ao-thun-local-brand-nu-tay-lo.jpeg"
            ],
            "clasify": ["Áo", "Thun"],
            "status": "1"
        }, {
            "id": "AOHDNU00",
            "name": "DSS HOODIE D CARTOON",
            "made_in": "Việt Nam",
            "description": "",
            "price": "320000",
            "images": ["ao-khoac-mau-tim-hoodie-local-brand.jpeg",
                "hoodie-mau-tim-local-brand.jpeg",
                "khoac-hoodie-mau-tim-nu-local-brand.jpeg",
                "ao-khoac-hoodie-zip-mau-tim.jpeg",
                "ao-khoac-hoodie-nu-dep.jpeg"
            ],
            "clasify": ["Áo", "Hoodie"],
            "status": "1"
        }, {
            "id": "AOHDNU01",
            "name": "DSS HOODIE ZIPPER",
            "made_in": "Việt Nam",
            "description": "",
            "price": "450000",
            "images": ["zipper-hoodie-pink.jpeg",
                "zipper-hoodie-pink-2.jpeg"
            ],
            "clasify": ["Áo", "Hoodie"],
            "status": "1"
        }
    ],
    "promote": [{
        "id": "SALE0000",
        "name": "Sale 25%",
        "image": "",
        "content": "",
        "discount_price": "0",
        "discount_percent": "25",
        "date_begin": "",
        "date_end": "",
        "products": [{
            "id": "PKBT0000",
        }, {
            "id": "PKDH0001",

        }],
        "status": "1"
    }, {
        "id": "SALE0001",
        "name": "Sale 12%",
        "image": "",
        "content": "",
        "discount_price": "0",
        "discount_percent": "12",
        "date_begin": "",
        "date_end": "",
        "products": [{
            "id": "PKBT0002",
            "id": "QUQTNA01"
        }],
        "status": "1"
    }, {
        "id": "SALE0002",
        "name": "Sale 35%",
        "image": "",
        "content": "",
        "discount_price": "0",
        "discount_percent": "35",
        "date_begin": "",
        "date_end": "",
        "products": [{
            "id": "PKBT0007",
        }, {
            "id": "PKBT0011",
        }, {
            "id": "QUQT0000",
        }],
        "status": "1"
    }, {
        "id": "SALE0003",
        "name": "Sale 50%",
        "image": "",
        "content": "",
        "discount_price": "0",
        "discount_percent": "50",
        "date_begin": "",
        "date_end": "",
        "products": [{
            "id": "PKDH0000",
        }],
        "status": "1"
    }, {
        "id": "SALE0004",
        "name": "Sale 10%",
        "image": "",
        "content": "",
        "discount_price": "0",
        "discount_percent": "10",
        "date_begin": "",
        "date_end": "",
        "products": [{
            "id": "AOHDNU01",
        }],
        "status": "1"
    }],
    "size": [{
            "id": "AS",
            "name": "S",
            "shoulderIndex": "38",
            "backIndex": "56",
            "bellyIndex": "70",
            "legLength": "",
            "armLength": "40",
            "thighLength": "",
            "calfIndex": "",
            "buttIndex": "",
        },
        {
            "id": "AM",
            "name": "M",
            "shoulderIndex": "42",
            "backIndex": "58",
            "bellyIndex": "75",
            "legLength": "",
            "armLength": "45",
            "thighLength": "",
            "calfIndex": "",
            "buttIndex": "",
        },
        {
            "id": "AL",
            "name": "L",
            "shoulderIndex": "46",
            "backIndex": "60",
            "bellyIndex": "80",
            "legLength": "",
            "armLength": "50",
            "thighLength": "",
            "calfIndex": "",
            "buttIndex": "",
        },
        {
            "id": "QS",
            "name": "S",
            "shoulderIndex": "",
            "backIndex": "",
            "bellyIndex": "",
            "legLength": "60",
            "armLength": "",
            "thighLength": "32",
            "calfIndex": "22",
            "buttIndex": "80",
        },
        {
            "id": "QM",
            "name": "M",
            "shoulderIndex": "",
            "backIndex": "",
            "bellyIndex": "",
            "legLength": "64",
            "armLength": "",
            "thighLength": "36",
            "calfIndex": "26",
            "buttIndex": "85",
        },
        {
            "id": "QL",
            "name": "L",
            "shoulderIndex": "",
            "backIndex": "",
            "bellyIndex": "",
            "legLength": "68",
            "armLength": "",
            "thighLength": "40",
            "calfIndex": "30",
            "buttIndex": "90",
        }
    ],
    "largeClassify": [{
        "id": "AO",
        "name": "Áo",
        "miniClassify": [{
            "id": "AOCTNU",
            "name": "Áo croptop"
        }, {
            "id": "AOSMNU",
            "name": "Áo sơ mi"
        }, {
            "id": "AOHDNU",
            "name": "Áo hoodie"
        }, {
            "id": "AOATNU",
            "name": "Áo thun"
        }, {
            "id": "AOPPNU",
            "name": "Áo peter pan"
        }, {
            "id": "AOAKNA",
            "name": "Áo khoác"
        }, {
            "id": "AOAVNA",
            "name": "Áo vest"
        }, {
            "id": "AOHDNA",
            "name": "Áo hoodie"
        }, {
            "id": "AOATNA",
            "name": "Áo thun"
        }, {
            "id": "AOSMNA",
            "name": "Áo sơ mi"
        }]
    }, {
        "id": "QU",
        "name": "Quần",
        "miniClassify": [{
            "id": "QUCVNU",
            "name": "Chân váy"
        }, {
            "id": "QUQSNU",
            "name": "Quần skinny"
        }, {
            "id": "QUQLNU",
            "name": "Quần legging"
        }, {
            "id": "QUGVNU",
            "name": "Quần giả váy"
        }, {
            "id": "QUQBNU",
            "name": "Quần baggy"
        }, {
            "id": "QUSHNU",
            "name": "Quần short"
        }, {
            "id": "QUOSNU",
            "name": "Quần ống suông"
        }, {
            "id": "QUQTNA",
            "name": "Quần Tây"
        }, {
            "id": "QUQKNA",
            "name": "Quần Kaki"
        }, {
            "id": "QUQBNA",
            "name": "Quần Baggy"
        }, {
            "id": "QUSHNA",
            "name": "Quần short"
        }, {
            "id": "QUTHNA",
            "name": "Quần túi hộp"
        }]
    }, {
        "id": "PK",
        "name": "Phụ kiện nam - nữ",
        "miniClassify": [{
            "id": "PKDH",
            "name": "Đồng hồ"
        }, {
            "id": "PKTL",
            "name": "Thắt lưng"
        }, {
            "id": "PKBT",
            "name": "Balo / túi xách"
        }]
    }],
    "receipt": [{
        "id": "RE0000",
        "idStaff": "NV0000",
        "idCustomer": "KH0000",
        "nameCustomer": "Nguyễn Minh Thao",
        "date_init": "",
        "date_confirm": "",
        "list_prod": [{
            "idSize": "",
            "idProd": "",
            "amount": "",
            "price": ""
        }],
        "status": ""
    }],
    "customer": [{
        "id": "KH0000",
        "name": "Nguyễn Minh Thao",
        "data_init": "",
        "username": "thaonguyen",
        "password": "290702",
        "sex": "Nam",
        "birth_day": "2002-07-29",
        "number_phone": "0396290702",
        "image": " ",
        "address": " ",
        "cart": [{
            "idProd": "PKBT0008",
            "idSize": "",
            "amount": "3",
            "price": "3960000"
        }, {
            "idProd": "PKBT0005",
            "idSize": "",
            "amount": "9",
            "price": "9450000"
        }, {
            "idProd": "PKBT0012",
            "idSize": "",
            "amount": "2",
            "price": "1380000"
        }, {
            "idProd": "AOCTNU00",
            "idSize": "AL",
            "amount": "4",
            "price": "2768000"
        }, {
            "idProd": "PKDH0001",
            "idSize": "",
            "amount": "2",
            "price": "1038000"
        }, {
            "idProd": "QUQTNA00",
            "idSize": "QM",
            "amount": "1",
            "price": "400000"
        }],
        "status": "Đang hoạt động"
    }],
    "prodInStock": [{
            "idInput": "IS0000",
            "idProd": "PKBT0000",
            "idSize": "",
            "amount": "300",
            "price": "799000",
        },
        {
            "idInput": "IS0001",
            "idProd": "PKBT0001",
            "idSize": "",
            "amount": "350",
            "price": "500000",
        },
        {
            "idInput": "IS0002",
            "idProd": "PKBT0002",
            "idSize": "",
            "amount": "100",
            "price": "750000",
        },
        {
            "idInput": "IS0003",
            "idProd": "PKBT0003",
            "idSize": "",
            "amount": "111",
            "price": "1950000",
        },
        {
            "idInput": "IS0004",
            "idProd": "PKBT0004",
            "idSize": "",
            "amount": "119",
            "price": "2299000",
        },
        {
            "idInput": "IS0005",
            "idProd": "PKBT0005",
            "idSize": "",
            "amount": "46",
            "price": "1050000",
        },
        {
            "idInput": "IS0006",
            "idProd": "PKBT0006",
            "idSize": "",
            "amount": "69",
            "price": "1099000",
        },
        {
            "idInput": "IS0007",
            "idProd": "PKBT0007",
            "idSize": "",
            "amount": "697",
            "price": "1079000",
        },
        {
            "idInput": "IS0008",
            "idProd": "PKBT0008",
            "idSize": "",
            "amount": "677",
            "price": "1320000",
        },
        {
            "idInput": "IS0009",
            "idProd": "PKBT0009",
            "idSize": "",
            "amount": "634",
            "price": "1550000",
        },
        {
            "idInput": "IS0010",
            "idProd": "PKBT00010",
            "idSize": "",
            "amount": "630",
            "price": "649000",
        },
        {
            "idInput": "IS0011",
            "idProd": "PKBT00011",
            "idSize": "",
            "amount": "63",
            "price": "3718000",
        },
        {
            "idInput": "IS0012",
            "idProd": "PKBT0012",
            "idSize": "",
            "amount": "445",
            "price": "690000",
        },
        {
            "idInput": "IS0013",
            "idProd": "PKBT0013",
            "idSize": "",
            "amount": "845",
            "price": "570000",
        },
        {
            "idInput": "IS0014",
            "idProd": "PKDH0000",
            "idSize": "",
            "amount": "85",
            "price": "7970000",
        },
        {
            "idInput": "IS0015",
            "idProd": "PKDH0001",
            "idSize": "",
            "amount": "2001",
            "price": "692000",
        },
        {
            "idInput": "IS0016",
            "idProd": "AOCTNU00",
            "idSize": "AS",
            "amount": "2001",
            "price": "692000",
        },
        {
            "idInput": "IS0016",
            "idProd": "AOCTNU00",
            "idSize": "AM",
            "amount": "501",
            "price": "692000",
        },
        {
            "idInput": "IS0016",
            "idProd": "AOCTNU00",
            "idSize": "AL",
            "amount": "5001",
            "price": "692000",
        },
        {
            "idInput": "IS0017",
            "idProd": "QUQTNA00",
            "idSize": "QS",
            "amount": "5501",
            "price": "400000",
        },
        {
            "idInput": "IS0018",
            "idProd": "QUQTNA01",
            "idSize": "QS",
            "amount": "7561",
            "price": "260000",
        },
        {
            "idInput": "IS0019",
            "idProd": "AOATNU00",
            "idSize": "AM",
            "amount": "901",
            "price": "250000",
        },
        {
            "idInput": "IS0020",
            "idProd": "AOHDNU00",
            "idSize": "AL",
            "amount": "90",
            "price": "320000",
        },
        {
            "idInput": "IS0021",
            "idProd": "AOHDNU01",
            "idSize": "AM",
            "amount": "19",
            "price": "450000",
        },
        {
            "idInput": "IS0022",
            "idProd": "AOCTNU01",
            "idSize": "AS",
            "amount": "200",
            "price": "210000",
        },
        {
            "idInput": "IS0023",
            "idProd": "AOCTNU00",
            "idSize": "AS",
            "amount": "5001",
            "price": "692000",
        },
        {
            "idInput": "IS0024",
            "idProd": "AOCTNU00",
            "idSize": "AM",
            "amount": "5002",
            "price": "692000",
        },
        {
            "idInput": "IS0025",
            "idProd": "AOCTNU00",
            "idSize": "AL",
            "amount": "501",
            "price": "692000",
        }
    ]
}
let pathImg = {
    "Path": [
        "Image/PK/PKBT/PKBT0000/",
        "Image/PK/PKBT/PKBT0001/",
        "Image/PK/PKBT/PKBT0002/",
        "Image/PK/PKBT/PKBT0003/",
        "Image/PK/PKBT/PKBT0004/",
        "Image/PK/PKBT/PKBT0005/",
        "Image/PK/PKBT/PKBT0006/",
        "Image/PK/PKBT/PKBT0007/",
        "Image/PK/PKBT/PKBT0008/",
        "Image/PK/PKBT/PKBT0009/",
        "Image/PK/PKBT/PKBT0010/",
        "Image/PK/PKBT/PKBT0011/",
        "Image/PK/PKBT/PKBT0012/",
        "Image/PK/PKBT/PKBT0013/",
        "Image/AO/AOHDNU/AOHDNU00/",
        "Image/AO/AOHDNU/AOHDNU01/",
        "Image/PK/PKDH/PKDH0000/",
        "Image/PK/PKDH/PKDH0001/",
        "Image/AO/AOCTNU/AOCTNU00/",
        "Image/AO/AOCTNU/AOCTNU01/",
        "Image/AO/AOATNU/AOATNU00/",
        "Image/QU/QUQTNA/QUQTNA00/",
        "Image/QU/QUQTNA/QUQTNA01/"
    ]
}
localStorage.setItem("data", JSON.stringify(arr))

let currentUser = null
let firstName = document.getElementById("inp-firstname")
let lastName = document.getElementById("inp-lastname")
let number_phone = document.getElementById("phone-mail-regis")
let password_regis = document.getElementById("passwd-regis")
let same_passwd = document.getElementById("same-passwd")
let birthday = document.getElementById("birthday")
let btnsigup = document.getElementById("btn-regis")

function getCurrentDate() {
    function formatNumber(number) {
        return number < 10 ? "0" + number : number
    }
    var today = new Date();
    var hour = formatNumber(today.getHours())
    var minute = formatNumber(today.getMinutes())
    var second = formatNumber(today.getSeconds())
    var dd = formatNumber(today.getDate())
    var mm = formatNumber(today.getMonth())
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy + " " + hour + ':' + minute + ':' + second;
    return today
}

function Cart(idProd, idSize, amount, price) {
    this.idProd = idProd
    this.amount = amount
    this.idSize = idSize
    this.price = price
}

function Customer(id, name, number_phone, username, password, sex, birth_day, address = "", image = "", cart = [], status = "Đang hoạt động") {
    this.id = id
    this.name = name
    this.number_phone = number_phone
    this.username = username
    this.password = password
    this.sex = sex
    this.birth_day = birth_day
    this.address = address
    this.image = image
    this.cart = cart
    this.status = status
    this.data_init = getCurrentDate()
}

function checkValid(firstName, lastName, username, password, same_password, number_phone, birth_day, sex) {
    if (
        firstName == "" ||
        lastName == "" ||
        username == "" ||
        password == "" ||
        same_password == "" ||
        number_phone == "" ||
        birth_day == "" ||
        sex == "") {
        return false
    }
    return true
}

function checkConstraintRegis(customer) {
    for (element of data.customer) {
        if (element.username == customer.username || element.number_phone == customer.number_phone) {
            return false
        }
    }
    return true
}

function checkSamePassword(password, same_password) {
    if (password == same_password) {
        return true
    }
    return false
}

function initId() {
    if (data.customer.length == 0) {
        return "KH0001"
    }
    let number = parseInt(data.customer[data.customer.length - 1].id.replace("KH", ""))
    let newId = "KH" + String(number + 1).padStart(4, "0")
    return newId
}

function checkDate(birthday) {
    if (parseInt(birthday.split("-")[0]) < 1900 ||
        parseInt(birthday.split("-")[0]) > 2017) {
        return false
    }
    return true
}
let sex = ""
document.getElementsByName("sex").forEach(e => {
    e.onclick = function() {
        sex = e.value
    }
})
btnsigup.onclick = function() {

        let username = document.getElementById("inp-username")
        if (checkValid(
                firstName.value,
                lastName.value,
                username.value,
                password_regis.value,
                same_passwd.value,
                number_phone.value,
                birthday.value)) {
            if (checkSamePassword(password_regis.value, same_passwd.value)) {
                if (checkDate(birthday.value)) {
                    let customer = new Customer(
                        initId(),
                        firstName.value.trim() + " " + lastName.value.trim(),
                        number_phone.value.trim(),
                        username.value.trim(),
                        password_regis.value,
                        sex,
                        birthday.value)
                    if (checkConstraintRegis(customer) == true) {
                        data.customer.push(customer)
                        localStorage.setItem("data", JSON.stringify(data))
                        showacc(signup, 0, 1200)
                        setTimeout(() => {
                            signup.style.display = ""
                            account.style.display = ""
                        }, 450);
                    } else {
                        alert("Tài khoản đã tồn tại")
                    }
                } else {
                    alert("Ngày sinh không hợp lệ")
                }
            } else {
                alert("Bạn đã nhập 2 mật khẩu không giống nhau!")
            }
        } else {
            alert("Không được bỏ trống bất cứ thông tin nào!")
        }
    }
    //đăng nhập
btnlogin.onclick = function() {
    if (mailorphone.value == "" || passwd.value == "") {
        alert("vui lòng nhập đủ thông tin")
    } else {
        let checkOk = false
        data.customer.forEach(element => {
            if ((element.username == mailorphone.value || element.number_phone == mailorphone.value) && element.password == passwd.value) {
                showacc(signin, 0, 1200)
                setTimeout(() => {
                    signin.style.display = ""
                    account.style.display = ""
                }, 450);
                username = element.username
                currentUser = element
                document.getElementById("name-in4").innerHTML = currentUser.name
                document.getElementById("update-name").value = currentUser.name
                document.getElementById("update-contact").value = currentUser.number_phone
                let birthday = currentUser.birth_day.split("-")[2] + "-" + currentUser.birth_day.split("-")[1] + "-" + currentUser.birth_day.split("-")[0]
                document.getElementById("birthday-in4").innerHTML = birthday
                document.getElementById("phone-in4").innerHTML = currentUser.number_phone
                localStorage.setItem("currentIdUser", JSON.stringify(currentUser))

                checkOk = true
            }
        })
        if (!checkOk) {
            alert("Tài khoản hoặc mật khẩu không chính xác")
        }
    }
}
document.getElementById("hide-show").onclick = function() {
    if (document.getElementById("passwd").type == "password") {
        document.getElementById("passwd").type = "text"
        document.getElementById("img-hideshow").src = "Image/eye.png"
    } else {
        document.getElementById("passwd").type = "password"
        document.getElementById("img-hideshow").src = "Image/hidden.png"
    }
}

function inter() {
    if (x >= arrImg.length) {
        x = 0
    }
    if (y >= arrImg.length) {
        y = 0
    }
    document.getElementById("ps1").src = "Image/poster/" + arrImg[x]
    document.getElementById("ps2").src = "Image/poster/" + arrImg[y]
    x++
    y++
}

function createButtonBack(cur, newele) {
    let div = document.createElement("div")
    div.id = "back"
    let img = document.createElement("img")
    img.src = "Image/btn-next-prev.png"
    img.style.transform = "rotate(180deg)"
    img.style.height = "15px"
    let node = document.createTextNode("quay lại")
    div.appendChild(img)
    div.appendChild(node)
    div.onclick = function() {
        showacc(cur, 0, 1200)
        setTimeout(() => {
            cur.style.display = ""
            document.getElementById("back").style.display = ""
            showacc(newele, -500, 0)
        }, 450);
    }
    return div
}

exit.onclick = function() {
    if (signin.style.display == "block") {
        showacc(signin, 0, 1200)
    }
    if (signup.style.display == "block") {
        showacc(signup, 0, 1200)
    }
    if (in4.style.display == "block") {
        showacc(in4, 0, 1200)
    }
    if (updateinf.style.display == "block") {
        showacc(updateinf, 0, 1200)
    }
    if (onclickProduct.style.display == "block") {
        showacc(onclickProduct, 0, 1200)
    }
    if (setnewpass.style.display == "block") {
        showacc(setnewpass, 0, 1200)
    }
    setTimeout(() => {
        signin.style.display = ""
        divAcc.style.display = ""
        signup.style.display = ""
        setnewpass.style.display = ""
        onclickProduct.style.display = ""
        in4.style.display = ""
        updateinf.style.display = ""
    }, 450);

}
btnsignup.onclick = function() {
    document.getElementById("inp-firstname").value = ""
    document.getElementById("inp-lastname").value = ""
    document.getElementById("inp-username").value = ""
    document.getElementById("phone-mail-regis").value = ""
    document.getElementById("passwd-regis").value = ""
    document.getElementById("same-passwd").value = ""
    document.getElementById("birthday").value = ""
    showacc(signin, 0, 1200)
    setTimeout(() => {
        signin.style.display = ""
        signup.appendChild(createButtonBack(signup, signin))
        showacc(signup, -500, 0)
    }, 450);
}
btnback.onclick = function() {
    showacc(signup, 0, 1200)
    setTimeout(() => {
        signup.style.display = ""
        showacc(signin, -500, 0)
    }, 450);
}

btnlogout.onclick = function() {
    currentUser = null
    username = ""
    showuser.style.display = ""
}
document.getElementById("forgot-pass").onclick = function() {
    let setnewpass = document.getElementById("setnewpass")
    showacc(signin, 0, 1200)
    setTimeout(() => {
        signin.style.display = ""
        setnewpass.appendChild(createButtonBack(setnewpass, signin))
        showacc(setnewpass, -500, 0)
    }, 300);
}
showtype.onclick = function() {
    showFilter(listtype, itemstype, "id-type", listprice, listsale, document.getElementById("selected-type"))
}
showprice.onclick = function() {
    showFilter(listprice, itemsprice, "", listsale, listtype)
}
showsale.onclick = function() {
    showFilter(listsale, itemssale, "id-sale", listtype, listprice, document.getElementById("selected-sale"))

}

function showFilter(list1, arr, id, list2, list3, select) {
    if (list1.style.display == "block") {
        list1.style.display = ""
        document.getElementById(id).remove()
    } else {
        list1.style.display = "block"
        if (id != "") {
            let ul = document.createElement("ul")
            ul.id = id
            ul.className = "list-list"
            arr.forEach(e => {
                let li = document.createElement("li")
                li.className = "list-item"
                li.appendChild(document.createTextNode(e))
                ul.appendChild(li)
            })
            let di = document.createElement("div")
            di.appendChild(ul)
            list1.innerHTML = di.innerHTML
            list1.innerHTML += `<div style="display: flex; justify-content: center;">
            <img src="Image/icon-show.png" alt="">
        </div>`
            let t = document.getElementById(id).getElementsByClassName("list-item")

            for (let k = 0; k < t.length; k++) {
                document.getElementById(id).getElementsByClassName("list-item")[k].onclick = function() {
                    console.log("click")
                    select.innerHTML = document.getElementById(id).getElementsByClassName("list-item")[k].textContent
                    offlist()
                }
            }
        }

    }
    list2.style.display = ""
    list3.style.display = ""
    showuser.style.display = ""
    showcart.style.display = ""
}

var itemstype = new Array()
itemstype.push("tất cả")
data.largeClassify.forEach(e => {
        e.miniClassify.forEach(el => {
            itemstype.push(el.name)
        })
    })
    // document.getElementById("list-type")
    //  document.getElementById("list-type").getElementsByClassName("list-item")
    // var itemsprice = new Array()
    // itemsprice.push("tất cả")

var itemsprice = document.getElementById("list-price").getElementsByClassName("list-item")
var itemssale = new Array()
itemssale.push("tất cả")
data.promote.forEach(e => {
        itemssale.push(e.name)
    })
    // document.getElementById("list-sale").getElementsByClassName("list-item")
select(itemstype, document.getElementById("selected-type"), listtype)
select(itemsprice, document.getElementById("selected-price"), listprice)
select(itemssale, document.getElementById("selected-sale"), listsale)


function select(items, selected, list) {
    // select
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            selected.innerHTML = items[i].textContent
            list.style.display = ""
        }
    }
}

function offlist() {
    listtype.style.display = ""
    listprice.style.display = ""
    listsale.style.display = ""
}
btnprodw.onmouseenter = function() {
    prod.style.display = "block"
    offlist()
    createListType("nu")
    showuser.style.display = ""
    showcart.style.display = ""
}
btnprodw.onmouseleave = function() {
    prod.style.display = ""
    document.getElementById("sanpham").remove()
}

btnprodm.onmouseenter = function() {
    prod.style.display = "block"
    createListType("na")
    showuser.style.display = ""
    showcart.style.display = ""
    offlist()
}
btnprodm.onmouseleave = function() {
    prod.style.display = ""
    document.getElementById("sanpham").remove()
}


function createListType(sex) {
    let sp = document.createElement("div")
    sp.id = "sanpham"
    for (let i = 0; i < data.largeClassify.length; i++) {
        let div = document.createElement("div")
        div.style.borderRight = "1px solid gray"
        div.style.height = "250px"
        div.style.padding = "0 20% 5px 20px"
        div.style.margin = "10px"
        let divType = document.createElement("div")
        divType.style.fontSize = "18px"
        divType.style.marginTop = "20px"
        divType.style.color = "black"
        divType.appendChild(document.createTextNode(data.largeClassify[i].name))
        div.appendChild(divType)
        let ul = document.createElement("ul")
        ul.style.padding = "0"
        ul.style.listStyle = "none"
        div.appendChild(ul)
        for (let j = 0; j < data.largeClassify[i].miniClassify.length; j++) {
            if (data.largeClassify[i].miniClassify[j].id.indexOf(sex.toUpperCase()) != -1 ||
                data.largeClassify[i].id == "PK") {
                let li = document.createElement("li")
                li.className = "list-item"
                li.onclick = function() {
                    isHomePage = false
                    if (document.getElementsByClassName("middle")[0].style.display == "flex") {
                        if (arrProduct.length > 0) {
                            document.getElementById("div-list").remove()
                            document.getElementById("page-number").remove()
                        }
                        document.getElementById("div-title").remove()
                    } else {
                        document.getElementsByClassName("middle")[0].style.display = "flex"
                        document.getElementById("main").style.display = "none"
                        if (!isSearch) {
                            document.getElementById("div-main").remove()
                        } else {
                            isSearch = false
                            c = 0
                            document.getElementById("searc").remove()
                        }
                    }
                    currentPage = 1
                    pathImage.length = 0
                    arrProduct.length = 0
                    let pos = document.documentElement.scrollTop
                    let id = setInterval(function frame() {
                        if (pos <= 300) {
                            clearInterval(id)
                            createPageProduct(spaceProduct,
                                data.largeClassify[i].name + " - " + data.largeClassify[i].miniClassify[j].name,
                                data.largeClassify[i].miniClassify[j].id,
                                12
                            )
                            if (data.largeClassify[i].id == "PK") {
                                document.getElementById("left").style.display = "none"
                                document.getElementById("list-product").style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
                                document.getElementById("space-product").style.width = "100%"
                                    // console.log("log")
                            } else {
                                document.getElementById("left").style.display = "block"
                                document.getElementById("list-product").style.gridTemplateColumns = "1fr 1fr 1fr"
                                    // console.log("log")
                                document.getElementById("space-product").style.width = "80%"
                            }
                        } else {
                            pos -= 10
                            document.documentElement.scrollTop = pos
                        }
                    }, 1)
                }
                let a = document.createElement("a")
                a.href = "#" + data.largeClassify[i].id + "-" + data.largeClassify[i].miniClassify[j].id
                a.appendChild(document.createTextNode(data.largeClassify[i].miniClassify[j].name))
                li.appendChild(a)
                ul.appendChild(li)
            }
        }
        sp.appendChild(div)
    }
    prod.appendChild(sp)
    prod.onmouseenter = function() {
        prod.style.display = "block"
        createListType(sex)
    }
    prod.onmouseleave = function() {
        prod.style.display = ""
        document.getElementById("sanpham").remove()
    }
}
function  pushAmount(value) {
    inStock.push(value)
}
function getAmount(id) {
    for (let i = 0; i < data.prodInStock.length; i++) {
        if (data.prodInStock[i].idProd == id) {
            pushAmount(data.prodInStock[i])
        }
    }
}
function getAmountWithSize(id, size) {
    let amountSize = 0
    for (let i = 0; i < data.prodInStock.length; i++) {
        if (data.prodInStock[i].idProd == id && data.prodInStock[i].idSize == size) {
            amountSize += parseInt(data.prodInStock[i].amount)
        }
    }
    function createStockWithAmount() {
        let amount = amountSize
        return {amount}
    }
    pushAmount(createStockWithAmount())
}

function TongTien(cart) {
    let tong = 0
    cart.forEach(e => {
        tong += parseInt(e.price)
    })
    return tong
}
let thanhtoansp = new Array()

function cart() {
    thanhtoansp.length = 0
    pathImage.length = 0
    arrProduct.length = 0
    inStock.length = 0
    if (currentUser != null) {
        if (showcart.style.display == "flex") {
            showcart.style.display = ""
        } else {
            if (currentUser.cart.length > 0) {
                document.getElementById("show-cart").style.display = "none"
                document.getElementById("div-cart").style.display = "flex"
                let divCart = document.createElement("div")
                divCart.id = "divdiv-cart"
                document.getElementById("div-cart").appendChild(divCart)
                let cart = document.createElement("div")
                cart.id = "gio-hang"
                let di = document.createElement("div")
                di.id = "di-cart"
                di.appendChild(cart)
                showacc(cart, -500, 0)
                divCart.appendChild(di)
                let divActi = document.createElement("div")
                divActi.id = "active-cart"
                    //nút thanh toán
                let btnThanhtoan = document.createElement("div")
                btnThanhtoan.id = "btn-thanhtoan"
                btnThanhtoan.appendChild(document.createTextNode('Thanh toán'))
                btnThanhtoan.onclick = function() {
                    //kiểm tra đã chọn sp để thanh toán ch
                    if (thanhtoansp.length > 0) {
                        //tạo trang thanh toán
                        ttGioHang(thanhtoansp)
                        showacc(document.getElementById("di-cart"), 0, 1200)
                        setTimeout(() => {
                            document.getElementById("div-cart").style.display = ""
                            document.getElementById("gio-hang").style.display = ""
                            document.getElementById("divdiv-cart").remove()
                            document.getElementById("thanh-toan").style.display = "flex"
                            showacc(document.getElementById("div-thanhtoan"), -500, 0)
                        }, 400);
                    } else {
                        alert("Vui lòng chọn sản phẩm để thanh toán")
                    }
                }
                let tongtien = document.createElement("div")
                tongtien.appendChild(
                    document.createTextNode("Tổng thanh toán: 0 VND"))
                divActi.appendChild(tongtien)
                divActi.appendChild(btnThanhtoan)
                let table = document.createElement("table")
                table.id = "table-cart"
                let thread = document.createElement("thead")
                let tr = document.createElement("tr")
                tr.style.paddingBottom = "30px"
                tr.style.fontSize = "20px"
                let thEmpty = document.createElement("th")
                let thName = document.createElement("th")
                thName.appendChild(document.createTextNode("Tên sản phẩm"))
                let thPrice = document.createElement("th")
                thPrice.appendChild(document.createTextNode("Giá"))
                let thAmount = document.createElement("th")
                thAmount.appendChild(document.createTextNode("Số lượng"))
                let thSize = document.createElement("th")
                thSize.appendChild(document.createTextNode("Size"))
                let thTotal = document.createElement("th")
                thTotal.appendChild(document.createTextNode("Thành tiền"))
                let thEmptyy = document.createElement("th")
                tr.appendChild(thEmpty)
                tr.appendChild(thName)
                tr.appendChild(thPrice)
                tr.appendChild(thAmount)
                tr.appendChild(thSize)
                tr.appendChild(thTotal)
                tr.appendChild(thEmptyy)
                let tbody = document.createElement("tbody")
                let k = 0
                for (let i = 0; i < currentUser.cart.length; i++) {
                    // sizeProduct.length = 0
                    getPath(currentUser.cart[i].idProd, path)
                    getProduct(currentUser.cart[i].idProd)
                    getAmountWithSize(currentUser.cart[i].idProd, currentUser.cart[i].idSize)
                        // console.log(inStock)
                    let ima = document.createElement("img")
                    ima.src = pathImage[i] + arrProduct[i].images[0]
                    ima.style.height = "100px"
                    let name = document.createElement("div")
                    name.style.lineHeight = "20px"
                    name.style.fontSize = "16px"
                    name.appendChild(document.createTextNode(arrProduct[i].name))
                    let price = document.createElement("div")
                        // price.appendChild(document.createTextNode(calculated(arrProduct[i].price) + "VND"))
                    let pricee = document.createElement("div")
                    pricee.appendChild(document.createTextNode(calculated(
                        currentUser.cart[i].price) + " VND"))
                    let countt = currentUser.cart[i].amount
                    let div = document.createElement("div")
                    let btnSub = document.createElement("button")
                    btnSub.style.width = "20px"
                    btnSub.style.border = "1px solid gray"
                    btnSub.style.cursor = "pointer"
                    btnSub.style.backgroundColor = "white"
                    let discountPrice = "0"
                    let cost = "0"
                    let promot = getPromote(arrProduct[i].id)
                        // console.log(promot)
                    if (promot == -1) {
                        discountPrice = arrProduct[i].price
                    } else {
                        cost = arrProduct[i].price
                        discountPrice = parseInt(cost) -
                            parseInt(data.promote[promot[0]].discount_price) -
                            parseInt(data.promote[promot[0]].discount_percent) / 100 * cost
                    }
                    if (cost != "0") {
                        let discountPriceDiv = document.createElement("div")
                        discountPriceDiv.appendChild(document.createTextNode(calculated(discountPrice) + " VND"))
                        let costDiv = document.createElement("del")
                        costDiv.appendChild(document.createTextNode(calculated(cost) + " VND"))
                        price.appendChild(costDiv)
                        price.appendChild(discountPriceDiv)
                    } else {
                        let discountPriceDiv = document.createElement("div")
                        discountPriceDiv.appendChild(document.createTextNode(calculated(discountPrice) + " VND"))
                        price.appendChild(discountPriceDiv)
                    }
                    price.style.display = "block"
                        //giảm số lượng sp trong giỏ
                    btnSub.onclick = function() {
                        if (countt > 1) {
                            countt--
                            divshow.placeholder = countt
                            let t = parseInt(discountPrice) * countt
                            pricee.textContent = calculated(t.toString()) + " VND"
                            data.customer.forEach(e => {
                                if (e.id == currentUser.id) {
                                    e.cart[i].amount = countt
                                    e.cart[i].price = t.toString()
                                    localStorage.setItem("data", JSON.stringify(data))
                                }
                            })
                            thanhtoansp.forEach(e => {
                                    if (e.idProd == currentUser.cart[i].idProd) {
                                        e = currentUser.cart[i]
                                        tongtien.textContent = ("Tổng thanh toán: " +
                                            calculated(TongTien(thanhtoansp)) + " VND"
                                        )
                                    }
                                })
                                // tongtien.textContent = ("Tổng tiền: " +
                                //     calculated(TongTien(currentUser.cart)) + " VND"
                                // )
                        }
                    }
                    btnSub.appendChild(document.createTextNode("-"))
                    div.appendChild(btnSub)
                    function updatePrice(countt) {
                        divshow.placeholder = countt
                        divshow.value = countt
                        let t = parseInt(discountPrice) * countt
                        pricee.textContent = calculated(t.toString()) + " VND"
                        data.customer.forEach(e => {
                                if (e.id == currentUser.id) {
                                    e.cart[i].amount = countt
                                    e.cart[i].price = t
                                    localStorage.setItem("data", JSON.stringify(data))
                                }
                            })
                            // tongtien.textContent = ("Tổng tiền: " +
                            //     calculated(TongTien(currentUser.cart)) + " VND"
                            // )
                        thanhtoansp.forEach(e => {
                            if (e.idProd == currentUser.cart[i].idProd) {
                                e = currentUser.cart[i]
                                tongtien.textContent = ("Tổng thanh toán: " +
                                    calculated(TongTien(thanhtoansp)) + " VND"
                                )
                            }
                        })
                    }
                    let divshow = document.createElement("input")
                    divshow.id = "choose-amount-cart-"+i
                    divshow.type = "number"
                    divshow.style.width = "50px"
                    divshow.style.border = "none"
                    divshow.style.borderTop = "1px solid gray"
                    divshow.style.borderBottom = "1px solid gray"
                    divshow.style.outline = "none"
                    divshow.style.textAlign = "center"
                    divshow.placeholder = countt
                    div.appendChild(divshow)
                    let btnAdd = document.createElement("button")
                    btnAdd.style.width = "20px"
                    btnAdd.style.border = "1px solid gray"
                    btnAdd.style.cursor = "pointer"
                    btnAdd.style.backgroundColor = "white"
                    document.getElementById("gio-hang").addEventListener("click", function() {
                        if (parseInt(divshow.value) >  inStock[i].amount) {
                            updatePrice(inStock[i].amount)
                        }
                        else {
                            if (divshow .value) {
                                updatePrice(parseInt(divshow.value))
                            }
                        }
                    })
                        //thêm số lượng sản phẩm trong giỏ
                    btnAdd.onclick = function() {
                        if (countt < inStock[i].amount) {
                            countt++
                            updatePrice(countt)
                        }
                    }
                    btnAdd.appendChild(document.createTextNode("+"))
                    div.appendChild(btnAdd)
                    let text = document.createElement("div")
                        // text.id = "proInstock-cart"
                    text.appendChild(document.createTextNode(inStock[i].amount + " sản phẩm có sẵn"))
                    text.style.fontSize = "10px"
                    text.style.color = "gray"
                    text.style.marginLeft = "10px"
                    text.style.marginTop = "20px"
                        // text.style.display = "none"  
                    div.appendChild(text)
                    let btnDel = document.createElement("div")
                    btnDel.style.textAlign = "center"
                    btnDel.style.cursor = "pointer"
                    btnDel.style.transition = "1s"
                    btnDel.onmouseenter = function() {
                        btnDel.style.color = "rgba(128, 128, 128, 0.7)"
                    }
                    btnDel.onmouseleave = function() {
                        btnDel.style.color = "black"
                    }
                    btnDel.appendChild(document.createTextNode("xoá"))
                        //xoá sản phẩm khỏi giỏ
                    btnDel.onclick = function() {
                        // thanhtoansp.splice(thanhtoansp.indexOf(e.cart[i].idProd), 1)
                        thanhtoansp.forEach(e => {
                            if (e.idProd == currentUser.cart[i].idProd) {
                                thanhtoansp.splice(thanhtoansp.indexOf(e), 1)
                            }
                        })
                        tongtien.textContent = ("Tổng thanh toán: " +
                            calculated(TongTien(thanhtoansp)) + " VND"
                        )
                        currentUser.cart.splice(i - k, 1)
                        console.log(i, currentUser.cart.length)
                        localStorage.setItem("data", JSON.stringify(data))
                        document.getElementById("table-cart").deleteRow(i + 1 - k)
                        k++
                        document.getElementById("noti").style.display = "flex"
                        showacc(document.getElementById("noti-noti"), -500, 0)
                        document.getElementById("noti-noti").style.display = "flex"
                        document.getElementById("noti-noti").innerHTML = "đã xoá Thành công"
                        setTimeout(() => {
                            document.getElementById("noti").style.display = ""
                        }, 700)
                    }
                    let check = document.createElement("input")
                    check.type = "checkbox"
                    check.value = i
                    check.onclick = function() {
                        console.log(check.checked)
                        if (check.checked) {
                            thanhtoansp.push(currentUser.cart[check.value])
                        } else {
                            console.log(check.value)
                            thanhtoansp.splice(thanhtoansp.indexOf(currentUser.cart[check.value]), 1)
                        }
                        tongtien.textContent = ("Tổng thanh toán: " +
                            calculated(TongTien(thanhtoansp)) + " VND"
                        )
                    }
                    let acti = document.createElement("div")
                    acti.appendChild(btnDel)
                    acti.appendChild(check)
                    acti.style.display = "flex"
                    acti.style.flexDirection = "column"
                    acti.style.justifyItems = "space-between"
                    let tr = document.createElement("tr")
                    tr.appendChild(ima)
                    tr.appendChild(name)
                    tr.appendChild(price)
                    tr.appendChild(div)
                    let d = document.createElement("div")
                    sizeProduct.length = 0
                    data.size.forEach(e => {
                            // console.log(e.id.indexOf(currentUser.cart[i].idProd[0]))
                            if (e.id.indexOf(currentUser.cart[i].idProd[0]) != -1) {
                                sizeProduct.push(e)
                                    // d.appendChild(updateSize(sizeProduct, currentUser.cart[i]))
                            }
                        })
                        // console.log(sizeProdu)
                        // console.log(currentUser.cart[i].idSize)
                    if (sizeProduct.length > 0)
                        d.appendChild(updateSize(sizeProduct, currentUser.cart[i], text))

                    // console.log(currentUser.cart[i].idProd[0], sizeProduct.length)
                    tr.appendChild(d)
                    tr.appendChild(pricee)
                    tr.appendChild(acti)
                    tbody.appendChild(tr)

                }
                thread.appendChild(tr)
                table.appendChild(thread)
                table.appendChild(tbody)
                cart.appendChild(table)
                cart.appendChild(divActi)
                checkInCart = true
            } else {
                document.getElementById("show-cart").style.display = "flex"
            }
        }
        showuser.style.display = ""
        offlist()
    } else {
        alert("Đăng nhập để tiếp tục")
        account.style.display = "flex"
            // signin.style.display = "block"
        showacc(signin, -500, 0)
    }
}
btncart.onclick = function() {
        cart()
    }
    // ttGioHang(data.customer[0].cart)
    //thanh toán giỏ hàng
function ttGioHang(thanhtoansp) {
    path = JSON.parse(JSON.stringify(pathImg))
        // thanhtoansp.length = 0
        // inStock.length = 0
        // getAmount(thanhtoansp.idProd)
    let div = document.createElement("div")
    let table = document.createElement("table")
    thanhtoansp.forEach(e => {
        pathImage.length = 0
        arrProduct.length = 0
        getPath(e.idProd, path)
        getProduct(e.idProd)
        let tr = document.createElement("tr")
        let divPro = document.createElement("div")
        let ima = document.createElement("img")
        ima.src = pathImage[0] + arrProduct[0].images[0]
        ima.style.height = "100px"
        divPro.appendChild(ima)
        let di = document.createElement("div")
        let name = document.createElement("div")
        name.appendChild(document.createTextNode(arrProduct[0].name))
        name.style.fontSize = "12px"
            // console.log(name)
        di.appendChild(name)
        console.log(e.idSize)
        if (e.idSize != "") {
            let siz = document.createElement("div")
            siz.style.fontSize = "12px"
            data.size.forEach(el => {
                if (el.id == e.idSize) {
                    siz.appendChild(document.createTextNode("Size: " + el.name))
                }
            })
            di.appendChild(siz)
        }
        let pri = document.createElement("div")
        pri.appendChild(document.createTextNode("Giá: " + calculated(e.price) + " VND"))
        pri.style.fontSize = "12px"
        di.style.padding = "10px"
        di.style.display = "flex"
        di.style.flexDirection = 'column'
        di.style.justifyContent = "space-between"
        di.appendChild(pri)
        let div0 = document.createElement("div")
        div0.appendChild(di)
        div0.style.display = "flex"
        div0.style.justifyContent = "space-between"
        let am = document.createElement("div")
        am.style.padding = "10px"
        am.appendChild(document.createTextNode("Số lượng: " + e.amount))
        am.style.fontSize = "12px"
        div0.appendChild(am)
        div0.style.width = "410px"
        divPro.appendChild(div0)
        divPro.style.display = "flex"
        divPro.style.padding = "10px 0"
        divPro.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        tr.appendChild(divPro)
        table.appendChild(tr)
    })
    let dd = document.createElement("div")
    dd.appendChild(table)
    dd.style.overflowY = "scroll"
    dd.style.height = "360px"
    dd.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    let div1 = document.createElement("div")
    div1.style.display = 'flex'
    div1.style.flexDirection = "column"
    div1.style.justifyContent = "space-between"
    div1.style.padding = "10px"
        //ô nhập mã
    let inp0 = document.createElement("input")
    inp0.id = "inp-code"
    inp0.style.padding = "5px 10px"
    inp0.style.outline = "none"
    inp0.placeholder = "Nhập mã giảm giá"
    let div11 = document.createElement("div")
    div11.style.display = 'flex'
    div11.style.justifyContent = "space-between"
    div11.appendChild(inp0)
        //nút kiểm tra mã
    let btnCkeckcode = document.createElement("div")
    btnCkeckcode.appendChild(document.createTextNode("Kiểm tra mã"))
    btnCkeckcode.id = "btn-checkcode"
    div11.appendChild(btnCkeckcode)
        //nút huỷ
    let btnHuy = document.createElement("div")
    btnHuy.id = "btn-huy"
    btnHuy.appendChild(document.createTextNode("huỷ"))

    //nút xác nhận
    div11.appendChild(btnHuy)

    let btnXacnhan = document.createElement("div")
    btnXacnhan.id = "btn-xacnhan"
    btnXacnhan.appendChild(document.createTextNode("Xác nhận"))
    div11.appendChild(btnXacnhan)
        //tổng thanh toán
    let div12 = document.createElement("div")
    div12.style.paddingTop = "10px"
    div12.style.fontSize = "16px"
    div12.appendChild(document.createTextNode("Tổng thanh toán: " + calculated(TongTien(thanhtoansp)) + ' VND'))
    div1.appendChild(div11)
    div1.appendChild(div12)
    div.appendChild(dd)
    div.appendChild(div1)
    document.getElementById("thanhtoan-sp").innerHTML = div.innerHTML
    document.getElementById("btn-huy").onclick = function() {
        console.log("click")
        showacc(document.getElementById("div-thanhtoan"), 0, 1200)
        setTimeout(() => {
            document.getElementById("thanh-toan").style.display = "none"
            cart()
        }, 400);
    }
    document.getElementById("btn-xacnhan").onclick = function() {
        if (document.getElementById("inp-dc").value == "") {
            alert("Vui lòng nhập địa chỉ nhận hàng")
        } else {
            thanhtoansp.forEach(e => {
                currentUser.cart.splice(currentUser.cart.indexOf(e), 1)
                data.prodInStock.forEach(el => {
                    if (el.idSize == e.idSize) {
                        el.amount = (parseInt(el.amount) - parseInt(e.amount)).toString()
                    }
                })
            })
            let rc = createReceipt(thanhtoansp)
            data.receipt.push(rc)
            localStorage.setItem("data", JSON.stringify(data))


            showacc(document.getElementById("div-thanhtoan"), 0, 1200)
            setTimeout(() => {
                document.getElementById("thanh-toan").style.display = "none"
                document.getElementById("noti").style.display = "flex"
                document.getElementById("noti-noti").innerHTML = "Thanh toán thành công"
                showacc(document.getElementById("noti-noti"), -500, 0)
                document.getElementById("noti-noti").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("noti").style.display = ""
                    fillReceipt(rc)
                }, 700)
            }, 400);

        }
    }
}


function updateSize(index, cur, text) {
    console.log(cur.idProd, cur.idSize)
    let isSelected = 0
    let ar = new Array()
    let div = document.createElement("div")
    div.style.display = "flex"
    div.style.marginTop = "0px"
    div.style.textAlign = "center"
    let arrBut = new Array()
    data.size.forEach(el => {
        // console.log(el.id)
        if (el.id.indexOf(cur.idSize[0]) != -1) {
            let btnSize = document.createElement("div")
            arrBut.push(btnSize)
            btnSize.style.padding = "5px"
            btnSize.style.paddingTop = "0px"
            btnSize.style.width = "15px"
            btnSize.style.textAlign = "center"
            btnSize.style.cursor = "pointer"
            btnSize.style.border = "2px solid gray"
            btnSize.style.margin = "5px"
            btnSize.style.marginTop = "0px"
            btnSize.appendChild(document.createTextNode(el.name))
            ar.push(el)
            div.appendChild(btnSize)
        }
    })
    for (let i = 0; i < ar.length; i++) {
        arrBut[i].onclick = function() {
            console.log("log")
            arrBut[isSelected].style.borderColor = "gray"
            arrBut[i].style.borderColor = "red"
            cur.idSize = ar[i].id
            let total_amount = 0
            data.prodInStock.forEach(e => {
                if (cur.idSize == e.idSize && cur.idProd == e.idProd) {
                    total_amount += parseInt(e.amount)
                }
            })
            text.textContent = total_amount + " sản phẩm có sẵn"
            inStock[i].amount = total_amount
            localStorage.setItem("data", JSON.stringify(data))
            isSelected = i
        }
        if (cur.idSize == ar[i].id) {
            arrBut[isSelected].style.borderColor = "gray"
            arrBut[i].style.borderColor = "red"
            isSelected = i
        }
    }
    return div
}
document.getElementById("div-cart").onclick = function(e) {
    if (e.target.matches('#div-cart') || e.target.matches('#divdiv-cart')) {
        showacc(document.getElementById("di-cart"), 0, 1200)
        setTimeout(() => {
            document.getElementById("gio-hang").style.display = ""
            document.getElementById("div-cart").style = ""
            document.getElementById("divdiv-cart").remove()
        }, 400);
    }
}
document.getElementById("thanh-toan").onclick = function(e) {
    if (e.target.matches('#thanh-toan')) {
        showacc(document.getElementById("div-thanhtoan"), 0, 1200)
        setTimeout(() => {
            document.getElementById("thanh-toan").style.display = ""
                // document.getElementById("div-cart").style = ""
                // document.getElementById("divdiv-cart").remove()
        }, 400);
    }
}
btnuser.onclick = function() {
    // console.log(currentUser)
    if (currentUser != null) {
        if (showuser.style.display == "") {
            uname.innerHTML = currentUser.name
            showuser.style.display = "block"
        } else {
            showuser.style.display = ""
        }
        offlist()
        showcart.style.display = ""

    } else {
        account.style.display = "flex"
        showacc(signin, -500, 0)
    }
}

function showacc(element, ps, lim) {
    let id = null
    element.style.marginTop = ps + "px"
    let pos = ps
    element.style.display = "block"
    element.zIndex = 100000
    offlist()
    id = setInterval(frame, 1)

    function frame() {
        if (pos == lim) {
            clearInterval(id)
            element.style.marginTop = "0"
        } else {
            pos += 10
            element.style.marginTop = pos + "px"
        }
    }
}
let isshow = true
let isshowing = false
btnshowfilter.onclick = function() {
    console.log(isshowing)
    let id = null
    clearInterval(id)
    let pos = 0
    if (!isshowing) {
        isshowing = true
        if (!isshow) { //mở
            btnshowfilter.style.transform = "rotate(0deg)"
            id = setInterval(frame, 15)

            function frame() {
                if (pos == 60) {
                    clearInterval(id)
                    isshow = true
                    isshowing = false
                } else {
                    pos++
                    filterbar.style.marginTop = pos - 60 + "px"
                    poster.style.marginTop = pos + 120 + "px"
                }
            }
            filterbar.style.display = "flex"
        } else { //đóng
            offlist()
            console.log(pos)
            btnshowfilter.style.transform = "rotate(180deg)"
            id = setInterval(frame, 15)

            function frame() {
                if (pos == 60) {
                    isshow = false
                    isshowing = false
                    clearInterval(id)
                    filterbar.style.display = ""
                } else {
                    pos++
                    filterbar.style.marginTop = -pos + "px"
                    poster.style.marginTop = 170 - pos + "px"
                }
            }
        }
    }
}
uname.onclick = function() {
    account.style.display = "flex"
    showacc(in4, -500, 0)
    document.getElementById("named").innerHTML = username
}
document.getElementById("up-date").onclick = function() {
    account.style.display = "flex"
    showacc(updateinf, -500, 0)
}
document.getElementById("btn-update").onclick = function() {
    showacc(in4, 0, 1200)
    setTimeout(() => {
        in4.style.display = ""
        showacc(updateinf, -500, 0)
        updateinf.appendChild(createButtonBack(updateinf, in4))
    }, 300);
}
let isSearch = false
let isHomePage = false
document.getElementById("home-page").onclick = function() {
    if (!isHomePage || isSearch) {
        createHomepage()
        isSearch = false
    }
    let pos = document.documentElement.scrollTop
    let id = setInterval(function frame() {
        if (pos <= 300) {
            clearInterval(id)
        } else {
            pos -= 10
            document.documentElement.scrollTop = pos
        }
    }, 1)
    if (document.getElementsByClassName("middle")[0].style.display == "flex") {
        document.getElementsByClassName("middle")[0].style.display = ""
        document.getElementById("div-list").remove()
        document.getElementById("div-title").remove()
        document.getElementById("page-number").remove()
        console.log(isSearch)
    }
    if (isSearch) {
        isSearch = false
        c = 0
        document.getElementById("searc").remove()
    }
}
let arrayPro = new Array()
    //tìm
function search(text, classify = "", minPrice = 0, maxPrice = 0, promote = "") {
    function checkValidName(arg1, arg2) {
        if (arg2.trim() == "") {
            return true
        }
        if (arg1.toLowerCase().indexOf(arg2.toLowerCase()) != -1) {
            return true
        }
        return false
    }

    function checkPrice(minPrice, maxPrice, price) {
        if (minPrice == 0 && maxPrice == 0) {
            return true
        }
        if (price >= minPrice && price <= maxPrice) {
            return true
        }
        return false
    }

    function checkClassify(prod) {
        if (classify == "") {
            return true
        }
        let check = false
        prod.clasify.forEach(element => {
            if (checkValidName(classify, element)) {
                check = true
                return
            }
        })
        return check
    }
    let promot = []
    data.promote.forEach(element => {
        if (checkValidName(element.name, promote)) {
            promot = element
            return
        }
    })
    arrayPro.length = 0
    for (let i = 0; i < data.product.length; i++) {
        let prodI = data.product[i]
        if (checkValidName(prodI.name, text) && checkPrice(minPrice, maxPrice, parseInt(prodI.price))) {
            let checkExist = false
            if (promote.trim() == "") {
                checkExist = true
            } else {
                if (promot.length > 0) {
                    promot.products.forEach(element => {
                        if (checkValidName(element.id, prodI.id)) {
                            checkExist = true
                        }
                    })
                } else {
                    checkExist = true
                }
            }
            checkExist = checkClassify(prodI)
            if (checkExist) {
                arrayPro.push(prodI)
            }
        }
    }

}

function createHomepage() {
    isHomePage = true
    document.getElementById("main").style.display = "flex"
    try {
        document.getElementById("div-main").remove()
    } catch (e) {

    }
    try {
        document.getElementById("searc").remove()
    } catch (error) {

    }
    let div = document.createElement("div")
    div.id = "div-main"
    for (let i = 0; i < data.largeClassify.length; i++) {
        div.appendChild(createMainPro(data.largeClassify[i]))
    }
    let divv = document.createElement("div")
        // divv.appendChild(div)
        // document.getElementById("main").innerHTML = divv.innerHTML
    document.getElementById("main").appendChild(div)
    for (let j = 0; j < document.getElementsByClassName("list-product").length; j++)
        document.getElementsByClassName("list-product")[j].style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
}
createHomepage()
    //màn hình chính
function createMainPro(clasify) {
    arrProduct.length = 0
    pathImage.length = 0
    path = JSON.parse(JSON.stringify(pathImg))
    let div = document.createElement("div")
    let title = document.createElement("div")
    title.style.fontSize = "22px"
    div.style.margin = "20px 40px"
    title.style.display = "block"
    title.style.borderBottom = "1px solid gray"
    title.style.paddingBottom = "10px"
    title.appendChild(document.createTextNode(clasify.name))
    div.appendChild(title)
    currentPage = 1
    let divPro = document.createElement("div")
    divPro.style.display = "grid"
    for (let i = 0; i < clasify.miniClassify.length; i++) {
        getProduct(clasify.miniClassify[i].id)
        getPath(clasify.miniClassify[i].id, path)
    }
    divPro.appendChild(addListProduct(clasify.id, 5))
    let btnList = document.createElement("div")
    btnList.style.display = "flex"
    btnList.style.justifyContent = "center"
    let a = document.createElement("a")
    a.style.fontSize = "18px"
    a.style.cursor = "pointer"
    a.style.margin = "15px"
    a.onclick = function() {
        isHomePage = false
        arrProduct.length = 0
        pathImage.length = 0
        for (let i = 0; i < clasify.miniClassify.length; i++) {
            getProduct(clasify.miniClassify[i].id)
            getPath(clasify.miniClassify[i].id, path)
        }
        console.log(clasify)
        console.log(pathImage, arrProduct)
        let pos = document.documentElement.scrollTop
        let id = setInterval(function frame() {
            if (pos <= 300) {
                clearInterval(id)
                document.getElementById("main").style.display = ""
                document.getElementById("div-main").remove()
                document.getElementsByClassName("middle")[0].style.display = "flex"
                let title = document.createElement("div")
                title.id = "div-title"
                let node = document.createTextNode(clasify.name)
                title.appendChild(node)
                document.getElementById("space-product").appendChild(title)
                if (arrProduct.length > 0) {
                    let divUl = document.createElement("div")
                    divUl.id = "div-list"
                    divUl.appendChild(addListProduct(clasify.id, 12))
                    document.getElementById("space-product").appendChild(divUl)
                    createPageNumber(clasify.id, arrProduct, 12)
                }
            } else {
                pos -= 10
                document.documentElement.scrollTop = pos
            }
        }, 1)
    }
    a.appendChild(document.createTextNode("Xem chi tiết"))
    btnList.appendChild(a)
    div.appendChild(divPro)
    div.appendChild(btnList)
    return div
}

let spaceProduct = document.getElementById("space-product")
let onclickProduct = document.getElementById("onclick-product")

function getPromote(id) {
    for (let i = 0; i < data.promote.length; i++) {
        for (let j = 0; j < data.promote[i].products.length; j++) {
            if (data.promote[i].products[j].id == id) {
                return [i, j]
            }
        }
    }
    return -1
}

function getProduct(id) {
    for (let i = 0; i < data.product.length; i++) {
        if (data.product[i].id.indexOf(id) != -1) {
            arrProduct.push(data.product[i])
        }
    }
}

function getPath(id, path) {
    path.Path.forEach(element => {
        if (element.indexOf(id) != -1) {
            pathImage.push(element)
        }
    });
}

function createPageProduct(root, textTitle, idPr, proInpage) {
    pathImage.length = 0
    arrProduct.length = 0
    path = JSON.parse(JSON.stringify(pathImg))
    getProduct(idPr)
    getPath(idPr, path)
    console.log(pathImage, arrProduct)
        // console.log(arrProduct)
        // console.log(pathImage)
    let title = document.createElement("div")
    title.id = "div-title"
    let node = document.createTextNode(textTitle)
    title.appendChild(node)
    root.appendChild(title)
    if (arrProduct.length > 0) {
        let divUl = document.createElement("div")
        divUl.id = "div-list"
        divUl.appendChild(addListProduct(idPr, proInpage))
        root.appendChild(divUl)
        createPageNumber(idPr, arrProduct, proInpage)
    }
}

function addListProduct(id, proInpage) {
    // console.log(id)
    let start = (currentPage - 1) * proInpage
    let end = (currentPage) * proInpage
    if (end > arrProduct.length) {
        end = arrProduct.length
    }
    let ulList = document.createElement("ul")
    ulList.id = "list-product"
    ulList.className = "list-product"
    if (id.indexOf("PK") != -1) {
        document.getElementById("left").style.display = "none"
        ulList.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        document.getElementById("space-product").style.width = "100%"
            // console.log("log")
    } else {
        document.getElementById("left").style.display = "block"
        ulList.style.gridTemplateColumns = "1fr 1fr 1fr"
        document.getElementById("space-product").style.width = "80%"
    }
    for (let i = start; i < end; i++) {
        let discountPrice = "0"
        let cost = "0"
        let promot = getPromote(arrProduct[i].id)
            // console.log(promot)
        if (promot == -1) {
            discountPrice = arrProduct[i].price
            cost = "0"
        } else {
            cost = arrProduct[i].price
            discountPrice = parseInt(cost) - parseInt(data.promote[promot[0]].discount_price) - parseInt(data.promote[promot[0]].discount_percent) / 100 * cost
        }
        ulList.appendChild(createListProduct(
                pathImage[i],
                arrProduct[i].images,
                arrProduct[i].name,
                discountPrice,
                cost,
                arrProduct[i].made_in,
                arrProduct[i].id,
                arrProduct[i].clasify,
                arrProduct[i].description))
            // console.log(arrProduct[i].description)
    }
    return ulList
}

function createListProduct(path, img, nameProduct, price, sale, madeIn, id, clasify, description) {
    console.log(description)
    let liItem = document.createElement("li")
    liItem.className = "product-item"
    let imgTag = document.createElement("img")
    imgTag.src = path + img[0]
    liItem.appendChild(imgTag)
    imgTag.style.objectFit = "cover"
    let namePro = document.createElement("div")
    namePro.appendChild(document.createTextNode(nameProduct))
    let divContent = document.createElement("div")
    divContent.className = "product-content"
    divContent.appendChild(namePro)
    divContent.style.paddingTop = "10px"
    liItem.onmouseenter = function() {
        liItem.style.backgroundColor = "lightpink"
        liItem.style.color = "white"
        divContent.style.borderTop = "none"
    }
    liItem.onmouseleave = function() {
        liItem.style.backgroundColor = "white"
        liItem.style.color = "black"
        divContent.style.borderTop = "1px solid gray"
    }
    liItem.appendChild(divContent)
    let salePrice = document.createElement("div")
    salePrice.style.marginTop = "10px"
    salePrice.style.color = "red"
    let cost = document.createElement("del")
    cost.appendChild(document.createTextNode(calculated(sale) + " VND"))
    cost.className = "cost"
    if (sale != "0") {
        salePrice.appendChild(cost)
    } else {
        salePrice.style.justifyContent = "center"
    }
    salePrice.appendChild(document.createTextNode(calculated(price) + " VND"))
    salePrice.style.display = "flex"
    divContent.appendChild(salePrice)
    liItem.onclick = function() {
        productTag.style.display = "flex"
        showacc(onclickProduct, -500, 0)
        onclickProduct.appendChild(showProduct(path, img, nameProduct, madeIn, id, clasify, price, description))
    }
    return liItem
}
// let cur = 30

let sizeProduct = new Array()
    //chi tiết sản phẩm
function showProduct(path, img, text, madein, id, clasify, price, description) {

    sizeProduct.length = 0
    inStock.length = 0
    getAmount(id)
    let textMadein = "Xuất xứ: " + madein
    let textID = "Mã sản phẩm: " + id
    let divTag = document.createElement("div")
    let imgTag = document.createElement("img")
    imgTag.src = path + img[0]
    imgTag.style.height = "400px"
    imgTag.style.borderRadius = "20px"
    let divSelect = document.createElement("div")
    divSelect.appendChild(imgTag)
    divSelect.appendChild(previewImg(path, img, imgTag))
    divTag.id = "tagdivProduct"
    let contentDiv = document.createElement("div")
    contentDiv.style.fontSize = "16px"
    contentDiv.style.position = "relative"
    contentDiv.style.marginLeft = "10px"
    let nameProduct = document.createElement("div")
    nameProduct.appendChild(document.createTextNode(text))
    nameProduct.style.fontSize = "25px"
    nameProduct.style.marginTop = "30px"
    nameProduct.style.textAlign = "center"
    let madeIn = document.createElement("div")
    madeIn.appendChild(document.createTextNode(textMadein))
    madeIn.style.marginTop = "30px"
    let idProduct = document.createElement("div")
    idProduct.appendChild(document.createTextNode(textID))
    idProduct.style.marginTop = "15px"
    let btnAdd = document.createElement("div")
    btnAdd.appendChild(document.createTextNode("thêm vào giỏ hàng"))
    if (clasify[0] != "phụ kiện") {
        data.size.forEach(e => {
            if (e.id.indexOf(id[0]) != -1) {
                sizeProduct.push(e)
            }
        })
    }
    // console.log(sizeProduct)
    btnAdd.className = "addtocart"
    btnAdd.onclick = function() {
        // console.log(id, "", count.toString(), totalPrice)
        if (currentUser != null) {
            // console.log(checkCart(id, currentUser.cart))
            if (checkCart(id, currentUser.cart)) {
                data.customer.forEach(e => {
                    if (e.id == currentUser.id) {
                        let cart
                        if (sizeProduct.length > 0) {
                            cart = new Cart(id, sizeProduct[isSelectedSize].id, countPro.toString(), totalPrice.toString())
                        } else {
                            cart = new Cart(id, "", countPro.toString(), totalPrice.toString())
                        }
                        e.cart.push(cart)
                            // currentUser = e
                        localStorage.setItem("data", JSON.stringify(data))
                    }
                })
                showacc(onclickProduct, 0, 1200)
                setTimeout(() => {
                    onclickProduct.style.display = ""
                    productTag.style = ""
                    document.getElementById("tagdivProduct").remove()
                    document.getElementById("noti").style.display = "flex"
                    document.getElementById("noti-noti").innerHTML = "đã thêm Thành công"
                    showacc(document.getElementById("noti-noti"), -500, 0)
                    document.getElementById("noti-noti").style.display = "flex"
                    setTimeout(() => {
                        document.getElementById("noti").style.display = ""
                    }, 700)
                }, 400);

            } else {
                alert("sản phẩm đã được thêm, hãy chỉnh sửa trong giỏ hàng")
            }
        } else {
            alert("Đăng nhập để tiếp tục")
            onclickProduct.style.display = ""
            productTag.style = ""
            document.getElementById("tagdivProduct").remove()
            account.style.display = "flex"
                // signin.style.display = "block"
            showacc(signin, -500, 0)
        }
    }
    contentDiv.appendChild(nameProduct)
    contentDiv.appendChild(madeIn)
    contentDiv.appendChild(idProduct)
    let descript = document.createElement("div")
    descript.style.color = "lightpink"
    descript.style.fontSize = "12px"
    descript.style.paddingTop = "15px"
    descript.style.lineHeight = "1.25"
    descript.appendChild(document.createTextNode("Mô tả: " + description))
    contentDiv.appendChild(descript)
        // console.log(id)
    let amoun = 0
    if (sizeProduct.length > 0) {
        data.prodInStock.forEach(e => {
            if (e.idSize == sizeProduct[0].id && e.idProd.toLowerCase() == id.toLowerCase()) {
                amoun += parseInt(e.amount)
            }
        })
    }
    if (id.indexOf("PK") != -1) {
        data.prodInStock.forEach(e => {
            if (e.idProd == id) {
                amoun += parseInt(e.amount)
            }
        })
    }
    // console.log(sizeProduct)
    if (sizeProduct.length > 0) {
        contentDiv.appendChild(selectSize(sizeProduct, id))
    }
    contentDiv.appendChild(amount(amoun, price))
    contentDiv.appendChild(btnAdd)
    divTag.appendChild(divSelect)
    divTag.appendChild(contentDiv)
    return divTag
}

function checkCart(id, cart) {
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].idProd == id)
        if (cart[i].idProd == id) {
            return false
        }
    }
    return true
}

function selectImage(divPreview, i, isSelected, arrImg, imgShow, path, img, scroll, offset) {
    if (i != isSelected) {
        arrImg[i].style.borderColor = "red"
        arrImg[i].style.borderRadius = "10px"
        arrImg[isSelected].style.borderColor = "gray"
        arrImg[isSelected].style.borderRadius = "0"
        imgShow.src = path + img[i]
        if (i > 0) {
            scroll = offset
        }
        divPreview.scrollTo(scroll, 0)
    }

}

function previewImg(path, img, imgShow) {
    let isSelected = 0
    let divPreview = document.createElement("div")
    let arrImg = new Array()
    let scroll = 0
    for (let i = 0; i < img.length; i++) {
        let image = document.createElement("img")
        arrImg.push(image)
        image.style.height = "80px"
        image.style.margin = "10px"
        image.style.cursor = "pointer"
        image.style.border = "1px solid gray"
        image.style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"
        image.src = path + img[i]
        arrImg[isSelected].style.borderColor = "red"
        arrImg[isSelected].style.borderRadius = "10px"
        divPreview.appendChild(image)
        image.onclick = function() {
            selectImage(divPreview, i, isSelected, arrImg, imgShow, path, img, scroll, image.offsetLeft - 20)
            isSelected = i

        }
    }
    divPreview.style.overflowX = "scroll"
    divPreview.style.display = "flex"
    divPreview.style.marginBottom = "-25px"
    let div = document.createElement("div")
    div.style.overflow = "hidden"
    div.style.position = "relative"
    div.style.padding = "0 10px"
    let im = document.createElement("img")
    im.src = "Image/show-icon.png"
    im.style.height = "20px"
    im.style.position = "absolute"
    im.style.top = "45px"
    im.style.left = "-5px"
    im.style.transform = "rotate(180deg)"
    im.style.cursor = "pointer"
    im.onclick = function() {
        let i = img.length - 1
        if (isSelected > 0) {
            i = isSelected - 1
        }
        selectImage(divPreview, i, isSelected, arrImg, imgShow, path, img, scroll, 102 * (i - 3))
        isSelected = i
    }
    let imm = document.createElement("img")
    imm.style.height = "20px"
    imm.style.position = "absolute"
    imm.src = "Image/show-icon.png"
    imm.style.top = "45px"
    imm.style.right = "-5px"
    imm.style.cursor = "pointer"
    imm.onclick = function() {
        let i = 0
        if (isSelected < img.length - 1) {
            i = isSelected + 1
        }
        selectImage(divPreview, i, isSelected, arrImg, imgShow, path, img, scroll, arrImg[i].offsetLeft - 20)
        isSelected = i
    }
    if (img.length > 4) {
        div.appendChild(im)
        div.appendChild(imm)
    }
    div.appendChild(divPreview)
    return div
}
let isSelectedSize = 0
    //chọn size
function selectSize(index, id) {
    amoun = 0
    isSelectedSize = 0
    let div = document.createElement("div")
    div.style.display = "flex"
    div.style.marginTop = "0px"
    div.style.textAlign = "center"
    textSize = document.createElement("div")
    textSize.appendChild(document.createTextNode("Size"))
    textSize.style.lineHeight = "40px"
    textSize.style.marginRight = "10px"
    div.appendChild(textSize)
    let arrBut = new Array()
    for (let i = 0; i < index.length; i++) {
        let btnSize = document.createElement("div")
        arrBut.push(btnSize)
        btnSize.appendChild(document.createTextNode(index[i].name))
        btnSize.style.padding = "5px"
        btnSize.style.width = "15px"
        btnSize.style.textAlign = "center"
        btnSize.style.cursor = "pointer"
        btnSize.style.border = "2px solid gray"
        btnSize.style.margin = "5px"
        arrBut[isSelectedSize].style.borderColor = "red"
        btnSize.onclick = function() {
            if (i != isSelectedSize) {
                arrBut[i].style.borderColor = "red"
                arrBut[isSelectedSize].style.borderColor = "gray"
                isSelectedSize = i
                let amount = 0
                data.prodInStock.forEach(e => {
                    if (e.idSize == index[isSelectedSize].id && e.idProd == id) {
                        amount += parseInt(e.amount)
                    }
                })
                document.getElementById("sanphamcosan").textContent = amount + " sản phẩm có sẵn"
            }
        }
        div.appendChild(btnSize)
    }

    return div
}
let totalPrice = 0
let countPro = 1

function amount(current, pricee) {
    // console.log(pricee)
    let count = 1
    totalPrice = pricee
    let div = document.createElement("div")
    let divAmou = document.createElement("div")
    divAmou.style.display = "block"
    divAmou.appendChild(div)
    div.style.display = "flex"
    div.style.textAlign = "center"
    divAmou.style.marginTop = "15px"
    let btnSub = document.createElement("button")
    btnSub.style.width = "20px"
    btnSub.style.border = "1px solid gray"
    btnSub.style.cursor = "pointer"
    btnSub.style.backgroundColor = "white"
    btnSub.onclick = function() {
        if (count > 1) {
            count--
            updatePrice(count)
        }
    }
    btnSub.appendChild(document.createTextNode("-"))
    div.appendChild(btnSub)
    let divshow = document.createElement("input")
    divshow.id = "choose-amount"
    divshow.style.width = "50px"
    divshow.style.border = "none"
    divshow.style.borderTop = "1px solid gray"
    divshow.style.borderBottom = "1px solid gray"
    divshow.style.outline = "none"
    divshow.style.textAlign = "center"
    divshow.placeholder = "1"
    divshow.type = "number"
    divshow.max = current
    divshow.min = 1
    function updatePrice(countt) {
        divshow.placeholder = countt
        
        divshow.value = countt
        let price = ""
        for (let i = 0; i < pricee.toString().length; i++) {
            price += pricee.toString()[i]
        }
        countPro = countt
        totalPrice = parseInt(price) * countt
        divPr.textContent = "Tổng cộng: " +
            calculated(parseInt(price) * countt) + " VND"
    }
    window.addEventListener("click", function() {
        if (parseInt(divshow.value) > current) {
            count = current
            updatePrice(current)
        }
        else {
            updatePrice(divshow.value > 0 ? divshow.value : 1)
        }
    })
    div.appendChild(divshow)
    let btnAdd = document.createElement("button")
    btnAdd.style.width = "20px"
    btnAdd.style.border = "1px solid gray"
    btnAdd.style.cursor = "pointer"
    btnAdd.style.backgroundColor = "white"
    btnAdd.onclick = function() {
        if (count < current) {
            count++
            updatePrice(count)
        }
    }
    btnAdd.appendChild(document.createTextNode("+"))
    div.appendChild(btnAdd)
    let text = document.createElement("div")
    text.id = "sanphamcosan"
    text.appendChild(document.createTextNode(current + " sản phẩm có sẵn"))
    text.style.fontSize = "10px"
    text.style.color = "gray"
    text.style.marginLeft = "10px"
    text.style.display = "flex"
    text.style.flexDirection = "column"
    text.style.justifyContent = "flex-end"
    div.appendChild(text)
    let divPr = document.createElement("div")
    divPr.style.marginTop = "20px"
    divPr.appendChild(document.createTextNode("Tổng cộng: " + calculated(pricee) + " VND"))
    divAmou.appendChild(divPr)

    return divAmou
}

function calculated(price) {
    price = price.toString()
    let ar = new Array()
    for (let i = 0; i < price.length; i++) {
        if (i % 3 == 0 && i != 0) {
            ar.push(".")
        }
        ar.push(price[price.length - i - 1])
    }
    price = ""
    for (let i = ar.length - 1; i >= 0; i--) {
        price += ar[i]
    }
    return price
}
productTag.onclick = function(e) {
    if (e.target.matches('#productTag') || e.target.matches('#productTagq')) {
        showacc(onclickProduct, 0, 1200)
        setTimeout(() => {
            onclickProduct.style.display = ""
            productTag.style = ""
            document.getElementById("tagdivProduct").remove()
        }, 400);
    }
}

function createPageNumber(idPr, product, proInpage) {
    // console.log(idPr)
    let totalProduct = product.length
    let totalPage = (totalProduct - (totalProduct % proInpage)) / proInpage + 1
    let ul = document.createElement("ul")
    ul.id = "page-number"
    let arr = new Array()
    let aArr = new Array()
    for (let i = 1; i <= totalPage; i++) {
        let li = document.createElement("li")
        arr.push(li)
        li.style.border = "1px solid gray"
        li.style.cursor = "pointer"
        li.style.margin = "10px"
        li.style.padding = "5px 10px"
        li.style.borderRadius = "5px"
        li.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        li.style.transition = "0.8s"
        let a = document.createElement("a")
            // a.style.padding = "5px 10px"
        a.style.color = "black"
        aArr.push(a)
        a.appendChild(document.createTextNode(i))
        li.onclick = function() {
            arr[currentPage - 1].style.backgroundColor = "white"
            aArr[currentPage - 1].style.color = "black"
            currentPage = parseInt(li.textContent)
            arr[currentPage - 1].style.backgroundColor = "lightpink"
            aArr[currentPage - 1].style.color = "white"
            let pos = document.documentElement.scrollTop
            let id = setInterval(function frame() {
                if (pos <= 300) {
                    clearInterval(id)
                    document.getElementById("list-product").remove()
                    document.getElementById("div-list").appendChild(addListProduct(idPr, proInpage))
                } else {
                    pos -= 10
                    document.documentElement.scrollTop = pos
                }
            }, 1)
        }
        li.onmouseenter = function() {
            li.style.borderRadius = "50px"
        }
        li.onmouseleave = function() {
            li.style.borderRadius = "5px"
        }
        li.appendChild(a)
        ul.appendChild(li)
        aArr[currentPage - 1].style.color = "white"
        arr[currentPage - 1].style.backgroundColor = "lightpink"
    }
    document.getElementById("space-product").appendChild(ul)
}
let c = 0
let curPageSearch = 1
document.getElementById("btn-search").onclick = function() {
        let pos = document.documentElement.scrollTop
        let id = setInterval(function frame() {
            if (pos <= 300) {
                clearInterval(id)
            } else {
                pos -= 10
                document.documentElement.scrollTop = pos
            }
        }, 1)
        console.log(isSearch)
        if (isSearch) {
            document.getElementById("searc").remove()
        } else {
            if (document.getElementsByClassName("middle")[0].style.display == "flex") {
                document.getElementsByClassName("middle")[0].style.display = ""
                document.getElementById("div-list").remove()
                document.getElementById("div-title").remove()
                document.getElementById("page-number").remove()
                console.log(isSearch)
            } else {
                // if (document.getElementById("main").style.display != "none") {
                document.getElementById("div-main").remove()
                c++
            }
        }
        document.getElementById("main").style.display = "flex"
        isSearch = true
            // console.log(document.getElementById("inp-search").value)
        let clasify = document.getElementById("selected-type").textContent.trim()
        let price = document.getElementById("selected-price").textContent.trim().toLowerCase()
        let promote = document.getElementById("selected-sale").textContent.trim()
        let name = document.getElementById("inp-search").value
        if (price == "tất cả") {
            price = "0-0"
        } else {
            price = price.replaceAll("dưới", "")
            price = price.replaceAll("trên", "")
            price = price.replaceAll(".", "")
            price = price.replaceAll(" ", "")
            price = price.replaceAll("từ", "")
            price = price.replaceAll("đến", "")
            price = price.replaceAll("vnđ", "")
        }
        if (clasify == "tất cả") {
            clasify = ""
        }
        let minMax = price.split("-")
        let min = minMax[0] ? parseInt(minMax[0]) : 0
        let max = minMax[1] ? parseInt(minMax[1]) : (minMax[0] ? parseInt(minMax[0]) : 0)
        search(name, clasify, min, max, promote)
        let divSearch = document.createElement("div")
        divSearch.id = "searc"
        let totalProduct = arrayPro.length
        let totalPage = (totalProduct - (totalProduct % 12)) / 12 + 1
        let ti = document.createElement("div")
        ti.style.fontSize = "22px"
        ti.style.margin = "30px 40px 0 40px"
        ti.style.paddingBottom = "10px"
        ti.style.borderBottom = "1px solid gray"
        ti.appendChild(document.createTextNode("Không tìm thấy kết quả"))
        if (arrayPro.length > 0) {
            pathImage.length = 0
            inStock.length = 0
            currentPage = 1

            for (let i = 0; i < arrayPro.length; i++) {
                getPath(arrayPro[i].id, path)
                    // getAmount(arrayPro[i].id)
            }
            // console.log(arrayPro)
            // console.log(inStock)
            let di = document.createElement("div")
            di.id = "di-searc"
            let ulList = document.createElement("ul")
            ulList.id = "list-product"
            ulList.className = "list-product"
            ulList.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
            ulList.style.padding = "40px"
            ulList.style.margin = "0"
            document.getElementById("space-product").style.width = "100%"
            arrProduct = arrayPro
            let start = (currentPage - 1) * 12
            let end = (currentPage) * 12
            if (end > arrProduct.length) {
                end = arrProduct.length
            }
            for (let i = start; i < end; i++) {
                let discountPrice = "0"
                let cost = "0"
                let promot = getPromote(arrayPro[i].id)
                if (promot == -1) {
                    discountPrice = arrayPro[i].price
                    cost = "0"
                } else {
                    cost = arrayPro[i].price
                    discountPrice = parseInt(cost) - parseInt(data.promote[promot[0]].discount_price) - parseInt(data.promote[promot[0]].discount_percent) / 100 * cost
                }
                ulList.appendChild(createListProduct(
                    pathImage[i],
                    arrayPro[i].images,
                    arrayPro[i].name,
                    discountPrice,
                    cost,
                    arrayPro[i].made_in,
                    arrayPro[i].id,
                    arrayPro[i].clasify))
            }
            divSearch.appendChild(ti)
            di.appendChild(ulList)
            divSearch.appendChild(di)
            let ul = document.createElement("ul")
            ul.id = "page-number"
            let arr = new Array()
            let aArr = new Array()
            for (let i = 1; i <= totalPage; i++) {
                let li = document.createElement("li")
                arr.push(li)
                li.style.border = "1px solid gray"
                li.style.cursor = "pointer"
                li.style.margin = "10px"
                li.style.padding = "5px 10px"
                li.style.borderRadius = "5px"
                li.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                li.style.transition = "0.8s"
                let a = document.createElement("a")
                    // a.style.padding = "5px 10px"
                a.style.color = "black"
                aArr.push(a)
                a.appendChild(document.createTextNode(i))
                li.onclick = function() {
                    arr[currentPage - 1].style.backgroundColor = "white"
                    aArr[currentPage - 1].style.color = "black"
                    currentPage = parseInt(li.textContent)
                    arr[currentPage - 1].style.backgroundColor = "lightpink"
                    aArr[currentPage - 1].style.color = "white"
                    let pos = document.documentElement.scrollTop
                    let id = setInterval(function frame() {
                        if (pos <= 300) {
                            clearInterval(id)
                            document.getElementById("list-product").remove()
                            let ulList = document.createElement("ul")
                            ulList.id = "list-product"
                            ulList.className = "list-product"
                            ulList.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
                            ulList.style.padding = "40px"
                            ulList.style.margin = "0"
                            document.getElementById("space-product").style.width = "100%"
                            let start = (currentPage - 1) * 12
                            let end = (currentPage) * 12
                            if (end > arrProduct.length) {
                                end = arrProduct.length
                            }
                            for (let i = start; i < end; i++) {
                                let discountPrice = "0"
                                let cost = "0"
                                let promot = getPromote(arrayPro[i].id)
                                if (promot == -1) {
                                    discountPrice = arrayPro[i].price
                                    cost = "0"
                                } else {
                                    cost = arrayPro[i].price
                                    discountPrice = parseInt(cost) - parseInt(data.promote[promot[0]].discount_price) - parseInt(data.promote[promot[0]].discount_percent) / 100 * cost
                                }
                                ulList.appendChild(createListProduct(
                                    pathImage[i],
                                    arrayPro[i].images,
                                    arrayPro[i].name,
                                    discountPrice,
                                    cost,
                                    arrayPro[i].made_in,
                                    arrayPro[i].id,
                                    arrayPro[i].clasify,
                                    arrayPro[i].description))
                            }
                            di.appendChild(ulList)
                        } else {
                            pos -= 10
                            document.documentElement.scrollTop = pos
                        }
                    }, 1)
                }
                li.onmouseenter = function() {
                    li.style.borderRadius = "50px"
                }
                li.onmouseleave = function() {
                    li.style.borderRadius = "5px"
                }
                li.appendChild(a)
                ul.appendChild(li)
                aArr[currentPage - 1].style.color = "white"
                arr[currentPage - 1].style.backgroundColor = "lightpink"
            }
            divSearch.appendChild(ul)
            ti.textContent = "Kết quả"
        } else {
            divSearch.appendChild(ti)
        }

        document.getElementById("main").appendChild(divSearch)

    }
    //<img id="img-current-customer" style="height: 100px;
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    // border: 1px solid gray;" src="Image/avt/User_light@3x.png" alt="">

//<div id="btn-addimg">
// thêm ảnh
// </div>
// <input type="file" id="choose-img" style="display:none" accept="image/*">
let saveUpdate = document.getElementById("save-update")
document.getElementById("btn-addimg").onclick = function() {
    let chooseImg = document.getElementById("choose-img")
    chooseImg.click()
}
document.getElementById("choose-img").onchange = function() {
    let chooseImg = document.getElementById("choose-img")
    console.log("./Image/avt/" + chooseImg.value.replace("C:\\fakepath\\", ""))
    imgLinkChange = `./Image/avt/` + chooseImg.value.replace("C:\\fakepath\\", "")
    document.getElementById("img-current-customer").src = `./Image/avt/` + chooseImg.value.replace("C:\\fakepath\\", "")
}
saveUpdate.onclick = function() {
    let update_birthday = document.getElementById("update-birthday")
    let update_contact = document.getElementById("update-contact")
    let update_name = document.getElementById("update-name")
    let update_sex_male = document.getElementById("male")
    let update_sex_female = document.getElementById("female")
    let name = update_name.value
    let birthday = update_birthday.value
    let contact = update_contact.value
    let sex = update_sex_male.checked ? update_sex_male.value : update_sex_female.value
        //constraint
    let correct = true
    data.customer.forEach((element) => {
        if (element.number_phone == contact && element.id != currentUser.id) {
            alert("Số điện thoại này đã tồn tại")
            correct = false
            return
        }
    })
    if (!correct) { return }
    data.customer.forEach((element, index) => {
        if (element.id == currentUser.id) {
            currentUser.name = name
            currentUser.birth_day = birthday
            currentUser.sex = sex
            currentUser.number_phone = contact
            currentUser.image = imgLinkChange
            data.customer[index] = currentUser
            localStorage.setItem("data", JSON.stringify(data))
            alert("Cập nhật thông tin thành công")
        }
    })

}

function Receipt(id, idCus, liProd, nameCustomer, date_init, address) {
    this.id = id
    this.idCustomer = idCus
    this.idStaff = ""
    this.list_prod = liProd
    this.nameCustomer = nameCustomer
    this.date_init = date_init
    this.date_confirm = ""
    this.address = address
    this.status = 0
}

function initIdReceipt() {
    let max = 0
    max = parseInt(data.receipt[data.receipt.length - 1].id.replace("RE", ""))
    return "RE" + String(max + 1).padStart(4, "0")
}

function createReceipt(liProd) {
    let newRC = new Receipt(initIdReceipt(), currentUser.id, liProd, currentUser.name, getCurrentDate(), document.getElementById("inp-dc").value)
    return newRC
}

function fillReceipt(receipt) {
    // <div id="div-hoadon">
    // <div id="hoa-don">
    //     <div id="ten-bang">
    //         <p>Hoá đơn</p>
    //         <div id="ngay-tong-tien">
    //             <div id="ngay-hd">
    //                 Ngày:
    //             </div>
    //             <div id="tong-tien">
    //                 Tổng tiền:
    //             </div>
    //         </div>
    //     </div>
    //     <div id="bang">
    //         <table id="table-hoadon">
    //             <thead>
    //                 <tr>
    //                     <td>Ảnh</td>
    //                     <td>Tên sản phẩm</td>
    //                     <td>Giá</td>
    //                     <td>Số lượng</td>
    //                     <td>Size</td>
    //                     <td>Thành tiền</td>
    //                 </tr>
    //             </thead>
    //                 <tbody>
    // <tr>
    //     <td class="anh-sp">
    //         anh
    //     </td>
    //     <td>
    //         ten sp
    //     </td>
    //     <td>
    //         <div>
    //             <del>
    //             gia sp
    //         </del>
    //         </div>
    //         <div>
    //             gia giam
    //         </div>
    //     </td>
    //     <td>
    //         so luong
    //     </td>
    //     <td>
    //         co
    //     </td>
    //     <td>
    //         tong tien
    //     </td>
    // </tr>
    //                     
    //                 </tbody>

    //             </table>
    //         </div>
    //     </div>
    // </div>
    function findImage(id) {
        for (prod of data.product) {
            if (prod.id == id) {
                if (!prod.images[0]) {
                    return ""
                }
                let currentClassify = ""
                let classifyy = ""
                for (const classify of data.largeClassify) {
                    if (prod.id.substring(0, 2).toLowerCase().indexOf(classify.id.toLowerCase()) != -1) {
                        classifyy = classify.id + "/"
                        currentClassify = classify
                        break
                    }
                }
                for (const miniClass of currentClassify.miniClassify) {
                    if (prod.id.toLowerCase().indexOf(miniClass.id.toLowerCase()) != -1) {
                        classifyy += miniClass.id + "/"
                        break
                    }
                }
                return "../Image/" + classifyy + id + "/" + prod.images[0]
            }
        }
        return ""
    }

    function findPrice(id) {
        for (prod of data.product) {
            if (prod.id == id) {
                return prod.price
            }
        }
    }

    function findName(id) {
        for (prod of data.product) {
            if (prod.id == id) {
                return prod.name
            }
        }
    }

    function getTotalPrice() {
        let total = 0
        receipt.list_prod.forEach(element => {
            total += parseInt(element.price)
        })
        return total
    }

    function initDetailToFill(image, name, price, priceDiscount = price, amount, size, total_price) {
        return { image, name, price, priceDiscount, amount, size, total_price }
    }
    let divReceipt = document.createElement("div")
    divReceipt.id = "div-hoadon"
    let stringInner = ` <div id="hoa-don">
        <div id="ten-bang">
            <p>Hoá đơn</p>
            <div id="ngay-tong-tien">
                <div id="ngay-hd">
                    Ngày: ` + getCurrentDate() + `
                </div>
                <div id="tong-tien">
                    Tổng tiền: ` + calculated(getTotalPrice()) + ` VND
                </div>
            </div>
        </div>
        <div id="bang">
            <table id="table-hoadon">
                <thead>
                    <tr>
                        <td>Ảnh</td>
                        <td>Tên sản phẩm</td>
                        <td>Giá</td>
                        <td>Số lượng</td>
                        <td>Size</td>
                        <td>Thành tiền</td>
                    </tr>
                </thead>
                <tbody>`

    receipt.list_prod.forEach(element => {
        let image = findImage(element.idProd)
        let price = findPrice(element.idProd)
        let name = findName(element.idProd)
        let detail = initDetailToFill(image, name, price, element.price / element.amount, element.amount, element.idSize, element.price * element.amount)

        let stringPrice = ""
        if (parseInt(detail.priceDiscount) - parseInt(price) < 0) {
            stringPrice = `<div>
            <del>
            ` + calculated(detail.price) + ` VND
        </del>
        </div>
        <div>
            ` + calculated(detail.priceDiscount) + ` VND
        </div>`
        } else {
            stringPrice = `<div>
            ` + calculated(detail.price) + ` VND</div>`
        }
        stringInner += `                    <tr>
        <td class="anh-sp">
            <img style="width: 70px; height : 70px" src="` + image + `">
        </td>
        <td>
            ` + name + `
        </td>
        <td>
            ` + stringPrice + `
        </td>
        <td>
            ` + detail.amount + `
        </td>
        <td>
            ` + detail.size.substring(1, 1) + `
        </td>
        <td>
            ` + calculated(element.price) + ` VND
        </td>
    </tr>`
    })
    divReceipt.innerHTML = stringInner
    let bodyY = document.getElementsByTagName("body")
    bodyY[0].appendChild(divReceipt)
    divReceipt.style.position = "fixed"
    divReceipt.style.zIndex = 100000
    document.getElementById("div-hoadon").onclick = function(e) {
        if (e.target.matches("#div-hoadon")) {
            showacc(document.getElementById("hoa-don"), 0, 1200)
            setTimeout(() => {
                document.getElementById("div-hoadon").remove()
            }, 350);
        }
    }
}