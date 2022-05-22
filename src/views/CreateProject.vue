<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>Définissez votre projet</h1>
    </header>
    <main>
      <form>
        <div class="mb-3">
          <h2>Nom</h2>
          <input class="form-control" type="text" />
        </div>
        <div class="mb-3">
          <h2>Technologies utilisées lors de ce projet</h2>
          <div class="flex-wrap">
            <div class="flex-item" v-for="skill in ['Laravel', 'React', 'Angular', 'Vue']" :key="skill">
              <input type="checkbox" class="btn-check" :id="skill" autocomplete="off" />
              <label class="btn btn-outline-dark" :for="skill">{{ skill }}</label><br />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <h2>Description de votre projet</h2>
          <textarea class="form-control" />
        </div>
        <div class="mb-3">
          <h2>Choississez une image pour illustrer votre projet</h2>
          <input id="file" type="file" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary mb-3">Confirmer</button>
      </form>
    </main>
  </div>
</template>