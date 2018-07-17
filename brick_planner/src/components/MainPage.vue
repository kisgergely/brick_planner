<template>
  <div class="background">
    <section id="blueheader" class="hero is-info">
      <div class="hero-body">
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <p class="title">Planner</p>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item"><a class="button is-link is-inverted is-outlined">Account</a></p>
            <p class="level-item"><a class="button is-link is-inverted is-outlined">Log Out</a></p>
          </div>
        </nav>
      </div>
    </section>
    <section class="hero is-white box">
      <div id="small-hero-body" class="hero-body">
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-6">Logged in as <strong>{{ResourceName}}</strong></p>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item"><router-link to="/"><a class="button is-light" @click="activeBtn = 'btn1'" :class="{'is-active is-success': activeBtn == 'btn1'}">Scheduler</a></router-link></p>
            <p class="level-item"><router-link to="./timesheet"><a class="button is-light" @click="activeBtn = 'btn2'" :class="{'is-active is-success': activeBtn == 'btn2'}">Timesheet</a></router-link></p>
            <p class="level-item"><router-link to="./settings"><a class="button is-light" @click="activeBtn = 'btn3'" :class="{'is-active is-success': activeBtn == 'btn3'}">Settings</a></router-link></p>
          </div>
        </nav>
      </div>
    </section>
    <div class="columns">
      <div id="side-column" class="column is-2 box">
        <router-link to="./projectstable"><a class="button sidebutton is-light" @click="activeBtn = 'btn4'" :class="{'is-active is-success': activeBtn == 'btn4'}">Projects</a></router-link>
        <router-link to="./resourcetable"><a class="button sidebutton is-light" @click="activeBtn = 'btn5'" :class="{'is-active is-success': activeBtn == 'btn5'}">Resources</a></router-link>
      </div>
<!-- CONTENT -->
      <div id="content-column" class="column box">
          <router-view></router-view>
      </div>
    </div>
<!-- FOOTER -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Geri's Test Project</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      ResourceName: 'Gergely Kis',
      activeBtn: ' '
    }
  }
}
</script>

<style scoped>

#blueheader {
  margin-bottom:9px;
}

.background {
  background-color:#f4f4f4;
}
.hero-body {
  padding:20px;
}

#small-hero-body {
  padding:5px;
}

.box {
  padding:3px;
  margin:5px;
}
.columns{
  margin:0px;
  text-align:center;
}

.column {
  text-align:center;
}

.sidebutton {
  margin:5px;
  width:95%
}

hr {
  width:60%;
  margin: 10% auto
}

.subtitle {
  padding-left:9px
}

#side-column {
  max-width:200px;
}
#content-column {
  background-color:white;
  text-align:left;
}

.footer {
  padding:20px;
    background-color:#f4f4f4
}

</style>
