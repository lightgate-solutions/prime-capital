"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dot, Plus } from "lucide-react";
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
      "We begin with a deep understanding of each client’s financial position, objectives, and risk tolerance. This ensures every portfolio is aligned with clear goals and realistic expectations.",
  },
  {
    question: "Disciplined Asset Allocation & Diversification",
    answer:
      "We construct resilient portfolios using a Total Portfolio Approach (TPA), ensuring assets work collectively rather than in isolation. Diversification spans equities, fixed income, and alternative assets to manage risk and enhance returns.",
  },
  {
    question: "Integrated Risk Management & Transparency",
    answer: (
      <span>
        <span>
          Risk management is continuous. We view risk management as an active,
          24/7 commitment. Represented by our commitment to "White"
          transparency, we provide clear, real-time insights into your
          portfolio's performance. Our risk framework includes:
        </span>
        <br />
        <span>
          <span className="pt-2 flex items-center">
            <span className="font-bold">ESG Integration</span>
          </span>
          <span className="ml-4 text-balance">
            Systematically screening investments for environmental, social, and
            governance factors to ensure sustainable, long-term returns.
          </span>
        </span>
        <span>
          <span className="pt-2 flex items-center">
            <span className="font-bold">Dynamic Rebalancing</span>
          </span>
          <span className="ml-4 text-balance">
            Regularly adjusting your holdings to maintain your target risk
            profile, preventing market volatility from causing unauthorized
            deviations from your plan.
          </span>
        </span>
      </span>
    ),
  },
  {
    question: "Innovation-Led Stewardship",
    answer:
      "We enhance human expertise with advanced analytics, AI-enabled insights, and scenario modeling—stress-testing portfolios across market cycles while optimizing tax efficiency and legacy outcomes.",
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
    <section className="relative p-4 min-h-screen flex justify-center overflow-hidden bg-gradient-to-br from-[#FDFCFA] via-[#F5F2ED] to-[#FDFCFA]">
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
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-10"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
            <p className="md:text-lg text-[#0A1628]/60 mb-6 max-w-3xl mx-auto leading-normal text-left pt-16">
              At Prime Capital & Investment Limited, we believe that exceptional
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
                  key={index}
                  className="border-b border-[#e5e5e5] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full relative flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "400",
                      }}
                    >
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
                        className="w-6 h-6 text-[#202020]"
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
                          <p
                            className="text-lg leading-6 text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
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
        <p className="md:text-lg text-[#0A1628]/60 mb-6 max-w-3xl mx-auto leading-normal text-left pt-16">
          By combining professional guidance with disciplined automation, Prime
          Capital & Investment Limited delivers a sophisticated investment
          experience that helps you flourish in today’s complex financial
          environment.
        </p>
      </div>
    </section>
  );
};
