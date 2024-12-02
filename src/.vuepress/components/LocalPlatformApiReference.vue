<script setup lang="ts">
import { ApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";
// import { ref, onMounted, onUnmounted } from 'vue';
import { getCurrentInstance, computed } from "vue";
localStorage.removeItem("colorMode")
const instance = getCurrentInstance();
const isDarkMode = computed(() => !!instance?.proxy?.$isDarkmode || false);

// // Use a reactive ref for dark mode
// const isDarkMode = ref(false);



// // Function to update dark mode based on data-theme
// const updateDarkMode = () => {
//   isDarkMode.value = document.documentElement.getAttribute('data-theme') === 'dark';
//   console.log(isDarkMode.value)
// };

// onMounted(() => {
//   // Initial check
//   updateDarkMode();

//   // Create a MutationObserver to watch for data-theme attribute changes
//   const observer = new MutationObserver(updateDarkMode);
//   observer.observe(document.documentElement, { 
//     attributes: true, 
//     attributeFilter: ['data-theme'] 
//   });

//   // Store observer to properly disconnect later
//   (window as any).__customThemeObserver = observer;
// });

// onUnmounted(() => {
//   const observer = (window as any).__customThemeObserver;
//   if (observer) {
//     observer.disconnect();
//   }
// });
</script>

<style lang="css">
:root {
  --content-width: 1280px !important;
}
</style>

<template>
  <ClientOnly>
    <ApiReference
      :configuration="{
        spec: {
          url: 'https://raw.githubusercontent.com/aklivity/zillabase/refs/heads/feature/local-platform-api/api/openapi.yaml',
        },
        isEditable: false,
        hideDarkModeToggle: true,
        darkMode: isDarkMode,
        hideClientButton: true,
        hideModels: true
      }"
    />
  </ClientOnly>
</template>
