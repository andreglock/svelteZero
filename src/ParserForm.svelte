<script lang="ts">
    import index from '$lib/index.json'
    let listOfIngredients: string;
    let matchedAdditives: string;
    let unmatchedIngredientsOrAdditives: string;
    function parseIngredients() {
        let unmatched = listOfIngredients.toLowerCase();
        matchedAdditives = '';
        for (const [key, value] of Object.entries(index)) {
            for (const additive of value) {
                const check = unmatched.search(new RegExp(additive));
                if (check !== -1) {
                    unmatched = unmatched.split(additive).join('');
                    matchedAdditives += key + ', ';
                    break;
                }
            }
        }
        if (matchedAdditives) {
            matchedAdditives = matchedAdditives.slice(0, -2) + '.';
        } else {
            matchedAdditives = 'Nada encontrado.'
        }
        unmatchedIngredientsOrAdditives = unmatched;
        console.log('matched:', matchedAdditives)
    }
</script>

<form on:submit|preventDefault={parseIngredients}>
    <label for="listOfIngredients">Lista de Ingredientes:</label>
	<textarea id="listOfIngredients" bind:value={listOfIngredients} name="listOfIngredients"></textarea>
    <button disabled={!listOfIngredients?.length}>Analizar</button>
</form>
{#if matchedAdditives}
    <p><span class="bold">Aditivos presentes:</span> {matchedAdditives}</p>
    <p><span class="bold">Ingredientes não analizados:</span> {unmatchedIngredientsOrAdditives}</p>
{/if}
<style>
    #listOfIngredients {
        display: block;
        margin-block: 10px;
        width: 70vw;
        height: 20vh;
    }
    .bold {
        font-weight: bold;
    }
</style>