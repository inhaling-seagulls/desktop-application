
<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>Create your profile</h1>
    </header>
    <main>
      <form class="mx-auto">
        <div class="mb-3">
          <h2>Pseudo</h2>
          <input class="form-control" type="text" />
        </div>
        <div class="mb-3">
          <h2>Intéressé.e par</h2>
          <div class="flex-wrap">
            <div class="flex-item" v-for="skill in ['Laravel', 'React', 'Angular', 'Vue']" :key="skill">
              <input type="checkbox" class="btn-check" :id="skill" autocomplete="off" />
              <label class="btn btn-outline-dark" :for="skill">{{ skill }}</label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <h2>Comment vous contacter ?</h2>
          <textarea class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary mb-3">Confirmer</button>
      </form>
    </main>
  </div>
</template>
