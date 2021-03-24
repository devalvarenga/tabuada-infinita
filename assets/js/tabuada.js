    function calculaTabuada() {



        let tabuada = document.querySelector("#tabuada tbody");
        let valorA = parseInt(document.querySelector("#valorA").value);

 //           let valorA = 5;

            tabuada.innerHTML = '';

            for (let valorB = 0; valorB <= 10; valorB++) {

                let resultado = valorA * valorB;

                let templete = `
                    
                        <td>${valorA}</td>
                        <td>*</td>
                        <td>${valorB}</td>
                        <td>=</td>
                        <td>${resultado}</td>
                    
                    `;

                    let tr = document.createElement('tr');

                    tr.innerHTML = templete;
                    
                    tabuada.append(tr);

            }

}

calculaTabuada();

    document.querySelector("#valorA").addEventListener('change', calculaTabuada);