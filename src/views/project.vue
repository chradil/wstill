<template>
<div class="has-background-light">
<div v-for="project in projects" :key="project.id" >

      
            <div class="hero-body">
                <div class="container" style="margin-left:2em">
                    <h1 class="title is-3 has-text-dark">
                        {{project.title}}
                    </h1>
                    <h2 class="subtitle is-5">
                        {{project.date}}
                        <br>
                        <i>{{project.tools}}</i>
                        <br>
                        <a :href="project.url" class="has-text-link-dark">{{project.url}}</a>
                    </h2>
                </div>
            </div>
       <section class="section" style="padding-top:0px">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-one-third">
                        <content> {{project.body}}</content>
                    </div>
                    <div class="column is-two-thirds">
                        <div class="columns is-multiline">
                            <div class="column is-full" >
                                <img :src="project.image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</div>
</div>
</template>
<script>

export default {
  name: "project",
};

</script>