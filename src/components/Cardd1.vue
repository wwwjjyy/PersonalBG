<template>
    <ClientOnly>
      <CardContainer>
        <CardBody
          class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
        >
          <CardItem
            :translate-z="50"
            class="text-xl font-bold text-neutral-600 dark:text-white"
          >
            个人博客
            <br>
            <br></br>
          </CardItem>

          <CardItem
            :translate-z="100"
            class="mt-4 w-full"
          >
            <img
              src="@/assets/jingli/boke.png"
              height="1000"
              width="1000"
              class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div class="mt-20 flex items-center justify-between">
            <CardItem
              :translate-z="20"
              as="a"
              href="https://rahulv.dev"
              target="__blank"
              class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Visit →
            </CardItem>
            <CardItem
              :translate-z="20"
              as="a"
              href="https://github.com/wwwjjyy/PersonalBG"
              class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
            GitHub →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </ClientOnly>
  </template>
  
  <script setup lang="ts">
  import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
  </script>