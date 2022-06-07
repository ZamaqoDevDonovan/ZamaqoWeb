export default function footer({body }) {
    var items;
    items= body.toString().split('+')

    items.forEach(element => {
        console.log
        return(
            <li>{element}</li>
        )
    })
        
    }
