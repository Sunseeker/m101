use enron
db.messages.aggregate([
    {
        "$unwind": "$headers.To" 
    },
    {
         $group: 
         {
             _id: {
                 "from": "$headers.From",
                 "to": "$headers.To"
             },
             msg_count: {$sum: 1}
         }       
    },
    {
        "$sort": {"msg_count": -1}       
    },
    {
        $limit: 3
    }
])
