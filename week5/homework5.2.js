use zips
db.hw.aggregate([
    {
        $match:
        {
            state: {'$in': ['CA', 'NY']}
        }
    },
    {
       $group:
       {
         _id: "$city",
         tpop: {$sum: "$pop"}
       }
    },
    {
        $match:
        {
            tpop: {"$gt": 25000}
        }
    },
    {
        $group: 
        {
            _id: null,
            avg_pop: {$avg: '$tpop'}
        }
    }
])
