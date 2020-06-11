import React from 'react'
import './App.css'

function Error404() {
    return (
      <div>
        <body class="rails-default-error-page">
          <div class="dialog">
            <div>
              <h1>The page you were looking for doesn't exist.</h1>
              <p>You may have mistyped the address or the page may have moved.</p>
            </div>
            <p>If you are the application owner check the logs for more information.</p>
          </div>
        </body>
      </div>
    )
}
export default Error404; 
