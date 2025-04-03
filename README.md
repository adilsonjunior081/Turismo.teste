# Visite Gravatá - Guia Turístico Oficial

Este é um site turístico oficial da cidade de Gravatá - PE, desenvolvido utilizando **HTML, Tailwind CSS e JavaScript**. O objetivo é fornecer informações sobre a cidade, pontos turísticos, restaurantes, hospedagens e serviços.

## Funcionalidades
- **Menu fixo branco** contendo:
  - Logo do site.
  - Ícones das redes sociais (**Facebook, X, Instagram e YouTube**).
  - Opção de troca de idioma (**Português, Inglês e Espanhol**).
  - Texto: *Guia Turístico Oficial da Cidade de Gravatá - PE*.
- Interface responsiva e intuitiva.
- Layout moderno utilizando Tailwind CSS.
- Sistema de troca de idioma que altera dinamicamente todo o conteúdo HTML do site.

## Tecnologias Utilizadas
- **HTML5** - Estrutura do site.
- **Tailwind CSS** - Estilização responsiva e moderna.
- **JavaScript (JS)** - Implementação da troca de idioma e interações dinâmicas.

## Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/visite-gravata.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd visite-gravata
   ```
3. Abra o arquivo `index.html` em um navegador.

## Estrutura do Projeto
```
visite-gravata/
│-- index.html    # Estrutura principal do site
│-- styles.css    # Arquivo Tailwind CSS
│-- script.js     # JavaScript para funcionalidades dinâmicas
│-- assets/       # Imagens e outros recursos
```

## Funcionalidade de Troca de Idioma
A troca de idioma será feita via JavaScript. O usuário pode clicar em uma das bandeiras no menu para alternar entre **Português, Inglês e Espanhol**, e todo o conteúdo será atualizado dinamicamente.

Exemplo de implementação:
```js
function changeLanguage(lang) {
    const translations = {
        'pt': {
            'title': 'Guia Turístico Oficial da Cidade de Gravatá - PE',
            'menu_home': 'Início',
            'menu_about': 'Sobre',
            'menu_contact': 'Contato'
        },
        'en': {
            'title': 'Official Tourist Guide of Gravatá - PE',
            'menu_home': 'Home',
            'menu_about': 'About',
            'menu_contact': 'Contact'
        },
        'es': {
            'title': 'Guía Turística Oficial de la Ciudad de Gravatá - PE',
            'menu_home': 'Inicio',
            'menu_about': 'Sobre',
            'menu_contact': 'Contacto'
        }
    };
    
    document.getElementById('title').innerText = translations[lang]['title'];
    document.getElementById('menu_home').innerText = translations[lang]['menu_home'];
    document.getElementById('menu_about').innerText = translations[lang]['menu_about'];
    document.getElementById('menu_contact').innerText = translations[lang]['menu_contact'];
}
```

## Contribuição
Se você deseja contribuir, siga estas etapas:
1. Fork o repositório.
2. Crie um branch com a nova funcionalidade (`git checkout -b nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adicionando nova funcionalidade'`).
4. Faça push para o branch (`git push origin nova-funcionalidade`).
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT.

