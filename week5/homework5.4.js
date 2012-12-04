use zips
db.hw.aggregate([
    {
        $project: 
        {
           first_char: {$substr : ["$city",0,1]},
           pop: "$pop"
        }
    },
    {
        $match: {'first_char':/\d/}
    },
    {
        $group: 
        {
            _id: null,
            avg_pop: {$sum: '$pop'}
        }
    }
//    {
//        $limit: 5
//    }
])
