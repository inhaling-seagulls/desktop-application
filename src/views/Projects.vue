<template>
  <div class="p-4">
    <header>
      <h1>PROJETS</h1>
    </header>
    <div class="container mt-5">
      <div class="row row-cols-3">
        <div class="col" v-for="item in [1, 2, 3]" :key="item">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="/placeholder.png" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    <p>
                    <span class="badge rounded-pill bg-primary mx-1">Primary</span>
                    <span class="badge rounded-pill bg-secondary mx-1">Secondary</span>
                    </p>
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul class="pagination justify-content-center" >
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item active"><a class="page-link " href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
