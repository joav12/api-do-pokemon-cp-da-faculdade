let button_create = document.getElementById("button_create");
let button_back = document.getElementById("button_back");
button_back.style.display = "none"

//Data Model
class Pokemon{
    constructor(id, nome, img, tipo1){
        this.nome = nome;
        this.id = id;
        this.img = img;
        this.tipo1 = tipo1;
    }

    static fromJson(json){
        return new Pokemon(json.id, json.name,json.sprites.front_default, json.types[0].type.name);
    }
}

let number = 0
button_create.addEventListener('click', ()=>{
    button_back.style.display = "block"
    number++
    
    if (number>=1){
        button_back.style.display = "block"
    }else{
        button_back.style.display = "none"
    }
    
    async function fetchData(){
        try{
            //Realiza a requisição para a API
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    
            if(!response.ok){
                throw new Error('Erro na rede');
            }
    
            // Converte a API em JSON
            const data = await response.json();
    
            //Exibe os dados da API
            // console.log(data);
    
            const poke1 = Pokemon.fromJson(data);
    
            return poke1;
    
        } catch(error){
            //Exime o erro no console
            console.log('Erro:', error);
        }
    }

    let poke_nome = document.getElementById('poke_nome');
    let poke_id = document.getElementById('poke_id');
    let poke_img = document.getElementById('poke_img');
    let poke_primeiro_tipo = document.getElementById('poke_primeiro_tipo');

    //Aqui dentro conseguimos utilizar normalmente a api e fazermos oq quisermos com os dados dela
    fetchData().then(poke1 =>{
        poke_nome.innerHTML = `O nome do pokemon é: ${poke1.nome}`;

        poke_id.innerHTML = `Seu id é: ${poke1.id}`;

        poke_img.src = poke1.img;

        poke_primeiro_tipo.innerHTML = `E seu primeiro tipo (em inglês) é: ${poke1.tipo1}`
    })
})

button_back.addEventListener('click', ()=>{
    button_back.style.display = "auto"
    number--
    
    if (number>=1){
        button_back.style.display = "auto"
    }else{
        button_back.style.display = "none"
    }
    
    async function fetchData(){
        try{
            //Realiza a requisição para a API
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    
            if(!response.ok){
                throw new Error('Erro na rede');
            }
    
            // Converte a API em JSON
            const data = await response.json();
    
            //Exibe os dados da API
            // console.log(data);
    
            const poke1 = Pokemon.fromJson(data);
    
            return poke1;
    
        } catch(error){
            //Exime o erro no console
            console.log('Erro:', error);
        }
    }

    let poke_nome = document.getElementById('poke_nome');
    let poke_id = document.getElementById('poke_id');
    let poke_img = document.getElementById('poke_img');
    let poke_primeiro_tipo = document.getElementById('poke_primeiro_tipo');

    //Aqui dentro conseguimos utilizar normalmente a api e fazermos oq quisermos com os dados dela
    fetchData().then(poke1 =>{
        poke_nome.innerHTML = `O nome do pokemon é: ${poke1.nome}`;

        poke_id.innerHTML = `Seu id é: ${poke1.id}`;

        poke_img.src = poke1.img;

        poke_primeiro_tipo.innerHTML = `E seu primeiro tipo (em inglês) é: ${poke1.tipo1}`
    })
})
// oi //