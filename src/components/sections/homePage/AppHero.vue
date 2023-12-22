<script setup>
// import AppSvg from ".././UI/AppSvg.vue";
// import abstractLine from '../assets/images/icons/Abstract-Line.svg'
</script>
<template>
  <section id="hero">
    <div class="hero-container container">
      <div class="hero-body">
        <div class="hero-body-header">
          <svg
            width="40"
            height="43"
            viewBox="0 0 40 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="abstractLines"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5489 40.1274C9.82492 39.0757 5.92609 38.5452 2.14397 38.0592C1.32936 37.9573 0.573044 38.5259 0.514858 39.3269C0.398485 40.1286 0.980691 40.8617 1.73712 40.9636C5.40286 41.4314 9.18465 41.9321 12.734 42.9445C13.4904 43.1641 14.3054 42.7121 14.5381 41.9345C14.7709 41.1574 14.3053 40.3476 13.5489 40.1274Z"
              fill="#262626"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.8365 25.2172C18.8433 19.0623 12.0937 13.6997 6.21685 7.37974C5.69318 6.78949 4.76219 6.75787 4.18033 7.30888C3.59846 7.86048 3.5405 8.78802 4.12237 9.37826C9.9992 15.7164 16.7488 21.0966 22.742 27.2696C23.3239 27.8458 24.2547 27.854 24.8365 27.2872C25.3602 26.7209 25.4184 25.7934 24.8365 25.2172Z"
              fill="#262626"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0672 1.54341C36.2417 5.06616 36.4159 8.58891 36.5905 12.1123C36.5905 12.9192 37.2891 13.5422 38.1037 13.503C38.9183 13.4631 39.4998 12.7763 39.4998 11.9688C39.3253 8.44018 39.151 4.91216 38.9765 1.38413C38.9183 0.577224 38.2199 -0.0417174 37.4053 0.00219986C36.6489 0.0461172 36.009 0.737085 36.0672 1.54341Z"
              fill="#262626"
            />
          </svg>

          <div class="hero-body-header-icon">
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="zigZag"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2049 2.25948C21.6317 2.4974 21.8411 2.99569 21.7126 3.46707L18.8911 13.8125H29.1875C29.6106 13.8125 29.9934 14.0635 30.162 14.4515C30.3306 14.8396 30.2529 15.2907 29.9643 15.6L15.0893 31.5375C14.7559 31.8947 14.2219 31.9784 13.7951 31.7405C13.3684 31.5026 13.1589 31.0043 13.2875 30.5329L16.1089 20.1875H5.81252C5.38944 20.1875 5.00667 19.9365 4.83805 19.5485C4.66943 19.1604 4.7471 18.7093 5.03578 18.4L19.9108 2.46254C20.2442 2.10535 20.7782 2.02157 21.2049 2.25948Z"
                fill="#262626"
              />
            </svg>
            <!-- <AppSvg icon-id="zigZag"></AppSvg> -->
          </div>
          <h1 class="hero-body-title">
            <span class="hero-body-title-chank hero-body-title-chank-color"
              >Unlock
            </span>
            <span class="hero-body-title-chank">Your Creative Potential</span>
          </h1>
        </div>
        <p class="hero-body-text">
          with Online Design and Development Courses.
        </p>
        <p class="hero-body-subtext">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div class="hero-body-footer">
          <button class="hero-body-btn hero-body-btn-active">
            Explore Courses
          </button>
          <button class="hero-body-btn">View Pricing</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.hero-container {
  padding-bottom: 100px;
}

.hero-body {
  max-width: 965px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-body-header {
  display: flex;
  background-color: #fff;
  justify-content: center;
  padding: 14px 30px 14px 20px;
  margin-bottom: 20px;
  position: relative;
}
.abstractLines{
  position: absolute;
  top: -20px;
  left: -20px;
}
.abstract-line {
  position: absolute;
  left: -24px;
  top: -30px;
}
.hero-body-header-icon {
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff4e5;
  border-radius: 6px;
}
.hero-body-title {
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: #1a1a1a;
}

.hero-body-title-chank-color {
  color: #ff9500;
}
.hero-body-text {
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 10px;
}
.hero-body-subtext {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 60px;
}
.hero-body-btn {
  padding: 18px 24px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #f1f1f3;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
}
.hero-body-btn-active {
  background-color: #ff9500;
  color: #fff;
}
.hero-body-btn:hover {
  background-color: #ff9500;
  color: #fff;
}
</style>
