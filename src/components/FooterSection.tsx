const FooterSection = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto section-padding text-center">
        <p className="font-serif text-lg text-primary-foreground/90 mb-2">🐝 Mesindus</p>
        <p className="text-primary-foreground/50 font-sans text-sm max-w-md mx-auto leading-relaxed mb-6">
          Eesti mesinduse teejuht — põhjalik info mesilaste, mee ja mesinduse kohta. 
          Koostatud armastusega looduse ja mesilaste vastu.
        </p>
        <p className="text-primary-foreground/30 font-sans text-xs">
          © 2026 · Sisu põhineb avalikult kättesaadavatel allikatel ja Wikipedia artiklitel
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
