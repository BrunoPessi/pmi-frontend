import React from 'react';
import '../styles/footer.css';
// import { Container } from './styles';

function Footer() {
  return <footer className="footer">
    <div className="listFooter">
      <div className="payment-methods">
        <p>Metodos de Pagamento: <br />
            Mercado Pago</p>
      </div>
      <div className="copyright-and-text">
        <p>Todos os Direitos Reservados <br />
        Plug E-Commerce <br /></p>
      </div>
      <div className="contact-and-support">
        <p>Metodos de Pagamento:</p>
      </div>
    </div>
  </footer>;
}

export default Footer;