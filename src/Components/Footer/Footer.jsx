import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-600">
      <div className="mx-auto container">
        <div className="pt-5 px-4 pb-20 lg:pb-5">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center text-white gap-1">
            <h2 className="font-semibold text-2xl">Playwatch</h2>
            <div className="flex divide-x">
              <nav className="mr-2">
                <ul className="flex gap-1">
                  <li>
                    <a href="https://www.instagram.com/azmye_/" target={'_blank'}>
                      <FaInstagram size={22} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Azmye" target={'_blank'}>
                      <FaGithub size={22} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/muhammad-azmi-08487b23a/" target={'_blank'}>
                      <FaLinkedin size={22} />
                    </a>
                  </li>
                </ul>
              </nav>
              <div>
                <p className="ml-2">© All Rights Reserved, 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
