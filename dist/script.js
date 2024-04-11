// Function to handle when user selects an image

document.getElementById('avatarInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatarPreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Function to trigger file input click when "Choose Image" button is clicked
document.getElementById('chooseImageButton').addEventListener('click', function() {
    document.getElementById('avatarInput').click();
});

//Menu Icon for mobile screen

const toggleButton = document.getElementById('toggleButton');
        const navList = document.querySelector('ul');

        toggleButton.addEventListener('click', function() {
            navList.classList.toggle('hidden');
            toggleButton.classList.toggle('bx-x');
            navList.classList.toggle('active');
            
        });
        window.onscroll = () => {
            toggleButton.classList.remove('bx-x');
            navList.classList.remove('active');
        };

//this is functin for navigate between mutiple pages

const steps = document.querySelectorAll('.step');
        let currentStep = 0;

        function showStep(stepIndex) {
            steps.forEach((step, index) => {
                if (index === stepIndex) {
                    step.style.display = 'block';
                } else {
                    step.style.display = 'none';
                }
            });
            currentStep = stepIndex;
        }

        document.getElementById('nextStep1').addEventListener('click', function() {
            showStep(1);
        });

        document.getElementById('prevStep2').addEventListener('click', function() {
            showStep(0);
        });

        document.getElementById('nextStep2').addEventListener('click', function() {
            showStep(2);
        });

        document.getElementById('prevStep3').addEventListener('click', function() {
            showStep(1);
        });

        document.getElementById('nextStep3').addEventListener('click', function() {
            showStep(3);
        });

        // Show the first step initially
        showStep(0);

    
        //function for showing an error message if the form is not filled

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const submitButton = document.getElementById('nextStep1');
        const errorMessage = document.getElementById('errorMessage');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');




        function checkFormValidity() {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();



            if (username !== '' && password !== '' && name !== '' && email !== '') {
                submitButton.disabled = false;
                errorMessage.classList.add('hidden');
            } else {
                submitButton.disabled = true;
                errorMessage.classList.remove('hidden');
            }
        }

        usernameInput.addEventListener('input', checkFormValidity);
        passwordInput.addEventListener('input', checkFormValidity);
        nameInput.addEventListener('input', checkFormValidity);
        emailInput.addEventListener('input', checkFormValidity);
