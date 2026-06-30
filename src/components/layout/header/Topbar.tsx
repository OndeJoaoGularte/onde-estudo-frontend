import { useState, useRef } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Search, User, Mail, Bell, Palette, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import logoSrc from '../../../assets/ondeestudo.png';
import { useAuthStore } from '../../../stores/useAuthStore';

// arrays com os 32 temas do DaisyUI, separados por claro e escuro
const lightThemes = [
    'light',
    'acid',
    'autumn',
    'bumblebee',
    'cmyk',
    'corporate',
    'cupcake',
    'cyberpunk',
    'emerald',
    'fantasy',
    'garden',
    'lemonade',
    'lofi',
    'nord',
    'pastel',
    'retro',
    'valentine',
    'winter',
    'wireframe',
];

const darkThemes = [
    'dark',
    'aqua',
    'black',
    'business',
    'coffee',
    'dim',
    'dracula',
    'forest',
    'halloween',
    'luxury',
    'night',
    'sunset',
    'synthwave',
];

// função para renderizar cada item de tema, usada no dropdown de temas
const renderThemeItem = (theme: string) => (
    <li key={theme}>
        <label
            className="flex cursor-pointer gap-2 items-center hover:bg-base-200 rounded-lg p-2 transition-colors"
            onClick={(e) => {
                const details = e.currentTarget.closest('details');
                if (details) details.removeAttribute('open');
            }}
        >
            <input type="radio" name="theme-dropdown" className="theme-controller sr-only" value={theme} />
            <span data-theme={theme} className="grid grid-cols-2 gap-0.5 shrink-0 rounded-md p-1 bg-base-100">
                <span className="bg-primary w-1 h-1 rounded-sm"></span>
                <span className="bg-secondary w-1 h-1 rounded-sm"></span>
                <span className="bg-accent w-1 h-1 rounded-sm"></span>
                <span className="bg-neutral w-1 h-1 rounded-sm"></span>
            </span>
            <span className="text-sm font-medium text-base-content capitalize">{theme}</span>
        </label>
    </li>
);

export function Topbar() {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const { isLoggedIn, user, logout } = useAuthStore();

    const handleExpandSearch = () => {
        setIsSearchExpanded(true);
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 150);
    };

    const handleCollapseSearch = () => {
        setIsSearchExpanded(false);
    };

    const handleLogout = () => {
        logout();
        navigate({ to: '/' });
    };

    return (
        <div className="navbar bg-base-300/70 border-base-200 px-8">
            {/* Barra de Pesquisa Expansível */}
            <div className="navbar-start">
                <div
                    className={`relative h-12 transition-all duration-500 ease-out flex items-center justify-start overflow-hidden ${isSearchExpanded ? 'w-96' : 'w-12'
                        }`}
                >
                    <label
                        className={`input focus-within:outline-none flex items-center gap-2 h-12 w-full rounded-full bg-base-200 focus-within:bg-base-100 absolute left-0 transition-opacity duration-300 ${isSearchExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        <Search className="w-5 h-5 text-base-content/50 shrink-0 ml-1" />
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="grow text-base"
                            placeholder="Pesquisar tópicos, conceitos..."
                            onBlur={handleCollapseSearch}
                        />
                    </label>

                    <button
                        className={`btn btn-ghost btn-circle absolute left-0 transition-opacity duration-300 ${isSearchExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                        onClick={handleExpandSearch}
                        title="Pesquisar"
                    >
                        <Search className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Logo */}
            <div className="navbar-center">
                <Link to="/" className="flex items-center">
                    <img src={logoSrc} alt="Onde Estudo?" className="h-14 w-auto object-contain" />
                </Link>
            </div>

            {/* Ícones de Tema, Notificação e Perfil */}
            <div className="navbar-end gap-2">
                {/* Ícones de Mensagens e Notificações */}
                {isLoggedIn && (
                    <>
                        <button className="btn btn-ghost btn-circle hover:text-secondary transition-colors duration-300">
                            <div className="indicator">
                                <Mail className="w-6 h-6" />
                            </div>
                        </button>
                        <button className="btn btn-ghost btn-circle hover:text-secondary transition-colors duration-300">
                            <div className="indicator">
                                <Bell className="w-6 h-6" />
                                <span className="badge badge-xs badge-error indicator-item"></span>
                            </div>
                        </button>
                    </>
                )}

                {/* Dropdown de Temas */}
                <details className="dropdown dropdown-end">
                    <summary className="btn btn-ghost btn-circle" title="Mudar Tema">
                        <Palette className="w-6 h-6" />
                    </summary>

                    <div className="dropdown-content mt-4 z-1 p-4 shadow-lg bg-base-100 rounded-box w-64 sm:w-96 max-h-[70vh] overflow-y-auto border border-base-200 hide-scrollbar">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-base-content/60 mb-2 px-2 font-bold uppercase tracking-wider">
                                    Temas Claros
                                </p>
                                <ul className="menu menu-sm p-0">{lightThemes.map(renderThemeItem)}</ul>
                            </div>

                            <div>
                                <p className="text-xs text-base-content/60 mb-2 px-2 font-bold uppercase tracking-wider">
                                    Temas Escuros
                                </p>
                                <ul className="menu menu-sm p-0">{darkThemes.map(renderThemeItem)}</ul>
                            </div>
                        </div>
                    </div>
                </details>

                {/* Dropdown de Perfil */}
                <div className="dropdown dropdown-end ml-2">

                    {/* Avatar dinâmico */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar transition-transform duration-300 hover:scale-105">
                        <div className="w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            {isLoggedIn && user ? (
                                <span className="text-xl font-bold text-primary">
                                    {user.name.charAt(0).toUpperCase()}
                                </span>
                            ) : (
                                <User className="w-7 h-7 text-base-content/70" />
                            )}
                        </div>
                    </div>

                    <ul tabIndex={0} className="menu menu-md dropdown-content mt-4 z-1 p-3 shadow-lg bg-base-100 rounded-box w-56 border border-base-200">
                        {isLoggedIn ? (
                            <>
                                <li className="menu-title px-4 py-2 border-b border-base-200 mb-2">
                                    <span className="text-base-content font-bold text-base truncate block">{user?.name}</span>
                                    <span className="text-base-content/60 text-xs truncate block font-normal">{user?.email}</span>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="text-primary font-medium hover:bg-primary/10 transition-colors">
                                        <LayoutDashboard className="w-4 h-4 mr-2" />
                                        Painel de Controle
                                    </Link>
                                </li>
                                <li>
                                    <a className="hover:text-primary transition-colors">
                                        <User className="w-4 h-4 mr-2" />
                                        Meu Perfil
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-primary transition-colors">
                                        <Settings className="w-4 h-4 mr-2" />
                                        Configurações
                                    </a>
                                </li>
                                <li className="mt-1">
                                    <button onClick={handleLogout} className="text-error hover:bg-error/10 hover:text-error transition-colors font-medium">
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Sair
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/auth" search={{ mode: 'login' }} className="hover:text-primary transition-colors">
                                        Entrar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/auth" search={{ mode: 'register' }} className="text-primary font-bold mt-1 hover:bg-primary hover:text-primary-content transition-colors">
                                        Criar Conta
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
