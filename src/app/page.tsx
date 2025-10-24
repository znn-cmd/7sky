'use client';

import { Suspense } from 'react';
import SectionHero from '@/components/SectionHero';
import SectionWhyInvest from '@/components/SectionWhyInvest';
import SectionVillas from '@/components/SectionVillas';
import SectionInvestmentModel from '@/components/SectionInvestmentModel';
import SectionLocation from '@/components/SectionLocation';
import SectionDeveloper from '@/components/SectionDeveloper';
import SectionUrgency from '@/components/SectionUrgency';
import SectionContact from '@/components/SectionContact';
import SectionFAQ from '@/components/SectionFAQ';
import SectionFooter from '@/components/SectionFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-accent-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-foreground">Loading OCTA SUN Residence...</p>
          </div>
        </div>
      }>
        <SectionHero />
        <SectionWhyInvest />
        <SectionVillas />
        <SectionInvestmentModel />
        <SectionLocation />
        <SectionDeveloper />
        <SectionUrgency />
        <SectionContact />
        <SectionFAQ />
        <SectionFooter />
      </Suspense>
    </main>
  );
}