const users = [
    {name: 'Carlos', age:  42, contact: '(11) 982830545' },
    {name: 'Cleber', age:40, contact :  '(19) 945890013' },
    {name:'Sandra', age: 44, contact :  '(21) 989653241' },
    {name:'Bruna',  age: 35, contact:   '(81) 963851277' },
]
users.forEach(function (item, index) {
    console.log(`${index + 1})Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
    
 });

