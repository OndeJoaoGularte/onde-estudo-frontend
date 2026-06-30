import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoSrc from '../../../assets/ondeestudo.png';

export function Navbar() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 justify-center gap-x-12 md:gap-x-24 border-t border-base-300">
            {/* Logo, Descrição e Redes Sociais */}
            <aside className="max-w-xs">
                <img src={logoSrc} alt="Onde Estudo" className="h-14 w-auto object-contain mb-2" />
                <p className="text-base-content/80 text-sm leading-relaxed">
                    Plataforma de estudos focada em contribuir com o aprendizado básico de forma gratuita, intuitiva e moderna, estruturando seu conhecimento passo a passo.
                </p>

                <div className="flex gap-4 mt-4">
                    <a href="#" aria-label="Instagram" className="text-base-content/60 hover:text-primary transition-all duration-300">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="TikTok" className="text-base-content/60 hover:text-primary transition-all duration-300">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="text-base-content/60 hover:text-primary transition-all duration-300">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="YouTube" className="text-base-content/60 hover:text-primary transition-all duration-300">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </a>
                </div>
            </aside>

            {/* Links de Navegação na Plataforma */}
            <nav>
                <h6 className="footer-title text-base-content/90 font-bold tracking-wide">Navegue</h6>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Início
                </Link>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Todas as Matérias
                </Link>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Meu Progresso
                </Link>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Planos de Estudo
                </Link>
            </nav>

            {/* Links Institucionais */}
            <nav>
                <h6 className="footer-title font-bold">Institucional</h6>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Quem Somos
                </Link>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Trabalhe Conosco
                </Link>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Termos de Uso
                </Link>
                <Link
                    to="/"
                    className="text-base-content/80 hover:text-primary hover:translate-x-2 transition-all duration-300"
                >
                    Política de Privacidade
                </Link>
            </nav>

            {/* Informaçãos de Contato */}
            <nav>
                <h6 className="footer-title text-base-content/90 font-bold tracking-wide">Contato</h6>
                <span className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    contato@ondeestudo.com.br
                </span>
                <span className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors duration-300">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    +55 (51) 99999-9999
                </span>
                <span className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary shrink-0 group-hover:text-primary" />
                    Porto Alegre, RS - Brasil
                </span>
            </nav>
        </footer>
    );
}
