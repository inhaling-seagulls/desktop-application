<style scoped>
header {
    text-align: center;
    margin: 100px 0 50px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
  <header>
    <h1>Créer un compte</h1>
  </header>
  <main>
    <form action="">
      <div class="card shadow">
        <div class="card-body">
          <div class="mb-3">
            <label for="email" class="form-label">Email :</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="password"
              rows="3"
            />
          </div>
          <div class="mb-3">
            <label for="confirmpassword" class="form-label">Confirmer votre mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="confirmpassword"
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-primary float-end">S'enregistrer</button>
        </div>
      </div>
    </form>
  </main>
</template>
