const container = document.querySelector('div:nth-child(1)');

        const h2 = document.querySelector('h2');
        const footer = document.querySelector('footer');

        const day = document.querySelector('div:nth-child(2)');

        const night = document.querySelector('div:nth-child(3)');

        const day_btn = document.querySelector('button:nth-child(2)');

        const night_btn = document.querySelector('button:nth-child(3)');

        function changePage(value){                
                container.classList.remove('day-time', 'night-time', 'container');
    
                if(value == 'Day Time'){
                    container.classList.add('day-time');
                    h2.textContent = "I Build Softwares 😎";
                    footer.textContent = 'Build with ❤️';

                }
                else if(value == 'Night Time'){
                    container.classList.add('night-time');
                    h2.textContent = "I Break Softwares😈";
                    footer.textContent = 'Build with 💙';
                }
                else{
                    console.log('error');
                }
        }
        
        night_btn.addEventListener('click', function () {
            changePage(this.textContent);

        });

        day_btn.addEventListener('click', function () {
            changePage(this.textContent);
        });