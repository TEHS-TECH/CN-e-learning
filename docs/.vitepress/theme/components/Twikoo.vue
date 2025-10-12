<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'

const envId = 'https://cn-e-learning-comments.netlify.app/.netlify/functions/twikoo'
const twikooJs = ref(null)
const router = useRouter()

function initTwikoo () {
  try {
    twikoo.init({
      envId,
      onCommentLoaded: initLightGallery
    })
  } catch (e) {}
}

function initLightGallery () {
  var commentContents = [
    ...document.getElementsByClassName('vp-doc'),
    ...document.getElementsByClassName('tk-content')
  ];
  for (var i = 0; i < commentContents.length; i++) {
    var commentItem = commentContents[i];
    var imgEls = commentItem.getElementsByTagName('img');
    if (imgEls.length > 0) {
      for (var j = 0; j < imgEls.length; j++) {
        var imgEl = imgEls[j];
        if (imgEl.parentElement.tagName === 'A') continue;
        var aEl = document.createElement('a');
        aEl.setAttribute('class', 'tk-lg-link');
        aEl.setAttribute('href', imgEl.getAttribute('src'));
        aEl.setAttribute('data-src', imgEl.getAttribute('src'));
        aEl.appendChild(imgEl.cloneNode(false));
        imgEl.parentNode.insertBefore(aEl, imgEl.nextSibling);
        imgEl.remove();
      }
      lightGallery(commentItem, {
        selector: '.tk-lg-link',
        share: false
      })
    }
  }
}

function initJs () {
  if (twikooJs.value) {
    twikooJs.value.onload = initTwikoo
    router.onAfterRouteChanged = onRoute
  }
}

function onRoute (to) {
  if (to) setTimeout(initTwikoo, 1000)
}

onMounted(() => {
  initTwikoo()
  initJs()
})
</script>

<template>
  <div class="comment-container vp-raw">
    <!-- KaTeX -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
      integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
    <component :is="'script'" defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
      integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous">
    </component>
    <component :is="'script'" defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
      integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous">
    </component>

    <!-- lightGallery -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/css/lightgallery.css"
      integrity="sha384-U8ohOXEVyF0NGY2LQnH83V4wGxOmFhim4U5xhfE/WDCHdPO2iUKPPYkhpDl9U/Yf" crossorigin="anonymous">
    <component :is="'script'" src="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/lightgallery.min.js"
      integrity="sha384-l5lFB9srHFAyvfCoHya9X1JwGGTNPvDtikieqZp7qu/bomCw0e0+yoyiL0f7UXLD" crossorigin="anonymous">
    </component>

    <!-- Twikoo -->
    <div class="comment-head">
      <div class="comment-head-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19 10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3v.966c0 1.06-1.236 1.639-2.05.96L14.638 19H12a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3zm-3-6a3 3 0 0 1 3 3v1h-8a4 4 0 0 0-4 4v4c0 1.044.4 1.996 1.056 2.708L7 19.5c-.824.618-2 .03-2-1V17a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"/></g></svg>&nbsp;&nbsp;评论区</div>
      <div class="comment-head-subtitle">欢迎留言</div>
    </div>
    <div id="twikoo"></div>
    <component :is="'script'" src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js"
      crossorigin="anonymous" ref="twikooJs"></component>
  </div>
</template>

<style scoped>
.comment-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-bottom: calc(.25rem * 2);
}

.comment-head-title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: var(--vp-c-brand-1);
  line-height: calc(1.75 / 1.25);
  font-weight: 600;
}

.comment-head-subtitle {
  font-size: 1rem;
  line-height: calc(1.25 / 1.0);
  font-weight: 600;
  color: var(--vp-c-brand-2);
}
</style>