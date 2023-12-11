import "../stylesheets/footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footerContent">
        {/* Div con info */}
          <div className="divInfo">
            <div className="aboutUs">
              <h2>Sobre nosotros</h2>
              <p>
                MPRepuestos es un negocio de repuestos de refrigeracion,
                ferreteria, lavarropas, secarropas y microhondas de alta
                calidad. Nos enorgullece ofrecer los mejores productos y
                servicios a nuestros clientes.
              </p>
            </div>
            <div className="contactInfo">
              <h2>Información de contacto</h2>
              <p className="underline">
                Teléfono: <a href="tel:+542477465669">+54 2477465669</a>
              </p>
              <p className="underline">
                Email:{" "}
                <a href="mailto:mauropayero@gmail.com">mauropayero@gmail.com</a>
              </p>
            </div>
          </div>
        <div className="credits">
          <h2>Créditos</h2>
          <p>
            Esta página fue desarrollada por Renzo Payero y Estefano Bulgari
            para el negocio de repuestos MPRepuestos de Mauro Payero.
          </p>
        </div>
        <div className="footerRights">
          <p>© 2023 - Todos los derechos reservados</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
