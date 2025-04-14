
import {useState} from 'react'
export default function Main() {
    const [ingredients, setIngredients] = useState([]) 
    
    const listOfIngredients = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    } )

    function addIngredient(formData){
        
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])


    }


    return(
        <main>
            <form action={addIngredient} id="form">
            <input type="text" placeholder="e.g. oregano" aria-label='Type ingredient' name="ingredient" />
            <button>Add ingredient</button>
       </form>
        <ul>
            {listOfIngredients}
        </ul>

        </main>
       
    )
   
}

