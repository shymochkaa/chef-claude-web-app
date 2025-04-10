
import {useState} from 'react'
export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]) 
    
    


    const listOfIngredients = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    } )

    function handleSubmit(e){
        e.preventDefault()
        const form = document.querySelector("#form")
        const formData = new FormData(form)
        const newIngredient = formData.get("ingredient")
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])


    }


    return(
        <main>
            <form action="#" id="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="e.g. oregano" aria-label='Type ingredient' name="ingredient" />
            <button>Add ingredient</button>
       </form>
        <ul>
            {listOfIngredients}
        </ul>

        </main>
       
    )
   
}

