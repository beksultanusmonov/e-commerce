import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.scss';

function ErrorPage() {
    const error = useRouteError();
    if(error.status == 404){
        return (
          <div className="errorPage">
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <Link>Go To Home</Link>
          </div>
        )
    } else{
        return (
          <div className="errorPage">
              <h2>Something Went Wrong :(</h2>
              <Link>Go To Home</Link>
          </div>
        )
    }
}

export default ErrorPage
