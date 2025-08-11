# 🛡️  Fomulário de login

Este projeto simula um sistema de autenticação com funcionalidades de **login**, **registro** e **alteração de senha**, totalmente no **lado do cliente** utilizando `HTML`, `CSS` e `JavaScript` com armazenamento em `localStorage`.

---

## 📂 Estrutura de Diretórios

```
📦 projeto/
├── login.html
├── components/
│   └── styles.css
│   └── register.html
│   └── changePassword.html
│   └── homePage.html
├── script.js
├── css/
│   └── styles.css
└── img/
    └── background.jpg
    └── icon.png
```

---

## 📃 Descrição dos Arquivos

### `login.html`

Tela de **login de usuário**.

-   Campos: email e senha.
-   Validação simples com os dados salvos no `localStorage`.
-   Links para **registro** e **esqueci a senha**.

### `register.html`

Tela de **registro de novo usuário**.

-   Campos: nome, email, telefone, senha e confirmação de senha.
-   Verifica se o email já está cadastrado.
-   Armazena os dados no `localStorage`.

### `changePassword.html`

Tela para **alteração de senha**.

-   Campos: email, nova senha e confirmação.
-   Valida se o email existe e se as senhas coincidem.

### `homePage.html`

Página de boas-vindas após login bem-sucedido.

-   Apenas uma mensagem estática de confirmação de acesso.

### `script.js`

Contém toda a lógica JavaScript do projeto:

-   Manipulação de formulários.
-   Validação de campos.
-   Registro, login e alteração de senha.
-   Utilização de `localStorage` para armazenar dados dos usuários.

### `styles.css`

Define o estilo visual da aplicação:

-   Layout centralizado com `flexbox`.
-   Estilo moderno com **gradientes**, **sombras** e **efeitos de foco e hover**.
-   Campos com preenchimento responsivo.
-   Design responsivo e adaptado para uso em tela cheia.

---

## 🧠 Funcionamento

-   Todos os dados dos usuários são armazenados localmente no `localStorage` como um array de objetos:

```json
[
    {
        "name": "Maria Silva",
        "email": "maria@email.com",
        "telefone": "(11) 99999-9999",
        "password": "senha123"
    }
]
```

-   As interações são feitas totalmente via JavaScript no navegador.
-   Não há backend ou criptografia envolvida.

---

## 🚀 Como Usar

1. **Abrir `login.html`** e clicar no link para ser redirecionado a o arquivo **`register.html`**.
2. No arquivo **`register.html` cadastre** um novo usuário.
3. Após o cadastro, o usuário será redirecionado para a tela de **login**.
4. **Efetue login** com o email e senha cadastrados.
5. Em caso de esquecimento de senha, utilize o link **"Forgot Password?"**.
6. Após login válido, você será redirecionado para `homePage.html`.

---

## ⚠️ Aviso Importante

Este sistema **não é seguro** para produção. Ele é voltado para fins educacionais.  
Não há proteção contra:

-   Acesso indevido aos dados salvos no navegador.
-   Injeções ou ataques XSS.
-   Armazenamento seguro de senhas.

---

## ✨ Estilo e Experiência Visual

-   Utiliza **fundo com imagem** (`background.jpg`).
-   Componentes com **gradientes animados**, **transições suaves** e **responsividade**.
-   Elementos com design consistente e moderno:
    -   Campos com `hover` e `focus`.
    -   Botões com efeito `active`, `hover` e `focus`.
    -   Links estilizados e destacados.

---

## ✅ Tecnologias Usadas

-   **HTML5**
-   **CSS3 (Flexbox, Gradientes, Animações)**
-   **JavaScript (Vanilla JS)**
-   **localStorage (armazenamento local)**

---

Feito com 💻 e ☕ para fins de aprendizado.
