db.people.aggregate([
{
    $lookup:{
        from: "city",
        localField: "city_id",
        foreignField: "city_id",
        as: "city"
        }
},
{
    $lookup:{
        from: "jobs",
        localField: "job_id",
        foreignField: "job_id",
        as: "jobs"
        }
    },
{
    $lookup:{
        from: "plus",
        localField: "plus_id",
        foreignField: "password_id",
        as: "plus"
        }
    },
{
    $lookup:{
        from: "ashleymadison",
        localField: "ashley_id",
        foreignField: "password_id",
        as: "ashleymadison"
        }
    },
{
    $out: "people"
    }
]);