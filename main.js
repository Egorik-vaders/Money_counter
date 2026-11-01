const count_Elem = document.querySelector('.count')
const operationValue = document.querySelector('.operationValue')
const btnOutlay = document.querySelector('.btnOutlay')
const btnIncome = document.querySelector('.btnIncome')
const operationsWrapper = document.querySelector('.operationsWrapper')
const categorySelect = document.querySelector('#categorySelect')

let count = Number(localStorage.getItem('count')) || 0 ;
console.log(count)
count_Elem.textContent = count

const createNote =(type) =>{
     const current_id =  operationsWrapper.childElementCount +1
     const category = categorySelect.value
     const CostElem = Number(operationValue.value)
     let today = new Date()

     const newOperation = document.createElement('div')
     newOperation.classList.add('operation')

     const newCategoryElement = document.createElement('div')
     newCategoryElement.innerHTML = category
     const currentIdElem = document.createElement('p')
     currentIdElem.innerHTML = current_id

     

     const newCostElem = document.createElement('p')
     if (type == 'income'){
        newCostElem.classList.add('income')
     }else{
        newCostElem.classList.add('outlay')
     }
     newCostElem.innerHTML = CostElem
     const timeElem = document.createElement('p')
     timeElem.innerHTML = today.toLocaleDateString('ru-RU');
     
     newOperation.appendChild(currentIdElem)
     newOperation.appendChild(newCategoryElement)
     newOperation.appendChild(newCostElem)
     newOperation.appendChild(timeElem)
     
     
     operationsWrapper.appendChild(newOperation)

}

btnIncome.addEventListener('click',()=>{
    count += Number(operationValue.value)
    localStorage.setItem('count',Number(operationValue.value))
    count_Elem.textContent = count
    createNote('income')
})

btnOutlay.addEventListener('click',()=>{
    count -= Number(operationValue.value)
    localStorage.setItem('count',Number(operationValue.value))
    count_Elem.textContent = count
    createNote('outlay')
})