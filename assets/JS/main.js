let click = 1;
        let botao1 = document.querySelector('.botao1');
        let botao2 = document.querySelector('.botao2');
        let main = document.querySelector('main');
        function opcoes() {
            console.log(`click(${click})`);
            if(click % 2 !== 0) {
                botao1.style.display = 'block';
                botao2.style.display = 'block';
                main.style.opacity = '0.6';
            } else {
                botao1.style.display = 'none';
                botao2.style.display = 'none';
                main.style.opacity = '1';
            }
            click++;
        }