import React from "react";

export default function Navbar() {
  return (
    <section>
      <nav class="navbar navbar-expand-lg p-3 border-bottom container_navbar ">
        <div class="container-fluid">
          <a class="navbar-brand mx-2" href="#">
            <img
              src={""}
              alt="cine"
              width={"40px"}
              style={{ transform: "scale(2.2)" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link text-dark mx-5"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link text-dark mx-3"
                    style={{ transform: "scale(1.2)" }}
                  >
                    Nosotros
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link  text-dark mx-3"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    Novedades
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link  text-dark mx-3"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    Testimonios
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link  text-dark mx-3"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    Contacto
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link  text-dark mx-3"
                    style={{ transform: "scale(1.2)" }}
                    aria-current="page"
                  >
                    Contribuye
                  </a>
                </li>
              </ul>
            </div>
            <div className="justify-content-end">
              <button
                class="btn text-dark rounded-pill border border-dark mx-3"
                type="submit"
                style={{ transform: "scale(1.2)" }}
              >
                Login in
              </button>
              <button
                class="btn btn-danger mx-3  rounded-pill"
                type="submit"
                style={{ transform: "scale(1.2)" }}
              >
                Registrate
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
