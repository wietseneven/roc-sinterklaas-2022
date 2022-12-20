<template>
  <div>
    <Logo />
    <container>
      <p>Lieve Siepy,</p>

      <p>Altijd vrolijk en enthousiast,<br/>
      Dat is hoe de Sint Siepy graag omschrijven mag.
      </p>

      <p>
        Altijd in voor avontuur en frisse ideëen,<br />
        Daarbij dacht de Sint, mag een puzzel naar een cadeau niet ontbreken!
      </p>

      <p>De zoektocht naar het sinterklaascadeau is weer begonnen<br />
      En daarom wil ik jou met een gedicht verwelkomen</p>

      <p>Sinterklaas heeft zijn pakjes al klaar staan<br />
      En daarom gaan we nu op zoek naar het cadeau dat jij zo graag wilt hebben</p>

      <p>Misschien is het iets wat je al heel lang wilt<br />
      Of misschien is het iets wat je nog nooit eerder hebt gekregen</p>

      <p>Maar wat het ook is, we gaan het samen zoeken<br />
      En ik weet zeker dat we het cadeau voor jou zullen vinden</p>

      <p>Geniet van de zoektocht en de cadeaus!</p>

      <p>
        Groeten,<br />
        Sint
      </p>

      <p><small>P.s. als je de LED-strip heel mooi vind mag je hem graag hebben, anders, doneer hem met liefde aan BuROC waar we er nog wat leuks mee kunnen doen.</small></p>

      <hr />
      <router-link class="button" to="/opdracht/1">Begin de zoektocht</router-link>
    </container>
  </div>
</template>

<script>
import Container from '../components/Container';
import Logo from '../components/Logo';

export default {
  name: "Home",
  components: {
    Container,
    Logo,
  }
}
</script>

<style scoped>
  .button {
    color: #fff;
    border: 1px solid #fff;
    padding: 0.5em;
    margin: 0.5em 0;
    display: block;
    text-align: center;
  }
</style>