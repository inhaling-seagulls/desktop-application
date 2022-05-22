<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>Projet Pokedex</h1>
      <h2>Réalisé par Bewiwi</h2>
      <div>🖊️</div>
    </header>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <img src="ezaez" />
          </div>
          <div class="col-8">
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis perspiciatis corrupti autem saepe neque commodi at earum? Dolores maiores consequuntur nesciunt cumque voluptatem id, sapiente suscipit mollitia quisquam ad.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur a maxime exercitationem sunt sapiente quibusdam veritatis illo eum necessitatibus cupiditate, quam ut cumque, vitae id quidem, dolorum esse doloremque neque.</p>
            <div>
              <span class="badge rounded-pill bg-primary mx-1" v-for="item in ['Angular', 'React', 'Vue', 'JavaScript', 'PHP', 'Laravel', 'Go', 'C++', 'C#', 'Money']">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>