<script setup lang="ts">
import { ApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";
import { getCurrentInstance, computed } from "vue";

const instance = getCurrentInstance();
const isDarkmode = computed(() => instance?.proxy?.$isDarkmode ?? false);
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
        darkMode: isDarkmode,
        hideClientButton: true,
      }"
    />
  </ClientOnly>
</template>
