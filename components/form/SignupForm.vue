<template>
 <div class="signup-form">
  <h4>Sign up for our product</h4>
  <form @submit.prevent="handleSubmit">
   <provet-input
     v-model="email"
     label="Enter your email address"
     type="email"
     required
     :error="showValidation && (!email ? 'Email is required' : !validateEmail(email) ? 'Invalid email format' : '')"
   />

   <div class="password-wrapper">
    <provet-input
      v-model="password"
      :type="isPasswordVisible ? 'text' : 'password'"
      label="Password"
      required
      :error="showValidation && !password ? 'Password is required'
              : showValidation && !validateStrongPassword(password)
              ? 'Password must be at least 8 characters, include a number and an uppercase letter'
              : ''
          "
    />
    <div class="password-toggler">
     <provet-button
       variant="default"
       type="button"
       @click="isPasswordVisible = !isPasswordVisible"
     >
      <NuxtImg
        :src="isPasswordVisible ? '/icons/eyeOpen.svg' : '/icons/eyeClose.svg'"
        width="20"
        height="20"
        class="icon-toggle"
        alt="Toggle password"
      />
     </provet-button>
    </div>
   </div>

   <provet-input
     v-model="passwordConfirm"
     :type="isPasswordVisible ? 'text' : 'password'"
     label="Confirm Password"
     required
     :error="showValidation && password !== passwordConfirm ? 'Passwords do not match' : ''"
   />

   <ul class="password-rules">
    <li :class="{ valid: !emailContainsPassword(password, email) }">
     Email must not include password
     <template v-if="!emailContainsPassword(password, email)">✔</template>
    </li>
    <li :class="{ valid: validateLength(password) }">
     8–64 characters
     <template v-if="validateLength(password)">✔</template>
    </li>
    <li :class="{ valid: hasUpperCase(password) }">
     At least one uppercase letter
     <template v-if="hasUpperCase(password)">✔</template>
    </li>
    <li :class="{ valid: hasLowerCase(password) }">
     At least one lowercase letter
     <template v-if="hasLowerCase(password)">✔</template>
    </li>
    <li :class="{ valid: hasDigit(password) }">
     At least one number
     <template v-if="hasDigit(password)">✔</template>
    </li>
   </ul>

   <provet-checkbox
     :checked="agreedToMarketing"
     @change="agreedToMarketing = $event.target.checked"
     label="I agree to receive updates"
   />

   <provet-button variant="primary" type="submit">Sign up</provet-button>
  </form>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSignupValidation } from '../../composables/useSignupValidation'

const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const agreedToMarketing = ref(false)
const isPasswordVisible = ref(false)
const showValidation = ref(false)
const router = useRouter()

const {
 validateEmail,
 validateLength,
 hasUpperCase,
 hasLowerCase,
 hasDigit,
 emailContainsPassword,
 validateStrongPassword
} = useSignupValidation()

async function handleSubmit() {
 showValidation.value = true

 if (
   !email.value ||
   !validateEmail(email.value) ||
   !password.value ||
   !passwordConfirm.value ||
   password.value !== passwordConfirm.value ||
   !validateStrongPassword(password.value) ||
   emailContainsPassword(password.value, email.value)
 ) {
  return
 }

 try {
  await $fetch('/api/signup', {
   method: 'POST',
   body: {
    email: email.value,
    password: password.value,
    updatesApproved: agreedToMarketing.value
   }
  })

  await router.push(`/success?updatesApproved=${agreedToMarketing.value}`)
 } catch (err) {
  console.error('Signup failed', err)
 }
}
onBeforeMount(() => {
 requestAnimationFrame(() => {
  const allInputs = document.querySelectorAll('provet-input')

  allInputs.forEach((wrapper, index) => {
   const shadowInput = wrapper.shadowRoot?.querySelector('input')
   if (shadowInput) {
    const id = `input-${index + 1}`
    shadowInput.id = id
    shadowInput.name = `field-${index + 1}`
   }
  })
 })
})
</script>

<style scoped>
.signup-form {
 padding: 2rem;
 background: #fff;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1.25rem;
 max-width: 300px;
 margin: 0 auto;
}

form {
 display: flex;
 flex-direction: column;
 gap: 1.25rem;
 width: 100%;
}

.password-wrapper {
 display: flex;
 align-items: end;
 gap: 0.5rem;
 position: relative;
}

.password-rules {
 list-style: none;
 padding: 0;
 margin: 0.7rem 0 1rem;
 font-size: 0.75rem;
 color: #999;
}

.password-rules li {
 margin-bottom: 0.25rem;
}

.password-rules li.valid {
 color: #2295aa;
 font-weight: 600;
}
.icon-toggle {
 position: relative;
 top: 3px;
}
</style>
