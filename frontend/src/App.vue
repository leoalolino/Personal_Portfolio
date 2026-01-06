<script setup>
import { ref } from 'vue'
import ProjectsSec from './views/components/layout/projectsSec.vue'
import NavbarSec from './views/components/layout/navbarSec.vue'
import CertificationSec from './views/components/layout/certificationSec.vue'
import TechstackSec from './views/components/layout/techstackSec.vue'
import EmailAuthSec from './views/components/layout/emailAuthSec.vue'
import TraitsSec from './views/components/layout/traitsSec.vue'
import AboutSec from './views/components/layout/aboutSec.vue'
import ExperienceSec from './views/components/layout/experienceSec.vue'
import FooterSec from './views/components/layout/footerSec.vue'
import HeroSec from './views/components/layout/heroSec.vue'

const navbarData = ref({
  label: '',
  url: '',
})
const sender = async () => {
  try {
    const resp = await fetch('http://localhost:3000/navbars/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(navbarData.value),
    })

    if (resp) return alert('data send!')
  } catch (e) {
    throw new Error(e)
  }
}
</script>

  <template>
  <HeroSec />
  <AboutSec />
  <TraitsSec />
  <NavbarSec />
  <TechstackSec />
  <ProjectsSec />
  <CertificationSec />
  <ExperienceSec />
  <EmailAuthSec />
  <FooterSec />
</template>



<style scoped></style>

<!-- <form @submit.prevent="sender" class="">
    <input type="text" v-model="navbarData.label" required />
    <input
      type="text"
      v-model="navbarData.url"
      :placeholder="navbarData.url || 'url'"
      required
      class="border border-gray-300 p-2 rounded-md focus:outline-none"
    />
    <button type="submit">submit</button>
  </form> -->
