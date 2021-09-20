import LogoBackground from '../components/LogoBackground';
import Facebook from './Facebook';

export default function Navbar() {


    return (
        <div className="w-100">
            <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid justify-content-between ">
                    {/* <div className=" ju stify-content-around"> */}
                    <div className="d-none d-md-block col-md-1" />
                    <div className="col-5 col-md-2">
                        <a href="#">
                            <LogoBackground />
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className=" d-none d-md-block col-md-5" />
                    <div class="d-none d-lg-block col-md-4 " id="navbarTogglerDemo02">
                        <div class="row align-items-center navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item col-md-5 col-xl-5">
                                <a class="nav-link fs-4 display-6 text-light " aria-current="page" href="#secondPageMainDiv">Funcionalidades
                                </a>
                            </li>
                            <li class="nav-item col-md-5 col-xl-4">
                                <a class="nav-link fs-4 display-6 text-light" href="#contactPage">
                                    contato
                                </a>
                            </li>
                            <li class="nav-item col-md-2 col-xl-2">
                                <a class="nav-link fs-4 display-6 text-light" href="#">
                                    <div className="col-md-10">
                                        <Facebook />
                                    </div>
                                </a>
                            </li>
                        </div>
                    </div>
                    <div class=" d-lg-none collapse navbar-collapse col-md-4" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ backgroundColor: "#572883" }}>
                            <li class="nav-item">
                                <a class="nav-link fs-4 display-6 text-light " aria-current="page" href="#secondPageMainDiv">Funcionalidades
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-4 display-6 text-light" href="#contactPage">
                                    contato
                                </a>
                            </li>
                            <div class="row justify-content-center">
                                <li class="nav-item col-2">
                                    <a class="nav-link fs-4 display-6 text-light" href="#">
                                        <Facebook />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    {/* </div> */}
                </div>
            </nav>
        </div>
    );
}
