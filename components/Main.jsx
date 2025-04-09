export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    
    const listOfIngredients = ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    } )

    return(
        <main>
            <form action="#">
            <input type="text" placeholder="e.g. oregano" aria-label='Type ingredient' />
            <button>Add ingredient</button>
       </form>
        <ul>
            {listOfIngredients}
        </ul>

        </main>
       
    )
   
}

