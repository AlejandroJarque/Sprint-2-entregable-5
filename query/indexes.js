db.restaurants.createIndex({_id: 0});
db.restaurants.createIndex({_id: 0,"restaurant_id": 1, "name": 1});
db.restaurants.createIndex({_id: 0,"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1});
db.restaurants.createIndex({_id: 0,"restaurant_id": 1, "name": 1, "address.zipcode": 1});
db.restaurants.createIndex({_id: 0,"borough": "Bronx"});
db.restaurants.createIndex({_id: 0,"borough": "Bronx"}).limit(5);
db.restaurants.createIndex({_id: 0,"borough": "Bronx"}).skip(5).limit(5);  
