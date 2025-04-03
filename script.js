/**
 * Visite Gravatá - Script principal
 * Contém funcionalidades básicas para o site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const body = document.body;
    
    console.log('Menu elements:', {
        menuToggle: menuToggle ? 'Found' : 'Not found',
        navMenu: navMenu ? 'Found' : 'Not found',
        menuOverlay: menuOverlay ? 'Found' : 'Not found',
        closeMenu: closeMenu ? 'Found' : 'Not found'
    });
    
    // Garantir que o menu esteja inicialmente fechado
    if (navMenu) {
        navMenu.classList.remove('active');
        navMenu.style.right = '-100%';
    }
    
    if (menuOverlay) {
        menuOverlay.classList.remove('active');
        menuOverlay.style.opacity = '0';
        menuOverlay.style.visibility = 'hidden';
    }
    
    // Garantir que o botão de menu não tenha a classe active inicialmente
    if (menuToggle) {
        menuToggle.classList.remove('active');
    }
    
    // Open menu when hamburger is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            console.log('Menu toggle clicked');
            // Adiciona/remove classe active no botão hambúrguer
            this.classList.toggle('active');
            
            if (navMenu) {
                navMenu.classList.add('active');
                navMenu.style.right = '0';
                console.log('Nav menu active class added');
            }
            if (menuOverlay) {
                menuOverlay.classList.add('active');
                menuOverlay.style.opacity = '1';
                menuOverlay.style.visibility = 'visible';
                console.log('Overlay active class added');
            }
            body.classList.add('menu-open');
            console.log('Body menu-open class added');
        });
    }
    
    // Close menu when X button is clicked
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            console.log('Close menu clicked');
            // Remove classe active do botão hambúrguer
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            
            if (navMenu) {
                navMenu.classList.remove('active');
                navMenu.style.right = '-100%';
                console.log('Nav menu active class removed');
            }
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
                menuOverlay.style.opacity = '0';
                menuOverlay.style.visibility = 'hidden';
                console.log('Overlay active class removed');
            }
            body.classList.remove('menu-open');
            console.log('Body menu-open class removed');
        });
    }
    
    // Close menu when overlay is clicked
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            console.log('Overlay clicked');
            // Remove classe active do botão hambúrguer
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            
            if (navMenu) {
                navMenu.classList.remove('active');
                navMenu.style.right = '-100%';
                console.log('Nav menu active class removed');
            }
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
                menuOverlay.style.opacity = '0';
                menuOverlay.style.visibility = 'hidden';
                console.log('Overlay active class removed');
            }
            body.classList.remove('menu-open');
            console.log('Body menu-open class removed');
        });
    }
    
    // Close menu when escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            console.log('Escape key pressed');
            // Remove classe active do botão hambúrguer
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            
            navMenu.classList.remove('active');
            navMenu.style.right = '-100%';
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
                menuOverlay.style.opacity = '0';
                menuOverlay.style.visibility = 'hidden';
            }
            body.classList.remove('menu-open');
            console.log('Menu closed via Escape key');
        }
    });
    
    // Definir estilos iniciais de opacidade e transformação para animação
    document.querySelectorAll('.menu-links-mobile a').forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Efeito de animação para mostrar os itens do menu quando ele abre
    function animateMenuItems() {
        const menuItems = document.querySelectorAll('.menu-mobile-item');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 + (index * 50));
        });
    }
    
    // Adicionar animação quando o menu abre
    menuToggle.addEventListener('click', function() {
        setTimeout(animateMenuItems, 300);
    });
    
    // Para páginas com ancoragem, ajustar o scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para compensar a navbar fixa
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Detecção de scroll para animações
    window.addEventListener('scroll', function() {
        // Adicionar classe de animação aos elementos visíveis
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
    });
    
    // Verificar se o elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Animação para mostrar tooltips nos ícones do menu
    document.querySelectorAll('.menu-links-mobile a').forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth <= 768) {
                const title = this.getAttribute('title');
                if (title) {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'menu-tooltip';
                    tooltip.textContent = title;
                    this.appendChild(tooltip);
                    
                    setTimeout(() => {
                        tooltip.style.opacity = '1';
                        tooltip.style.transform = 'translateY(0)';
                    }, 10);
                }
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.menu-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    tooltip.remove();
                }, 300);
            }
        });
    });
    
    // Adicionar classe 'animate-on-scroll' aos cartões interativos
    document.querySelectorAll('.interactive-card').forEach(card => {
        card.classList.add('animate-on-scroll');
    });
    
    // Trigger scroll uma vez para animar elementos já visíveis
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});

// Configuração da API do tempo
const WEATHER_API_KEY = '6f901576cba29e02a1936ec4c6e06aed';
// ID específico de Gravatá-PE no OpenWeatherMap
const CITY_ID = '3397838';

// Função para atualizar o clima
async function updateWeather() {
    const weatherContainer = document.getElementById('weather-data');
    if (!weatherContainer) {
        console.error('Container do clima não encontrado');
        return;
    }

    try {
        console.log('Iniciando atualização do clima...');
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${WEATHER_API_KEY}&units=metric&lang=pt_br`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(`Erro na API do tempo: ${data.message}`);
        }

        console.log('Dados do clima recebidos:', data);
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const isNight = data.weather[0].icon.endsWith('n');
        
        // Seleciona o ícone apropriado baseado na condição e hora do dia
        let iconClass = 'fas ';
        switch (data.weather[0].main.toLowerCase()) {
            case 'clear':
                iconClass += isNight ? 'fa-moon text-gray-400' : 'fa-sun text-amarelo';
                break;
            case 'clouds':
                iconClass += 'fa-cloud text-gray-500';
                break;
            case 'rain':
            case 'drizzle':
                iconClass += 'fa-cloud-rain text-blue-400';
                break;
            case 'thunderstorm':
                iconClass += 'fa-bolt text-amarelo';
                break;
            case 'snow':
                iconClass += 'fa-snowflake text-blue-200';
                break;
            case 'mist':
            case 'fog':
                iconClass += 'fa-smog text-gray-400';
                break;
            default:
                iconClass += isNight ? 'fa-moon text-gray-400' : 'fa-sun text-amarelo';
        }

        // Atualiza o container com as informações do tempo
        weatherContainer.innerHTML = `
            <i class="${iconClass} text-2xl mr-2"></i>
            <span class="text-xl font-semibold">${temp}°C</span>
        `;

        console.log('Clima atualizado para Gravatá-PE:', {
            temperatura: temp,
            descricao: description,
            isNight: isNight,
            condicao: data.weather[0].main
        });
    } catch (error) {
        console.error('Erro ao atualizar o clima:', error);
        // Em caso de erro, mostra um ícone padrão
        weatherContainer.innerHTML = `
            <i class="fas fa-sun text-2xl text-amarelo mr-2"></i>
            <span class="text-xl font-semibold">--°C</span>
        `;
    }
}

// Atualiza o clima imediatamente e depois a cada 30 segundos
document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando sistema de clima...');
    updateWeather();
    setInterval(updateWeather, 30000);
}); 