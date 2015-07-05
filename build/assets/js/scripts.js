$('.visual').highcharts({

    chart: {
        type: 'bubble',
        zoomType: 'xy'
    },

    legend: {
        align: "center"
    },

    tooltip: {
        pointFormat: "<div style='text-align: center'><b>{point.name}</b><br /><br />Budget: ${point.z}<br />Supporters: {point.x}</div>"
    },

    yAxis: {
        title: {
            text: ''
        },
        lineWidth: 0,
        minorGridLineWidth: 0,
        majorGridLineWidth: 0,
        lineColor: 'transparent',
        gridLineColor: 'transparent',
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },

    xAxis: {
        title: {
            text: 'Supporters'
        }
    },

    title: {
        text: ''
    },

    series: [
        {
            name: "Defence",
            color: "#2196F3",
            data: [
              {
                "name":"Project SEA 4000 Air Warfare Destroyer",
                "z":8000000000,
                "x":973,
                "y":74
              },
              {
                "name":"JP3024 Woomera Range Remediation",
                "z":300000000,
                "x":743,
                "y":28
              },
              {
                "name":"Northern Lefevre Peninsula - Open Space",
                "z":5444000,
                "x":1242,
                "y":55
              },
              {
                "name":"Explosive Ordnance Storage",
                "z":15500000,
                "x":1063,
                "y":24
              },
              {
                "name":"Defence Logistics Transformation Program",
                "z":20100000,
                "x":1722,
                "y":95
              },
              {
                "name":"Port Direct Industrial Precinct",
                "z":80000000,
                "x":1114,
                "y":6
              },
              {
                "name":"Enhanced Land Force - Facilities Stage 1 Works",
                "z":26600000,
                "x":1525,
                "y":4
              },
              {
                "name":"Cultana Training Area Expansion",
                "z":85000000,
                "x":190,
                "y":76
              },
              {
                "name":"SEA 1000 Phase 1 & 2 Future Submarine Design and Construction",
                "z":10000000000,
                "x":1943,
                "y":16
              }
            ]
        },
        {
            name: "Health, Education and Other Services",
            color: "#FF9800",
            data: [
              {
                "name":"Flinders University Expansion at Tonsley",
                "z":120000000,
                "x":448,
                "y":39
              },
              {
                "name":"Regional Connections",
                "z":22000000,
                "x":932,
                "y":85
              },
              {
                "name":"UniSA Business School",
                "z":10000000,
                "x":1612,
                "y":39
              },
              {
                "name":"Centre for Cancer Biology and Interprofessional Health Clinic",
                "z":240000000,
                "x":849,
                "y":93
              },
              {
                "name":"Great Hall",
                "z":50000000,
                "x":984,
                "y":86
              },
              {
                "name":"Reconfiguration of Catherine Helen Spence Building",
                "z":15000000,
                "x":635,
                "y":60
              },
              {
                "name":"Equine Health and Performance Centre",
                "z":12155000,
                "x":1135,
                "y":48
              },
              {
                "name":"Port Pirie GP Plus Health Care Centre",
                "z":12490000,
                "x":889,
                "y":23
              },
              {
                "name":"South Australian Health and Medical Research Institute Facility",
                "z":200000000,
                "x":1718,
                "y":31
              },
              {
                "name":"The Jeffrey Smart Building",
                "z":85000000,
                "x":1183,
                "y":22
              },
              {
                "name":"Queen Elizabeth Hospital Redevelopment - Stage 2",
                "z":127000000,
                "x":1499,
                "y":64
              },
              {
                "name":"Mobilong Prison Security Systems",
                "z":10142000,
                "x":1168,
                "y":10
              },
              {
                "name":"Trade Training Centres in Schools",
                "z":81869000,
                "x":1327,
                "y":26
              },
              {
                "name":"Children's Centres",
                "z":44740000,
                "x":64,
                "y":85
              },
              {
                "name":"Co-located Schools",
                "z":22300000,
                "x":1386,
                "y":46
              },
              {
                "name":"Glenunga International High School",
                "z":14119000,
                "x":120,
                "y":67
              },
              {
                "name":"Klemzig Primary School",
                "z":5950000,
                "x":628,
                "y":44
              },
              {
                "name":"Glenside Campus Redevelopment",
                "z":142570000,
                "x":101,
                "y":6
              },
              {
                "name":"Whyalla Hospital Redevelopment",
                "z":68286000,
                "x":1080,
                "y":40
              },
              {
                "name":"Berri Hospital Redevelopment",
                "z":36000000,
                "x":1867,
                "y":45
              },
              {
                "name":"Community Mental Health Centres",
                "z":34001000,
                "x":769,
                "y":3
              },
              {
                "name":"Regional Cancer Services - Expansion of Services",
                "z":16500000,
                "x":809,
                "y":59
              },
              {
                "name":"BreastScreen SA - Digital Mammography",
                "z":15758000,
                "x":1379,
                "y":93
              },
              {
                "name":"Metropolitan Intermediate Care Facilities",
                "z":14071000,
                "x":928,
                "y":7
              },
              {
                "name":"Metropolitan Hospital Car Park Infrastructure",
                "z":7559000,
                "x":1462,
                "y":39
              },
              {
                "name":"Country Community Rehabilitation Centres",
                "z":7000000,
                "x":1985,
                "y":98
              },
              {
                "name":"SA Ambulance Service - Enhance Service Delivery",
                "z":6498000,
                "x":1162,
                "y":31
              },
              {
                "name":"Police Records Management System",
                "z":10308000,
                "x":161,
                "y":46
              },
              {
                "name":"Special School Renewal Program",
                "z":49504000,
                "x":1695,
                "y":64
              },
              {
                "name":"Sustainable Industries Education Centre",
                "z":120584000,
                "x":1052,
                "y":78
              },
              {
                "name":"Eastern Fleurieu R-12 School",
                "z":9250000,
                "x":266,
                "y":49
              },
              {
                "name":"Mount Gambier Health Service Redevelopment",
                "z":26700000,
                "x":261,
                "y":38
              },
              {
                "name":"Mining and Engineering Centre",
                "z":38311000,
                "x":978,
                "y":39
              },
              {
                "name":"Northfield Infrastructure Upgrade",
                "z":45858000,
                "x":1741,
                "y":40
              },
              {
                "name":"Education Works - Stage 2",
                "z":85007000,
                "x":1122,
                "y":18
              },
              {
                "name":"High School Expansions",
                "z":55881000,
                "x":1547,
                "y":48
              },
              {
                "name":"Community Residential Care Facilities ",
                "z":8442000,
                "x":730,
                "y":94
              },
              {
                "name":"Lyell McEwin Hospital Stage C Redevelopment",
                "z":177650000,
                "x":1217,
                "y":98
              },
              {
                "name":"Information and Community Technology - New and Enhanced",
                "z":47956000,
                "x":577,
                "y":25
              },
              {
                "name":"Enterprise Resource Planning System",
                "z":36674000,
                "x":108,
                "y":77
              },
              {
                "name":"Medical Imaging Equipment",
                "z":35251000,
                "x":1157,
                "y":7
              },
              {
                "name":"Repatriation General Hospital - Sub-Acute Care Beds",
                "z":33119000,
                "x":1346,
                "y":2
              },
              {
                "name":"James Nash House Redevelopment",
                "z":22000000,
                "x":1170,
                "y":54
              },
              {
                "name":"South Coast Primary Health Care",
                "z":10000000,
                "x":1265,
                "y":91
              },
              {
                "name":"Mental Health Early Intervention Care Facilities",
                "z":8334000,
                "x":1389,
                "y":70
              },
              {
                "name":"Preschool Relocation Program",
                "z":21370000,
                "x":36,
                "y":33
              },
              {
                "name":"Salisbury East High School",
                "z":7040000,
                "x":1341,
                "y":12
              },
              {
                "name":"National Quality Agenda- Preschools ",
                "z":11286000,
                "x":1976,
                "y":45
              },
              {
                "name":"Port Lincoln Health Service Redevelopment",
                "z":39200000,
                "x":83,
                "y":62
              },
              {
                "name":"Blakeview North ChildrenÕs Centre",
                "z":8500000,
                "x":1393,
                "y":72
              },
              {
                "name":"Mount Gambier Prison Expansion",
                "z":25419000,
                "x":645,
                "y":74
              },
              {
                "name":"The New Royal Adelaide Hospital",
                "z":1850000000,
                "x":618,
                "y":8
              },
              {
                "name":"Women's and Children's Hospital Upgrade",
                "z":64440000,
                "x":1190,
                "y":86
              },
              {
                "name":"Enterprise Pathology Laboratory Information System",
                "z":28475000,
                "x":740,
                "y":70
              },
              {
                "name":"Evanston Gardens Primary School",
                "z":6000000,
                "x":1228,
                "y":31
              },
              {
                "name":"Queen Elizabeth Hospital Redevelopment - Stage 3A",
                "z":125000000,
                "x":1427,
                "y":18
              },
              {
                "name":"Noarlunga Health Service Redevelopment ",
                "z":31310000,
                "x":1997,
                "y":60
              },
              {
                "name":"Enterprise System for Medical Imaging",
                "z":18677000,
                "x":1093,
                "y":71
              },
              {
                "name":"Modbury Hospital Redevelopment",
                "z":46378000,
                "x":649,
                "y":49
              },
              {
                "name":"Enterprise Patient Administration System",
                "z":101278000,
                "x":469,
                "y":48
              },
              {
                "name":"New Integrated School of Medicine and Nursing",
                "z":100000000,
                "x":578,
                "y":87
              },
              {
                "name":"City West Master Plan Projects",
                "z":23000000,
                "x":1767,
                "y":62
              }
            ]
        },
        {
            name: "Infrastructure",
            color: "#F44336",
            data: [
              {
                "name":"Port Spencer",
                "z":300000000,
                "x":158,
                "y":11
              },
              {
                "name":"Braemar Bulk Export Project",
                "z":5000000000,
                "x":1635,
                "y":21
              },
              {
                "name":"South Road Superway",
                "z":842800000,
                "x":843,
                "y":100
              },
              {
                "name":"Rail Revitalisation - Noarlunga Line Electrification",
                "z":468437000,
                "x":959,
                "y":39
              },
              {
                "name":"Southern Expressway- Duplication",
                "z":407500000,
                "x":1013,
                "y":31
              },
              {
                "name":"SA Aquatic & Leisure Centre",
                "z":110786000,
                "x":1701,
                "y":7
              },
              {
                "name":"Adelaide to Melbourne Road Corridor",
                "z":100000000,
                "x":1764,
                "y":34
              },
              {
                "name":"South Road Planning",
                "z":49700000,
                "x":1259,
                "y":87
              },
              {
                "name":"North-South Corridor Initiatives",
                "z":47300000,
                "x":1695,
                "y":24
              },
              {
                "name":"Public Transport Ticketing",
                "z":45700000,
                "x":122,
                "y":97
              },
              {
                "name":"Rail Revitalisation - Remaining Network Re-Sleepering",
                "z":43575000,
                "x":280,
                "y":30
              },
              {
                "name":"Rural Road Safety Program",
                "z":40634000,
                "x":1595,
                "y":79
              },
              {
                "name":"O-Bahn Interchanges - Upgrade",
                "z":21228000,
                "x":1908,
                "y":40
              },
              {
                "name":"Public Transport - Park 'n' Ride Interchanges",
                "z":21100000,
                "x":52,
                "y":90
              },
              {
                "name":"Plant Fleet Replacement Program",
                "z":16980000,
                "x":1818,
                "y":26
              },
              {
                "name":"Land Services Business Reform",
                "z":15600000,
                "x":1467,
                "y":98
              },
              {
                "name":"Tram Purchases",
                "z":13769000,
                "x":1222,
                "y":53
              },
              {
                "name":"Evanston Land Release Infrastructure",
                "z":13700000,
                "x":326,
                "y":62
              },
              {
                "name":"Public Transport - Additional Buses and Services",
                "z":9248000,
                "x":893,
                "y":81
              },
              {
                "name":"Greenways and Cycle Paths",
                "z":9025000,
                "x":144,
                "y":74
              },
              {
                "name":"Public Transport - Bus Shelter Replacement",
                "z":5153000,
                "x":141,
                "y":38
              },
              {
                "name":"Central Government Network Infrastructure",
                "z":8645000,
                "x":1269,
                "y":54
              },
              {
                "name":"Lucky Bay Bulk Shipping Port",
                "z":12200000,
                "x":876,
                "y":41
              },
              {
                "name":"Closed Circuit Television (CCTV) Custody Management",
                "z":8066000,
                "x":1550,
                "y":62
              },
              {
                "name":"Port Bonython Jetty Refurbishment",
                "z":23900000,
                "x":1130,
                "y":88
              },
              {
                "name":"Taxation Revenue Management System (RISTEC)",
                "z":33152000,
                "x":798,
                "y":27
              },
              {
                "name":"SA Government Radio Network Upgrade",
                "z":146306000,
                "x":842,
                "y":4
              },
              {
                "name":"Brukunga Mine",
                "z":17383000,
                "x":1969,
                "y":1
              },
              {
                "name":"Rail Revitalisation - Railcars",
                "z":252000000,
                "x":1956,
                "y":78
              },
              {
                "name":"Rural Freight Improvement Program",
                "z":58882000,
                "x":540,
                "y":98
              },
              {
                "name":"Shoulder Sealing",
                "z":35554000,
                "x":621,
                "y":41
              },
              {
                "name":"Disability Discrimination Act Compliance",
                "z":21461000,
                "x":1268,
                "y":31
              },
              {
                "name":"North East Road and Sudholz Road Intersection Upgrade",
                "z":7700000,
                "x":229,
                "y":66
              },
              {
                "name":"Government Information and Communication Technology Services",
                "z":17598000,
                "x":557,
                "y":51
              },
              {
                "name":"Her Majesty's Theatre and Adelaide Festival Centre Urgent Works",
                "z":7580000,
                "x":1976,
                "y":97
              },
              {
                "name":"Rail Revitalisation - Gawler Line Electrification (Adelaide - Dry Creek)",
                "z":152400000,
                "x":1973,
                "y":48
              },
              {
                "name":"Tonsley Public Transport Hub",
                "z":63000000,
                "x":1093,
                "y":53
              },
              {
                "name":"Parks Community Centre Redevelopment",
                "z":24062000,
                "x":1177,
                "y":65
              },
              {
                "name":"Managed Motorways on the South Eastern Freeway",
                "z":8870000,
                "x":1345,
                "y":48
              },
              {
                "name":"River Murray Ferries - Replacement",
                "z":6130000,
                "x":1038,
                "y":62
              },
              {
                "name":"South Eastern Freeway - Advanced Traffic Management System",
                "z":16000000,
                "x":1574,
                "y":64
              },
              {
                "name":"Marine Safety",
                "z":13469000,
                "x":709,
                "y":20
              },
              {
                "name":"South Road upgrade from Torrens Road to River Torrens",
                "z":896000000,
                "x":230,
                "y":81
              },
              {
                "name":"Anangu Pitjantjatjara Yankunytjatjara (APY) Lands - Transport Upgrades",
                "z":106000000,
                "x":1256,
                "y":6
              },
              {
                "name":"Aldinga Land Corridor",
                "z":34080000,
                "x":968,
                "y":35
              },
              {
                "name":"Goodwood and Torrens Rail Junctions Upgrade",
                "z":443000000,
                "x":406,
                "y":95
              },
              {
                "name":"Port Bonython",
                "z":600000000,
                "x":1975,
                "y":28
              },
              {
                "name":"Adelaide - Perth Rail Corridor Upgrade",
                "z":35000000,
                "x":1134,
                "y":40
              },
              {
                "name":"Bus Fleet Replacement Program",
                "z":14314000,
                "x":1710,
                "y":14
              }
            ]
        },
        {
            name: "Minerals and Energy",
            color: "#673AB7",
            data: [
              {
                "name":"Wilcherry Hill Iron Ore Project",
                "z":30000000,
                "x":334,
                "y":32
              },
              {
                "name":"Razorback Iron Ore Project",
                "z":1800000000,
                "x":1428,
                "y":40
              },
              {
                "name":"Cairn Hill Phase II",
                "z":5000000,
                "x":75,
                "y":63
              },
              {
                "name":"Exploration for Petroleum Permits 37, 38, 39 and 40",
                "z":1437000000,
                "x":714,
                "y":71
              },
              {
                "name":"Central Eyre Iron Project (CEIP)",
                "z":5000000000,
                "x":1887,
                "y":95
              },
              {
                "name":"Kingston Lignite Project",
                "z":3000000000,
                "x":549,
                "y":55
              },
              {
                "name":"Palmer Wind Farm",
                "z":700000000,
                "x":516,
                "y":87
              },
              {
                "name":"TIPS 66 kV Section Secondary Systems and Minor Primary Plant Replacement",
                "z":11000000,
                "x":1448,
                "y":74
              },
              {
                "name":"Largs North Fuel Terminal Expansion",
                "z":20000000,
                "x":1125,
                "y":10
              },
              {
                "name":"TIPS A 275 kV Secondary Systems and Minor Primary Plant Replacement",
                "z":11000000,
                "x":1741,
                "y":12
              },
              {
                "name":"Cultana Augmentation",
                "z":72000000,
                "x":321,
                "y":6
              },
              {
                "name":"South East Backbone Telecoms Stage 2",
                "z":9000000,
                "x":722,
                "y":44
              },
              {
                "name":"Riverland Telecoms Bearer",
                "z":6000000,
                "x":1565,
                "y":73
              },
              {
                "name":"Snowtown Wind Farm Stage 2",
                "z":470000000,
                "x":255,
                "y":66
              },
              {
                "name":"Whyalla Terminal Substation Replacement",
                "z":42000000,
                "x":1830,
                "y":83
              },
              {
                "name":"Yadnarie - Port Lincoln Backbone Telecoms Link",
                "z":5000000,
                "x":1414,
                "y":54
              },
              {
                "name":"Magill Telecoms Bearer",
                "z":13000000,
                "x":1344,
                "y":25
              },
              {
                "name":"Neuroodla Substation Replacement",
                "z":7000000,
                "x":436,
                "y":50
              },
              {
                "name":"Hillside Copper Project",
                "z":800000000,
                "x":1317,
                "y":96
              },
              {
                "name":"Lincoln Gap Wind Farm",
                "z":360000000,
                "x":1430,
                "y":88
              },
              {
                "name":"Munno Para New Connection Point",
                "z":43000000,
                "x":395,
                "y":43
              },
              {
                "name":"Para Secondary Systems and Minor Plant Replacement",
                "z":49000000,
                "x":571,
                "y":58
              },
              {
                "name":"Mount Gunson Substation Replacement",
                "z":7000000,
                "x":1022,
                "y":64
              },
              {
                "name":"SA VIC Interconnection Upgrade",
                "z":63000000,
                "x":972,
                "y":30
              },
              {
                "name":"Dalrymple Substation Upgrade",
                "z":21000000,
                "x":163,
                "y":16
              },
              {
                "name":"Baroota Substation Upgrade    ",
                "z":15000000,
                "x":1005,
                "y":44
              },
              {
                "name":"Arckaringa Coal to Liquids and Power Plant (The Arckaringa Project)",
                "z":3500000000,
                "x":1791,
                "y":29
              },
              {
                "name":"Morgan-Whyalla 1-4 Substations Replacement",
                "z":61000000,
                "x":1765,
                "y":36
              },
              {
                "name":"Mannum-Adelaide 1-3 and Millbrook Substations Replacement",
                "z":54000000,
                "x":274,
                "y":7
              },
              {
                "name":"Cherokee Power Station",
                "z":750000000,
                "x":528,
                "y":38
              },
              {
                "name":"Woakwine Wind Farm",
                "z":700000000,
                "x":431,
                "y":18
              },
              {
                "name":"Bungalow Joint Venture",
                "z":1300000000,
                "x":398,
                "y":36
              },
              {
                "name":"Kimba Gap",
                "z":1400000000,
                "x":1566,
                "y":7
              },
              {
                "name":"Eyre Peninsula Transmission Reinforcement",
                "z":700000000,
                "x":779,
                "y":91
              },
              {
                "name":"Paralana Geothermal Energy Joint Venture Project",
                "z":75000000,
                "x":1590,
                "y":4
              },
              {
                "name":"Nappamerri Trough Natural Gas ventures",
                "z":300000000,
                "x":369,
                "y":35
              },
              {
                "name":"Cooper Basin",
                "z":10000000000,
                "x":916,
                "y":10
              },
              {
                "name":"Oceanlinx 1MW Wave Energy Demonstrator",
                "z":7242550,
                "x":263,
                "y":39
              },
              {
                "name":"Ceres Project",
                "z":1500000000,
                "x":494,
                "y":3
              },
              {
                "name":"Hornsdale Wind Farm",
                "z":900000000,
                "x":187,
                "y":39
              },
              {
                "name":"Torrens Island Power Station Expansion",
                "z":800000000,
                "x":1081,
                "y":68
              },
              {
                "name":"Barn Hill Wind Farm",
                "z":400000000,
                "x":934,
                "y":29
              },
              {
                "name":"Mt Bryan Wind Farm (Hallett 3)",
                "z":180000000,
                "x":1045,
                "y":21
              },
              {
                "name":"Olympic Dam Expansion",
                "z":650000000,
                "x":388,
                "y":2
              },
              {
                "name":"Wilgerup",
                "z":65000000,
                "x":616,
                "y":29
              },
              {
                "name":"Stony Gap Wind Farm",
                "z":300000000,
                "x":1904,
                "y":57
              },
              {
                "name":"Robertstown Wind Farm",
                "z":200000000,
                "x":361,
                "y":37
              },
              {
                "name":"Waterloo 2 Wind Farm",
                "z":40000000,
                "x":1609,
                "y":34
              },
              {
                "name":"Kalkaroo Copper-Gold-Molybdenum Project",
                "z":500000000,
                "x":960,
                "y":56
              },
              {
                "name":"Maldorky Iron Ore Project",
                "z":35000000,
                "x":1924,
                "y":80
              },
              {
                "name":"Mutooroo Copper-Cobalt Project",
                "z":25000000,
                "x":1165,
                "y":67
              },
              {
                "name":"Gum Flat Iron Ore Project",
                "z":30000000,
                "x":722,
                "y":57
              },
              {
                "name":"Poochera Kaolin Mine",
                "z":5000000,
                "x":1556,
                "y":64
              },
              {
                "name":"Keyneton Wind Farm",
                "z":242000000,
                "x":951,
                "y":57
              },
              {
                "name":"Four Mile",
                "z":112000000,
                "x":1894,
                "y":20
              },
              {
                "name":"Cooper Basin ",
                "z":220000000,
                "x":833,
                "y":76
              },
              {
                "name":"Otway Basin Petroleum Exploration",
                "z":15000000,
                "x":628,
                "y":44
              },
              {
                "name":"Cooper Basin Oil Exploration, Appraisal and Production",
                "z":150000000,
                "x":537,
                "y":90
              },
              {
                "name":"Cooper Basin Unconventional Gas Exploration and Appraisal",
                "z":100000000,
                "x":584,
                "y":28
              },
              {
                "name":"Portia Gold Project",
                "z":26000000,
                "x":1930,
                "y":57
              },
              {
                "name":"Tungketta Hill Wind Farm Project (Elliston Wind Farm)",
                "z":630000000,
                "x":768,
                "y":72
              }
            ]
        },
        {
            name: "Urban Development",
            color: "#4CAF50",
            data: [
              {
                "name":"The Watson",
                "z":70000000,
                "x":1489,
                "y":90
              },
              {
                "name":"Aria on Gouger",
                "z":36000000,
                "x":1563,
                "y":3
              },
              {
                "name":"Vision on Morphett",
                "z":75000000,
                "x":370,
                "y":14
              },
              {
                "name":"Gawler Chambers",
                "z":30000000,
                "x":229,
                "y":35
              },
              {
                "name":"123 Flinders Street",
                "z":120000000,
                "x":211,
                "y":35
              },
              {
                "name":"The Stretton Centre",
                "z":15600000,
                "x":1758,
                "y":6
              },
              {
                "name":"57-61 Wyatt Street",
                "z":15000000,
                "x":919,
                "y":91
              },
              {
                "name":"Enigma 8 ",
                "z":150000000,
                "x":263,
                "y":6
              },
              {
                "name":"Retirement Village",
                "z":30000000,
                "x":1415,
                "y":97
              },
              {
                "name":"122 Waymouth Street",
                "z":140000000,
                "x":1702,
                "y":86
              },
              {
                "name":"Vivanti Lifestyle Community",
                "z":30000000,
                "x":885,
                "y":28
              },
              {
                "name":"Seaford Meadows",
                "z":650000000,
                "x":1210,
                "y":89
              },
              {
                "name":"Normanville Beach",
                "z":18000000,
                "x":1783,
                "y":8
              },
              {
                "name":"The Square at Woodville West",
                "z":134000000,
                "x":1616,
                "y":19
              },
              {
                "name":"Paringa Cliffs",
                "z":15000000,
                "x":853,
                "y":73
              },
              {
                "name":"Lightsview",
                "z":750000000,
                "x":1323,
                "y":48
              },
              {
                "name":"Marina Central Redevelopment and Revitalisation",
                "z":30000000,
                "x":673,
                "y":56
              },
              {
                "name":"St Clair",
                "z":280000000,
                "x":1080,
                "y":94
              },
              {
                "name":"Palladio on Angas Street",
                "z":130000000,
                "x":1310,
                "y":28
              },
              {
                "name":"Seaford Heights",
                "z":550000000,
                "x":550,
                "y":2
              },
              {
                "name":"Minda Brighton Redevelopment",
                "z":200000000,
                "x":123,
                "y":32
              },
              {
                "name":"Playford Alive - Greenfield",
                "z":1000000000,
                "x":1164,
                "y":61
              },
              {
                "name":"Springwood",
                "z":750000000,
                "x":868,
                "y":69
              },
              {
                "name":"Bowden Development",
                "z":1014000000,
                "x":1981,
                "y":46
              },
              {
                "name":"EYRE at Penfield",
                "z":450000000,
                "x":389,
                "y":69
              },
              {
                "name":"Two Wells Town Expansion",
                "z":1225000000,
                "x":1472,
                "y":59
              },
              {
                "name":"Victoria Square/Tarntanyangga Upgrade",
                "z":28000000,
                "x":329,
                "y":28
              },
              {
                "name":"Julia Farr Housing Association ",
                "z":18066000,
                "x":1396,
                "y":91
              },
              {
                "name":"Jetty Road, Glenelg Office/Retail Development",
                "z":8500000,
                "x":289,
                "y":5
              },
              {
                "name":"Mayfair Hotel",
                "z":32000000,
                "x":946,
                "y":30
              },
              {
                "name":"Adelaide Oval Redevelopment",
                "z":535000000,
                "x":1334,
                "y":82
              },
              {
                "name":"Riverbank Bridge",
                "z":39527000,
                "x":1225,
                "y":71
              },
              {
                "name":"Gawler Green Shopping Centre",
                "z":30000000,
                "x":1898,
                "y":73
              },
              {
                "name":"Churchill Centre",
                "z":100000000,
                "x":77,
                "y":51
              },
              {
                "name":"Elizabeth Park Urban Renewal",
                "z":18431000,
                "x":96,
                "y":27
              },
              {
                "name":"Riverbank Precinct Works",
                "z":12000000,
                "x":1608,
                "y":14
              },
              {
                "name":"Old Parliament House Upgrade and Redevelopment",
                "z":13686000,
                "x":1173,
                "y":18
              },
              {
                "name":"Northern Region Affordable Housing Initiative",
                "z":28000000,
                "x":61,
                "y":36
              },
              {
                "name":"Rundle Mall Redevelopment",
                "z":30000000,
                "x":1765,
                "y":27
              },
              {
                "name":"Nation Building - Economic Stimulus Plan Social Housing Reinvestment",
                "z":26528000,
                "x":1238,
                "y":37
              },
              {
                "name":"Palladium Apartments 69 Light Square",
                "z":25000000,
                "x":91,
                "y":24
              },
              {
                "name":"Brickworks Market shopping centre",
                "z":38500000,
                "x":1565,
                "y":38
              },
              {
                "name":"Murray Bridge Green Shopping Centre",
                "z":25000000,
                "x":972,
                "y":31
              },
              {
                "name":"Strathmont Centre Community Living Placements",
                "z":12145000,
                "x":1228,
                "y":14
              },
              {
                "name":"River Breeze at Goolwa North",
                "z":16000000,
                "x":1935,
                "y":16
              },
              {
                "name":"Pathways at Murray Bridge",
                "z":25000000,
                "x":53,
                "y":73
              },
              {
                "name":"SkyCity Casino Redevelopment",
                "z":350000000,
                "x":974,
                "y":21
              },
              {
                "name":"Riverbank Precinct Development",
                "z":354181000,
                "x":577,
                "y":32
              },
              {
                "name":"Tapleys Bulky Goods Centre, Adelaide Airport",
                "z":215000000,
                "x":1283,
                "y":88
              },
              {
                "name":"Remote Indigenous Housing",
                "z":221437000,
                "x":1862,
                "y":53
              },
              {
                "name":"Disability Housing Capital Program",
                "z":12863000,
                "x":114,
                "y":88
              },
              {
                "name":"Wakefield Waters",
                "z":2000000000,
                "x":1592,
                "y":77
              },
              {
                "name":"Parafield Bulky Goods Centre",
                "z":190000000,
                "x":484,
                "y":71
              },
              {
                "name":"Playford North Urban Renewal",
                "z":149027000,
                "x":602,
                "y":73
              },
              {
                "name":"McLaren Vale Resort and Spa",
                "z":11000000,
                "x":1647,
                "y":26
              },
              {
                "name":"Flagstaff Pines",
                "z":50000000,
                "x":734,
                "y":83
              },
              {
                "name":"Riverlea Master Planned Community ",
                "z":2000000000,
                "x":1843,
                "y":85
              },
              {
                "name":"Lukin Quays",
                "z":575000000,
                "x":1910,
                "y":72
              },
              {
                "name":"Ibis Adelaide Hotel ",
                "z":65000000,
                "x":458,
                "y":20
              },
              {
                "name":"Blakes Crossing",
                "z":750000000,
                "x":92,
                "y":62
              },
              {
                "name":"Ergo Apartments (Sturt Living)",
                "z":50000000,
                "x":1719,
                "y":64
              },
              {
                "name":"Narnu Waterways",
                "z":750000000,
                "x":1458,
                "y":70
              },
              {
                "name":"Affordable Housing",
                "z":27028000,
                "x":1742,
                "y":35
              },
              {
                "name":"Westfield Marion Redevelopment",
                "z":200000000,
                "x":1634,
                "y":82
              },
              {
                "name":"Lincoln Cove Marina Stage 2b - South Lakes and Parnkalla Waters",
                "z":75000000,
                "x":1873,
                "y":6
              },
              {
                "name":"New Mayfield",
                "z":160000000,
                "x":1777,
                "y":38
              },
              {
                "name":"Gilberton ",
                "z":60000000,
                "x":1448,
                "y":32
              },
              {
                "name":"ALDI Stores",
                "z":300000000,
                "x":1838,
                "y":91
              },
              {
                "name":"62-68 Hindley Street",
                "z":100000000,
                "x":116,
                "y":76
              }
            ]
        },
        {
            name: "Water Management",
            color: "#607D8B",
            data: [
              {
                "name":"Bolivar Wastewater Treatment Plant Energy Use Optimisation",
                "z":25875000,
                "x":1083,
                "y":53
              },
              {
                "name":"Swan Reach Paskeville Pipeline High Voltage Switchboard Replacement",
                "z":7826000,
                "x":573,
                "y":68
              },
              {
                "name":"Marion Road Trunk Water Main Renewal",
                "z":22420000,
                "x":168,
                "y":72
              },
              {
                "name":"Christies Beach Wastewater Treatment Plant Capacity Upgrade",
                "z":226841000,
                "x":1584,
                "y":29
              },
              {
                "name":"Port Wakefield Water Supply Upgrade",
                "z":17089000,
                "x":293,
                "y":49
              },
              {
                "name":"Hawker Desalination Plant",
                "z":5750000,
                "x":1639,
                "y":3
              },
              {
                "name":"Adelaide Desalination Plant",
                "z":1824000000,
                "x":1508,
                "y":60
              },
              {
                "name":"Queensbury Wastewater Pump Station Upgrade",
                "z":18040000,
                "x":133,
                "y":8
              },
              {
                "name":"Happy Valley Water Treatment Plant Chlorination Station Upgrade",
                "z":17848000,
                "x":286,
                "y":33
              },
              {
                "name":"Mt Barker Development Water Supply Scheme - Stage 1",
                "z":24505000,
                "x":492,
                "y":17
              },
              {
                "name":"Cryptosporidium Risk Management Study",
                "z":23125000,
                "x":664,
                "y":95
              },
              {
                "name":"Murray Futures Program - Riverine Recovery",
                "z":98000000,
                "x":1059,
                "y":83
              },
              {
                "name":"Glenelg Wastewater Treatment Plant Upgrade of Inlet Screens",
                "z":19557000,
                "x":1621,
                "y":45
              },
              {
                "name":"Kangaroo Creek Dam Safety",
                "z":86258000,
                "x":205,
                "y":42
              },
              {
                "name":"Bolivar Pre-aeration Concrete Rehabilitation",
                "z":34904000,
                "x":1162,
                "y":4
              },
              {
                "name":"North Lefevre Peninsula Wastewater Diversion",
                "z":29748000,
                "x":1930,
                "y":22
              },
              {
                "name":"Bolivar Wastewater Treatment Plant Clarifer Upgrade - Stage 3",
                "z":18854000,
                "x":1196,
                "y":32
              },
              {
                "name":"Tod River Dam Safety",
                "z":14425000,
                "x":389,
                "y":96
              }
            ]
        }
    ]

});

