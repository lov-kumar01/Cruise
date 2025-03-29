
import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import AppLayout from '@/components/layout/AppLayout';

const PrivacyPolicy = () => {
  return (
    <AppLayout userRole="voyager">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mx-auto bg-cruise-50 w-16 h-16 rounded-full flex items-center justify-center text-cruise-600 mb-4">
            <Shield size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-3">Privacy Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn how we collect, use, and protect your personal information.
          </p>
        </header>

        <GlassCard className="p-8 mb-8">
          <div className="flex items-center mb-4">
            <Lock className="text-cruise-600 mr-3" />
            <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
          </p>
          <p className="text-gray-600 mb-4">
            At OceanVoyage, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </GlassCard>

        <div className="space-y-8 mb-12">
          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
            <p className="text-gray-600 mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Register on our website</li>
              <li>Book a cruise</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in promotions or surveys</li>
            </ul>
            <p className="text-gray-600">
              This information may include your name, email address, postal address, phone number, 
              payment information, and travel preferences.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
            <p className="text-gray-600 mb-4">
              We may use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Process and manage your bookings</li>
              <li>Respond to your inquiries</li>
              <li>Send promotional communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Sharing Your Information</h3>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Cruise lines and travel partners to complete your booking</li>
              <li>Service providers who perform services on our behalf</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Your Rights</h3>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to the processing of your information</li>
              <li>Withdraw consent</li>
            </ul>
          </GlassCard>
        </div>

        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-cruise-600 font-medium">privacy@oceanvoyage.com</p>
        </GlassCard>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
