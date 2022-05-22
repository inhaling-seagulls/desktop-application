<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>Bewiwi</h1>
      <div>🖊️</div>
    </header>
    <main>
      <div class="row mb-3">
        <div class="col">
          <h2>Intéressé.e par</h2>
          <div>
            <span class="badge rounded-pill bg-primary mx-1" v-for="item in ['Angular', 'React', 'Vue', 'JavaScript', 'PHP', 'Laravel', 'Go', 'C++', 'C#', 'Money']">
              {{ item }}
            </span>
          </div>
        </div>
        <div class="col">
          <h2>Vous pouvez me contacter</h2>
          <p>Par mail : bewiwi@gmail.com</p>
          <p>Linkedin : bewiwi@linkedin.yolo</p>
          <p>Par voie postale</p>
          <p>123, avenue de l'addresse décrite, Ville, Code postal</p>
        </div>
      </div>
      <div class="mb-3">
        <h2>Mes projets</h2>
        <div class="container-fluid">
          <div class="row gx-3">
            <div class="col-4 mb-3" v-for="title in ['Pokedex', 'KeyboardShop', 'NoSQL', 'Poué']">
              <div class="card" >
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">{{ title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>