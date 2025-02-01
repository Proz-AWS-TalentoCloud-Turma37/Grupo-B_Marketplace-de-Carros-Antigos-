    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("loginForm");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            event.stopPropagation();

            let errors = [];

            // Validação do email (campo username)
            const email = document.getElementById("username");
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value.trim() === "") {
                errors.push("O campo <strong>Email</strong> é obrigatório.");
                email.classList.add("is-invalid");
            } else if (!emailPattern.test(email.value)) {
                errors.push("Informe um <strong>Email válido</strong>.");
                email.classList.add("is-invalid");
            } else {
                email.classList.remove("is-invalid");
                email.classList.add("is-valid");
            }

            // Validação da senha (campo password)
            const password = document.getElementById("password");

            if (password.value.trim() === "") {
                errors.push("O campo <strong>Senha</strong> é obrigatório.");
                password.classList.add("is-invalid");
            } else if (password.value.length < 6) {
                errors.push("A senha deve ter pelo menos <strong>6 caracteres</strong>.");
                password.classList.add("is-invalid");
            } else {
                password.classList.remove("is-invalid");
                password.classList.add("is-valid");
            }

            // Exibir alertas do Bootstrap com mensagens de erro
            const alertContainer = document.getElementById("alertContainer");
            const errorList = document.getElementById("errorList");
            errorList.innerHTML = "";

            if (errors.length > 0) {
                alertContainer.classList.remove("d-none");
                alertContainer.classList.add("alert", "alert-danger", "fade", "show");

                errors.forEach(error => {
                    let li = document.createElement("li");
                    li.innerHTML = error;
                    errorList.appendChild(li);
                });
            } else {
                alertContainer.classList.add("d-none");
                form.submit(); // Se não houver erros, submeter o formulário
            }

            form.classList.add("was-validated");
        });
    });

    // Função para alternar visibilidade da senha
    function togglePassword(fieldId) {
        const passwordField = document.getElementById(fieldId);
        const icon = document.getElementById("password-icon");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        } else {
            passwordField.type = "password";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        }
    }
    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita envio do formulário se inválido
        event.stopPropagation(); // Impede propagação do evento
    
        const form = event.target;
        const camposObrigatorios = Array.from(form.querySelectorAll('[required]'));
        let formValido = true;
    
        // Remove alertas anteriores
        form.querySelectorAll('.alert').forEach(alert => alert.remove());
    
        // Valida campos obrigatórios
        camposObrigatorios.forEach(campo => {
            if (!campo.checkValidity()) {
                formValido = false;
                criarAlerta(campo, 'Este campo é obrigatório ou está inválido.');
            }
        });
    
        // Valida correspondência das senhas
        const senha = form.querySelector('#senha').value;
        const confirmarSenha = form.querySelector('#confirmarSenha').value;
        if (senha !== confirmarSenha) {
            formValido = false;
            criarAlerta(form.querySelector('#confirmarSenha'), 'As senhas não correspondem.');
        }
    
        if (formValido) {
            alert('Cadastro realizado com sucesso!');
            form.submit(); // Submete o formulário se tudo estiver válido
        }
    });
    
    function criarAlerta(campo, mensagem) {
        const alerta = document.createElement('div');
        alerta.className = 'alert alert-danger mt-2';
        alerta.textContent = mensagem;
        campo.insertAdjacentElement('afterend', alerta); // Adiciona alerta abaixo do campo
    }
    
    function togglePassword(inputId) {
        const input = document.getElementById(inputId);
        const icon = document.querySelector(`#${inputId}-icon`);
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'bi bi-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'bi bi-eye';
        }
    }
    