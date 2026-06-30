export function Bottombar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-base-300 py-4 text-center border-t border-base-200">
      <div className="container mx-auto px-4">
        <p className="text-sm text-base-content/80 mb-0">
          © {currentYear} Onde Estudo? - Desenvolvido por{' '}
          <a
            href="https://github.com/OndeJoaoGularte"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-primary transition-all duration-300"
          >
            João Gularte
          </a>
        </p>
      </div>
    </div>
  );
}