
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const form = document.getElementById('loginForm');
        const alertContainer = document.getElementById('alertContainer');
        const errorList = document.getElementById('errorList');

        console.log('Formulário enviado');
        console.log('Usuário:', username);
        console.log('Senha:', password);

        // Limpa mensagens anteriores
        alertContainer.classList.add('d-none');
        errorList.innerHTML = '';

        // Verifica se os campos foram preenchidos
        if (username === '' || password === '') {
            alertContainer.classList.remove('d-none');
            errorList.innerHTML += `<li>Preencha todos os campos.</li>`;
            return;
        }

        // Credenciais simuladas e redirecionamento para páginas específicas
        const users = {
            'admin@example.com': 'dashboard/admin/admin_dashboard.html',
            'user@example.com': 'dashboard/user/user_dashboard.html'
        };

        if (users.hasOwnProperty(username) && password === '123456') {
            console.log('Login bem-sucedido, redirecionando para:', users[username]);
            
            // Altera o action do formulário dinamicamente
            form.action = users[username];

            // Submete o formulário com o novo action
            form.submit();
        } else {
            console.log('Credenciais inválidas');
            alertContainer.classList.remove('d-none');
            errorList.innerHTML += `<li>Email ou senha inválidos.</li>`;
        }
    });

    function togglePassword(id) {
        const input = document.getElementById(id);
        const icon = document.getElementById('password-icon');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('bi-eye', 'bi-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.replace('bi-eye-slash', 'bi-eye');
        }
    }

