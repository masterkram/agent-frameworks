<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { tags } from '@/store.js';
import config from "@util/themeConfig";
import type Tag from "@/types/Tag";

const availableTags = config.directory.tags as Tag[] | undefined;

const selectedTags = useStore(tags);

function removeTag(tag: string) {
  const updatedTags = selectedTags.value.filter((t: string) => t !== tag);
  tags.set(updatedTags);
}

function addTagWithEvent(event: Event) {
  const select = event.target as HTMLSelectElement;
  const selectedTag = select.value;
  
  if (!selectedTag) return;
  
  if (!selectedTags.value.includes(selectedTag as never)) {
    tags.set([...selectedTags.value, selectedTag] as never[]);
  }
  
  select.value = "";
}
</script>

<template>
  <div class="flex m-0 gap-4 mt-4 py-2">
    <div v-for="myTag in selectedTags"
      class="relative group border-2 shadow-sm font-semibold text-blue-500 bg-blue-600/10 rounded-lg px-1.5 py-1 inline-flex items-center justify-center"
      :class="`border-blue-500`">
      <span @click="() => removeTag(myTag)"
        class="absolute text-gray-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-gray-100 flex items-center justify-center -top-4 left-0 bg-white rounded-full h-6 w-6 border dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800">
        <slot />
      </span>
      {{ myTag }}
    </div>
    <select @change="addTagWithEvent"
      class="border border-dashed border-gray-300 rounded-lg font-semibold text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400 focus:ring-primary-500 focus:ring-2 focus:border-none ring-offset-4">
      <option value="" disabled selected>
        Select a tag
      </option>
      <option v-for="tag in availableTags" :key="tag.name" :value="tag.name">{{ tag.name }}</option>
    </select>
  </div>
</template>

<style scoped>
select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  padding-right: 2.5;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  background-position: right .5rem center;
  line-height: 1.5rem;
  padding: .5rem .75rem;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
</style>