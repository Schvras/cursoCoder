import Link from 'next/link'

export default function Layout(props){
    return(
        <>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" aria-current="page" href="/">Jean</Link>
                <span className='lead text-muted'>{props.title}</span>
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Início</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/estiloso">Estiloso</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/exemplo">Exemplo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/jsx">JSX</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/navegacao">Navgeção 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/cliente/sc/123">Navgeção 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/estado">Estado</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/integracao">Integração</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/estatico">Estático</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    )
}