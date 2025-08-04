db.people.updateMany({},{$unset:{city_id:""}})
db.people.updateMany({},{$unset:{job_id:""}})
db.people.updateMany({},{$unset:{plus_id:""}})
db.people.updateMany({},{$unset:{ashley_id:""}})
db.ashleymadison.updateMany({},{$unset:{attack_id:""}})
db.at_date.updateMany({},{$unset:{type_id:""}})

db.ashleymadison.updateMany({},{$set:{"attack_id": Math.floor(Math.random()*(3000 - 1 + 1)) + 1 }})