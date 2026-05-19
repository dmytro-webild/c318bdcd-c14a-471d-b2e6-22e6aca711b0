"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Specials",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="XAVI SUPERMARKET"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Freshness You Can Trust"
      description="Welcome to Xavi Supermarket. We are committed to serving our local community with fresh, high-quality groceries and friendly, dedicated service every single day."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=va8jbv",
          imageAlt: "fresh grocery produce background",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kf1woo",
          imageAlt: "fresh grocery produce background",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ijiun4",
          imageAlt: "fresh grocery produce background",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ajxks8",
          imageAlt: "fresh grocery produce background",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m8cpss",
          imageAlt: "fresh grocery produce background",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4b6phh",
          imageAlt: "fresh grocery produce background",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=86cael",
          imageAlt: "smiling grocery store clerk helper",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1wnkoe",
          imageAlt: "smiling grocery store clerk helper",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3yi7dj",
          imageAlt: "smiling grocery store clerk helper",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zcqduf",
          imageAlt: "smiling grocery store clerk helper",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=366on4",
          imageAlt: "smiling grocery store clerk helper",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pi35xp",
          imageAlt: "smiling grocery store clerk helper",
        },
      ]}
      buttons={[
        {
          text: "Shop Weekly Specials",
          href: "#pricing",
        },
      ]}
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oyi3mm",
          alt: "happy middle aged customer portrait",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=c121mo",
          alt: "professional customer testimonial portrait",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=65o89s",
          alt: "senior customer happy in grocery",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bpfdt5",
          alt: "young professional shopping groceries",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=an67tk",
          alt: "family shopping at grocery store",
        },
      ]}
      avatarText="Join our 5,000+ local shoppers"
      marqueeItems={[
        {
          type: "text",
          text: "Locally Grown",
        },
        {
          type: "text",
          text: "Fresh Daily",
        },
        {
          type: "text",
          text: "Organic Produce",
        },
        {
          type: "text",
          text: "Community Focused",
        },
        {
          type: "text",
          text: "Premium Quality",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Serving Our Local Community",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y6ew5r",
          alt: "local grocery store exterior facade",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Fresh Selection",
          descriptions: [
            "Hand-picked fruits and veggies every morning.",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kevirk",
        },
        {
          id: "f2",
          title: "Friendly Staff",
          descriptions: [
            "Our team is here to help you find what you need.",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7fzv3m",
        },
        {
          id: "f3",
          title: "Clean Environment",
          descriptions: [
            "A spacious, organized, and tidy space.",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3vtnwn",
        },
      ]}
      title="Why Shop With Xavi?"
      description="We strive to make every visit better. Here is what we offer to our valued neighbors."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Organic Red Apples",
          price: "$1.99/lb",
          variant: "Produce",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=k8flbi",
        },
        {
          id: "p2",
          name: "Farm Green Broccoli",
          price: "$2.49/each",
          variant: "Produce",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=so9fm2",
        },
        {
          id: "p3",
          name: "Artisanal Sourdough",
          price: "$4.50/loaf",
          variant: "Bakery",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fb40wm",
        },
        {
          id: "p4",
          name: "Fresh Dairy Milk",
          price: "$3.99/gallon",
          variant: "Dairy",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ebfr30",
        },
        {
          id: "p5",
          name: "Fresh Herb Bouquet",
          price: "$1.50/bunch",
          variant: "Produce",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rflarf",
        },
        {
          id: "p6",
          name: "Organic Wild Berries",
          price: "$5.99/punnet",
          variant: "Produce",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cxyhf2",
        },
      ]}
      title="Fresh Picks This Week"
      description="Discover our freshest arrivals and pantry staples at great prices."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "plan1",
          badge: "New Arrival",
          price: "15% Off",
          subtitle: "All organic greens",
          features: [
            "Fresh selection",
            "Locally grown",
            "Daily delivery",
          ],
          buttons: [
            {
              text: "See More",
            },
          ],
        },
        {
          id: "plan2",
          badge: "Special Offer",
          price: "20% Off",
          subtitle: "Back-to-school items",
          features: [
            "Pantry staples",
            "Convenient snacks",
            "Kids favorites",
          ],
          buttons: [
            {
              text: "See More",
            },
          ],
        },
        {
          id: "plan3",
          badge: "Limited",
          price: "BOGO",
          subtitle: "Bakery treats",
          features: [
            "Freshly baked",
            "Daily rotation",
            "Great taste",
          ],
          buttons: [
            {
              text: "See More",
            },
          ],
        },
      ]}
      title="Weekly Savings"
      description="Don't miss out on our special discount days this week."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Maria Lopez",
          role: "Local Shopper",
          testimonial: "Very clean and spacious store. I was able to find products at a reasonable price.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oyi3mm",
        },
        {
          id: "t2",
          name: "John Doe",
          role: "Regular Customer",
          testimonial: "The staff is friendly and willing to help. Always a pleasant experience.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=c121mo",
        },
        {
          id: "t3",
          name: "Sarah Jenkins",
          role: "Neighborhood Resident",
          testimonial: "Great variety and fresh produce. Love having them in the neighborhood.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=65o89s",
        },
        {
          id: "t4",
          name: "Robert Miller",
          role: "Local Guide",
          testimonial: "Supermarket is clean, organized and the service is quite fast.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bpfdt5",
        },
        {
          id: "t5",
          name: "Anna Smith",
          role: "Frequent Shopper",
          testimonial: "Excellent prices on back-to-school items this week!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=an67tk",
        },
      ]}
      title="Community Voices"
      description="See what your neighbors are saying about our store."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What are your store hours?",
          content: "We are open daily from 8:00 AM to 9:00 PM.",
        },
        {
          id: "q2",
          title: "Do you have parking available?",
          content: "Yes, we provide free parking for all our customers right in front of the store.",
        },
        {
          id: "q3",
          title: "Do you accept SNAP/EBT?",
          content: "Yes, we accept SNAP and EBT payments.",
        },
      ]}
      title="Common Questions"
      description="Have questions? We're here to provide the answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Stay Updated"
      title="Join Our Newsletter"
      description="Sign up to receive weekly news on our specials and discount days."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Specials",
              href: "#pricing",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 XAVI SUPERMARKET. All rights reserved."
      bottomRightText="Community First."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
