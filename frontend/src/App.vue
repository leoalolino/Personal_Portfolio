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
import Status from './views/components/status.vue'
import Details from './views/components/details.vue'

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
  <NavbarSec />
  <HeroSec />
  <AboutSec />
  <TraitsSec />
  <ProjectsSec />
  <CertificationSec />
  <!-- <ExperienceSec /> -->
  <TechstackSec />
  <EmailAuthSec />
  <FooterSec />
  <!-- <Status /> -->
  <Details />
</template>



<style scoped></style>