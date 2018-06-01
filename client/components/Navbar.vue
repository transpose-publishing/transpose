<template lang='pug'>
nav.navbar.navbar-expand-lg.navbar-light.bg-white
  .container
    a.navbar-brand(href="/") TRANSPOSE
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      span.navbar-toggler-icon
    </button>
    .collapse.navbar-collapse#navbarSupportedContent
      ul.navbar-nav.mr-auto
        li.nav-item
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        li.nav-item
          <a class="nav-link" href="/policies/compare">Compare</a>
        li.nav-item
          <a class="nav-link" href="/policies">Browse</a>
      form.form-inline.my-2.my-lg-0
        input.form-control.mr-sm-2(type='search' placeholder='Search Policies' aria-label='Search')
        button.btn.btn-outline-success.my-2.my-sm-0(type='submit')
          i.fas.fa-search
</template>
