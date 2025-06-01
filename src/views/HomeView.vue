<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue';
import HowItWorksSection from '../components/home/HowItWorksSection.vue';
import AiQaSection from '../components/home/AiQaSection.vue';
import CrmIntegrationSection from '../components/home/CrmIntegrationSection.vue';
import VideoSection from '../components/home/VideoSection.vue';
import TestimonialsSection from '../components/home/TestimonialsSection.vue';
import CtaSection from '../components/home/CtaSection.vue';
import CallToAction from '../components/ui/CallToAction.vue';
</script>

<template>
  <div>
    <HeroSection />
    <HowItWorksSection />
    <AiQaSection />
    <CrmIntegrationSection />
    <VideoSection />
    <TestimonialsSection />
    <CallToAction
      title="Ready to Automate Your Sales Pipeline?"
      subtitle="Get started with a free trial today and see the difference."
      primaryBtnText="Get Started Free"
      primaryBtnLink="/demo"
      secondaryBtnText="See Pricing"
      secondaryBtnLink="/pricing"
    />
    <CtaSection />
  </div>
</template>