import { createLazyFileRoute } from "@tanstack/react-router";
import ondeEstudoLogo from '../assets/ondeestudo.png';

// Seta o componente como rota raíz, além de marcá-lo como lazy load, ou seja, ele só será carregado quando o usuário acessar a rota
export const Route = createLazyFileRoute("/")({
    component: function HomePage() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-7xl animate-in fade-in duration-700">
            <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-xl md:text-2xl font-medium text-base-content/70">
                Você já se perguntou...
            </h1>
            <img 
                src={ondeEstudoLogo} 
                alt="Onde Estudo Logo" 
                className="w-4/5 sm:w-3/5 md:w-2/5 max-w-125 object-contain drop-shadow-sm  m-3"
            />
            </div>
        </main>
    );
}
});