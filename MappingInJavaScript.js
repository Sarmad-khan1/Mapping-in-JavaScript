<script>
const another = [
    {id:1,
        text:'Programe in JS',
        file:'Mapping in JavaScript'
    },
    {
        id:2,
        text:'Looping through the array',
        file:'JavaScript'
    },
    {
        id:3,
        text:'Another Method',
        file:'EchmaScript'
    }
];
const anotherText = another.map(function(another){
    return another.file;
});
console.log(anotherText);
    </script>