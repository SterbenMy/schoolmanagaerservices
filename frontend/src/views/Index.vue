<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="Home">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" href="/courses">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/students">Students</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/teachers">Teacher</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <router-view></router-view>
    <hr class="featurette-divider">
    <footer class="container">
      <p class="float-end"><a href="#">Back to top</a></p>
      <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </div>

</template>

<script>
export default {
  name: "Index"
}
</script>
