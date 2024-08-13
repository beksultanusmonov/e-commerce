import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.scss';

function ErrorPage() {
    const error = useRouteError();
    if(error.status == 404){
        return (
          <div className="errorPage">
              <h1>404</h1>
              <h2>Sahifa topilmadi </h2>
              <Link>bosh sahifaga qaytish</Link>
          </div>
        )
    } else{
        return (
          <div className="errorPage">
              <h2>Qandaydir xatolik sodir boldi :(</h2>
              <Link>bosh sahifaga qaytish</Link>
          </div>
        )
    }
}

export default ErrorPage
