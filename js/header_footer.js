//This script handles:
// 1. Injecting the global header and footer into each page
// 2. Setting up any global event listeners
// 3. Common functionality across all pages

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Inject header and logo
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header>
                <div class="logo-container">
                        <a href="index.html" class="logo-link">
                            <img src="images/logo.jpg" alt="NeXT Computer Logo" class="logo-image">
                            <span class="logo-text">NeXT Computer</span>
                        </a>
                    </div>
                     <nav>
                        <ul>
                            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                            <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                            <li><a href="product.html" class="${currentPage === 'product.html' ? 'active' : ''}">Product</a></li>
                            <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    // Inject footer 
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <div class="container">
                    <p>&copy; ${new Date().getFullYear()} NeXT Inc. All rights reserved.</p>
                    <p>The NeXT Computer - Revolutionizing computing since 1988.</p>
                </div>
            </footer>
        `;
    }

});

