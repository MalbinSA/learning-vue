<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#">
      <img src="./assets/logo.png" alt="logo" class="h-9">
    </a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>

  <main class="flex flex-grow flex-col">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad fuga maiores necessitatibus quae qui recusandae tempora temporibus, veritatis vero! Ab dolores ex excepturi exercitationem facere, nam officia optio quaerat quidem, quisquam unde vel voluptatibus? Accusantium ad aliquam amet aspernatur consequatur debitis deserunt dolorem, eaque enim eveniet fugiat illo iusto laudantium natus necessitatibus nemo nulla omnis optio placeat praesentium quis repellendus repudiandae similique sint sit soluta suscipit vitae voluptas voluptate voluptates. Ab accusamus accusantium adipisci architecto aspernatur, beatae corporis cupiditate ea earum eius error esse et excepturi fugiat fugit ipsa itaque libero nihil obcaecati odio odit omnis perspiciatis quas, quasi qui quibusdam recusandae rem repudiandae veritatis voluptate. Adipisci architecto corporis cumque, dolor dolore dolorum, eius enim excepturi ipsam, nam nemo nesciunt nulla perspiciatis reiciendis rem similique sit tenetur unde ut voluptatum. Autem magni non placeat recusandae reiciendis? Adipisci blanditiis consectetur delectus modi. A at consectetur dolores eligendi ipsam iure iusto libero, omnis perspiciatis, similique temporibus totam ut, veniam. Alias aliquid animi corporis cum dolor dolore doloremque eaque enim est eveniet hic illo ipsam labore laboriosam modi molestias, recusandae unde vitae. Ab animi cum eum eveniet excepturi id illo inventore ipsa, iste nobis placeat quae, qui, quia recusandae sit! Asperiores dolor enim esse ipsam laborum magnam modi necessitatibus quidem, reiciendis tempora. Aut autem doloribus ea fugit id itaque laboriosam magni modi natus nisi odio pariatur quaerat, quis sunt voluptates. Culpa dolore ducimus excepturi fugit in iure necessitatibus porro voluptatibus? Ab ad aliquam architecto asperiores aspernatur assumenda blanditiis cupiditate eaque enim est eveniet expedita facere ipsa laborum natus neque possimus quisquam, quos ratione repellat repudiandae sapiente ut. Accusantium amet animi aperiam atque aut beatae culpa cum, cupiditate delectus dolorum ducimus ea eum exercitationem fugiat fugit harum illum in incidunt ipsa iste, maiores necessitatibus non nulla odit optio porro quae qui quidem quo recusandae reiciendis rerum saepe sapiente, tenetur ut vel voluptatum. Alias aliquid consequatur deleniti fugit, libero magni maxime natus nobis quis recusandae sapiente sed sit tempora vel voluptatum? Aperiam atque debitis explicabo mollitia officiis reiciendis sapiente voluptatum? Adipisci amet eveniet in necessitatibus obcaecati officiis reprehenderit sequi. Error illum labore sapiente? Ab aspernatur commodi cum cumque debitis deleniti est, eum id maxime pariatur, quas quibusdam, repellendus reprehenderit sint temporibus. Accusamus assumenda cum debitis dolore doloribus esse et harum, libero quas quidem rerum totam ullam vel! Ad alias aliquam animi asperiores autem corporis, dignissimos doloribus dolorum eligendi est explicabo hic illum incidunt magnam magni minus nemo odit provident quia quibusdam quis quisquam ratione repellendus sed sequi unde veniam. Accusamus assumenda autem consectetur corporis debitis, eligendi et hic, illum iure mollitia nam neque nostrum quas rem repellendus tempore unde voluptates. Distinctio id officiis repellat. Architecto aspernatur autem cumque dolore dolores ducimus eaque et in ipsum labore, minus molestiae mollitia numquam praesentium quia quis sapiente, soluta, voluptates. At consectetur consequatur fuga id ipsum iusto libero nemo numquam, officia, perspiciatis provident quae, reiciendis voluptate. Dignissimos distinctio, eum exercitationem, facere hic iure laudantium modi natus nemo perferendis praesentium provident repudiandae sapiente veniam voluptas. A expedita illum quo!
  </main>

  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li v-for="(icon, page) in navItems" :key="icon" class="flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" :href="`#${page}`">
          <component :is="icon" class="h-6 w-6"/>
<!--          <ClockIcon v-if="page ==='timeline'" class="h-6 w-6"/>-->
<!--          <ListBulletIcon v-else-if="page ==='activities'" class="h-6 w-6"/>-->
<!--          <ChartBarIcon v-else class="h-6 w-6"/>-->
          {{ page }}</a>
      </li>
    </ul>
  </nav>

</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
};

</script>

<style>
</style>
