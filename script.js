// Another/More Match Added
const matchAdded = document.getElementById('matchAdd');
matchAdded.addEventListener('click', addNewMatch )

function addNewMatch(){
    const addMatchList = document.getElementById('matches');
    console.log(addMatchList.children.length)
    const matchDiv = document.createElement('div');
         matchDiv.classList.add('match');
         matchDiv.innerHTML = `
                     <div class="wrapper">
                        <button class="lws-delete">
                            <img src="./image/delete.svg" alt="" />
                        </button>
                        <h3 class=" lws-matchName"></h3>Match-${addMatchList.children.length}</h3>
                    </div>
                    <div class="inc-dec">
                        <form onsubmit="submitFormIncrement(event)" id="increment${addMatchList.children.length}-count${addMatchList.children.length}" class="incrementForm">
                            <h4>Increment</h4>
                            <input
                                id="increment${addMatchList.children.length}"
                                type="number"
                                name="increment"
                                class="lws-increment"
                            />
                        </form>
                        <form onsubmit="submitFormDecrement(event)" id="decrement${addMatchList.children.length}-count${addMatchList.children.length}" class="decrementForm">
                            <h4>Decrement</h4>
                            <input
                                id="decrement${addMatchList.children.length}"
                                type="number"
                                name="decrement"
                                class="lws-decrement"
                            />
                        </form>
                    </div>
                    <div class="numbers">
                        <h2 id="count${addMatchList.children.length}" class="lws-singleResult">0</h2>
                    </div>

         `;
         addMatchList.appendChild(matchDiv);
}
// Increment
const submitFormIncrement = (event) =>{
    event.preventDefault();
    const formId = event.target.id;
    const seperatedId = formId.split("-")
    
    const input = document.getElementById(seperatedId[0])
    const output = document.getElementById(seperatedId[1])

    const inputValue = parseInt(input.value)
    const outputValue = parseInt(output.innerText)

    const totalCount = inputValue + outputValue;
    output.innerText = totalCount;

}

// Decrement
const submitFormDecrement = (event) =>{
    event.preventDefault();
    const formId = event.target.id;
    const seperatedId = formId.split("-")
    
    const input = document.getElementById(seperatedId[0])
    const output = document.getElementById(seperatedId[1])

    const inputValue = parseInt(input.value)
    const outputValue = parseInt(output.innerText)

    const totalCount = outputValue - inputValue;
    output.innerText = totalCount;
    if(totalCount <= 0){
        output.innerText = 0;
        return ;
    }

}
//Reset input Field
const resetFunction = () =>{
    const allInput = document.querySelectorAll('input')
    Array.from(allInput, input => input.value = '')
    const innerTextValue = document.querySelectorAll('h2')
    Array.from(innerTextValue, textValue => textValue.innerText = 0)
}

