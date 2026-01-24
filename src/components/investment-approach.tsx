"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};
type FAQSectionProps = {
  title?: string;
  faqs?: FAQItem[];
};
const defaultFAQs = [
  {
    question: "Strategic Discovery & Alignment",
    answer:
      "We begin with a deep understanding of each client's financial position, objectives, and risk tolerance, ensuring every portfolio is aligned with clear goals.",
  },
  {
    question: "Disciplined Asset Allocation",
    answer:
      "We construct resilient portfolios using a Total Portfolio Approach (TPA), ensuring assets work collectively across equities, fixed income, and alternatives.",
  },
  {
    question: "Integrated Risk Management",
    answer:
      "Risk management is a 24/7 commitment. We provide clear, real-time insights and ESG integration to ensure sustainable, long-term returns.",
  },
  {
    question: "Innovation-Led Stewardship",
    answer:
      "We enhance human expertise with advanced analytics, AI-enabled insights, and scenario modeling to stress-test portfolios across market cycles.",
  },
];

export const InvestmentApproach = ({
  title = "Our Investment Approach",
  faqs = defaultFAQs,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#FDFCFA] via-[#F5F2ED] to-[#FDFCFA]">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0A1628 1px, transparent 1px),
              linear-gradient(to bottom, #0A1628 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] leading-tight tracking-tight sticky top-10">
              {title}
            </h2>
            <p className="md:text-lg text-[#0A1628]/60 mb-6 max-w-3xl mx-auto leading-relaxed text-left pt-16">
              At Prime Capital & Investment Limited, we believe that
              wealth management is the result of a rigorous, systematic process
              that balances data-driven innovation with timeless investment
              principles.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-b border-[#e5e5e5] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full relative flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg md:text-xl leading-7 text-[#0A1628] pr-8 font-semibold">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus
                        className="w-6 h-6 text-[#0A1628]"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p className="text-base md:text-lg leading-relaxed text-[#0A1628]/70">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
