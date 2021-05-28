<template>
  <div class="home">
    <div class="top" >
        <img style="display:block" alt="William Still portrait" src="../assets/stillengraving.png">
        <h1>October 2021 marks the 200th anniversary of the birth of <span style="color:white">William Still</span>, the Philadelphian <span class="anim" style="color:white; animation: textanim 10s infinite"> </span></h1>
    </div>
    <p>
	William Still was born on 7 October 1821, to formerly enslaved parents. Throughout his life, he helped hundreds of other enslaved people accomplish the same feat, by serving as a conductor on the Underground Railroad. In his early days at the Pennsylvania Anti-Slavery Society, he worked as a clerk, and later served as the chair of the society’s Philadelphia Vigilance Committee, which offered direct aid to fugitives from slavery. William Still, and his wife Letitia Still, provided domestic comforts and care to hundreds of refugees, visitors, and long-term guests in their Philadelphia home.
	</p>
	<p>
	The events featured on this website commemorate the 200th anniversary year of William Still’s birth. They also provide an opportunity to think historically about the plight and persistence of the refugees who escaped the violence and terror of slavery, and the Black American activists who helped them find freedom. The strength of this alliance is made clear in Still’s efforts to document the trials of refugees from slavery, and the family connections broken by those escapes. He took a great risk by cataloging these escapes as the Fugitive Slave Law of 1850 made the work of the Philadelphia Vigilance Committee illegal. But his careful record-keeping helped honor refugees’ requests to reunite families by bringing escaped slaves’ spouses and children to safety. After slavery was abolished, he published these notes in a book titled the Underground Railroad, to honor the bravery of the enslaved people who sought freedom and the abolitionists who helped them escape. He used his publication to strengthen his fight against streetcar segregation in Philadelphia by emphasizing William Still’s belief that Black Americans deserved not only freedom but equality. 
	</p>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
 
  }
}
</script>

<style type="text/css">

#app {
  min-height: 30vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
span.anim:before{
    content: 'activist';
    animation-name: textanim;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

@keyframes textanim {
    0% {font-size:100%; opacity:0;content: "writer"}
    12% {font-size:100%; opacity:1;content: "writer"}
    50% {font-size:100%; opacity:0;content:"abolitionist"}
    60% {font-size:100%; opacity:1; content: "abolitionist"}
    90% {font-size:100%; opacity:0; content: "activist"}
    100% {font-size:100%;opacity:1; content: "activist"}
}


</style>