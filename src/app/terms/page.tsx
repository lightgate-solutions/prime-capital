import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdfcfa] via-white to-[#f5f2ed]">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mt-10 sm:mt-14 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-[#0a1628] uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4 leading-tight">
            WEBSITE USE POLICY
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl shadow-elevated-lg border border-[#0a1628]/5 overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12 space-y-10">
            {/* Introduction */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Introduction
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  This Website Use Policy governs access to and use of Prime
                  Capital & Investment Ltd&apos;s website. The Website is
                  provided for general information purposes relating to our
                  asset and fund management, financial advisory, and related
                  services. This Policy is issued in line with the Investments
                  and Securities Act, SEC Rules and Regulations, the Nigerian
                  Data Protection Act 2023 (NDPA), and other applicable laws and
                  regulatory guidelines in Nigeria. By accessing or using our
                  Website, you agree to be bound by this
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Regulatory Status */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Regulatory Status and No Offer Disclaimer
                </h2>
              </div>
              <div className="pl-0 sm:pl-13 space-y-4">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  Prime Capital & Investment Limited is registered and regulated
                  by the Securities and Exchange Commission (SEC) Nigeria as a
                  Funds/Portfolio Manager and Financial Adviser. Information on
                  this Website does not constitute:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      An offer, solicitation, or invitation to buy or sell
                      securities or other financial instruments; or
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Investment, legal, tax, or other professional advice.
                    </span>
                  </li>
                </ul>
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  Investment decisions should only be made based on approved
                  offer documents, prospectuses, mandates, and professional
                  advice specific to your circumstances, in compliance with SEC
                  Rules.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Permitted Use */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Permitted Use of the Website
                </h2>
              </div>
              <div className="pl-0 sm:pl-13 space-y-4">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  Users may access and use the Website solely for lawful
                  purposes, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Obtaining general information about the Company, its
                      services, and regulatory disclosures;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Making lawful enquiries or contacting the Company through
                      approved channels.
                    </span>
                  </li>
                </ul>
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base font-medium">
                  You agree not to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Use the Website in any manner that breaches applicable
                      laws or SEC regulations;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Misrepresent your identity or provide false information;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Interfere with the security, integrity, or performance of
                      the Website;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Upload or transmit viruses, malicious code, or harmful
                      content;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Use the Website to promote unauthorized financial products
                      or schemes.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Investment Risk */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Investment Risk Disclosure
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6">
                  <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                    All investments involve risk, including the possible loss of
                    capital. Past performance is not a guarantee of future
                    results. The value of investments may fluctuate due to
                    market, economic, regulatory, and other factors. The Company
                    does not guarantee returns on any investment except as may
                    be expressly stated in SEC-approved documentation, where
                    permitted by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Intellectual Property */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Intellectual Property
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  All content on the Website, including text, graphics, logos,
                  trademarks, reports, and documents, is owned by or licensed to
                  the Company and is protected by applicable intellectual
                  property laws. No content may be copied, reproduced,
                  distributed, modified, or used for commercial purposes without
                  the Company&apos;s prior written consent, except as permitted
                  by law.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Data Protection */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Data Protection and Privacy
                </h2>
              </div>
              <div className="pl-0 sm:pl-13 space-y-6">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  The Company is committed to protecting personal data in
                  accordance with the Nigerian Data Protection Act 2023 and
                  applicable regulations.
                </p>

                <div className="bg-[#f5f2ed] rounded-xl p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#0a1628] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    Collection of Personal Data
                  </h3>
                  <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                    We may collect personal data such as names, contact details,
                    IP addresses, and other information voluntarily provided
                    through the Website.
                  </p>
                </div>

                <div className="bg-[#f5f2ed] rounded-xl p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#0a1628] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    Use of Personal Data
                  </h3>
                  <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                    Personal data collected via the Website may be used to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                      <span className="text-[#0a1628]/80 text-sm sm:text-base">
                        Respond to enquiries and communications;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                      <span className="text-[#0a1628]/80 text-sm sm:text-base">
                        Provide information about our services;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                      <span className="text-[#0a1628]/80 text-sm sm:text-base">
                        Meet legal, regulatory, and compliance obligations;
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                      <span className="text-[#0a1628]/80 text-sm sm:text-base">
                        Improve Website functionality and user experience.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#f5f2ed] rounded-xl p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#0a1628] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    Data Security
                  </h3>
                  <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                    Appropriate technical and organizational measures are
                    implemented to safeguard personal data against unauthorized
                    access, loss, misuse, or disclosure.
                  </p>
                </div>

                <div className="bg-[#f5f2ed] rounded-xl p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#0a1628] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                    Data Subject Rights
                  </h3>
                  <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                    Users have rights under the NDPA, including the right to
                    access, rectify, erase, or restrict processing of their
                    personal data, subject to legal and regulatory requirements.
                    Further details are contained in our Privacy Notice, which
                    forms part of this Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Cookies */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Cookies and Tracking Technologies
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  The Website may use cookies and similar technologies to
                  enhance functionality and analyze usage. Users may manage
                  cookie preferences through their browser settings.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Third-Party Links */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Third-Party Links
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  The Website may contain links to third-party websites for
                  convenience. The Company does not control or endorse such
                  websites and is not responsible for their content, accuracy,
                  or data protection practices.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Limitation of Liability */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Limitation of Liability
                </h2>
              </div>
              <div className="pl-0 sm:pl-13 space-y-4">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  To the fullest extent permitted by law, the Company shall not
                  be liable for any loss, damage, or expense arising from:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Use of or inability to use the Website;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Reliance on information provided on the Website;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                    <span className="text-[#0a1628]/80 text-sm sm:text-base">
                      Errors, omissions, interruptions, or security breaches.
                    </span>
                  </li>
                </ul>
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  Nothing in this Policy excludes liability that cannot be
                  excluded under Nigerian law.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Compliance */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Compliance and Monitoring
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  Use of the Website may be monitored to ensure compliance with
                  this Policy, SEC Rules, and applicable laws. Any misuse may
                  result in access restriction and, where necessary, regulatory
                  or legal action.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Amendments */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Amendments
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  The Company reserves the right to amend this Policy at any
                  time to reflect changes in law, regulation, or business
                  practices. Updated versions will be posted on the Website and
                  become effective upon publication.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#0a1628]/10"></div>

            {/* Governing Law */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628]">
                  Governing Law and Jurisdiction
                </h2>
              </div>
              <div className="pl-0 sm:pl-13">
                <p className="text-[#0a1628]/80 leading-relaxed text-sm sm:text-base">
                  This Policy shall be governed by and construed in accordance
                  with the laws of the Federal Republic of Nigeria. Nigerian
                  courts shall have exclusive jurisdiction over any disputes
                  arising from use of the Website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a1628] text-white text-sm font-medium">
            <svg
              className="w-4 h-4 text-[#d4af37]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Verified Badge"
            >
              <title>SEC Verified</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            SEC Regulated • NDPA Compliant
          </div>
          <p className="mt-4 text-[#0a1628]/60 text-xs sm:text-sm">
            Prime Capital & Investment Ltd. All rights reserved.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
