const container = document.querySelector('div:nth-child(1)');

    const homeBtn = document.querySelector('button:nth-child(5)');

        const h2 = document.querySelector('h2');
        const day = document.querySelector('div:nth-child(2)');
        const night = document.querySelector('div:nth-child(3)');
        const day_btn = document.querySelector('button:nth-child(2)');
        const night_btn = document.querySelector('button:nth-child(3)');
        const footer = document.querySelector('footer');
      
        // Change Page according to button click
        function changePage(value){        
            
                const btnValue = ['Day Shift', 'Night Shift'];

                container.classList.remove('day-time', 'night-time', 'container');
    
                if(value == btnValue[0]){
                    container.classList.add('day-time');
                    h2.textContent = "I Build Softwares 😎";
                    footer.textContent = 'Build with ❤️';
                    homeBtn.style.display = 'block';

                }
                else if(value == btnValue[1]){
                    container.classList.add('night-time');
                    h2.textContent = "I Break Softwares😈";
                    footer.textContent = 'Build with 💙';
                    homeBtn.style.display = 'block';
                }
                else{
                    console.log('error');
                }
        }
        
        homeBtn.addEventListener('click', home);

        // Return home function
        function home(){
            window.history.go();
        }

        // Listening to btn click
        night_btn.addEventListener('click', function () {
            changePage(this.textContent);
        });
        day_btn.addEventListener('click', function () {
            changePage(this.textContent);
        });
