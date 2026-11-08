<template>
  <article class="overflow-hidden rounded-2xl border border-white/8 bg-[#292b2d]" aria-label="Loading character">
    <BaseSkeleton class="aspect-square rounded-none bg-white/7" />
    <div class="space-y-4 p-4 sm:p-5">
      <div class="space-y-2">
        <BaseSkeleton class="h-5 w-2/5" />
        <BaseSkeleton class="h-3 w-1/3" />
      </div>
      <BaseSkeleton class="h-4 w-1/2" />
    </div>
  </article>
</template>
