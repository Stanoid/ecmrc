import React from 'react'
import { useRouter } from 'next/router'
export default function Jumbo() {

    const router = useRouter();
    return (
        <div>
            <div class="jumbotron jumbotron-fluid mt-5">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <button onClick={()=>{router.push("/products")}} type="button" class="btn btn-success">Success</button>
  </div>
  
</div>
        </div>
    )
}