/* ==========================================================================
 * EXAMPLE MODULE
 * ========================================================================== */

(function(NAMESPACE) {

	'use strict';

	NAMESPACE.exampleModule = (function() {

		var init;

		init = function() {
			// Code and stuff

			$('.view-about').on('click', function(e) {
				e.preventDefault();
				$('.about-us').slideToggle();
				$(this).parent().toggleClass('open');
			});

			$('.view-trend').on('click', function(e) {
				e.preventDefault();
				$('.data-visual').slideDown();
			});

			$('.data-visual .close').on('click', function(e) {
				e.preventDefault();
				$('.data-visual').slideUp();
			});

			$('.data .button').on('click', function(e) {
				e.preventDefault();
				var countNumber = parseInt($(this).find('.number').text());
				$(this).find('.number').text(countNumber+1);
			});

			// $('.disapprove .button').on('click', function(e) {
			// 	e.preventDefault();
			// 	var countNumber = parseInt($(this).find('.number').text());
			// 	$(this).find('.number').text(countNumber-1);
			// });
		};

		return {
			init: init
		};
	}());

}(GULPBASE));

/* ==========================================================================
 * SCRIPT.JS
 * ========================================================================== */

window.GULPBASE = window.GULPBASE || {};

/* Stop console.log errors */
if (typeof console === 'undefined') {
	window.console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
}

(function(NAMESPACE) {

	'use strict';

	NAMESPACE.INIT = {
		visual: function() {
			
			NAMESPACE.exampleModule.init();

		},
		functional: function() {
			
		}
	};

	NAMESPACE.init = function() {
		NAMESPACE.INIT.visual();
		NAMESPACE.INIT.functional();
	};

	$(document).ready(function() {
		NAMESPACE.init();
	});

}(GULPBASE));

