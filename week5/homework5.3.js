use studens
db.grades.aggregate([
    {
        "$unwind": "$scores" 
    },
    {
        $match: 
        {
            "scores.type": {'$ne': 'quiz'}
        }
    },
    {
         $group: 
         {
             _id: "$class_id",
             avg_student_in_class: {$avg: "$scores.score"}
         }       
    },
    {
        "$sort": {"avg_student_in_class": -1}       
    },
    {
        $limit: 5
    }
])
