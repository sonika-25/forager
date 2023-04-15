const dummyFood = [
    {
        'id' : '1',
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHr3B2mXQoanfpvoR3di5P4TUM37jEN4bTlkflV1nAzY3Ha600",
        'name' : "Banh Mi & Rice Paper Rolls",
        "price": "Free",
        "distance" : "<1km away",
        "expiry": "Best before 14/04",
        "time": "5pm",
        'sellerId': '1',
        'desc' : 'Leftover Vietnamese food from catered event. Options : Chicken, Pork, Tofu',
        'quantity' : '20',
        'sold' : '2',
        'status' : "Available"

    },
    {
        'id' : '2',
        'image': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRGpJC1AWh3QC5i6LWXyXqy4kJrcp2zWlpq7S4ZR_uZoYtsmLE',
        'name' : 'Sandwiches',
        "price": "$2 per kg",
        "distance" : "2km away",
        "expiry": "Best before 17/04",
        "time": "3pm",
        'sellerId': '1',
        'desc' : 'Chicken and mayo sandwhiches from a birthday party',
        'quantity' : '15',
        'sold' : '17',
        'status' : "Wait List"
    },
    {
        'id':'3',
        'image': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYIgN_8R7-OIHpP4jORgg-kHw7ltZt5ckYZlyapxEGi9iKlJU8',
        'name' : "Pasta",
        "price": "$5 per kg",
        "distance" : "5km away",
        "expiry": "Best before 21/04",
        "time": "7pm",
        'sellerId': '1',
        'desc' : 'Pasta made by our chef for a social media challenge',
        'quantity' : '30',
        'sold' : '15',
        'status' : "Available"
    },
]

const dummySeller = [
    {
        'id' : '1',
        'name' : 'CISSA Unimelb',
        'image' : "https://cissa.org.au/assets/images/cissa_white.svg",
        'meals' : 46,
        'joined' : '2021',
        'location': 'Melbourne, Victoria'
    }
]
const returnDummyData =() =>{
    var dData =  [dummyFood, dummySeller]
    return dData
}
export default returnDummyData